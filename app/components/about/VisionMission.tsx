import Editable from "../../editor/Editable";
import Reveal from "../Reveal";
import { aboutVisionMission } from "./data";

export type VisionMissionProps = {
  idPrefix?: string;
};

/** Section 2 cột "Tầm nhìn" / "Sứ mệnh" — text trích dẫn lớn màu brand blue. */
export default function VisionMission({
  idPrefix = "about.visionMission",
}: VisionMissionProps) {
  const items = [
    { key: "vision", ...aboutVisionMission.vision },
    { key: "mission", ...aboutVisionMission.mission },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 lg:gap-16">
        {items.map((item, i) => (
          <Reveal
            key={item.key}
            variant={i === 0 ? "left" : "right"}
            className="text-center"
          >
            <Editable
              id={`${idPrefix}.${item.key}.label`}
              kind="text"
              as="div"
              className="text-base lg:text-lg font-bold text-[#25272C] mb-5 tracking-wide"
            >
              {`- ${item.label} -`}
            </Editable>
            <Editable
              id={`${idPrefix}.${item.key}.text`}
              kind="text"
              as="p"
              className="text-xl sm:text-2xl lg:text-[28px] font-bold leading-[1.5] text-[#3543F6] block"
            >
              {`“${item.text}”`}
            </Editable>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
