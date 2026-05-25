import Editable from "../../editor/Editable";

export type Stat = {
  /** stable id (e.g. "stm.stats.0") */
  id?: string;
  value: string;
  label: string;
  sublabel?: string;
};

export type StatsBandProps = {
  /** id prefix for stats (default "stats") — used to derive ids when stat.id is missing */
  idPrefix?: string;
  title?: React.ReactNode;
  /** stable id for the title */
  titleId?: string;
  stats: Stat[];
  ctaLabel?: React.ReactNode;
  ctaLabelId?: string;
  ctaHref?: string;
};

export default function StatsBand({
  idPrefix = "stats",
  title = "Những con số biết nói",
  titleId,
  stats,
  ctaLabel,
  ctaLabelId,
  ctaHref = "#contact",
}: StatsBandProps) {
  return (
    <section className="py-16 lg:py-20 bg-[#F7F9FF]">
      <div className="mx-auto max-w-7xl px-6">
        <Editable
          id={titleId ?? `${idPrefix}.title`}
          kind="text"
          as="h2"
          className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] text-center block"
        >
          {typeof title === "string" ? title : String(title)}
        </Editable>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => {
            const sid = s.id ?? `${idPrefix}.${i}`;
            return (
              <div
                key={i}
                className="rounded-3xl bg-white border border-[#EDEEF1] px-6 py-8 text-center shadow-[0_4px_24px_rgba(15,23,42,0.04)]"
              >
                {s.label && (
                  <Editable id={`${sid}.label`} kind="text" as="div" className="text-sm font-semibold text-[#615F78] uppercase tracking-wide">
                    {s.label}
                  </Editable>
                )}
                <div
                  className="mt-3 text-4xl sm:text-5xl lg:text-[56px] font-bold leading-none"
                  style={{
                    background: "linear-gradient(90deg, #9CBBFF 0%, #2933D9 60%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  <Editable id={`${sid}.value`} kind="text" as="span">
                    {s.value}
                  </Editable>
                </div>
                {s.sublabel && (
                  <Editable id={`${sid}.sublabel`} kind="text" as="div" className="mt-3 text-sm text-[#615F78] leading-relaxed">
                    {s.sublabel}
                  </Editable>
                )}
              </div>
            );
          })}
        </div>
        {ctaLabel && (
          <div className="mt-10 flex justify-center">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-xl bg-[#3543F6] hover:bg-[#2933D9] transition-colors px-7 py-3.5 text-base font-bold text-white shadow-lg"
            >
              <Editable id={ctaLabelId ?? `${idPrefix}.cta`} kind="text" as="span">
                {typeof ctaLabel === "string" ? ctaLabel : String(ctaLabel)}
              </Editable>
              <span aria-hidden>→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
