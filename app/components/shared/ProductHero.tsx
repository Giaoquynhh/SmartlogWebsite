import { ArrowRightIcon } from "./icons";
import Editable from "../../editor/Editable";
import { shared } from "../../assets";

export type ProductHeroProps = {
  badge?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  primaryCta?: { label: string; href?: string };
  secondaryCta?: { label: string; href?: string };
  /** Optional path to illustration on right side. If omitted, an image placeholder frame is rendered. */
  illustration?: string;
  illustrationAlt?: string;
  /** Custom illustration slot — takes precedence over `illustration` if provided. */
  illustrationSlot?: React.ReactNode;
  /**
   * If provided, the illustration frame becomes editable: team can upload
   * a real image, drag it, or hide it via the editor toolbar.
   * Has no effect when `illustrationSlot` is provided (the slot owns its
   * own editor wiring — see e.g. StmHeroIllustration).
   */
  editableIllustrationId?: string;
};

/** Transparent SVG placeholder for editable hero illustration on dark navy bg. */
const HERO_PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 480"><rect width="600" height="480" fill="rgba(255,255,255,0.04)"/><g transform="translate(300 240)" fill="none" stroke="rgba(236,243,255,0.5)" stroke-width="2"><rect x="-32" y="-32" width="64" height="64" rx="12"/><circle cx="-12" cy="-12" r="6"/><path d="M32 16l-20-20-40 40" stroke-linecap="round"/></g><text x="300" y="330" font-family="sans-serif" font-size="16" fill="rgba(236,243,255,0.5)" text-anchor="middle">[Khung ảnh minh hoạ Hero]</text></svg>`
  );

export default function ProductHero({
  badge,
  title,
  description,
  primaryCta = { label: "Hẹn lịch Demo", href: "#contact" },
  secondaryCta = { label: "Xem Brochure", href: "#" },
  illustration,
  illustrationAlt = "Illustration",
  illustrationSlot,
  editableIllustrationId,
}: ProductHeroProps) {
  return (
    <section
      className="relative overflow-hidden text-white pt-28 pb-16 lg:pt-36 lg:pb-20 lg:min-h-[720px] flex items-center"
      style={{ backgroundColor: "#161A50" }}
    >
      {/* Shared Smartlog hero watermark (same SVG used on Blog/Projects/Events) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={shared.heroWatermark}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-90 animate-float-slow"
        />
      </div>

      {/* decorative gradient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-float-slow"
        style={{
          background:
            "radial-gradient(circle at 12% 18%, rgba(53,67,246,0.35) 0%, transparent 45%), radial-gradient(circle at 88% 78%, rgba(156,187,255,0.18) 0%, transparent 50%)",
        }}
      />

      <div className="relative w-full mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="max-w-2xl">
          {badge && (
            <span className="anim-fade-up inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-medium text-[#ECF3FF] mb-5">
              {badge}
            </span>
          )}
          <h1 className="anim-fade-up delay-100 text-3xl sm:text-4xl lg:text-[44px] xl:text-[49px] leading-[1.2] font-bold tracking-tight text-[#ECF3FF]">
            {title}
          </h1>
          <p className="anim-fade-up delay-200 mt-6 text-base sm:text-lg leading-relaxed text-[#ECF3FF]/90">
            {description}
          </p>
          <div className="anim-fade-up delay-300 mt-8 flex flex-wrap gap-3">
            <a
              href={primaryCta.href}
              className="cta-shimmer inline-flex items-center gap-2 rounded-xl bg-[#ECF3FF] hover:bg-white transition-all hover:-translate-y-0.5 px-6 py-3 text-base font-bold text-[#161A50] shadow-lg"
            >
              {primaryCta.label}
              <ArrowRightIcon size={18} />
            </a>
            <a
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-xl border border-[#ECF3FF]/60 hover:border-[#ECF3FF] hover:bg-white/10 transition-all hover:-translate-y-0.5 px-6 py-3 text-base font-bold text-[#ECF3FF]"
            >
              {secondaryCta.label}
              <ArrowRightIcon size={18} />
            </a>
          </div>
        </div>

        {/* Illustration side: custom slot > editable image > static image > placeholder */}
        {illustrationSlot ? (
          <div className="relative anim-scale-in delay-200">{illustrationSlot}</div>
        ) : editableIllustrationId ? (
          <div className="anim-scale-in delay-200 relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm flex items-center justify-center min-h-[320px] lg:min-h-[420px]">
            <Editable
              id={editableIllustrationId}
              kind="image"
              src={illustration ?? HERO_PLACEHOLDER}
              alt={illustrationAlt}
              className="w-full h-full flex items-center justify-center"
              imgClassName="w-full h-auto max-h-[420px] object-contain"
            />
          </div>
        ) : (
          <div className="anim-scale-in delay-200 relative aspect-[5/4] lg:aspect-auto lg:h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm flex items-center justify-center">
            {illustration ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={illustration}
                alt={illustrationAlt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center text-[#ECF3FF]/50 text-sm px-6">
                <div className="mx-auto w-16 h-16 rounded-2xl border border-dashed border-white/30 flex items-center justify-center mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                    <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>[Khung ảnh minh hoạ Hero]</div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
