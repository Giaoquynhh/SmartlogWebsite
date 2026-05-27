import Editable from "../../editor/Editable";
import { aboutHeroStats } from "./data";

export type AboutHeroProps = {
  idPrefix?: string;
};

/**
 * Hero "VỀ SMARTLOG" — clone 1:1 từ Figma node 3223-2132.
 *
 * Layout gốc: 1920×1080 navy `#161A50` với dot pattern SVG ở góc trên,
 * left content (heading + paragraph + CTA + 4 stats 2x2),
 * right image grid (5 thẻ ảnh có shadow + radius 24px) ở tọa độ tuyệt đối.
 *
 * Để clone đúng, container giữ tỉ lệ 1920/1080 và mọi phần tử positioned tuyệt đối
 * theo % so với container. Khi viewport nhỏ hơn 1920px, container scale-xuống
 * đồng đều — giữ nguyên tỉ lệ và vị trí.
 */

const FIGMA_W = 1920;
const FIGMA_H = 1080;

// Tọa độ ảnh trong Figma (gốc trên-trái của Frame 56).
const heroImages = [
  { src: "/images/about/hero/hero-frame-111.png", x: 1006, y: 291, w: 424, h: 276, alt: "Smartlog event" },
  { src: "/images/about/hero/hero-frame-112.png", x: 1460, y: 402, w: 260, h: 172, alt: "Smartlog top 10" },
  { src: "/images/about/hero/hero-frame-115.png", x: 1336, y: 611, w: 383, h: 290, alt: "Smartlog events" },
  { src: "/images/about/hero/hero-frame-114.png", x: 1006, y: 614, w: 280, h: 159, alt: "Smartlog seminar" },
  { src: "/images/about/hero/hero-frame-110.png", x: 1005, y: 805, w: 273, h: 172, alt: "Smartlog gathering" },
];

function pct(v: number, base: number) {
  return `${(v / base) * 100}%`;
}

export default function AboutHero({ idPrefix = "about.hero" }: AboutHeroProps) {
  return (
    <section
      aria-label="Về Smartlog"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#161A50" }}
    >
      {/* Container giữ tỉ lệ 1920/1080 — mọi phần tử bên trong dùng absolute % */}
      <div
        className="relative w-full mx-auto"
        style={{
          aspectRatio: `${FIGMA_W} / ${FIGMA_H}`,
          maxWidth: `${FIGMA_W}px`,
        }}
      >
        {/* Background decorative layers — đúng theo Figma:
            - Group 9 (đốm nhỏ rải, 305×538, x=374 y=270)
            - Group 10 (đốm rộng nền, 951×633, x=0 y=492)
            - Group 3 (chữ "f" watermark + dot pattern, 1920×585, top y=0) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 select-none"
        >
          {/* Group 10: đốm circuit-board rộng phía trái-dưới (sau cụm stats) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about/hero/hero-decor-group-10.svg"
            alt=""
            className="absolute opacity-70"
            style={{
              left: pct(0, FIGMA_W),
              top: pct(492, FIGMA_H),
              width: pct(951, FIGMA_W),
              height: pct(633, FIGMA_H),
            }}
          />
          {/* Group 9: đốm nhỏ rải bên trái-giữa hero */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about/hero/hero-decor-group-9.svg"
            alt=""
            className="absolute opacity-80"
            style={{
              left: pct(374, FIGMA_W),
              top: pct(270, FIGMA_H),
              width: pct(305, FIGMA_W),
              height: pct(538, FIGMA_H),
            }}
          />
          {/* Group 3: chữ "f" watermark + nửa dot pattern phía trên */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/about/hero/hero-dot-pattern.svg"
            alt=""
            className="absolute left-0 w-full h-auto opacity-80"
            style={{ top: pct(180, FIGMA_H) }}
          />
          {/* Gradient phủ nhẹ để text bên trái dễ đọc */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(22,26,80,0) 4%, rgba(22,26,80,0.5) 94%)",
            }}
          />
        </div>

        {/* === LEFT CONTENT BLOCK === (Frame 5 — x=95 y=171, gap=24) */}
        <div
          className="absolute"
          style={{
            left: pct(95, FIGMA_W),
            top: pct(240, FIGMA_H),
            width: pct(616, FIGMA_W),
          }}
        >
          <Editable
            id={`${idPrefix}.title`}
            kind="text"
            as="h1"
            className="font-bold tracking-tight text-[#ECF3FF] block leading-[1.2]"
            // Heading/Type@50 — clamp để khi viewport nhỏ vẫn đọc được
          >
            VỀ SMARTLOG
          </Editable>
          <Editable
            id={`${idPrefix}.description`}
            kind="text"
            as="p"
            className="mt-6 text-[#ECF3FF] block leading-[1.3]"
          >
            Chúng tôi cung cấp hệ sinh thái giải pháp công nghệ Logistics toàn diện dẫn đầu Việt Nam và mở rộng toàn cầu
          </Editable>

          {/* CTA */}
          <div className="mt-7">
            <a
              href="#journey"
              className="cta-shimmer inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[#ECF3FF] font-medium transition-all hover:-translate-y-0.5"
              style={{
                background: "#3543F6",
                boxShadow:
                  "inset 0 -4px 11px rgba(255,255,255,0.25), 0 8px 24px rgba(53,67,246,0.35)",
                border: "1px solid transparent",
                backgroundImage:
                  "linear-gradient(#3543F6, #3543F6), linear-gradient(180deg, #ECF3FF 0%, #3B83FF 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              <span>Tìm hiểu thêm</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M5 12h14m0 0l-6-6m6 6l-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* 4 stat blocks 2x2 — Figma gap 8, padding inner */}
          <div className="mt-9 grid grid-cols-2 gap-2 sm:gap-3 max-w-[480px]">
            {aboutHeroStats.map((s, i) => (
              <div
                key={i}
                className="relative rounded-2xl px-5 py-5 lg:px-7 lg:py-6 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(53,67,246,0.35) 0%, rgba(22,26,80,0.25) 100%)",
                  border: "1px solid rgba(149,170,255,0.45)",
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 24px rgba(10,12,40,0.35)",
                }}
              >
                <div
                  className="gradient-pan text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-none tracking-tight whitespace-nowrap"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #ECF3FF 0%, #9CBBFF 30%, #ECF3FF 60%, #9CBBFF 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  <Editable id={`${idPrefix}.stats.${i}.value`} kind="text" as="span">
                    {s.value}
                  </Editable>
                </div>
                <Editable
                  id={`${idPrefix}.stats.${i}.label`}
                  kind="text"
                  as="div"
                  className="mt-3 text-sm sm:text-base lg:text-[17px] text-[#ECF3FF]/95 font-medium"
                >
                  {s.label}
                </Editable>
              </div>
            ))}
          </div>
        </div>

        {/* === RIGHT IMAGE GRID === absolute positioned 5 images */}
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="absolute rounded-3xl overflow-hidden"
            style={{
              left: pct(img.x, FIGMA_W),
              top: pct(img.y, FIGMA_H),
              width: pct(img.w, FIGMA_W),
              height: pct(img.h, FIGMA_H),
              backgroundColor: "#ECF3FF",
              boxShadow:
                "0 2px 4px rgba(81,79,99,0.04), 0 56px 112px -20px rgba(81,79,99,0.4)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        ))}
      </div>

      {/* Style overrides để heading + paragraph scale theo viewport */}
      <style>{`
        section[aria-label="Về Smartlog"] h1 {
          font-size: clamp(32px, 2.6vw, 50px);
        }
        section[aria-label="Về Smartlog"] p {
          font-size: clamp(14px, 1.25vw, 24px);
        }
      `}</style>
    </section>
  );
}
