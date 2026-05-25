import { stm } from "../../assets";
import Editable from "../../editor/Editable";

/**
 * STM hero illustration matching the Figma reference:
 * - Dashboard screenshot (web) as the main element, upright
 * - Phone mockup overlapping the bottom-right corner, upright
 * - Soft glow behind both to lift them off the navy background
 */
export default function StmHeroIllustration() {
  return (
    <div className="relative w-full">
      {/* soft glow halo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 55% 50%, rgba(120,150,255,0.30) 0%, transparent 70%)",
        }}
      />

      {/* Dashboard screenshot — leaves room on the right for the phone overlap */}
      <Editable
        id="stm.hero.illustration.web"
        kind="image"
        src={stm.hero.web}
        alt="STM dashboard"
        className="anim-fade-up delay-200 block w-[88%] rounded-xl overflow-hidden shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/10 animate-float-slow"
        imgClassName="w-full h-auto block"
      />

      {/* Phone mockup overlapping bottom-right of the dashboard */}
      <Editable
        id="stm.hero.illustration.phone"
        kind="image"
        src={stm.hero.phone}
        alt="STM mobile app"
        className="anim-fade-up delay-500 absolute right-0 bottom-0 translate-y-[12%] w-[26%] rounded-[22px] overflow-hidden shadow-[0_18px_44px_-8px_rgba(0,0,0,0.6)] ring-1 ring-white/10 animate-float"
        imgClassName="w-full h-auto block"
      />
    </div>
  );
}
