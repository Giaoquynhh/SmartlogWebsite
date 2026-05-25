"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { DraftRecord, DraftsFile, EditableKind } from "./types";

type EditorContextValue = {
  /** is edit mode on (set via ?edit=1 or toggle button) */
  active: boolean;
  setActive: (v: boolean) => void;
  /** pathname of current page (used to scope drafts) */
  pathname: string;
  drafts: Record<string, DraftRecord>;
  getDraft: (id: string) => DraftRecord | undefined;
  saveDraft: (
    id: string,
    patch: Partial<DraftRecord> & { kind: EditableKind; original?: string }
  ) => Promise<void>;
  resetOne: (id: string) => Promise<void>;
  resetAll: () => Promise<void>;
  refresh: () => Promise<void>;
};

const EditorContext = createContext<EditorContextValue | null>(null);

/**
 * No-op fallback when used outside an EditorProvider — lets <Editable> render
 * plain content on pages that haven't opted into edit mode yet.
 */
const NOOP: EditorContextValue = {
  active: false,
  setActive: () => {},
  pathname: "",
  drafts: {},
  getDraft: () => undefined,
  saveDraft: async () => {},
  resetOne: async () => {},
  resetAll: async () => {},
  refresh: async () => {},
};

export function useEditor(): EditorContextValue {
  return useContext(EditorContext) ?? NOOP;
}

export function EditorProvider({
  initialFile,
  pathname,
  children,
}: {
  initialFile: DraftsFile;
  pathname: string;
  children: React.ReactNode;
}) {
  const [drafts, setDrafts] = useState<Record<string, DraftRecord>>(() =>
    flattenForPath(initialFile, pathname)
  );
  const [active, setActiveState] = useState<boolean>(false);

  // Init active from URL or localStorage (?edit=1 turns it on; persists across F5)
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("edit") === "1") {
      window.localStorage.setItem("smartlog-edit-mode", "1");
    }
    const stored = window.localStorage.getItem("smartlog-edit-mode");
    setActiveState(stored === "1");
  }, []);

  const setActive = useCallback((v: boolean) => {
    setActiveState(v);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("smartlog-edit-mode", v ? "1" : "0");
    }
  }, []);

  const refresh = useCallback(async () => {
    const res = await fetch("/api/editor/drafts", { cache: "no-store" });
    const file = (await res.json()) as DraftsFile;
    setDrafts(flattenForPath(file, pathname));
  }, [pathname]);

  const getDraft = useCallback((id: string) => drafts[id], [drafts]);

  const saveDraft: EditorContextValue["saveDraft"] = useCallback(
    async (id, patch) => {
      // optimistic
      setDrafts((d) => ({
        ...d,
        [id]: {
          ...(d[id] ?? { kind: patch.kind }),
          ...patch,
          kind: patch.kind,
          updatedAt: new Date().toISOString(),
        } as DraftRecord,
      }));
      await fetch("/api/editor/drafts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pathname, id, ...patch }),
      });
    },
    [pathname]
  );

  const resetOne = useCallback(
    async (id: string) => {
      setDrafts((d) => {
        const next = { ...d };
        delete next[id];
        return next;
      });
      await fetch(
        `/api/editor/drafts?pathname=${encodeURIComponent(pathname)}&id=${encodeURIComponent(id)}`,
        { method: "DELETE" }
      );
    },
    [pathname]
  );

  const resetAll = useCallback(async () => {
    setDrafts({});
    await fetch(`/api/editor/drafts?all=1`, { method: "DELETE" });
  }, []);

  const value = useMemo<EditorContextValue>(
    () => ({
      active,
      setActive,
      pathname,
      drafts,
      getDraft,
      saveDraft,
      resetOne,
      resetAll,
      refresh,
    }),
    [active, setActive, pathname, drafts, getDraft, saveDraft, resetOne, resetAll, refresh]
  );

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
}

function flattenForPath(file: DraftsFile, pathname: string): Record<string, DraftRecord> {
  const out: Record<string, DraftRecord> = {};
  const prefix = `${pathname}::`;
  for (const [k, v] of Object.entries(file.drafts)) {
    if (k.startsWith(prefix)) {
      out[k.slice(prefix.length)] = v;
    }
  }
  return out;
}
