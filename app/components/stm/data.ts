import type { AccordionItem } from "../shared/FeatureAccordion";
import type { WhyCard } from "../shared/WhyDifferent";
import type { Stat } from "../shared/StatsBand";
import type { FaqItem } from "../shared/FAQ";
import type { CustomerTestimonialCard } from "../shared/CustomerTestimonials";

export const stmFeatures: AccordionItem[] = [
  {
    title: "1. Nhận & Tạo Đơn Hàng",
    body: "Chuẩn hóa đầu vào từ nhiều nguồn, đảm bảo dữ liệu sẵn sàng cho điều phối mà không cần xử lý lại:",
    bullets: [
      "Nhập nhanh bằng file Excel hoặc thủ công, linh hoạt cho mọi tình huống",
      "Đồng bộ đơn hàng từ ERP, OMS, hạn chế trùng lặp dữ liệu",
      "Dữ liệu đầu vào đồng nhất, đầy đủ, chính xác",
    ],
  },
  {
    title: "2. Lập Kế Hoạch & Điều Phối Chuyến",
    body: "Tối ưu hoá tuyến đường, ghép chuyến và phân tài xế dựa trên ràng buộc thực tế.",
  },
  { title: "3. Giao lệnh cho tài xế" },
  { title: "4. Giám sát vận hành theo thời gian thực" },
  { title: "5. Giao hàng & xác nhận ePOD" },
  { title: "6. Ghi nhận và đối soát chi phí" },
  { title: "7. Quản lý tài xế, xe & nhà thầu" },
  { title: "8. Báo cáo & dashboard trực quan" },
];

export const stmIntegration: AccordionItem[] = [
  {
    title: "Tích hợp 2 chiều với các hệ thống ERP",
    body: "Đồng bộ đơn hàng, master data và kết quả vận tải hai chiều, không cần can thiệp thủ công.",
  },
  {
    title: "Hỗ trợ đa định dạng, tương thích với hầu hết hệ thống",
    body: "JSON, XML, Flat File (CSV/Excel) và mở rộng với chuẩn EDI (EDIFACT, ANSI X12) khi cần.",
  },
  {
    title: "Kết nối chặt chẽ với WMS và OMS trong và ngoài hệ sinh thái Smartlog",
  },
  {
    title: "Xuất/nhập dữ liệu qua nhiều chuẩn dữ liệu chuyên ngành",
  },
];

export const stmWhyCards: WhyCard[] = [
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
      "Tài liệu đầy đủ, ngôn ngữ gần gũi, đào tạo gắn sát vai trò người dùng, từ điều phối viên đến tài xế hay giám sát hiện trường.",
  },
  {
    title: "Lắng nghe và cải tiến dựa trên phản hồi thực tế",
    description:
      "Xây dựng lộ trình phát triển sản phẩm dựa trên phản hồi trực tiếp từ khách hàng đang vận hành. Mỗi đề xuất đều được tiếp nhận, đánh giá và phản hồi minh bạch.",
  },
];

export const stmStats: Stat[] = [
  {
    value: "90%",
    label: "Tăng tốc",
    sublabel: "Thời gian lên kế hoạch & điều phối",
  },
  {
    value: "20%",
    label: "Tối ưu",
    sublabel: "Năng lực vận hành đội xe",
  },
  {
    value: "24/7",
    label: "Cập nhật liên tục",
    sublabel: "Thông tin đơn hàng & phương tiện",
  },
];

export const stmFaqs: FaqItem[] = [
  {
    q: "Tài xế sử dụng hệ thống có khó không?",
    a: "Ứng dụng tài xế được thiết kế tối giản, chỉ tập trung các thao tác cần thiết: nhận lệnh, cập nhật trạng thái, chụp ảnh ePOD. Đa số tài xế làm quen trong 1 buổi.",
  },
  {
    q: "Bao lâu thì có thể triển khai và sử dụng được?",
    a: "Thông thường từ 4–8 tuần tuỳ quy mô đội xe và mức độ tích hợp với ERP/OMS sẵn có.",
  },
  {
    q: "STM tính phí như thế nào?",
    a: "Tính theo gói SaaS hằng tháng dựa trên số phương tiện hoặc số đơn xử lý. Liên hệ để nhận báo giá phù hợp.",
  },
  {
    q: "STM có đảm bảo bảo mật dữ liệu không?",
    a: "Hệ thống vận hành trên hạ tầng cloud bảo mật, mã hoá dữ liệu khi truyền tải và lưu trữ, có phân quyền chi tiết theo vai trò.",
  },
];

export const stmTestimonials: CustomerTestimonialCard[] = [
  {
    name: "TTC AgriS",
    description: "Tập đoàn bia hàng đầu thế giới tại Đông Nam Á",
    quote:
      "STM đã giúp chúng tôi tối ưu chi phí vận tải gần 20% và giảm đáng kể thời gian điều phối. Tài xế tiếp cận hệ thống nhanh, dữ liệu vận hành minh bạch theo thời gian thực.",
  },
  {
    name: "TTC AgriS",
    description: "Tập đoàn bia hàng đầu thế giới tại Đông Nam Á",
    quote:
      "STM đã giúp chúng tôi tối ưu chi phí vận tải gần 20% và giảm đáng kể thời gian điều phối. Tài xế tiếp cận hệ thống nhanh, dữ liệu vận hành minh bạch theo thời gian thực.",
  },
  {
    name: "TTC AgriS",
    description: "Tập đoàn bia hàng đầu thế giới tại Đông Nam Á",
    quote:
      "STM đã giúp chúng tôi tối ưu chi phí vận tải gần 20% và giảm đáng kể thời gian điều phối. Tài xế tiếp cận hệ thống nhanh, dữ liệu vận hành minh bạch theo thời gian thực.",
  },
];
