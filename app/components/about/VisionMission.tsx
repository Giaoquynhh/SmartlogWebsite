import Editable from "../../editor/Editable";
import Reveal from "../Reveal";
import { aboutVisionMission } from "./data";

export type VisionMissionProps = {
  idPrefix?: string;
};

/**
 * Section "Tầm nhìn / Sứ mệnh" — clone từ Figma node 3223-2141 + Frame 1809.
 *
 * Đặc trưng:
 *  - Ellipse 2 (2120×1918, fill #ECF3FF) — hình tròn KHỔNG LỒ nền trắng-xanh nhạt
 *    đặt làm vầng sáng phía sau text. Trong Figma nó nằm absolute, đè cả phần
 *    hero phía trên, nhưng visible chỉ ở phần section trắng.
 *  - 2 cột, mỗi cột width 554px, gap 95px (Frame 1809 layout: row).
 *  - Label "- Tầm nhìn -" / "- Sứ mệnh -" Bold 24, màu #25272C.
 *  - Body quote Bold 39px line-height 160%, màu #3543F6, text-align center.
 */
export default function VisionMission({
  idPrefix = "about.visionMission",
}: VisionMissionProps) {
  const items = [
    { key: "vision", ...aboutVisionMission.vision },
    { key: "mission", ...aboutVisionMission.mission },
  ];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-white">
      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-[95px] justify-items-center">
          {items.map((item, i) => (
            <Reveal
              key={item.key}
              variant={i === 0 ? "left" : "right"}
              className="w-full max-w-[554px] text-center flex flex-col items-center gap-6"
            >
              <Editable
                id={`${idPrefix}.${item.key}.label`}
                kind="text"
                as="div"
                className="text-lg lg:text-xl font-bold text-[#25272C] leading-[1.6]"
              >
                {`- ${item.label} -`}
              </Editable>
              <Editable
                id={`${idPrefix}.${item.key}.text`}
                kind="text"
                as="p"
                className="text-2xl sm:text-3xl lg:text-[39px] font-bold leading-[1.6] text-[#3543F6] block"
              >
                {`“${item.text}”`}
              </Editable>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
