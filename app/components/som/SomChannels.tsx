"use client";

import { useState } from "react";
import { ArrowDownIcon } from "../shared/icons";
import Editable from "../../editor/Editable";
import Reveal from "../Reveal";

export type SomFeatureItem = {
  id?: string;
  title: string;
  body?: string;
  bullets?: string[];
};

export type SomChannelsProps = {
  items: SomFeatureItem[];
};

/**
 * SOM "Đa kênh / multi-channel" section matching the Figma layout:
 *  - Heading centred at the top
 *  - Two columns:
 *      Left:  8-item accordion (the SOM feature list)
 *      Right: a light-blue card holding a dashboard mockup
 *             (placeholder — team can upload the real dashboard screenshot)
 */
const DASHBOARD_PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 626 540"><rect width="626" height="540" rx="24" fill="#C4E0FD"/><g transform="translate(313 230)" fill="none" stroke="rgba(53,67,246,0.5)" stroke-width="2"><rect x="-80" y="-50" width="160" height="100" rx="8"/><circle cx="0" cy="0" r="14"/><text y="55" font-family="sans-serif" font-size="14" fill="rgba(53,67,246,0.7)" text-anchor="middle" font-weight="600">SOM</text></g><text x="313" y="380" font-family="sans-serif" font-size="14" fill="rgba(53,67,246,0.6)" text-anchor="middle">[Khung ảnh: dashboard SOM]</text></svg>`
  );

export default function SomChannels({ items }: SomChannelsProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Editable
            id="som.channels.title"
            kind="text"
            as="h2"
            className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] leading-tight block"
          >
            SOM là công cụ đắc lực với bộ tính năng được thiết kế phù hợp cho đặc thù kênh bán của đa ngành hàng
          </Editable>
          <Editable
            id="som.channels.description"
            kind="text"
            as="p"
            className="mt-4 text-base text-[#615F78] leading-relaxed block"
          >
            SOM sở hữu danh sách tính năng phong phú phục vụ từng giai đoạn của quá trình quản lý đơn hàng, hỗ trợ vận hành hiệu quả hơn.
          </Editable>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT — 8-item accordion */}
          <Reveal as="div" stagger className="space-y-3">
            {items.map((it, i) => {
              const aid = it.id ?? `som.channels.items.${i}`;
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border bg-white overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-[#3543F6]/30 shadow-[0_8px_32px_rgba(53,67,246,0.12)]"
                      : "border-[#EDEEF1] hover:border-[#3543F6]/20 hover:shadow-[0_4px_16px_rgba(15,23,42,0.06)]"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <Editable
                      id={`${aid}.title`}
                      kind="text"
                      as="span"
                      className="text-[15px] lg:text-base font-bold text-[#0b1320]"
                    >
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
                    <div className="accordion-body px-5 pb-5 text-[14px] text-[#615F78] leading-relaxed">
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
          </Reveal>

          {/* RIGHT — Dashboard placeholder, sticky on desktop */}
          <Reveal variant="right" className="lg:sticky lg:top-24">
            <div className="rounded-3xl bg-[#C4E0FD]/40 border border-[#C4E0FD] p-4 lg:p-6 flex items-center justify-center animate-float-slow">
              <Editable
                id="som.channels.dashboard"
                kind="image"
                src={DASHBOARD_PLACEHOLDER}
                alt="SOM multi-channel dashboard"
                className="w-full flex items-center justify-center"
                imgClassName="w-full h-auto rounded-2xl"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
