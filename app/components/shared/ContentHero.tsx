import Editable from "../../editor/Editable";
import Reveal from "../Reveal";

export type HeroStatItem = {
  id?: string;
  value: string;
  label: string;
};

export type ContentHeroProps = {
  /** id prefix for editable text (e.g. "blog.hero") */
  idPrefix?: string;
  /** Small label above main title — e.g. "Blog nổi bật", "Hoạt động nổi bật", "Dự án đáng chú ý" */
  eyebrow: string;
  /** Main page title */
  title: string;
  /** Description paragraph below title */
  description: string;
  /** Search input placeholder — defaults to "Tìm kiếm" */
  searchPlaceholder?: string;
  /** Set to false to hide the Smartlog logo watermark. */
  showWatermark?: boolean;
  /** Optional 4-stat strip rendered inside the hero (matches Figma). */
  stats?: HeroStatItem[];
  /** id prefix used to derive stat ids when stat.id is missing (e.g. "blog.stats"). */
  statsIdPrefix?: string;
};

/**
 * Dark navy hero used at the top of Blog / Projects / Events pages.
 *
 * Matches the Figma layout:
 *  - center-aligned column: eyebrow → title → description → search
 *  - dotted "hexagon" particle pattern filling the whole hero
 *  - giant watermark letter behind the title for visual weight
 *  - optional 4-column stat strip pinned at the bottom of the hero
 */
export default function ContentHero({
  idPrefix = "hero",
  eyebrow,
  title,
  description,
  searchPlaceholder = "Tìm kiếm",
  showWatermark = true,
  stats,
  statsIdPrefix = "stats",
}: ContentHeroProps) {

  return (
    <section
      className="relative overflow-hidden text-white pt-44 pb-12 lg:pt-52 lg:pb-16"
      style={{ backgroundColor: "#161A50" }}
    >
      {/* Background decorative layers — đồng bộ /about hero. */}
      {showWatermark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
        >
          {/* Group 10: đốm circuit-board phía trái-dưới */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about/hero/hero-decor-group-10.svg"
            alt=""
            className="absolute left-0 opacity-60"
            style={{ bottom: 0, width: "50%", height: "auto" }}
          />
          {/* Group 9: đốm nhỏ vàng rải — đồng bộ /about hero */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about/hero/hero-decor-group-9.svg"
            alt=""
            className="absolute opacity-80"
            style={{
              left: "20%",
              top: "25%",
              width: "16%",
              height: "auto",
            }}
          />
          {/* Chữ "f" watermark */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about/hero/hero-dot-pattern.svg"
            alt=""
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: "16%",
              height: "68%",
              width: "auto",
              maxWidth: "none",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(22,26,80,0) 4%, rgba(22,26,80,0.85) 94%)",
            }}
          />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Editable
            id={`${idPrefix}.eyebrow`}
            kind="text"
            as="div"
            className="anim-fade-up text-sm font-semibold uppercase tracking-wider text-[#ECF3FF]/70 mb-4"
          >
            {eyebrow}
          </Editable>

          <Editable
            id={`${idPrefix}.title`}
            kind="text"
            as="h1"
            className="anim-fade-up delay-100 hero-gradient-text text-5xl sm:text-6xl lg:text-[72px] leading-[1.05] font-bold tracking-tight block"
          >
            {title}
          </Editable>

          <Editable
            id={`${idPrefix}.description`}
            kind="text"
            as="p"
            className="anim-fade-up delay-200 mt-5 text-base sm:text-lg leading-relaxed text-[#ECF3FF]/90 block"
          >
            {description}
          </Editable>

          {/* Search bar — centered under description */}
          <div className="anim-fade-up delay-300 relative w-full max-w-xl mx-auto mt-8">
            <span
              aria-hidden
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B6BAC3]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M21 21l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              type="search"
              placeholder={searchPlaceholder}
              className="w-full rounded-full border border-[#EDEEF1] bg-white pl-6 pr-12 py-3.5 text-sm text-[#333342] placeholder:text-[#B6BAC3] shadow-[0_8px_32px_rgba(15,23,42,0.18)] focus:outline-none focus:border-[#3543F6] focus:ring-4 focus:ring-[#3543F6]/15 transition-all"
            />
          </div>
        </div>

        {/* In-hero 4-stat strip */}
        {stats && stats.length > 0 && (
          <Reveal as="div" stagger className="mt-14 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-y-8">
            {stats.map((s, i) => {
              const sid = s.id ?? `${statsIdPrefix}.${i}`;
              const showDivider = i > 0;
              return (
                <div
                  key={i}
                  className={`relative text-center px-2 sm:px-4 lg:px-5 ${
                    showDivider ? "lg:border-l lg:border-white/15" : ""
                  }`}
                >
                  <div
                    className="gradient-pan text-4xl sm:text-5xl lg:text-[56px] font-bold leading-none tracking-tight whitespace-nowrap"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #ECF3FF 0%, #9CBBFF 30%, #ECF3FF 60%, #9CBBFF 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    <Editable id={`${sid}.value`} kind="text" as="span">
                      {s.value}
                    </Editable>
                  </div>
                  <Editable
                    id={`${sid}.label`}
                    kind="text"
                    as="div"
                    className="mt-3 text-sm text-[#ECF3FF]/80 leading-snug"
                  >
                    {s.label}
                  </Editable>
                </div>
              );
            })}
          </Reveal>
        )}
      </div>
    </section>
  );
}
