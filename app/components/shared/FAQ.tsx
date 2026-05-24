"use client";

import { useState } from "react";
import { ArrowDownIcon } from "./icons";

export type FaqItem = { q: string; a: React.ReactNode };

export type FAQProps = {
  title?: string;
  items: FaqItem[];
};

export default function FAQ({ title = "Câu hỏi thường gặp", items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] text-center">
          {title}
        </h2>
        <div className="mt-10 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-3xl border border-[#EDEEF1] bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base lg:text-[17px] font-bold text-[#0b1320]">
                    {it.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-full bg-[#ECF3FF] text-[#3543F6] flex items-center justify-center transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ArrowDownIcon size={18} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-[15px] text-[#615F78] leading-relaxed">
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
