import Image from "next/image";
import { shared } from "../assets";
import Editable from "../editor/Editable";
import Reveal from "./Reveal";

const moreStats = [
  { prefix: "HƠN", value: "24.000", label: "Phương tiện trên hệ thống" },
  { prefix: "HƠN", value: "50.000", label: "Người dùng trên hệ sinh thái" },
  { prefix: "HƠN", value: "1,4 triệu", label: "Đơn hàng được xử lý hàng tháng" },
  { prefix: "HƠN", value: "5 triệu m²", label: "Kho hàng được xử lý trên hệ sinh thái" },
];

const savings = [
  { prefix: "TỐI ƯU", value: "30-40%", label: "Hiệu suất vận hành" },
  {
    prefix: "TIẾT KIỆM",
    value: "50-70%",
    labelBold: "Thời gian tích hợp hệ thống",
    labelRest: " so với giải pháp thông thường",
  },
  { prefix: "TIẾT KIỆM", value: "10 - 15%", label: "Chi phí quản lý" },
  { prefix: "TIẾT KIỆM", value: "10 - 20%", label: "Chi phí logistics trung bình" },
];

export default function StatsHighlight() {
  return (
    <section className="bg-gradient-to-b from-white via-[#f4f6fd] to-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <Image
            src={shared.logo.default}
            alt="Smartlog"
            width={200}
            height={64}
            priority
            unoptimized
            style={{ width: "auto", height: "auto" }}
            className="h-8 sm:h-9 w-auto flex-shrink-0"
          />
          <Editable id="home.statsHighlight.quote" kind="text" as="p" className="text-sm sm:text-base lg:text-lg font-medium leading-snug text-[#0b1320] flex-1 block">
            "Sức mạnh công nghệ là chìa khóa kết nối liền mạch và tối ưu hóa toàn diện mọi điểm chạm Logistics,"
          </Editable>
        </div>

        <Reveal as="div" stagger className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {moreStats.map((s, i) => (
            <div
              key={s.label}
              className="card-lift rounded-2xl bg-white border border-gray-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.04)] p-5 text-center"
            >
              <Editable id={`home.statsHighlight.more.${i}.prefix`} kind="text" as="div" className="text-xs font-semibold text-[#242EAF] tracking-[0.2em]">
                {s.prefix}
              </Editable>
              <Editable id={`home.statsHighlight.more.${i}.value`} kind="text" as="div" className="mt-2 text-3xl lg:text-4xl font-bold text-[#242EAF]">
                {s.value}
              </Editable>
              <Editable id={`home.statsHighlight.more.${i}.label`} kind="text" as="div" className="mt-2 text-xs sm:text-sm text-gray-700 leading-snug">
                {s.label}
              </Editable>
            </div>
          ))}
        </Reveal>

        <Editable id="home.statsHighlight.subheading" kind="text" as="h2" className="mt-8 text-base sm:text-lg lg:text-xl font-bold text-[#0b1320] text-center block">
          Những số liệu thực tế bảo chứng cho hiệu quả vận hành ưu việt
        </Editable>

        <Reveal as="div" stagger className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {savings.map((s, i) => {
            const labelText =
              "labelBold" in s ? `${s.labelBold}${s.labelRest ?? ""}` : (s as { label: string }).label;
            return (
              <div
                key={s.value}
                className="card-lift rounded-2xl bg-white border border-gray-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.04)] p-5 text-center"
              >
                <Editable id={`home.statsHighlight.savings.${i}.prefix`} kind="text" as="div" className="text-xs font-semibold text-[#242EAF] tracking-[0.2em]">
                  {s.prefix}
                </Editable>
                <Editable id={`home.statsHighlight.savings.${i}.value`} kind="text" as="div" className="mt-1.5 text-2xl lg:text-3xl font-bold text-[#242EAF]">
                  {s.value}
                </Editable>
                <Editable id={`home.statsHighlight.savings.${i}.label`} kind="text" as="div" className="mt-2 text-xs text-gray-700 leading-snug">
                  {labelText}
                </Editable>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
