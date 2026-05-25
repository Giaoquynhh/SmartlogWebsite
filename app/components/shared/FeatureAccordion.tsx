"use client";

import { useState } from "react";
import { ArrowDownIcon } from "./icons";
import Editable from "../../editor/Editable";

export type AccordionItem = {
  /** stable id; falls back to `${idPrefix}.${index}` if missing */
  id?: string;
  title: string;
  body?: string;
  bullets?: string[];
};

export type FeatureAccordionProps = {
  items: AccordionItem[];
  /** Index of item open by default */
  defaultOpen?: number;
  /** id prefix when items don't carry their own id (e.g. "stm.features") */
  idPrefix?: string;
};

export default function FeatureAccordion({
  items,
  defaultOpen = 0,
  idPrefix = "accordion",
}: FeatureAccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const aid = it.id ?? `${idPrefix}.${i}`;
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`rounded-3xl border bg-white overflow-hidden transition-all duration-300 ${
              isOpen
                ? "border-[#3543F6]/30 shadow-[0_8px_32px_rgba(53,67,246,0.12)]"
                : "border-[#EDEEF1] hover:shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:border-[#3543F6]/20"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <Editable id={`${aid}.title`} kind="text" as="span" className="text-base lg:text-[17px] font-bold text-[#0b1320]">
                {it.title}
              </Editable>
              <span
                className={`flex-shrink-0 w-9 h-9 rounded-full bg-[#ECF3FF] text-[#3543F6] flex items-center justify-center transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <ArrowDownIcon size={18} />
              </span>
            </button>
            {isOpen && (it.body || it.bullets) && (
              <div className="accordion-body px-6 pb-6 text-[15px] text-[#615F78] leading-relaxed">
                {it.body && (
                  <Editable id={`${aid}.body`} kind="text" as="p">
                    {it.body}
                  </Editable>
                )}
                {it.bullets && (
                  <ul className="mt-2 space-y-2">
                    {it.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-[#3543F6] mt-1 flex-shrink-0">•</span>
                        <Editable id={`${aid}.bullets.${j}`} kind="text" as="span">
                          {b}
                        </Editable>
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
