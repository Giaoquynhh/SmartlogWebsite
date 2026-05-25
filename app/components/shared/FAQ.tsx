"use client";

import { useState } from "react";
import { ArrowDownIcon } from "./icons";
import Editable from "../../editor/Editable";

export type FaqItem = {
  /** stable id (e.g. "stm.faq.0") */
  id?: string;
  q: string;
  a: string;
};

export type FAQProps = {
  /** id prefix for faq items (default "faq") */
  idPrefix?: string;
  title?: string;
  titleId?: string;
  items: FaqItem[];
  /**
   * If true, renders without its outer <section> + max-width wrapper so it
   * can be embedded inside a parent grid (e.g. FaqContactSection).
   */
  embedded?: boolean;
};

export default function FAQ({
  idPrefix = "faq",
  title = "Câu hỏi thường gặp",
  titleId,
  items,
  embedded = false,
}: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  const inner = (
    <>
      <Editable
        id={titleId ?? `${idPrefix}.title`}
        kind="text"
        as="h2"
        className={`text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#333342] block ${embedded ? "text-left" : "text-center"}`}
      >
        {title}
      </Editable>
      <div className={`mt-8 space-y-3 ${embedded ? "" : ""}`}>
        {items.map((it, i) => {
          const fid = it.id ?? `${idPrefix}.${i}`;
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
                <Editable id={`${fid}.q`} kind="text" as="span" className="text-base lg:text-[16px] font-bold text-[#0b1320]">
                  {it.q}
                </Editable>
                <span
                  className={`flex-shrink-0 w-9 h-9 rounded-full bg-[#ECF3FF] text-[#3543F6] flex items-center justify-center transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <ArrowDownIcon size={18} />
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6">
                  <Editable id={`${fid}.a`} kind="text" as="div" className="text-[14px] text-[#615F78] leading-relaxed">
                    {it.a}
                  </Editable>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );

  if (embedded) return inner;

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-3xl px-6">{inner}</div>
    </section>
  );
}
