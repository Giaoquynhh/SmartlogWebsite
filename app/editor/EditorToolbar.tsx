"use client";

import { useState } from "react";
import { useEditor } from "./EditorContext";

export default function EditorToolbar() {
  const { active, setActive, drafts, resetAll, refresh, pathname } = useEditor();
  const count = Object.keys(drafts).length;
  const hiddenCount = Object.values(drafts).filter((d) => d?.hidden).length;
  const [busy, setBusy] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex items-center gap-2">
      {active && (
        <>
          <span className="bg-white text-[#3543F6] text-xs font-bold px-3 py-2 rounded-full shadow border border-[#3543F6]/30">
            {count} thay đổi
            {hiddenCount > 0 && (
              <span className="ml-1 text-[#B42318]">· {hiddenCount} đã ẩn</span>
            )}
            <span className="ml-1 opacity-60">· {pathname}</span>
          </span>

          <button
            type="button"
            className="bg-white text-[#333342] text-xs font-bold px-3 py-2 rounded-full shadow border border-[#EDEEF1] hover:bg-[#F7F9FF]"
            onClick={() => exportJson(pathname, drafts)}
          >
            Export JSON
          </button>

          <button
            type="button"
            className="bg-white text-[#615F78] text-xs font-bold px-3 py-2 rounded-full shadow border border-[#EDEEF1] hover:bg-[#F7F9FF]"
            onClick={async () => {
              if (!confirm("Xoá toàn bộ thay đổi của TẤT CẢ page?")) return;
              setBusy(true);
              await resetAll();
              await refresh();
              setBusy(false);
            }}
            disabled={busy}
          >
            Reset all
          </button>
        </>
      )}

      <button
        type="button"
        className={
          "text-xs font-bold px-4 py-2 rounded-full shadow transition-colors " +
          (active
            ? "bg-[#3543F6] text-white hover:bg-[#2933D9]"
            : "bg-white text-[#3543F6] border border-[#3543F6]/30 hover:bg-[#F7F9FF]")
        }
        onClick={() => setActive(!active)}
      >
        {active ? "Đang chỉnh sửa · Tắt" : "Bật chỉnh sửa"}
      </button>
    </div>
  );
}

function exportJson(pathname: string, drafts: Record<string, unknown>) {
  const blob = new Blob(
    [JSON.stringify({ pathname, exportedAt: new Date().toISOString(), drafts }, null, 2)],
    { type: "application/json" }
  );
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `smartlog-edits-${pathname.replace(/\//g, "_") || "root"}-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
