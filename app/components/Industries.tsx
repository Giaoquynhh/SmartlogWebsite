"use client";

import { useRef, useState } from "react";
import {
  Factory,
  Pill,
  HardHat,
  UtensilsCrossed,
  GraduationCap,
  HeartPulse,
} from "lucide-react";
import { home } from "../assets";
import Editable from "../editor/Editable";

type Industry = {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  imageGradient: string;
  image?: string;
  bullets: string[];
};

const industries: Industry[] = [
  {
    id: "san-xuat",
    name: "Sản xuất",
    icon: Factory,
    imageGradient: "from-amber-400 via-orange-500 to-red-600",
    image: home.industries["san-xuat"],
    bullets: [
      "Tối ưu chuỗi cung ứng nhà máy: triển khai WMS/TMS đồng bộ giúp giảm 30% thời gian xử lý đơn hàng nội bộ.",
      "Tự động hoá điều phối vận chuyển: realtime tracking và phân bổ xe thông minh đảm bảo cam kết giao hàng đúng giờ.",
      "Tích hợp ERP và DMS: đồng bộ dữ liệu từ nhà máy đến điểm bán, minh bạch tồn kho và đơn hàng.",
      "Báo cáo & phân tích thông minh: dashboard điều hành tổng thể giúp lãnh đạo ra quyết định chính xác và nhanh chóng.",
    ],
  },
  {
    id: "duoc-pham",
    name: "Dược phẩm",
    icon: Pill,
    imageGradient: "from-sky-400 via-cyan-500 to-blue-600",
    bullets: [
      "Quản lý chuỗi lạnh GSP/GDP, đảm bảo nhiệt độ và độ ẩm chuẩn dược phẩm.",
      "Truy xuất nguồn gốc batch/lot toàn diện, đáp ứng yêu cầu pháp lý.",
      "Tích hợp với hệ thống nhà phân phối, nhà thuốc và bệnh viện.",
      "Cảnh báo hạn dùng, FEFO và quản lý hàng hư hỏng tự động.",
    ],
  },
  {
    id: "xay-dung",
    name: "Xây dựng",
    icon: HardHat,
    imageGradient: "from-yellow-500 via-orange-600 to-stone-700",
    bullets: [
      "Quản lý vật liệu công trình từ kho trung tâm đến từng dự án.",
      "Điều phối xe ben, xe cẩu, xe trộn realtime theo tiến độ thi công.",
      "Kiểm soát nhập-xuất tồn theo từng hạng mục công trình.",
      "Báo cáo chi phí logistics theo dự án, hỗ trợ định giá thầu.",
    ],
  },
  {
    id: "fnb",
    name: "F&B",
    icon: UtensilsCrossed,
    imageGradient: "from-rose-400 via-pink-500 to-red-600",
    bullets: [
      "Quản lý chuỗi lạnh thực phẩm, kiểm soát nhiệt độ toàn tuyến.",
      "Tối ưu giao hàng cho chuỗi nhà hàng, siêu thị, cửa hàng tiện lợi.",
      "Quản lý hạn dùng, FIFO/FEFO chặt chẽ.",
      "Tích hợp POS, đồng bộ tồn kho realtime với điểm bán.",
    ],
  },
  {
    id: "giao-duc",
    name: "Giáo dục",
    icon: GraduationCap,
    imageGradient: "from-violet-400 via-indigo-500 to-blue-700",
    bullets: [
      "Logistics sách giáo khoa, dụng cụ học tập đầu năm học.",
      "Phân phối tài liệu, thiết bị thí nghiệm đến trường học, trung tâm.",
      "Quản lý kho ấn phẩm, giáo trình theo cấp học và môn học.",
      "Báo cáo theo dõi đơn hàng từ NXB đến tay học sinh.",
    ],
  },
  {
    id: "y-te",
    name: "Y tế",
    icon: HeartPulse,
    imageGradient: "from-emerald-400 via-teal-500 to-cyan-600",
    bullets: [
      "Vận chuyển thiết bị y tế, vật tư tiêu hao đến bệnh viện, phòng khám.",
      "Chuỗi lạnh vaccine, mẫu xét nghiệm với theo dõi nhiệt độ realtime.",
      "Quản lý hàng nhạy cảm: thuốc, mẫu sinh học, thiết bị đặc biệt.",
      "Tuân thủ quy trình GSP, GDP và yêu cầu Bộ Y tế.",
    ],
  },
];

type Brand = { name: string; logo?: string };

// 3 logo nhỏ hiển thị cạnh panel bullet (trên trang Figma)
const featuredBrands: Brand[] = [
  { name: "BRENNTAG", logo: home.partners.brenntag },
  { name: "HÄFELE", logo: home.partners.hafele },
  { name: "PERFETTI", logo: home.partners.perfetti },
];

// Carousel logo to bên dưới
const brands: Brand[] = [
  { name: "THIÊN LONG" },
  { name: "HÄFELE", logo: home.partners.hafele },
  { name: "MAINETTI" },
  { name: "CENTRAL RETAIL" },
  { name: "One Mount" },
  { name: "THIÊN LONG" },
  { name: "HÄFELE", logo: home.partners.hafele },
  { name: "MAINETTI" },
];

export default function Industries() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const active = industries.find((i) => i.id === activeId)!;
  const Icon = active.icon;
  const brandsRef = useRef<HTMLDivElement>(null);

  const scrollBrands = (direction: "left" | "right") => {
    const el = brandsRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Editable id="home.industries.title" kind="text" as="h2" className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#1e3a8a] text-center leading-tight max-w-4xl mx-auto block">
          Smartlog đáp ứng ưu việt đa quy mô, đa ngành hàng
        </Editable>
        <Editable id="home.industries.subtitle" kind="text" as="p" className="mt-3 text-lg text-gray-600 text-center block">
          Với thế mạnh linh hoạt và kết nối đa tầng
        </Editable>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.map((ind) => {
            const TabIcon = ind.icon;
            const isActive = ind.id === activeId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveId(ind.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-semibold border transition-all ${
                  isActive
                    ? "bg-[#1e3a8a] border-[#1e3a8a] text-white shadow-md shadow-[#1e3a8a]/30"
                    : "bg-white border-gray-200 text-[#0b1320] hover:border-[#1e3a8a] hover:text-[#1e3a8a]"
                }`}
              >
                <TabIcon className="w-5 h-5" />
                <Editable id={`home.industries.tabs.${ind.id}`} kind="text" as="span">
                  {ind.name}
                </Editable>
              </button>
            );
          })}
        </div>

        <h3 className="mt-10 text-xl lg:text-2xl font-bold text-[#1e3a8a]">
          Ngành{" "}
          <Editable id={`home.industries.activeLabel.${active.id}`} kind="text" as="span">
            {active.name}
          </Editable>
        </h3>

        <div className="mt-5 grid lg:grid-cols-[minmax(0,420px)_1fr] gap-6 lg:gap-8 items-stretch">
          <div
            className={`aspect-[4/3] lg:aspect-auto rounded-3xl relative overflow-hidden shadow-lg ${
              active.image ? "" : `bg-gradient-to-br ${active.imageGradient}`
            }`}
          >
            {active.image ? (
              <Editable
                id={`home.industries.${active.id}.image`}
                kind="image"
                src={active.image}
                alt={active.name}
                className="absolute inset-0 w-full h-full"
                imgClassName="w-full h-full object-cover"
              />
            ) : (
              <Icon className="absolute inset-0 m-auto w-32 h-32 text-white/25" />
            )}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="text-[11px] uppercase tracking-widest opacity-90">
                Ngành hàng
              </div>
              <div className="mt-0.5 text-xl font-bold drop-shadow">
                {active.name}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl bg-[#e8efff] p-6 lg:p-8 flex-1">
              <ul className="space-y-4">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="flex-shrink-0 mt-1.5 w-3 h-3 rotate-45 bg-[#1e3a8a]" />
                    <Editable id={`home.industries.${active.id}.bullets.${i}`} kind="text" as="p" className="text-sm text-gray-700 leading-relaxed block">
                      {b}
                    </Editable>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="grid grid-cols-3 gap-3">
                {featuredBrands.map((brand) => (
                  <div
                    key={brand.name}
                    className="h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center px-3"
                  >
                    {brand.logo ? (
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-8 max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-xs font-bold text-gray-600 text-center leading-tight">
                        {brand.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <button
                aria-label="Next featured"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-md text-gray-600 hover:text-[#1e3a8a] hover:border-[#1e3a8a] flex items-center justify-center transition-colors z-10 text-sm"
              >
                →
              </button>
            </div>

            <div className="mt-2">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#1e3a8a] hover:bg-[#1e40af] transition-colors px-6 py-2.5 text-white text-sm font-semibold">
                <Editable id="home.industries.cta" kind="text" as="span">
                  Khám phá
                </Editable>
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 relative">
          <div
            ref={brandsRef}
            className="flex gap-3 overflow-x-auto scroll-smooth snap-x pb-1 pr-12 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
          >
            {brands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="snap-start flex-shrink-0 w-[calc((100%-3rem)/4)] sm:w-[calc((100%-4.5rem)/5)] lg:w-[calc((100%-4.5rem)/6)] h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center px-3 grayscale opacity-75 hover:opacity-100 hover:grayscale-0 transition-all"
              >
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-10 max-w-full object-contain"
                  />
                ) : (
                  <span className="text-xs font-bold text-gray-600 text-center leading-tight">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollBrands("left")}
            aria-label="Previous logos"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md text-gray-600 hover:text-[#1e3a8a] hover:border-[#1e3a8a] items-center justify-center transition-colors z-10"
          >
            ←
          </button>
          <button
            onClick={() => scrollBrands("right")}
            aria-label="Next logos"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md text-gray-600 hover:text-[#1e3a8a] hover:border-[#1e3a8a] flex items-center justify-center transition-colors z-10"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
