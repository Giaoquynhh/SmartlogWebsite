import Editable from "../../editor/Editable";
import Reveal from "../Reveal";
import { journeyTimeline } from "./data";

export type JourneyTimelineProps = {
  idPrefix?: string;
};

/** Timeline 2015 → 2025 — năm hiển thị to dạng watermark, bên cạnh là card nội dung. */
export default function JourneyTimeline({
  idPrefix = "about.journey",
}: JourneyTimelineProps) {
  return (
    <section id="journey" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <Editable
            id={`${idPrefix}.title`}
            kind="text"
            as="h2"
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#333342] leading-tight block"
          >
            Smartlog và hành trình kiên trì theo đuổi những khát vọng
          </Editable>
        </div>

        <div className="relative">
          {/* Vertical line giữa timeline trên desktop */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#DDE9FF] to-transparent"
          />

          <div className="flex flex-col gap-12 lg:gap-16">
            {journeyTimeline.map((entry, i) => {
              const isRight = i % 2 === 1;
              return (
                <Reveal
                  key={entry.year}
                  variant={isRight ? "right" : "left"}
                  className={`relative grid lg:grid-cols-2 gap-6 lg:gap-10 items-start ${
                    isRight ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Year side */}
                  <div className={`relative ${isRight ? "lg:text-left" : "lg:text-right"}`}>
                    <div
                      aria-hidden
                      className="text-[96px] sm:text-[120px] lg:text-[140px] font-bold leading-none text-[#DDE9FF] select-none"
                    >
                      {entry.year}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="rounded-2xl bg-[#F7F8F8] border border-[#EDEEF1] p-6 lg:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
                    <Editable
                      id={`${idPrefix}.items.${i}.title`}
                      kind="text"
                      as="h3"
                      className="text-lg lg:text-xl font-bold text-[#25272C] mb-3 block"
                    >
                      {entry.title}
                    </Editable>
                    <ul className="space-y-2.5">
                      {entry.bullets.map((b, k) => (
                        <li
                          key={k}
                          className="flex items-start gap-3 text-sm lg:text-base leading-relaxed text-[#25272C]"
                        >
                          <span
                            aria-hidden
                            className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#3543F6] flex-shrink-0"
                          />
                          <Editable
                            id={`${idPrefix}.items.${i}.bullets.${k}`}
                            kind="text"
                            as="span"
                          >
                            {b}
                          </Editable>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
