"use client";

import { useState } from "react";
import { ArrowDownIcon } from "../shared/icons";
import type { AccordionItem } from "../shared/FeatureAccordion";
import Editable from "../../editor/Editable";

/**
 * STM "Đa tính năng nối liền mọi điểm chạm" section.
 * Two-column layout matching Figma:
 *  - Left: 8-item feature accordion
 *  - Right: Auto Planning dashboard mock (sticky on desktop)
 */
export type StmFeaturesHighlightProps = {
  items: AccordionItem[];
};

export default function StmFeaturesHighlight({ items }: StmFeaturesHighlightProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Editable
            id="stm.features.title"
            kind="text"
            as="h2"
            className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] leading-tight block"
          >
            Đa tính năng nối liền mọi điểm chạm — Vận hành mượt mà trên một nền tảng duy nhất
          </Editable>
          <Editable
            id="stm.features.description"
            kind="text"
            as="p"
            className="mt-4 text-base text-[#615F78] leading-relaxed block"
          >
            Các hệ tính năng của STM được thiết kế logic, bám sát luồng vận hành thực tế, giúp nhân viên dễ dàng triển khai và giám sát.
          </Editable>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT — accordion */}
          <div className="space-y-3">
            {items.map((it, i) => {
              const aid = it.id ?? `stm.features.items.${i}`;
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

          {/* RIGHT — Auto Planning panel */}
          <div className="lg:sticky lg:top-24">
            <AutoPlanningPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function AutoPlanningPanel() {
  const tabs = ["Timeline", "Grid view", "Result Summary"];
  return (
    <div className="rounded-3xl bg-[#C4E0FD]/40 border border-[#C4E0FD] p-5 lg:p-7">
      {/* Header: badge + tabs */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="inline-flex items-center gap-2 rounded-lg bg-[#7B5BFF] px-3 py-1.5 text-sm font-bold text-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Auto Planning
        </div>
        <div className="inline-flex rounded-lg bg-white p-1 gap-1">
          {tabs.map((t, i) => (
            <button
              key={t}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                i === 0
                  ? "bg-[#3543F6] text-white"
                  : "text-[#615F78] hover:text-[#3543F6]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Mock map area */}
      <div className="mt-5 relative rounded-2xl bg-white border border-[#EDEEF1] overflow-hidden aspect-[5/4]">
        <MapMock />

        {/* Shipment information card overlay */}
        <div className="absolute left-4 bottom-4 right-4 sm:right-auto sm:w-[260px] rounded-xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)] border border-[#EDEEF1] p-4">
          <div className="text-[11px] font-bold uppercase tracking-wide text-[#615F78]">
            Shipment information
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-sm font-semibold text-[#333342]">#SLG-20251022</div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E6F8EE] text-[#0F8B4C] px-2 py-0.5 text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F8B4C]" />
              Arrival
            </span>
          </div>
          <dl className="mt-3 space-y-1.5 text-[12px]">
            <Row k="Vehicle" v="51C-984.21" />
            <Row k="ETA" v="08:45 — 22/10" />
            <Row k="Distance" v="124 km" />
          </dl>
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <dt className="text-[#615F78]">{k}</dt>
      <dd className="font-semibold text-[#333342]">{v}</dd>
    </div>
  );
}

/** Stylised SVG map with route, pin and warning marker — matches the Auto Planning visual in Figma. */
function MapMock() {
  return (
    <svg
      viewBox="0 0 400 320"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      {/* Background grid */}
      <defs>
        <pattern id="stm-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="#EDEEF1" strokeWidth="1" />
        </pattern>
        <linearGradient id="stm-route" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3543F6" />
          <stop offset="100%" stopColor="#9CBBFF" />
        </linearGradient>
      </defs>
      <rect width="400" height="320" fill="#F7F9FF" />
      <rect width="400" height="320" fill="url(#stm-grid)" />

      {/* Soft regions */}
      <path d="M0,80 C90,40 180,140 280,90 S400,140 400,140 L400,0 L0,0 Z" fill="#E8EEFF" opacity="0.7" />
      <path d="M0,260 C100,230 200,290 300,250 S400,260 400,260 L400,320 L0,320 Z" fill="#E8EEFF" opacity="0.6" />

      {/* Route */}
      <path
        d="M50,250 C120,220 140,150 200,140 S320,180 350,80"
        fill="none"
        stroke="url(#stm-route)"
        strokeWidth="4"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />

      {/* Pin (origin) */}
      <g transform="translate(50,250)">
        <circle r="14" fill="#3543F6" />
        <circle r="5" fill="#fff" />
      </g>

      {/* Warning marker (middle) */}
      <g transform="translate(200,140)">
        <circle r="18" fill="#FFB020" opacity="0.25" />
        <circle r="10" fill="#FFB020" />
        <text textAnchor="middle" y="4" fontSize="12" fontWeight="700" fill="#fff">!</text>
      </g>

      {/* Destination */}
      <g transform="translate(350,80)">
        <circle r="14" fill="#0F8B4C" />
        <circle r="5" fill="#fff" />
      </g>
    </svg>
  );
}
