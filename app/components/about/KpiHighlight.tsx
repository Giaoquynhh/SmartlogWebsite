import Editable from "../../editor/Editable";
import Reveal from "../Reveal";
import { closingBanners, kpiHighlights } from "./data";

export type KpiHighlightProps = {
  idPrefix?: string;
};

export default function KpiHighlight({ idPrefix = "about.kpi" }: KpiHighlightProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-[#E5E8F0] bg-white p-8 lg:p-14 shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
          <div className="text-center">
            <Editable
              id={`${idPrefix}.title`}
              kind="text"
              as="h2"
              className="title-underline text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] leading-tight"
            >
              Mang lại sự tối ưu trong vận hành với…
            </Editable>
          </div>

          <Reveal as="div" className="mt-10 lg:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 lg:gap-x-10">
            {kpiHighlights.map((k, i) => (
              <div key={i} className="kpi-pop text-center">
                <div className="flex items-center justify-center gap-1.5">
                  {k.arrow && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                      className="kpi-arrow shrink-0"
                    >
                      <path
                        d="M12 5v14m0 0l-6-6m6 6l6-6"
                        stroke="#3543F6"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <div
                    className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-none whitespace-nowrap"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #3543F6 0%, #242EAF 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      color: "transparent",
                    }}
                  >
                    <Editable
                      id={`${idPrefix}.items.${i}.value`}
                      kind="text"
                      as="span"
                    >
                      {k.value}
                    </Editable>
                  </div>
                </div>
                <div className="mt-3">
                  <Editable
                    id={`${idPrefix}.items.${i}.label`}
                    kind="text"
                    as="div"
                    className="text-sm lg:text-base text-[#6B7280] leading-snug"
                  >
                    {k.label}
                  </Editable>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal as="div" stagger className="mt-8 grid md:grid-cols-2 gap-6">
          {closingBanners.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-[#E5E8F0] p-7 lg:p-9 shadow-[0_4px_24px_rgba(15,23,42,0.04)]"
            >
              <Editable
                id={`${idPrefix}.banners.${i}.title`}
                kind="text"
                as="h3"
                className="text-xl lg:text-2xl font-bold text-[#333342] leading-snug block"
              >
                {b.title}
              </Editable>
              <Editable
                id={`${idPrefix}.banners.${i}.description`}
                kind="text"
                as="p"
                className="mt-3 text-sm lg:text-base text-[#6B7280] leading-relaxed block"
              >
                {b.description}
              </Editable>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
