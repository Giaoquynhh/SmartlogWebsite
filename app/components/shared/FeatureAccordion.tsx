"use client";

import { useState } from "react";
import { ArrowDownIcon } from "./icons";

export type AccordionItem = {
  title: string;
  body?: React.ReactNode;
  bullets?: string[];
};

export type FeatureAccordionProps = {
  items: AccordionItem[];
  /** Index of item open by default */
  defaultOpen?: number;
};

export default function FeatureAccordion({
  items,
  defaultOpen = 0,
}: FeatureAccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="rounded-3xl border border-[#EDEEF1] bg-white overflow-hidden transition-shadow hover:shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base lg:text-[17px] font-bold text-[#0b1320]">
                {it.title}
              </span>
              <span
                className={`flex-shrink-0 w-9 h-9 rounded-full bg-[#ECF3FF] text-[#3543F6] flex items-center justify-center transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <ArrowDownIcon size={18} />
              </span>
            </button>
            {isOpen && (it.body || it.bullets) && (
              <div className="px-6 pb-6 text-[15px] text-[#615F78] leading-relaxed">
                {it.body}
                {it.bullets && (
                  <ul className="mt-2 space-y-2">
                    {it.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-[#3543F6] mt-1 flex-shrink-0">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
