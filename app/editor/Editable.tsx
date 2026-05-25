"use client";

import * as React from "react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useEditor } from "./EditorContext";

type CommonProps = {
  id: string;
  /** disable drag for this element specifically (default: drag enabled) */
  noDrag?: boolean;
  className?: string;
};

type TextProps = CommonProps & {
  kind: "text";
  /** Original text. Editable will render either this or the saved draft override. */
  children: string;
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "li" | "label";
};

type ImageProps = CommonProps & {
  kind: "image";
  src: string;
  alt?: string;
  imgClassName?: string;
};

export type EditableProps = TextProps | ImageProps;

/**
 * <Editable> wraps a piece of content (text or image) so the editor can:
 *  - replace its content (text input / image upload)
 *  - drag it around the page (offset persisted as % of the PARENT container)
 *
 * Storing the offset as a percentage of the parent's box keeps the layout
 * stable across screen sizes: "shift the phone 7% to the right" is a
 * meaningful instruction regardless of viewport width.
 *
 * When edit mode is off, it renders as plain content with zero overhead.
 */
export default function Editable(props: EditableProps) {
  const { active, getDraft, saveDraft, resetOne } = useEditor();
  const draft = getDraft(props.id);
  const ref = useRef<HTMLElement | null>(null);
  const setRef = useCallback((el: HTMLElement | null) => {
    ref.current = el;
  }, []);

  // Persisted offset (in %, of parent container)
  const persistedPct = draft?.offset ?? null;

  // While dragging we work in pixels to feel natural; convert to % only on drop.
  const [dragPx, setDragPx] = useState<{ x: number; y: number } | null>(null);
  // Cached parent rect at drag-start, used both for translate during drag and for px↔% conversion at end.
  const parentRectRef = useRef<{ width: number; height: number } | null>(null);

  const dragStart = useRef<{
    mouseX: number;
    mouseY: number;
    basePxX: number;
    basePxY: number;
  } | null>(null);

  // Resolve current visual pixel translate from either the live drag or the saved %.
  const [resolvedPx, setResolvedPx] = useState<{ x: number; y: number } | null>(null);

  // Recompute resolvedPx whenever persistedPct or element size changes.
  useLayoutEffect(() => {
    if (dragPx) {
      setResolvedPx(dragPx);
      return;
    }
    if (!persistedPct) {
      setResolvedPx(null);
      return;
    }
    const el = ref.current;
    const parent = el?.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    setResolvedPx({
      x: (persistedPct.xPct / 100) * rect.width,
      y: (persistedPct.yPct / 100) * rect.height,
    });
    // Re-run on resize too so the offset rescales with layout.
    const ro = new ResizeObserver(() => {
      const r = parent.getBoundingClientRect();
      setResolvedPx({
        x: (persistedPct.xPct / 100) * r.width,
        y: (persistedPct.yPct / 100) * r.height,
      });
    });
    ro.observe(parent);
    return () => ro.disconnect();
  }, [persistedPct, dragPx]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!active || props.noDrag) return;
      if ((e.target as HTMLElement).closest("[data-editable-wrapper]") !== ref.current) return;
      // hold Alt to drag text — prevents accidental drag when clicking to edit
      if (props.kind === "text" && !e.altKey) return;
      e.preventDefault();
      e.stopPropagation();
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      const parent = ref.current?.parentElement;
      const rect = parent?.getBoundingClientRect();
      parentRectRef.current = rect ? { width: rect.width, height: rect.height } : null;
      const base = resolvedPx ?? { x: 0, y: 0 };
      dragStart.current = {
        mouseX: e.clientX,
        mouseY: e.clientY,
        basePxX: base.x,
        basePxY: base.y,
      };
      setDragPx(base);
    },
    [active, props.noDrag, props.kind, resolvedPx]
  );

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragStart.current) return;
    const { mouseX, mouseY, basePxX, basePxY } = dragStart.current;
    setDragPx({ x: basePxX + (e.clientX - mouseX), y: basePxY + (e.clientY - mouseY) });
  }, []);

  const onPointerUp = useCallback(
    async (e: React.PointerEvent) => {
      if (!dragStart.current) return;
      const final = dragPx;
      const parentSize = parentRectRef.current;
      dragStart.current = null;
      setDragPx(null);
      try {
        (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
      } catch {}
      if (!final || !parentSize || parentSize.width === 0 || parentSize.height === 0) return;
      const xPct = +((final.x / parentSize.width) * 100).toFixed(3);
      const yPct = +((final.y / parentSize.height) * 100).toFixed(3);
      // Avoid noise: skip save if essentially unchanged.
      if (
        persistedPct &&
        Math.abs(persistedPct.xPct - xPct) < 0.05 &&
        Math.abs(persistedPct.yPct - yPct) < 0.05
      ) {
        return;
      }
      await saveDraft(props.id, { kind: props.kind, offset: { xPct, yPct } });
    },
    [dragPx, persistedPct, props.id, props.kind, saveDraft]
  );

  const style: React.CSSProperties = resolvedPx
    ? { transform: `translate(${resolvedPx.x}px, ${resolvedPx.y}px)` }
    : {};

  // Sync after restored drafts (ensures initial mount has translate set)
  useEffect(() => {
    if (!persistedPct || dragPx) return;
    const el = ref.current;
    const parent = el?.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    setResolvedPx({
      x: (persistedPct.xPct / 100) * rect.width,
      y: (persistedPct.yPct / 100) * rect.height,
    });
  }, [persistedPct, dragPx]);

  // Hidden in production view → render nothing.
  if (draft?.hidden && !active) return null;

  // -- TEXT --
  if (props.kind === "text") {
    const tag = props.as ?? "span";
    const value = draft?.text ?? props.children;
    const original = props.children;
    const isHidden = Boolean(draft?.hidden);

    // In edit mode, hidden element shows a slim placeholder so user can restore it.
    if (isHidden && active) {
      return React.createElement(
        tag,
        {
          ref: setRef,
          "data-editable-wrapper": true,
          "data-editable-id": props.id,
          "data-editable-kind": "text",
          className: cn(
            props.className,
            "inline-flex items-center gap-2 px-2 py-0.5 rounded-sm bg-[#FFE9E9] text-[#B42318] text-[12px] font-semibold opacity-90"
          ),
        },
        [
          <span key="t">Đã ẩn: {props.id}</span>,
          <button
            key="r"
            type="button"
            className="underline"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => saveDraft(props.id, { kind: "text", hidden: false })}
          >
            Khôi phục
          </button>,
        ]
      );
    }

    return React.createElement(
      tag,
      {
        ref: setRef,
        "data-editable-wrapper": true,
        "data-editable-id": props.id,
        "data-editable-kind": "text",
        className: cn(
          props.className,
          active && "group relative outline-dashed outline-1 outline-[#3543F6]/50 outline-offset-2 rounded-sm"
        ),
        style,
        contentEditable: active && !dragStart.current,
        suppressContentEditableWarning: true,
        onPointerDown,
        onPointerMove,
        onPointerUp,
        onBlur: async (e: React.FocusEvent<HTMLElement>) => {
          if (!active) return;
          const next = e.currentTarget.textContent ?? "";
          if (next === value) return;
          await saveDraft(props.id, { kind: "text", text: next, original });
        },
        onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
          if (e.key === "Escape") (e.currentTarget as HTMLElement).blur();
        },
      },
      [
        <React.Fragment key="v">{value}</React.Fragment>,
        active ? (
          <TextEditorControls
            key="c"
            onHide={() =>
              saveDraft(props.id, { kind: "text", hidden: true, original })
            }
            onReset={() => resetOne(props.id)}
            hasDraft={Boolean(draft)}
          />
        ) : null,
      ]
    );
  }

  // -- IMAGE --
  const src = draft?.src ?? props.src;
  const original = props.src;
  const isHidden = Boolean(draft?.hidden);

  if (isHidden && active) {
    return (
      <div
        ref={setRef as React.RefCallback<HTMLDivElement>}
        data-editable-wrapper
        data-editable-id={props.id}
        data-editable-kind="image"
        className={cn(
          "relative flex items-center justify-center bg-[#FFE9E9] text-[#B42318] text-xs font-semibold rounded-md px-3 py-2 gap-2",
          props.className
        )}
      >
        <span>Đã ẩn: {props.id}</span>
        <button
          type="button"
          className="underline"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => saveDraft(props.id, { kind: "image", hidden: false })}
        >
          Khôi phục
        </button>
      </div>
    );
  }

  return (
    <div
      ref={setRef as React.RefCallback<HTMLDivElement>}
      data-editable-wrapper
      data-editable-id={props.id}
      data-editable-kind="image"
      className={cn(
        "relative inline-block",
        props.className,
        active && "outline-dashed outline-1 outline-[#3543F6]/50 outline-offset-2"
      )}
      style={style}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={props.alt ?? ""} className={props.imgClassName} draggable={false} />
      {active && (
        <ImageEditorOverlay
          id={props.id}
          onUploaded={(newSrc) =>
            saveDraft(props.id, { kind: "image", src: newSrc, original })
          }
          onHide={() =>
            saveDraft(props.id, { kind: "image", hidden: true, original })
          }
          onReset={() => resetOne(props.id)}
          hasDraft={Boolean(draft)}
        />
      )}
    </div>
  );
}

function TextEditorControls({
  onHide,
  onReset,
  hasDraft,
}: {
  onHide: () => void;
  onReset: () => void;
  hasDraft: boolean;
}) {
  // Use <span role="button"> rather than <button> so this can safely nest
  // inside an outer <button> (e.g. CTAs that wrap Editable text). HTML forbids
  // button-inside-button, which would otherwise trigger a hydration error.
  //
  // Controls are hidden by default and only revealed on hover/focus of the
  // parent Editable, so they don't visually clutter the page in edit mode.
  return (
    <span
      contentEditable={false}
      className="absolute -top-2 -right-2 inline-flex gap-1 z-10 pointer-events-auto opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity"
      onPointerDown={(e) => e.stopPropagation()}
    >
      <span
        role="button"
        tabIndex={0}
        title="Ẩn / xoá phần tử này"
        className="cursor-pointer select-none bg-[#B42318] text-white text-[10px] font-bold w-5 h-5 rounded-full shadow inline-flex items-center justify-center hover:bg-[#8C1A12]"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onHide();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onHide();
          }
        }}
      >
        ×
      </span>
      {hasDraft && (
        <span
          role="button"
          tabIndex={0}
          title="Khôi phục về bản gốc"
          className="cursor-pointer select-none bg-white text-[#3543F6] text-[10px] font-bold px-1.5 h-5 rounded shadow border border-[#3543F6]/30 hover:bg-[#F7F9FF] inline-flex items-center"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onReset();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onReset();
            }
          }}
        >
          Reset
        </span>
      )}
    </span>
  );
}

function ImageEditorOverlay({
  id,
  onUploaded,
  onHide,
  onReset,
  hasDraft,
}: {
  id: string;
  onUploaded: (src: string) => void;
  onHide: () => void;
  onReset: () => void;
  hasDraft: boolean;
}) {
  const [busy, setBusy] = useState(false);
  return (
    <div className="absolute top-1 right-1 flex gap-1 z-10">
      <label
        className="bg-[#3543F6] text-white text-[11px] font-semibold px-2 py-1 rounded shadow cursor-pointer hover:bg-[#2933D9]"
        onPointerDown={(e) => e.stopPropagation()}
      >
        {busy ? "..." : "Đổi ảnh"}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (!file) return;
            setBusy(true);
            try {
              const fd = new FormData();
              fd.append("file", file);
              const res = await fetch("/api/editor/upload", { method: "POST", body: fd });
              const json = await res.json();
              if (json.src) onUploaded(json.src);
              else alert(`Upload lỗi: ${json.error ?? "unknown"}`);
            } finally {
              setBusy(false);
              e.target.value = "";
            }
          }}
        />
      </label>
      <button
        type="button"
        className="bg-[#B42318] text-white text-[11px] font-semibold px-2 py-1 rounded shadow hover:bg-[#8C1A12]"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={onHide}
        title={`Ẩn ${id}`}
      >
        Xoá
      </button>
      {hasDraft && (
        <button
          type="button"
          className="bg-white text-[#3543F6] text-[11px] font-semibold px-2 py-1 rounded shadow border border-[#3543F6]/30"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={onReset}
          title={`Reset ${id}`}
        >
          Reset
        </button>
      )}
    </div>
  );
}

function cn(...xs: Array<string | false | null | undefined>): string {
  return xs.filter(Boolean).join(" ");
}
