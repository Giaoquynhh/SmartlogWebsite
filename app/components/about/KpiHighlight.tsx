import Editable from "../../editor/Editable";
import Reveal from "../Reveal";
import { closingBanners, kpiHighlights } from "./data";

export type KpiHighlightProps = {
  idPrefix?: string;
};

/** 4 KPI cards + 2 banner đóng phần "tối ưu vận hành". */
export default function KpiHighlight({ idPrefix = "about.kpi" }: KpiHighlightProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <Editable
            id={`${idPrefix}.title`}
            kind="text"
            as="h2"
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#333342] leading-tight block"
          >
            Mang lại sự tối ưu trong vận hành với…
          </Editable>
        </div>

        <Reveal as="div" stagger className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {kpiHighlights.map((k, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-[#EDEEF1] p-6 lg:p-8 text-center shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_24px_48px_-20px_rgba(53,67,246,0.18)] hover:-translate-y-1 transition-all"
            >
              <div
                className="text-4xl lg:text-5xl font-bold leading-none mb-3"
                style={{
                  backgroundImage: "linear-gradient(180deg, #3543F6 0%, #242EAF 100%)",
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
              <Editable
                id={`${idPrefix}.items.${i}.label`}
                kind="text"
                as="div"
                className="text-sm lg:text-base text-[#333342] leading-snug"
              >
                {k.label}
              </Editable>
            </div>
          ))}
        </Reveal>

        <Reveal as="div" stagger className="mt-12 grid md:grid-cols-2 gap-6">
          {closingBanners.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#F7F8F8] border border-[#EDEEF1] p-7 lg:p-9 shadow-[0_4px_24px_rgba(15,23,42,0.04)]"
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
                className="mt-3 text-sm lg:text-base text-[#25272C] leading-relaxed block"
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
