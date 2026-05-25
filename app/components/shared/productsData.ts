import { home } from "../../assets";

export type ProductCardData = {
  code: string;
  type: string;
  title: string;
  iconSrc: string;
  bullets: string[];
  /** Route for the "Khám phá" CTA. Falsy → disabled. */
  href?: string;
};

export const allProducts: ProductCardData[] = [
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
