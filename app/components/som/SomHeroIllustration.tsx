import { som } from "../../assets";
import Editable from "../../editor/Editable";

/**
 * SOM hero illustration — Figma exact proportions (Group 19324 = 2793:7048):
 *  - Container 797 × 421
 *  - Dashboard (image 237): top 0, left 0, 733 × 421       → 92.0% × full height
 *  - Phone (image 236):     top 48.23, left 578, 219 × 373
 *                           → 27.5% wide, 11.45% from top, 72.52% from left
 *  - Phone overlaps the dashboard's right edge (≈155px overlap in Figma).
 */
export default function SomHeroIllustration() {
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

      {/* Dashboard — left side */}
      <Editable
        id="som.hero.illustration.web"
        kind="image"
        src={som.hero.web}
        alt="SOM dashboard"
        className="anim-fade-up delay-200 absolute top-0 left-0 w-[91.97%] rounded-xl overflow-hidden shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/10 animate-float-slow"
        imgClassName="w-full h-auto block"
      />

      {/* Phone — overlaps the dashboard's right edge */}
      <div
        className="absolute"
        style={{ top: "11.45%", left: "72.52%", width: "27.48%" }}
      >
        <Editable
          id="som.hero.illustration.phone"
          kind="image"
          src={som.hero.phone}
          alt="SOM mobile app"
          className="anim-fade-up delay-500 block rounded-[28px] overflow-hidden shadow-[0_18px_44px_-8px_rgba(0,0,0,0.6)] ring-1 ring-white/10 animate-float"
          imgClassName="w-full h-auto block"
        />
      </div>
    </div>
  );
}
