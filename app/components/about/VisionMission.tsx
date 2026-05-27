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
    <section className="relative overflow-hidden pt-20 pb-48 lg:pt-28 lg:pb-72 bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full"
        style={{
          width: "min(2120px, 165vw)",
          height: "min(2120px, 165vw)",
          top: "min(-880px, -68vw)",
          backgroundColor: "#ECF3FF",
          zIndex: 0,
        }}
      />
      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <svg
          aria-hidden
          viewBox="0 0 425 584"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[340px] lg:w-[425px] h-auto"
          style={{ opacity: 0.1 }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M375.609 153.79C372.249 155.216 368.519 152.7 368.519 149.093V54.269C368.519 25.9183 346.039 0 319.149 0H271.489C268.679 0 266.369 2.30664 266.369 5.11655V143.305C266.369 146.115 264.189 148.338 261.419 148.422C242.506 148.883 206.556 149.47 201.27 149.722C81.3393 155.51 2.81104 231.377 0 356.271V578.883C0 581.693 2.30664 584 5.11754 584H105.333C108.144 584 110.451 581.693 110.451 578.883V354.804C110.451 290.763 141.577 263.628 202.361 260.567L261.089 258.428C263.976 258.344 266.369 260.651 266.369 263.544V578.883C266.369 581.693 268.679 584 271.489 584H372.209C375.019 584 377.329 581.693 377.329 578.883V354.804C377.329 308.713 392.512 186.167 423.769 149.051C426.912 145.318 423.602 139.741 418.822 140.705C403.21 143.893 388.785 148.254 375.609 153.79Z"
            fill="#9CBBFF"
          />
        </svg>
        <div className="grid md:grid-cols-2 gap-12 md:gap-[95px] justify-items-center">
          {items.map((item, i) => (
            <Reveal
              key={item.key}
              variant={i === 0 ? "left" : "right"}
              className="relative w-full max-w-[554px] text-center flex flex-col items-center gap-6"
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
