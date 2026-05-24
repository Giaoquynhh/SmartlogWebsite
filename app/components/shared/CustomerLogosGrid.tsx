export type CustomerLogosGridProps = {
  title?: string;
  description?: string;
  /** number of logo placeholder cards to render */
  count?: number;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function CustomerLogosGrid({
  title = "Những khách hàng đã tin tưởng Smartlog",
  description = "Đã và đang là nhà cung cấp giải pháp cho hơn 150 doanh nghiệp Logistics, Sản xuất, Thương mại và Phân phối...",
  count = 24,
  ctaLabel = "Khám phá câu chuyện của khách hàng",
  ctaHref = "#",
}: CustomerLogosGridProps) {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-base text-[#615F78] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-2xl border border-[#EDEEF1] bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)] flex items-center justify-center text-[#615F78]/40 text-xs"
            >
              [Logo]
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-xl bg-[#3543F6] hover:bg-[#2933D9] transition-colors px-7 py-3.5 text-base font-bold text-white shadow-lg"
          >
            {ctaLabel}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
