import { stm } from "../../assets";
import Editable from "../../editor/Editable";

/**
 * STM hero illustration — Figma exact proportions (Group 19324 = 2776:7740):
 *  - Container 806 × 421
 *  - Dashboard (image 24): top 0, left 0, 718.2 × 412.54  → 89.1% × 98.0%
 *  - Phone (image 25):     top 39.47, left 613.55, 192.45 × 381.57
 *                          → 23.9% wide, 9.37% from top, 76.12% from left
 *  - Phone overlaps the dashboard's right edge (≈105px overlap in Figma).
 */
export default function StmHeroIllustration() {
  return (
    <div className="relative w-full" style={{ aspectRatio: "806 / 421" }}>
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
        id="stm.hero.illustration.web"
        kind="image"
        src={stm.hero.web}
        alt="STM dashboard"
        className="anim-fade-up delay-200 absolute top-0 left-0 w-[89.1%] rounded-xl overflow-hidden shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/10 animate-float-slow"
        imgClassName="w-full h-auto block"
      />

      {/* Phone — overlaps the dashboard's right edge */}
      <div
        className="absolute"
        style={{ top: "9.37%", left: "76.12%", width: "23.88%" }}
      >
        <Editable
          id="stm.hero.illustration.phone"
          kind="image"
          src={stm.hero.phone}
          alt="STM mobile app"
          className="anim-fade-up delay-500 block rounded-[28px] overflow-hidden shadow-[0_18px_44px_-8px_rgba(0,0,0,0.6)] ring-1 ring-white/10 animate-float"
          imgClassName="w-full h-auto block"
        />
      </div>
    </div>
  );
}
