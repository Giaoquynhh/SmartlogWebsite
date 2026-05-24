export type Stat = {
  value: string;
  label: string;
  sublabel?: string;
};

export type StatsBandProps = {
  title?: string;
  stats: Stat[];
  ctaLabel?: string;
  ctaHref?: string;
};

export default function StatsBand({
  title = "Những con số biết nói",
  stats,
  ctaLabel,
  ctaHref = "#contact",
}: StatsBandProps) {
  return (
    <section className="py-16 lg:py-20 bg-[#F7F9FF]">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] text-center">
          {title}
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white border border-[#EDEEF1] px-6 py-8 text-center shadow-[0_4px_24px_rgba(15,23,42,0.04)]"
            >
              {s.label && (
                <div className="text-sm font-semibold text-[#615F78] uppercase tracking-wide">
                  {s.label}
                </div>
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
                {s.value}
              </div>
              {s.sublabel && (
                <div className="mt-3 text-sm text-[#615F78] leading-relaxed">
                  {s.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
        {ctaLabel && (
          <div className="mt-10 flex justify-center">
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-xl bg-[#3543F6] hover:bg-[#2933D9] transition-colors px-7 py-3.5 text-base font-bold text-white shadow-lg"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
