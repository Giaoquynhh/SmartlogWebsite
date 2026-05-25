import Editable from "../../editor/Editable";

export type ArticleCardData = {
  /** stable id (e.g. "blog.featured.0") */
  id?: string;
  /** publication date, formatted */
  date: string;
  /** card title — Vietnamese */
  title: string;
  /** optional short excerpt (used on Events page) */
  excerpt?: string;
  /** category tags */
  tags?: string[];
  /** image src; falls back to placeholder */
  image?: string;
  /** link target */
  href?: string;
};

export type ArticleCardProps = {
  /** id prefix when card.id is missing */
  idPrefix: string;
  /** index used to build the editable id when card.id is missing */
  index: number;
  card: ArticleCardData;
  /** larger card variant for featured/hero article slots */
  size?: "default" | "feature";
};

/** Subtle gradient placeholder — softer than a flat fill so empty cards still feel finished. */
const PLACEHOLDER_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#EEF3FF"/>
          <stop offset="100%" stop-color="#DDE6FF"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#g)"/>
      <g transform="translate(200 110)" fill="none" stroke="#3543F6" stroke-width="1.5" stroke-opacity="0.35">
        <rect x="-26" y="-22" width="52" height="44" rx="6"/>
        <circle cx="-8" cy="-6" r="4"/>
        <path d="M26 14L10 -2L-26 22" stroke-linecap="round"/>
      </g>
      <text x="200" y="170" font-family="sans-serif" font-size="13" fill="#3543F6" text-anchor="middle" opacity="0.45">[Khung ảnh bài viết]</text>
    </svg>`
  );

export default function ArticleCard({ idPrefix, index, card, size = "default" }: ArticleCardProps) {
  const cid = card.id ?? `${idPrefix}.${index}`;
  const isFeature = size === "feature";
  const imageAspect = isFeature ? "aspect-[16/10]" : "aspect-[4/3]";
  const titleClass = isFeature
    ? "mt-5 text-xl lg:text-2xl font-bold text-[#0b1320] leading-snug line-clamp-3 block"
    : "mt-3 text-[15px] font-bold text-[#0b1320] leading-snug line-clamp-3 block";

  const inner = (
    <article className="group h-full flex flex-col rounded-[28px] bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04),0_12px_32px_-12px_rgba(15,23,42,0.08)] hover:shadow-[0_4px_12px_rgba(15,23,42,0.06),0_24px_48px_-12px_rgba(53,67,246,0.18)] hover:-translate-y-1 hover:border-[#3543F6]/20 border border-transparent transition-all duration-300 overflow-hidden">
      <div className={`${imageAspect} overflow-hidden rounded-t-[28px] news-img-shine`}>
        <Editable
          id={`${cid}.image`}
          kind="image"
          src={card.image ?? PLACEHOLDER_IMG}
          alt={card.title}
          className="w-full h-full flex items-center justify-center"
          imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className={`flex-1 flex flex-col ${isFeature ? "p-7 lg:p-8" : "p-5 lg:p-6"}`}>
        <Editable
          id={`${cid}.date`}
          kind="text"
          as="div"
          className="text-[12px] text-[#9CA3AF] font-medium"
        >
          {card.date}
        </Editable>
        <Editable id={`${cid}.title`} kind="text" as="h3" className={titleClass}>
          {card.title}
        </Editable>
        {card.excerpt && (
          <Editable
            id={`${cid}.excerpt`}
            kind="text"
            as="p"
            className="mt-3 text-[13.5px] text-[#615F78] leading-relaxed line-clamp-3 block"
          >
            {card.excerpt}
          </Editable>
        )}
        {card.tags && card.tags.length > 0 && (
          <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
            {card.tags.map((t, j) => (
              <span
                key={j}
                className="rounded-full bg-[#F4F6FB] px-3 py-1 text-[11px] font-medium text-[#615F78]"
              >
                <Editable id={`${cid}.tags.${j}`} kind="text" as="span">
                  {t}
                </Editable>
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  if (card.href) {
    // Wrap with anchor without using Next Link (cards often go to external/anchor)
    return (
      <a href={card.href} className="block h-full">
        {inner}
      </a>
    );
  }
  return inner;
}
