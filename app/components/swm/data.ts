import type { AccordionItem } from "../shared/FeatureAccordion";
import type { WhyCard } from "../shared/WhyDifferent";
import type { Stat } from "../shared/StatsBand";
import type { FaqItem } from "../shared/FAQ";

export const swmFeatures: AccordionItem[] = [
  {
    title: "1. Nhận & Tạo Đơn Hàng",
    body: "Chuẩn hóa đầu vào từ nhiều nguồn, giúp hệ thống nhận biết chính xác và xử lý nhanh chóng các nghiệp vụ kho.",
    bullets: [
      "Tạo đơn nhanh bằng tay, Excel, hoặc tích hợp API/EDI với ERP",
      "Hỗ trợ PO/ASN, tự động kế thừa đơn xuất, đơn nhập",
      "Gom đơn nhỏ thành đơn tổng, linh hoạt cho inbound theo xe, nhà cung cấp, hoá đơn",
    ],
  },
  { title: "2. Nhập Hàng & Ghi Nhận Thực Tế" },
  { title: "3. Cất Hàng Thông Minh" },
  { title: "4. Xuất Hàng Chính Xác & Linh Hoạt" },
  { title: "5. Kiểm Kê & Quản Lý Tồn Kho Real-time" },
  { title: "6. Báo Cáo & Dashboard Trực Quan" },
  { title: "7. Tính Bill Tự Động – Chính Xác – Linh Hoạt" },
  { title: "8. Mobile App Dành Cho Nhân Viên Kho" },
];

export const swmIntegration: AccordionItem[] = [
  {
    title: "Kết nối linh hoạt với hệ thống ERP, kế toán, bán hàng",
    body: "Đồng bộ master data và giao dịch giữa kho và các phân hệ ERP/kế toán, không cần thao tác thủ công.",
  },
  {
    title: "Tương thích với hệ thống TMS, OMS và nền tảng vận hành khác",
  },
  {
    title: "Sẵn sàng kết nối thiết bị ngoại vi",
    body: "Hỗ trợ handheld, máy in mã vạch, cân điện tử, RFID gateway, IoT sensors.",
  },
  {
    title: "Hỗ trợ đa dạng chuẩn kết nối & định dạng dữ liệu",
  },
];

export const swmWhyCards: WhyCard[] = [
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
      "Tài liệu đầy đủ, ngôn ngữ gần gũi, đào tạo gắn sát vai trò người dùng, từ thủ kho đến nhân viên soạn hàng.",
  },
  {
    title: "Lắng nghe và cải tiến dựa trên phản hồi thực tế",
    description:
      "Xây dựng lộ trình phát triển sản phẩm dựa trên phản hồi trực tiếp từ khách hàng đang vận hành.",
  },
];

export const swmStats: Stat[] = [
  {
    value: "99,99%",
    label: "Chính xác tồn kho",
    sublabel: "Khi thực hiện quét mã vạch",
  },
  {
    value: "60%",
    label: "Tiết kiệm",
    sublabel: "Thời gian nhập, xuất, châm hàng",
  },
  {
    value: "10-15%",
    label: "Tối ưu",
    sublabel: "Chi phí vận hành kho",
  },
];

export const swmFaqs: FaqItem[] = [
  {
    q: "Doanh nghiệp chưa có đội CNTT mạnh, có triển khai được không?",
    a: "Có. SWM là nền tảng SaaS, đội ngũ Smartlog phụ trách triển khai – cấu hình – đào tạo. Doanh nghiệp chỉ cần phân công người dùng nghiệp vụ tham gia.",
  },
  {
    q: "SWM có thể hỗ trợ quản lý nhiều chủ hàng trong cùng 1 kho không?",
    a: "Có. SWM hỗ trợ mô hình 3PL multi-client: phân quyền theo chủ hàng, báo cáo riêng và tính phí dịch vụ độc lập.",
  },
  {
    q: "SWM có thể quản lý đồng thời kho ký gửi và kho GTGT không?",
    a: "Có. Hệ thống phân loại theo loại hình kho và mô hình tính phí khác nhau, dùng chung một cơ sở dữ liệu.",
  },
  {
    q: "Bao lâu thì có thể triển khai và sử dụng được?",
    a: "Tuỳ quy mô, thường 6–10 tuần cho một kho mới với độ phức tạp trung bình.",
  },
  {
    q: "SWM tính phí như thế nào?",
    a: "Tính theo gói SaaS hằng tháng dựa trên quy mô kho, số người dùng và mô-đun sử dụng.",
  },
  {
    q: "SWM có đảm bảo bảo mật dữ liệu không?",
    a: "Mã hoá toàn bộ dữ liệu khi truyền và lưu trữ, sao lưu định kỳ, audit log đầy đủ.",
  },
];
