import type { AccordionItem } from "../shared/FeatureAccordion";
import type { WhyCard } from "../shared/WhyDifferent";
import type { Stat } from "../shared/StatsBand";
import type { FaqItem } from "../shared/FAQ";

export const somFeatures: AccordionItem[] = [
  {
    title: "1. Tiếp nhận đơn hàng đa kênh",
    body: "SOM cho phép tiếp nhận và đồng bộ đơn hàng từ mọi kênh bán trong một nền tảng duy nhất.",
    bullets: [
      "Kết nối B2B, B2C, marketplace, POS, mobile app, ERP/DMS",
      "Chuẩn hóa dữ liệu đơn hàng và tự động kiểm tra thông tin",
      "Giảm lỗi nhập liệu, tăng tốc độ xử lý và đảm bảo tính nhất quán",
    ],
  },
  { title: "2. Định tuyến đơn hàng tự động" },
  { title: "3. Hiển thị tồn kho theo thời gian thực" },
  { title: "4. Quản lý linh động kế hoạch giá và khuyến mãi" },
  { title: "5. Công cụ phân bổ hàng thông minh" },
  { title: "6. Điều phối toàn trình đơn hàng" },
  { title: "7. Quản lý hoàn hàng và đổi trả" },
  { title: "8. Quản lý chứng từ và tổng hợp báo cáo tức thì" },
];

export const somChannels: AccordionItem[] = [
  {
    title: "Sàn TMĐT lớn",
    body: "Lazada, Shopee, Tiki, Sendo, TikTok Shop — đồng bộ đơn, tồn, giá theo thời gian thực.",
  },
  {
    title: "Social commerce & website",
    body: "Zalo, Shopify, WooCommerce, website bán hàng riêng — hợp nhất luồng đơn trên một dashboard.",
  },
  {
    title: "Hệ thống POS & ERP nội bộ",
  },
  {
    title: "Đối tác vận chuyển",
    body: "Tích hợp đa dạng các hãng vận chuyển, tự động đẩy đơn và cập nhật trạng thái giao hàng.",
  },
];

export const somWhyCards: WhyCard[] = [
  {
    title: "Triển khai, đồng hành đến khi vận hành hiệu quả",
    description:
      "Quy trình triển khai được chuẩn hóa, dễ tiếp cận, linh hoạt theo thực tế. Giúp doanh nghiệp sẵn sàng đưa hệ thống vào vận hành trong thời gian ngắn.",
  },
  {
    title: "Hỗ trợ kỹ thuật kịp thời, có kế hoạch",
    description:
      "Mỗi khách hàng đều có một nhóm hỗ trợ riêng, duy trì nhiều kênh email, ticket, điện thoại, onsite khi cần thiết, với thái độ cầu thị.",
  },
  {
    title: "Đào tạo thực tế dễ hiểu, dễ dùng, áp dụng ngay",
    description:
      "Tài liệu đầy đủ, ngôn ngữ gần gũi, đào tạo gắn sát vai trò người dùng, từ nhân viên xử lý đơn đến quản lý vận hành.",
  },
  {
    title: "Lắng nghe và cải tiến dựa trên phản hồi thực tế",
    description:
      "Xây dựng lộ trình phát triển sản phẩm dựa trên phản hồi trực tiếp từ khách hàng đang vận hành. Mỗi đề xuất đều được tiếp nhận, đánh giá và phản hồi minh bạch.",
  },
];

export const somStats: Stat[] = [
  {
    value: "10-15%",
    label: "Tiết kiệm",
    sublabel: "Chi phí lưu kho",
  },
  {
    value: "60%",
    label: "Tăng tốc",
    sublabel: "Thời gian xử lý đơn hàng",
  },
  {
    value: "95%",
    label: "Chỉ số đúng hẹn (OTD)",
    sublabel: "Giao hàng đúng cam kết với khách",
  },
];

export const somFaqs: FaqItem[] = [
  {
    q: "Doanh nghiệp chưa có đội CNTT mạnh, có triển khai được không?",
    a: "Có. SOM là nền tảng SaaS — Smartlog phụ trách tích hợp các sàn TMĐT và đào tạo đội vận hành.",
  },
  {
    q: "SOM hỗ trợ những sàn TMĐT nào?",
    a: "Shopee, Lazada, Tiki, Sendo, TikTok Shop, Shopify và nhiều marketplace khác. Có thể bổ sung kênh theo yêu cầu.",
  },
  {
    q: "SOM có quản lý đồng thời nhiều kho và nhiều thương hiệu không?",
    a: "Có. SOM hỗ trợ multi-warehouse, multi-brand, multi-channel trên một tài khoản duy nhất.",
  },
  {
    q: "Bao lâu thì có thể triển khai và sử dụng được?",
    a: "Trung bình 3–6 tuần cho doanh nghiệp đa kênh với ~5 kênh bán và 1–2 kho.",
  },
  {
    q: "SOM tính phí như thế nào?",
    a: "Tính theo gói SaaS hằng tháng dựa trên số đơn xử lý và số kênh kết nối.",
  },
  {
    q: "SOM có đảm bảo bảo mật dữ liệu khách hàng không?",
    a: "Toàn bộ dữ liệu mã hoá khi truyền & lưu trữ, có phân quyền chi tiết và audit log.",
  },
];
