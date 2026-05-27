"use client";

import { useState } from "react";
import { globalFaqs } from "./data";

export default function FaqAccordion() {
  const [openKey, setOpenKey] = useState<string | null>(globalFaqs[0]?.key ?? null);

  return (
    <ul className="space-y-4">
      {globalFaqs.map((f) => {
        const open = openKey === f.key;
        return (
          <li
            key={f.key}
            className="rounded-2xl border border-[#EDEEF1] bg-white overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenKey(open ? null : f.key)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 lg:px-6 lg:py-5"
            >
              <span className="text-sm lg:text-base font-bold text-[#333342]">
                {f.question}
              </span>
              <span
                aria-hidden
                className={`flex-shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full transition-all ${
                  open
                    ? "bg-[#3543F6] text-white rotate-180"
                    : "bg-[#ECF3FF] text-[#3543F6]"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="m6 9 6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            {open && (
              <div className="px-5 pb-5 lg:px-6 lg:pb-6 accordion-body">
                <p className="text-sm lg:text-base text-[#615F78] leading-relaxed">
                  {f.answer}
                </p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
