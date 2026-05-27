import Editable from "../../editor/Editable";
import Reveal from "../Reveal";
import {
  ecosystemFeatures,
  ecosystemIntegrations,
  ecosystemStakeholders,
} from "./data";

export type EcosystemMapProps = {
  idPrefix?: string;
};

// Khung tham chiếu = Group 3223:5669 (1553 × 1416) trong Figma.
// Mọi toạ độ x/y/w/h dưới đây tính bằng px theo group này rồi quy đổi sang % để responsive.
const FRAME_W = 1553;
const FRAME_H = 1416;

// Pyramid background (3223:5673) — Vector tam giác #ECF3FF + d-mark, nằm ở (56, 0) trong group, kích thước 1440×1389.
const PYRAMID_OFFSET_X = 56;
const PYRAMID_OFFSET_Y = 0;
const PYRAMID_W = 1440;
const PYRAMID_H = 1389;

const ICONS: Record<string, string> = {
  sct: "/images/about/ecosystem/icon-sct.svg",
  cos: "/images/about/ecosystem/icon-cos.svg",
  stx: "/images/about/ecosystem/icon-stx.svg",
  drp: "/images/about/ecosystem/icon-drp.svg",
  dnops: "/images/about/ecosystem/icon-dnops.svg",
  stm: "/images/about/ecosystem/icon-stm.svg",
  som: "/images/about/ecosystem/icon-som.svg",
  swm: "/images/about/ecosystem/icon-swm.svg",
};

// Tier bands #DDE9FF — hình thang đậm hơn pyramid base, cắt ngang pyramid tạo 6 tầng.
type Band = { src: string; x: number; y: number; w: number; h: number };
const BANDS: Band[] = [
  { src: "band-L1.svg", x: 547.17, y: 152.11, w: 457.58, h: 147.62 },
  { src: "band-L2.svg", x: 458.59, y: 334.23, w: 634.51, h: 132.19 },
  { src: "band-L3.svg", x: 373.00, y: 495.00, w: 802.00, h: 124.73 },
  { src: "band-L4.svg", x: 278.79, y: 647.15, w: 997.21, h: 155.09 },
  { src: "band-L5.svg", x: 156.84, y: 837.72, w: 1241.16, h: 193.03 },
];

// "Shadow tabs" #9CBBFF ở 2 bên mỗi tier — tạo cảm giác 3D chồng tầng.
// Toạ độ tính theo group 1553×1416.
type Tab = { src: string; x: number; y: number; w: number; h: number };
const TABS: Tab[] = [
  // L1 (SCT) — nodes 3223:5777, 5778. Group "Group 3223:5765" ở (547.17, 152.11), tab con y offset = 147.62
  { src: "tab-L1-left.svg",  x: 547.17 + 0.35,   y: 152.11 + 147.62, w: 55.54, h: 33.71 },
  { src: "tab-L1-right.svg", x: 547.17 + 401.78, y: 152.11 + 147.62, w: 56.15, h: 34.28 },
  // L2 (features) — nodes 5787, 5788. Group "Group 3223:5779" ở (458.59, 334.23), tab y offset = 132.19
  { src: "tab-L2-left.svg",  x: 458.59,          y: 334.23 + 132.19, w: 47.93, h: 29.07 },
  { src: "tab-L2-right.svg", x: 458.59 + 586.58, y: 334.23 + 132.19, w: 47.93, h: 30.58 },
  // L3 (COS/STX) — nodes 5698, 5699. Group "Group 3223:5676" ở (372.81, 495), tab y offset 124.61 / 122.77
  { src: "tab-L3-left.svg",  x: 372.81,          y: 495 + 124.61,    w: 45.18, h: 28.39 },
  { src: "tab-L3-right.svg", x: 372.81 + 760.19, y: 495 + 122.77,    w: 41.81, h: 29.73 },
  // L4 (DRP/DNOPS) — nodes 5720, 5721. Group "Group 3223:5700" ở (278.55, 647.15), tab y offset 154.91 / 152.47
  { src: "tab-L4-left.svg",  x: 278.55,          y: 647.15 + 154.91, w: 53.45, h: 34.94 },
  { src: "tab-L4-right.svg", x: 278.55 + 939.95, y: 647.15 + 152.47, w: 57.26, h: 38.38 },
  // L5 (STM/SOM/SWM) — nodes 5759, 5760. Group "Group 3223:5722" ở (156.55, 837.72), tab y offset 192.81 / 189.77
  { src: "tab-L5-left.svg",  x: 156.55,           y: 837.72 + 192.81, w: 68.45, h: 43.97 },
  { src: "tab-L5-right.svg", x: 156.55 + 1168.95, y: 837.72 + 189.77, w: 72.2,  h: 47.51 },
  // L6 (integrations) — nodes 5763, 5764. Trong group, ở (0, 1306.51) và (1454, 1303.08)
  { src: "tab-L6-left.svg",  x: 0,    y: 1306.51, w: 94.5, h: 55.99 },
  { src: "tab-L6-right.svg", x: 1454, y: 1303.08, w: 99,   h: 61.92 },
];

/**
 * Hệ sinh thái công nghệ Smartlog — pyramid 6 tầng (clone 1:1 từ Figma node 3223:5669).
 *
 * Cấu trúc:
 *  - Background: pyramid-bg2.svg (#ECF3FF) + cloud-base.svg + 12 shadow tabs #9CBBFF tạo các tầng.
 *  - Overlay: text + module icons positioned bằng toạ độ px tuyệt đối từ Figma → % responsive.
 */
export default function EcosystemMap({ idPrefix = "about.ecosystem" }: EcosystemMapProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-[1553px] px-6">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <Editable
            id={`${idPrefix}.title`}
            kind="text"
            as="h2"
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#333342] leading-tight block"
          >
            Smartlog đang từng bước chinh phục khát vọng với hệ sinh thái công nghệ được hoàn thiện mỗi ngày
          </Editable>
          <Editable
            id={`${idPrefix}.description`}
            kind="text"
            as="p"
            className="mt-4 text-base text-[#25272C] leading-relaxed block"
          >
            Hệ sinh thái giải pháp công nghệ của Smartlog có khả năng tích hợp và mở rộng vượt
            trội, phù hợp cho cả doanh nghiệp lớn và SMEs.
          </Editable>
        </div>

        {/* Pyramid container — group 1553 × 1416 */}
        <Reveal as="div" variant="fade" once={false} className="relative">
          <div
            className="relative mx-auto w-full"
            style={{ aspectRatio: `${FRAME_W} / ${FRAME_H}` }}
          >
            {/* Pyramid SVG (#ECF3FF) — frame 1440×1389 offset (56, 0) trong group */}
            <Abs x={PYRAMID_OFFSET_X} y={PYRAMID_OFFSET_Y} w={PYRAMID_W} h={PYRAMID_H} zIndex={0}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about/ecosystem/pyramid-bg2.svg"
                alt=""
                aria-hidden="true"
                className="w-full h-full pointer-events-none select-none"
              />
            </Abs>

            {/* 5 Tier bands #DDE9FF — hình thang trong suốt nhẹ, tạo các "lát" tier */}
            {BANDS.map((b, i) => (
              <Abs key={b.src} x={b.x} y={b.y} w={b.w} h={b.h} zIndex={1}>
                <div className={`pyramid-tier pyramid-tier-${i + 1} w-full h-full`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/about/ecosystem/${b.src}`}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full pointer-events-none select-none"
                    style={{ opacity: 0.55 }}
                  />
                </div>
              </Abs>
            ))}

            {/* 12 Shadow tabs #9CBBFF — đồng bộ animation với tier band tương ứng */}
            {TABS.map((t) => {
              // Tab tên dạng "tab-L{n}-left.svg" → trích tier index
              const tier = parseInt(t.src.match(/tab-L(\d)/)?.[1] ?? "1", 10);
              return (
                <Abs key={t.src} x={t.x} y={t.y} w={t.w} h={t.h} zIndex={1}>
                  <div className={`pyramid-tier pyramid-tier-${tier} w-full h-full`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/about/ecosystem/${t.src}`}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full pointer-events-none select-none"
                    />
                  </div>
                </Abs>
              );
            })}

            {/* Cloud base wave (L6 tier) — ở (0.3, 1075) trong group, w=1552.7 h=231.77 */}
            <Abs x={0.3} y={1075} w={1552.7} h={231.77} zIndex={1}>
              <div className="pyramid-tier pyramid-tier-6 w-full h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/ecosystem/cloud-base.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full pointer-events-none select-none"
                  style={{ opacity: 0.55 }}
                />
              </div>
            </Abs>

            {/* L1 — SCT text + icon. Group 3223:5768 ở (547.17 + 87.83, 152.11 + 33.89) = (635, 186), w=281 h=80 */}
            <Abs x={547.17 + 87.83} y={152.11 + 33.89} w={281} h={80} zIndex={2}>
              <div className="flex items-center gap-3">
                <ModuleIcon icon="sct" />
                <ModuleText code="SCT" name="Smartlog Supply Chain Planning" />
              </div>
            </Abs>
            {/* L1 — caption "Trung tâm kiểm soát chuỗi cung ứng" — Figma layout_RY077W ở (0, 68) trong group 3223:5768 */}
            <Abs x={547.17 + 87.83} y={152.11 + 33.89 + 68} w={281} h={26} zIndex={2}>
              <Editable
                id={`${idPrefix}.sct.caption`}
                kind="text"
                as="p"
                className="text-[16px] leading-[1.6] font-bold text-black text-center block"
              >
                Trung tâm kiểm soát chuỗi cung ứng
              </Editable>
            </Abs>

            {/* L2 — Features. Frame 1823 ở (458.59 + 97.41, 334.23 + 46.77). Row gap 36 (layout_NFY6NB).
                Mỗi feature là text 2 dòng (hard break) — dùng pre để giữ \n và KHÔNG wrap. */}
            <Abs x={458.59 + 97.41} y={334.23 + 46.77} w={440} h={52} zIndex={2}>
              <div className="flex items-center" style={{ gap: 36, whiteSpace: "nowrap" }}>
                {ecosystemFeatures.map((f, i) => (
                  <div
                    key={i}
                    className="text-[16px] leading-[1.6] text-black"
                    style={{ whiteSpace: "pre" }}
                  >
                    <Editable
                      id={`${idPrefix}.features.${i}`}
                      kind="text"
                      as="span"
                    >
                      {breakFeature(f)}
                    </Editable>
                  </div>
                ))}
              </div>
            </Abs>

            {/* L3 — COS + STX. Group 3223:5676 ở (372.81, 495), width 802, Group 19330 nội dung ở (138, 36) w=525 trong group rộng 802 → COS ở x=138, STX ở x=138+301=439 */}
            <Abs x={372.81} y={495 + 36} w={802} h={52} zIndex={2}>
              <div className="relative w-full h-full">
                <div className="absolute flex items-center gap-3" style={{ left: `${(138 / 802) * 100}%` }}>
                  <ModuleIcon icon="cos" />
                  <ModuleText code="COS" name="Container Optimization Solutions" />
                </div>
                <div className="absolute flex items-center gap-3" style={{ left: `${((138 + 301) / 802) * 100}%` }}>
                  <ModuleIcon icon="stx" />
                  <ModuleText code="STX" name="Smartlog Transport Exchange" />
                </div>
              </div>
            </Abs>

            {/* L4 — pill + DRP + DNOPS. Group 3223:5703 (Group 19334) ở (278.79 + 116.21, 647.15 + 29.85) = (511.21, 677), w=763.87.
                Frame 67 (DRP) ở (0, 44); Frame 1824 (pill) ở (273.43, 0); Frame 68 (DNOPS) ở (522.43, 44). */}
            <Abs x={278.79 + 116.21} y={647.15 + 29.85} w={763.87} h={96} zIndex={2}>
              <div className="relative w-full h-full">
                {/* pill ở y=0 */}
                <div className="absolute" style={{ left: `${(273.43 / 763.87) * 100}%`, top: 0 }}>
                  <div
                    className="inline-flex items-center justify-center rounded-[12px] eco-pill-glow"
                    style={{
                      padding: "16px",
                      backgroundColor: "#ECF3FF",
                      border: "1px solid #3543F6",
                    }}
                  >
                    <span className="text-[16px] leading-[1.6] font-medium whitespace-nowrap" style={{ color: "#3543F6" }}>
                      Dịch vụ tư vấn Logistics
                    </span>
                  </div>
                </div>
                {/* DRP ở (0, 44) */}
                <div
                  className="absolute flex items-center gap-3"
                  style={{ left: 0, top: `${(44 / 96) * 100}%` }}
                >
                  <ModuleIcon icon="drp" />
                  <ModuleText code="DRP" name="Smartlog Supply Chain Planning" />
                </div>
                {/* DNOPS ở (522.43, 44) */}
                <div
                  className="absolute flex items-center gap-3"
                  style={{ left: `${(522.43 / 763.87) * 100}%`, top: `${(44 / 96) * 100}%` }}
                >
                  <ModuleIcon icon="dnops" />
                  <ModuleText code="DNOPS" name="Smartlog Supply Chain Planning" />
                </div>
              </div>
            </Abs>

            {/* L5 — STM + SOM + SWM. Group 3223:5722 (Frame 1825) ở (156.55 + 284.16, 837.72 + 70.28). Layout row gap 32. */}
            <Abs x={156.55 + 284.16} y={837.72 + 70.28} w={673} h={53} zIndex={2}>
              <div className="flex items-center" style={{ gap: 32 }}>
                <div className="flex items-center gap-3">
                  <ModuleIcon icon="stm" />
                  <ModuleText code="STM" name="Smartlog Transport Management" />
                </div>
                <div className="flex items-center gap-3">
                  <ModuleIcon icon="som" />
                  <ModuleText code="SOM" name="Smartlog Order Management" />
                </div>
                <div className="flex items-center gap-3">
                  <ModuleIcon icon="swm" />
                  <ModuleText code="SWM" name="Smartlog Warehouse Management" />
                </div>
              </div>
            </Abs>

            {/* L6 — integrations chips. Frame 1830 ở (332, 1148), 4 chip width 198 gap 32 */}
            <Abs x={332} y={1148} w={4 * 198 + 3 * 32} h={72} zIndex={2}>
              <div className="flex items-center" style={{ gap: 32 }}>
                {ecosystemIntegrations.map((tag, i) => (
                  <div
                    key={tag}
                    className="rounded-[12px] flex items-center justify-center eco-chip"
                    style={{
                      width: 198,
                      padding: "24px",
                      backgroundColor: "#ECF3FF",
                      border: "1px solid #3543F6",
                    }}
                  >
                    <span style={{ color: "#3543F6", letterSpacing: "0.05em" }}>
                      <Editable
                        id={`${idPrefix}.integrations.${i}`}
                        kind="text"
                        as="span"
                        className="text-[16px] font-bold leading-[1.6]"
                      >
                        {tag}
                      </Editable>
                    </span>
                  </div>
                ))}
              </div>
            </Abs>

            {/* Stakeholders. Frame 1831 ở (349, 1335), gap 113px */}
            <Abs x={349} y={1335} w={FRAME_W - 2 * 349} h={26} zIndex={2}>
              <div className="flex items-center" style={{ gap: 113 }}>
                {ecosystemStakeholders.map((s, i) => (
                  <span key={s} style={{ letterSpacing: "0.05em" }}>
                    <Editable
                      id={`${idPrefix}.stakeholders.${i}`}
                      kind="text"
                      as="span"
                      className="text-[16px] font-bold leading-[1.6] text-black"
                    >
                      {s}
                    </Editable>
                  </span>
                ))}
              </div>
            </Abs>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Đặt phần tử tại toạ độ Figma (theo group 1553×1416), quy đổi sang % responsive. */
function Abs({
  x,
  y,
  w,
  h,
  zIndex = 1,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  zIndex?: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="absolute"
      style={{
        left: `${(x / FRAME_W) * 100}%`,
        top: `${(y / FRAME_H) * 100}%`,
        width: `${(w / FRAME_W) * 100}%`,
        height: `${(h / FRAME_H) * 100}%`,
        zIndex,
      }}
    >
      {children}
    </div>
  );
}

function ModuleIcon({ icon }: { icon: keyof typeof ICONS }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={ICONS[icon]}
      alt=""
      aria-hidden="true"
      className="shrink-0 eco-module"
      style={{ height: "100%", width: "auto", maxHeight: 52 }}
    />
  );
}

function ModuleText({ code, name }: { code: string; name: string }) {
  return (
    <div className="leading-tight">
      <div className="text-[20px] font-bold leading-[1.6] text-black">{code}</div>
      <div className="text-[12px] leading-[1.6] text-[#333342]">{name}</div>
    </div>
  );
}

function breakFeature(s: string): string {
  const rules: Record<string, string> = {
    "Lập kế hoạch qua AI": "Lập kế hoạch\nqua AI",
    "Phân tích & báo cáo": "Phân tích\n& báo cáo",
    "Vận hành tự động": "Vận hành\ntự động",
    "Cập nhật realtime": "Cập nhật\nrealtime",
  };
  return rules[s] ?? s;
}
