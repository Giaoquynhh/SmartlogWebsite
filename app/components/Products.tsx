import Link from "next/link";
import { home } from "../assets";
import Editable from "../editor/Editable";
import Reveal from "./Reveal";

type Product = {
  code: string;
  type: string;
  title: string;
  iconSrc: string;
  bullets: string[];
  /** Route for the "Xem thêm" CTA. Falsy → renders as disabled link. */
  href?: string;
};

const products: Product[] = [
  {
    code: "SOM",
    type: "SaaS",
    title: "Smartlog Order Management",
    iconSrc: home.products.icons.som,
    href: "/som",
    bullets: [
      "Quản lý đơn hàng đa kênh trên một nền tảng duy nhất",
      "Quản lý chi tiết vòng đời đơn hàng với độ chính xác lên đến 99%",
      "Đồng bộ thông tin từ E-com: Lazada, Shopee, Tiki, Sendo...",
      "Đến S-com: Tiktokshop, Zalo, Shopify, website bán hàng...",
    ],
  },
  {
    code: "STM",
    type: "SaaS",
    title: "Smartlog Transport Management",
    iconSrc: home.products.icons.stm,
    href: "/stm",
    bullets: [
      "Quản lý vận tải hiệu quả vượt trội với chuỗi công nghệ tiên phong",
      "Lập kế hoạch và điều phối vận tải nhanh chóng, linh hoạt, tiết kiệm tài nguyên",
      "Mọi dữ liệu được cập nhật theo thời gian thực, điều phối chủ động hơn",
      "Ứng dụng công nghệ giúp tự động hóa quy trình quản lý chính xác cao đến 99%",
    ],
  },
  {
    code: "SWM",
    type: "SaaS",
    title: "Smartlog Warehouse Management",
    iconSrc: home.products.icons.swm,
    href: "/swm",
    bullets: [
      "Quản lý toàn diện hoạt động kho hàng và trung tâm phân phối",
      "Vận hành theo dòng chảy hàng hóa, tiết kiệm tối đa tài nguyên cho nhập – chấm – xuất kho",
      "Tích hợp rộng rãi với các hệ thống ERP, DMS và thiết bị IOT",
      "Hỗ trợ tích cực trong lưu trữ và phân tích số liệu báo cáo",
    ],
  },
  {
    code: "STX",
    type: "LaaS",
    title: "Smartlog Transport Exchange",
    iconSrc: home.products.icons.stx,
    bullets: [
      "Nền tảng kết nối chủ hàng và nhà vận tải nhanh chóng, bảo mật qua trên mục tiêu tối ưu chi phí, giảm phát thải CO₂",
      "Có thể kết nối với hơn 10.000 nhà vận tải uy tín cao, giá cước tốt trên STX",
      "Tiếp cận hàng nghìn đơn hàng mỗi ngày, vận chuyển liên tục, không lo xe chạy rỗng",
      "Quy trình thanh toán tiện lợi, nhanh chóng, minh bạch",
    ],
  },
  {
    code: "COS",
    type: "LaaS",
    title: "Container Optimization Solutions",
    iconSrc: home.products.icons.cos,
    bullets: [
      "Nền tảng đầu tiên tại Việt Nam tối ưu container rỗng",
      "Kết nối nhanh chóng 3PL, chủ hàng và hãng tàu để tái sử dụng container hiệu quả",
      "Tự động kết nối nhà nhập khẩu và xuất khẩu, đơn giản hóa quá trình tái sử dụng container",
      "Linh hoạt thay đổi vị trí nhận và trả container, tiết kiệm chi phí vận hành",
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Editable id="home.products.title" kind="text" as="h2" className="anim-fade-up text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0b1320] text-center leading-tight block">
          Khám phá 5 sản phẩm công nghệ cốt lõi của Smartlog
        </Editable>

        <div className="mt-6 flex flex-col items-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-full bg-[#1e3a8a] hover:bg-[#1e40af] transition-colors px-6 py-2.5 text-white text-sm font-semibold">
            <Editable id="home.products.moreLabel" kind="text" as="span">
              và hơn thế nữa...
            </Editable>
          </button>

          <div className="flex items-center gap-3">
            <button
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 transition-colors flex items-center justify-center text-lg"
            >
              ←
            </button>
            <button
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 transition-colors flex items-center justify-center text-lg"
            >
              →
            </button>
          </div>
        </div>

        <Reveal as="div" stagger className="mt-10 flex flex-wrap justify-center gap-5">
          {products.map((p, idx) => {
            const pid = `home.products.cards.${p.code.toLowerCase()}`;
            return (
              <article
                key={p.code}
                className="card-lift bg-white rounded-3xl p-6 lg:p-7 border border-gray-100 shadow-[0_4px_24px_rgba(15,23,42,0.06)] flex flex-col hover:border-[#1e3a8a]/30 w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.833rem)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <Editable
                    id={`${pid}.icon`}
                    kind="image"
                    src={p.iconSrc}
                    alt={p.code}
                    className="flex-shrink-0"
                    imgClassName="w-16 h-16 lg:w-[72px] lg:h-[72px]"
                  />
                  <div className="flex gap-2 pt-1">
                    <span className="px-3 py-1 rounded-full text-xs font-bold border border-[#1e3a8a] text-[#1e3a8a]">
                      <Editable id={`${pid}.code`} kind="text" as="span">
                        {p.code}
                      </Editable>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold border border-[#1e3a8a] text-[#1e3a8a]">
                      <Editable id={`${pid}.type`} kind="text" as="span">
                        {p.type}
                      </Editable>
                    </span>
                  </div>
                </div>

                <Editable id={`${pid}.title`} kind="text" as="h3" className="mt-5 text-lg lg:text-xl font-bold text-[#0b1320] leading-snug block">
                  {p.title}
                </Editable>

                <ul className="mt-3 space-y-2 flex-1">
                  {p.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[13px] text-gray-700 leading-relaxed"
                    >
                      <span className="text-[#1e3a8a] mt-1 flex-shrink-0">•</span>
                      <Editable id={`${pid}.bullets.${i}`} kind="text" as="span">
                        {b}
                      </Editable>
                    </li>
                  ))}
                </ul>

                {p.href ? (
                  <Link
                    href={p.href}
                    className="mt-5 self-start inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#1e3a8a] text-[#1e3a8a] text-sm font-semibold hover:bg-[#1e3a8a] hover:text-white transition-colors"
                  >
                    <Editable id={`${pid}.cta`} kind="text" as="span">
                      Xem thêm
                    </Editable>
                    <span aria-hidden>→</span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="mt-5 self-start inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#1e3a8a] text-[#1e3a8a] text-sm font-semibold hover:bg-[#1e3a8a] hover:text-white transition-colors opacity-60 cursor-not-allowed"
                    aria-disabled="true"
                    title="Trang chi tiết đang được cập nhật"
                  >
                    <Editable id={`${pid}.cta`} kind="text" as="span">
                      Xem thêm
                    </Editable>
                    <span aria-hidden>→</span>
                  </button>
                )}
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
