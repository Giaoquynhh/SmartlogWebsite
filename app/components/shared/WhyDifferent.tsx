export type WhyCard = {
  title: string;
  description: string;
  /** path to image; if omitted, a placeholder is shown */
  image?: string;
};

export type WhyDifferentProps = {
  title?: string;
  cards: WhyCard[];
};

export default function WhyDifferent({
  title = "Điều gì khiến Smartlog trở nên khác biệt và ưu việt",
  cards,
}: WhyDifferentProps) {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] text-center max-w-3xl mx-auto">
          {title}
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <article
              key={i}
              className="rounded-3xl bg-white border border-[#EDEEF1] overflow-hidden shadow-[0_4px_24px_rgba(15,23,42,0.06)] flex flex-col"
            >
              <div className="aspect-[4/3] bg-[#F2F6FF] flex items-center justify-center text-[#3543F6]/40 text-sm">
                {c.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center px-4">
                    <div className="mx-auto w-12 h-12 rounded-xl border border-dashed border-[#3543F6]/40 mb-2 flex items-center justify-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                        <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span>[Khung ảnh]</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-[#333342] leading-snug">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14px] text-[#615F78] leading-relaxed">
                  {c.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
