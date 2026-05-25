"use client";

import { useState } from "react";
import { ArrowDownIcon } from "../shared/icons";
import Editable from "../../editor/Editable";
import type { AccordionItem } from "../shared/FeatureAccordion";

/**
 * 5 warehouse workflow stages, arranged in a circular flow on the right side
 * of the section. The left side hosts the 8-item accordion of SWM features.
 */
const stages = [
  { label: "Chấm hàng" },
  { label: "Soạn hàng" },
  { label: "Cất hàng" },
  { label: "Nhập hàng" },
  { label: "Xuất hàng" },
];

export type SwmWorkflowProps = {
  items: AccordionItem[];
};

export default function SwmWorkflow({ items }: SwmWorkflowProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Editable id="swm.workflow.title" kind="text" as="h2" className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] leading-tight block">
            Đa tính năng kết nối xuyên suốt hoạt động kho
          </Editable>
          <Editable id="swm.workflow.description" kind="text" as="p" className="mt-4 text-base text-[#615F78] leading-relaxed block">
            Các tính năng của SWM được thiết kế theo dòng chảy vận hành kho thực tế — từ nhập hàng, cất hàng, soạn hàng đến xuất hàng. Giúp nhân viên dễ thao tác, quản lý dễ giám sát, dữ liệu luôn đồng nhất và realtime.
          </Editable>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT — 8 accordion items */}
          <div className="space-y-3">
            {items.map((it, i) => {
              const aid = it.id ?? `swm.workflow.items.${i}`;
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-[#EDEEF1] bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <Editable id={`${aid}.title`} kind="text" as="span" className="text-[15px] lg:text-base font-bold text-[#0b1320]">
                      {it.title}
                    </Editable>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full text-[#615F78] flex items-center justify-center transition-transform ${
                        isOpen ? "rotate-180 text-[#3543F6]" : ""
                      }`}
                    >
                      <ArrowDownIcon size={18} />
                    </span>
                  </button>
                  {isOpen && (it.body || it.bullets) && (
                    <div className="px-5 pb-5 text-[14px] text-[#615F78] leading-relaxed">
                      {it.body && (
                        <Editable id={`${aid}.body`} kind="text" as="p">
                          {it.body}
                        </Editable>
                      )}
                      {it.bullets && (
                        <ul className="mt-2 space-y-1.5">
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

          {/* RIGHT — circular flow diagram, sticky on desktop */}
          <div className="lg:sticky lg:top-24">
            <CircularFlowDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

function CircularFlowDiagram() {
  return (
    <div className="relative rounded-3xl bg-[#C4E0FD]/40 border border-[#C4E0FD] p-6 lg:p-8 aspect-square max-w-[520px] mx-auto">
      {/* dashed circular guide */}
      <div
        aria-hidden
        className="absolute inset-10 rounded-full border-2 border-dashed border-[#3543F6]/25"
      />

      {/* Top — Chấm hàng */}
      <StageBadge label={stages[0].label} position="top-2 left-1/2 -translate-x-1/2" />
      {/* Top-right — Soạn hàng */}
      <StageBadge label={stages[1].label} position="top-[18%] right-[8%]" />
      {/* Top-left — Cất hàng */}
      <StageBadge label={stages[2].label} position="top-[18%] left-[8%]" />
      {/* Bottom-left — Nhập hàng */}
      <StageBadge label={stages[3].label} position="bottom-[18%] left-[8%]" />
      {/* Bottom-right — Xuất hàng */}
      <StageBadge label={stages[4].label} position="bottom-[18%] right-[8%]" />

      {/* Center display card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[48%] aspect-[5/3] rounded-xl bg-white border border-[#EDEEF1] shadow-[0_8px_24px_rgba(15,23,42,0.08)] flex flex-col p-3">
          <div className="flex gap-1 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="space-y-1 flex-1">
            <div className="h-1.5 w-3/4 rounded bg-[#C4E0FD]" />
            <div className="h-1.5 w-1/2 rounded bg-[#ECF3FF]" />
            <div className="h-1.5 w-2/3 rounded bg-[#ECF3FF]" />
            <div className="h-1.5 w-1/3 rounded bg-[#C4E0FD]" />
          </div>
        </div>
      </div>

      {/* Bottom-center — small arrow icon */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#3543F6] text-white flex items-center justify-center shadow-lg">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M3 12h18M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function StageBadge({ label, position }: { label: string; position: string }) {
  return (
    <div
      className={`absolute ${position} bg-[#3543F6] text-white text-sm font-semibold rounded-lg px-4 py-2 shadow-[0_4px_12px_rgba(53,67,246,0.35)] whitespace-nowrap`}
    >
      {label}
    </div>
  );
}
