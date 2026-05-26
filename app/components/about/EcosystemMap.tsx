import Editable from "../../editor/Editable";
import Reveal from "../Reveal";
import {
  ecosystemFeatures,
  ecosystemIntegrations,
  ecosystemModules,
  ecosystemStakeholders,
} from "./data";

export type EcosystemMapProps = {
  idPrefix?: string;
};

/** Hệ sinh thái công nghệ Smartlog — module STM/SWM/SOM/STX/COS... xung quanh Digital Control Tower. */
export default function EcosystemMap({ idPrefix = "about.ecosystem" }: EcosystemMapProps) {
  return (
    <section className="py-16 lg:py-24 bg-[#F7F8F8]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
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

        {/* Module grid */}
        <Reveal as="div" stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-5">
          {ecosystemModules.map((m, i) => (
            <div
              key={m.code}
              className="rounded-xl bg-white border border-[#EDEEF1] p-5 lg:p-6 hover:shadow-[0_24px_48px_-20px_rgba(53,67,246,0.25)] hover:-translate-y-0.5 transition-all"
            >
              <div
                className="text-2xl font-bold mb-2"
                style={{
                  backgroundImage: "linear-gradient(127deg, #3543F6 0%, #242EAF 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                <Editable
                  id={`${idPrefix}.modules.${i}.code`}
                  kind="text"
                  as="span"
                >
                  {m.code}
                </Editable>
              </div>
              <Editable
                id={`${idPrefix}.modules.${i}.name`}
                kind="text"
                as="div"
                className="text-xs lg:text-sm text-[#25272C] leading-snug"
              >
                {m.name}
              </Editable>
            </div>
          ))}
        </Reveal>

        {/* Central pill */}
        <div className="flex justify-center mt-10">
          <div className="rounded-full bg-[#3543F6] text-white px-7 py-3 text-sm font-bold shadow-lg">
            Dịch vụ tư vấn Logistics &amp; Trung tâm kiểm soát chuỗi cung ứng
          </div>
        </div>

        {/* 3 chip groups */}
        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-bold text-[#333342] mb-3 uppercase tracking-wider">
              Năng lực cốt lõi
            </h3>
            <div className="flex flex-wrap gap-2">
              {ecosystemFeatures.map((f, i) => (
                <span
                  key={i}
                  className="rounded-xl bg-white border border-[#EDEEF1] px-4 py-2 text-sm text-[#25272C]"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#333342] mb-3 uppercase tracking-wider">
              Tích hợp linh hoạt
            </h3>
            <div className="flex flex-wrap gap-2">
              {ecosystemIntegrations.map((f, i) => (
                <span
                  key={i}
                  className="rounded-xl bg-white border border-[#3543F6] px-4 py-2 text-sm font-bold text-[#3543F6]"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#333342] mb-3 uppercase tracking-wider">
              Các bên trong chuỗi
            </h3>
            <div className="flex flex-wrap gap-2">
              {ecosystemStakeholders.map((f, i) => (
                <span
                  key={i}
                  className="rounded-xl bg-white border border-[#EDEEF1] px-4 py-2 text-sm text-[#25272C]"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
