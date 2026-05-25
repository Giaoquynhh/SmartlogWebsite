import { swm } from "../../assets";
import Editable from "../../editor/Editable";

/**
 * SWM hero illustration — Figma exact proportions (Group 19324):
 *  - Container 797 × 421
 *  - Dashboard (image 235): top 0, left 0, 688 × 421  → 86.3% × full height
 *  - Phone (image 236):     top 48, left 578, 219 × 373 → 27.5% wide, overlaps dashboard's right edge
 *  - Phone slides up from the dashboard's bottom-right corner so the two
 *    elements share the same baseline at the bottom.
 */
export default function SwmHeroIllustration() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "797 / 421" }}>
      {/* soft glow halo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 55% 50%, rgba(120,150,255,0.30) 0%, transparent 70%)",
        }}
      />

      {/* Dashboard — left, ~86% width, full height */}
      <Editable
        id="swm.hero.illustration.web"
        kind="image"
        src={swm.hero.web}
        alt="SWM dashboard"
        className="anim-fade-up delay-200 absolute top-0 left-0 w-[86.3%] rounded-xl overflow-hidden shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/10 animate-float-slow"
        imgClassName="w-full h-auto block"
      />

      {/* Phone — overlaps the dashboard's bottom-right corner */}
      <div
        className="absolute"
        style={{ top: "11.45%", left: "72.52%", width: "27.48%" }}
      >
        <Editable
          id="swm.hero.illustration.phone"
          kind="image"
          src={swm.hero.phone}
          alt="SWM mobile app"
          className="anim-fade-up delay-500 block rounded-[28px] overflow-hidden shadow-[0_18px_44px_-8px_rgba(0,0,0,0.6)] ring-1 ring-white/10 animate-float"
          imgClassName="w-full h-auto block"
        />
      </div>
    </div>
  );
}
