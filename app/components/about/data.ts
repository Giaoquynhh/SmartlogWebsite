export const aboutHeroStats = [
  { value: "2015", label: "Khởi đầu hành trình" },
  { value: "100+", label: "Khách hàng doanh nghiệp" },
  { value: "50+", label: "Đối tác chiến lược" },
  { value: "20+", label: "Ngành hàng" },
];

export const aboutVisionMission = {
  vision: {
    label: "Tầm nhìn",
    text: "Trở thành nền tảng và hệ sinh thái tích hợp hóa đầu tiên cho hoạt động vận hành logistics với độ bao phủ lớn nhất tại Việt Nam và Đông Nam Á.",
  },
  mission: {
    label: "Sứ mệnh",
    text: "Tham gia, cung cấp và nâng cao hiệu quả cho tất cả các bên liên quan trong chuỗi cung ứng bằng việc tận dụng công nghệ, con người và tài sản.",
  },
};

export type CoreValue = {
  name: string;
  color: string;
  keywords: [string, string, string, string];
};

export const coreValues: CoreValue[] = [
  {
    name: "THỰC TẾ",
    color: "#3543F6",
    keywords: [
      "Dữ liệu trực quan",
      "Phân tích rõ ràng",
      "Am hiểu bối cảnh",
      "Kết quả làm trọng",
    ],
  },
  {
    name: "THỰC TRÍ",
    color: "#21C97A",
    keywords: [
      "Kiên định sứ mệnh",
      "Tư duy hệ thống",
      "Khát khao đột phá",
      "Học hỏi không ngừng",
    ],
  },
  {
    name: "THỰC TẦM",
    color: "#FFB700",
    keywords: [
      "Tầm nhìn dài hạn",
      "Tư duy chiến lược",
      "Dẫn dắt đổi mới",
      "Vươn tầm khu vực",
    ],
  },
  {
    name: "THỰC TÂM",
    color: "#FF4C61",
    keywords: [
      "Giá trị đối tác",
      "Tôn kính cộng sự",
      "Trách nhiệm cộng đồng",
      "Lan tỏa đam mê",
    ],
  },
  {
    name: "THỰC TÍN",
    color: "#F97707",
    keywords: [
      "Tự thân kỷ luật",
      "Trân trọng cam kết",
      "Minh bạch tuyệt đối",
      "Lãnh đạo nêu gương",
    ],
  },
];

export type LeaderCard = {
  name: string;
  role: string;
  bio: string;
  accent?: string;
};

export const leaders: LeaderCard[] = [
  {
    name: "Mr. Kurt Binh",
    role: "Founder & CEO",
    accent: "#FF4C61",
    bio: "Thạc sĩ ngành Quản Lý Chuỗi Cung Ứng (ĐH MIT, Hoa Kỳ), 20 năm kinh nghiệm quản lý, vận hành chuỗi cung ứng, logistics, dẫn dắt các dự án lớn tư vấn logistics.",
  },
  {
    name: "Ms. Canary Yen",
    role: "Deputy CEO",
    bio: "Cử nhân Đại học Hàng hải, hơn 22 năm kinh nghiệm trong lĩnh vực logistics, phát triển kinh doanh chuỗi cung ứng và giải pháp tại Gemadept, CJ Gemadept Logistics, Lazada Logistics.",
  },
  {
    name: "Mr. Tuan Tran",
    role: "CTO",
    bio: "Thạc sĩ ngành Quản Lý Chuỗi Cung Ứng (ĐH MIT, Hoa Kỳ), 20 năm kinh nghiệm quản lý, vận hành chuỗi cung ứng, logistics, dẫn dắt các dự án lớn tư vấn logistics.",
  },
  {
    name: "Mr. Dung Tran",
    role: "Deputy CTO",
    bio: "Cử nhân Software Engineering theo chương trình đào tạo của Carnegie Mellon University (CMU, Mỹ). Hơn 8 năm phát triển hệ thống phục vụ lĩnh vực Logistics.",
  },
  {
    name: "Mr. Thanh Lai",
    role: "COO",
    bio: "Thạc sĩ ngành Quản Lý Chuỗi Cung Ứng (ĐH MIT, Hoa Kỳ), 20 năm kinh nghiệm quản lý, vận hành chuỗi cung ứng, logistics, dẫn dắt các dự án lớn tư vấn logistics.",
  },
  {
    name: "Ms. Kieu Huynh",
    role: "CFO",
    bio: "Hơn 20 năm kinh nghiệm giữ các vị trí giám đốc tài chính, trưởng phòng tài chính kế toán ở các tập đoàn hàng đầu Việt Nam.",
  },
  {
    name: "Mr. Hanh Do",
    role: "Chief AI Officer",
    bio: "Tiến sĩ Toán học, UC Berkeley, USA. Nghiên cứu trong lĩnh vực Mathematical Foundations ứng dụng AI, Machine Learning and Optimization cho Logistics.",
  },
  {
    name: "Ms. Giang Le",
    role: "Head of Business Development",
    bio: "Thạc sĩ chuyên ngành Business Analytics and Management Science. Hơn 7 năm kinh nghiệm quản lý kho hàng, ecommerce và xây dựng giải pháp.",
  },
  {
    name: "Ms. Anh Le",
    role: "Head of Product Development",
    bio: "Hơn 7 năm kinh nghiệm thiết kế giải pháp và triển khai các dự án chuyển đổi số Logistics cho nhiều doanh nghiệp trong và ngoài nước.",
  },
  {
    name: "Mr. D K Rai",
    role: "VP - Global Market Expansion",
    bio: "Sở hữu nền tảng đa ngành về Kỹ thuật, MBA và Luật, được đào tạo lãnh đạo tại CEDEP. Hơn 20 năm kinh nghiệm phát triển kinh doanh toàn cầu, mở rộng thị trường, xây dựng quan hệ đối tác, hoạch định chiến lược xuyên biên giới.",
  },
  {
    name: "Mr. Dat Pham",
    role: "Head of Implementation",
    bio: "Chuyên gia tối ưu quy trình vận hành kho, vận tải cho doanh nghiệp lớn.",
  },
];

export type TimelineEntry = {
  year: string;
  title: string;
  bullets: string[];
};

export const journeyTimeline: TimelineEntry[] = [
  {
    year: "2015",
    title: "Khởi nguồn một sứ mệnh",
    bullets: [
      "08.04.2015, Smartlog chính thức được thành lập với khát vọng góp phần thay đổi Logistics Việt Nam.",
    ],
  },
  {
    year: "2016",
    title: "Dấu chân đầu tiên vào thị trường",
    bullets: [
      "01.2016: Ra mắt Hệ thống quản lý vận tải STM.",
      "08.2016: Nhận đầu tư Angel Investment.",
      "12.2016: 250.000 đơn hàng được xử lý qua hệ thống STM.",
    ],
  },
  {
    year: "2017",
    title: "Mở rộng nền tảng Logistics",
    bullets: [
      "20+ doanh nghiệp lớn triển khai STM.",
      "03.2017: Ra mắt Hệ thống quản lý kho hàng SWM.",
      "Đạt mốc 1 triệu đơn hàng giao dịch toàn hệ thống.",
    ],
  },
  {
    year: "2018",
    title: "Bắt đầu hành trình ứng dụng AI",
    bullets: [
      "Thành lập đội ngũ AI chuyên sâu trong Logistics.",
      "Phát triển mô hình thuật toán tối ưu vận hành.",
    ],
  },
  {
    year: "2019",
    title: "Tăng tốc đa dạng hóa giải pháp",
    bullets: [
      "03.2019: 60+ doanh nghiệp sử dụng hệ sinh thái Smartlog.",
      "04.2019: Đạt giải Sao Khuê với STM, 15.000 phương tiện vận hành trên hệ thống.",
      "04.2019: Ra mắt Sàn giao dịch vận tải STX.",
    ],
  },
  {
    year: "2020",
    title: "Sáng kiến vượt trội hướng đến Logistics bền vững",
    bullets: [
      "01.2020: Ra mắt Nền tảng tối ưu container rỗng đầu tiên tại Việt Nam COS với tính năng MT-REUSE, MT-RETURN.",
      "06.2020: Tái khẳng định năng lực với giải thưởng Sao Khuê cho SWM.",
    ],
  },
  {
    year: "2021",
    title: "Ổn định vận hành trước biến động",
    bullets: [
      "Tối ưu khả năng giám sát thời gian thực và phản ứng nhanh trong đại dịch.",
      "Triển khai chuyển đổi số Logistics thành công cho 100+ doanh nghiệp.",
      "04.2021: Chiến thắng giải Sao Khuê thứ ba với COS.",
    ],
  },
  {
    year: "2022",
    title: "Bứt tốc với công nghệ cao",
    bullets: [
      "Tái thiết kế hệ thống STM, SWM và COS linh hoạt, mở rộng hơn.",
      "Ra mắt mô hình Digital Control Tower đầu tiên tại Việt Nam.",
      "04.2022: Chiến thắng giải Sao Khuê lần thứ tư với STX.",
    ],
  },
  {
    year: "2023",
    title: "Kết nối toàn diện, nâng cao vận hành",
    bullets: [
      "Ra mắt Giải pháp quản lý vận hành toàn diện SSM dành cho SMEs.",
      "Gia tăng hợp tác chiến lược với nhiều đối tác Logistics lớn.",
      "Vận hành hơn 50.000 phương tiện qua hệ thống mỗi ngày.",
    ],
  },
  {
    year: "2024",
    title: "Bước tiến công nghệ vượt bậc với AI",
    bullets: [
      "Đánh dấu bước tiến thành công vượt trội phát triển trí tuệ nhân tạo AI vào tính năng Smart AI First Route Planning trên hệ thống STM và đạt nhiều giải thưởng nổi bật.",
    ],
  },
  {
    year: "2025",
    title: "Kỷ nguyên 10 năm - Tái tạo vươn tầm",
    bullets: [
      "04.2025: Chiến thắng giải Sao Khuê lần thứ năm với giải pháp Smart AI First Route Planning (SARP).",
      "10.2025: Đồng hành chuyển đổi số Logistics thành công cho 200+ doanh nghiệp.",
      "10.2025: Được định vị nhóm \"Đầu tàu\" trên bản đồ \"Doanh nghiệp cung cấp giải pháp Logistics\" tại Vietnam Top 10 Tech & Map.",
      "10.2025: Khai trương Phòng thí nghiệm Khoa học dữ liệu và Công nghệ cao SAHUS Lab cùng Khoa Toán – Cơ – Tin học, Trường Đại học Khoa học Tự nhiên, ĐHQGHN.",
    ],
  },
];

export type EcosystemModule = {
  code: string;
  name: string;
};

export const ecosystemModules: EcosystemModule[] = [
  { code: "STM", name: "Smartlog Transport Management" },
  { code: "SWM", name: "Smartlog Warehouse Management" },
  { code: "SOM", name: "Smartlog Order Management" },
  { code: "STX", name: "Smartlog Transport Exchange" },
  { code: "COS", name: "Container Optimization Solutions" },
  { code: "SCT", name: "Supply Chain Tower" },
  { code: "SSCP", name: "Smartlog Supply Chain Planning" },
  { code: "DRP", name: "Distribution Requirement Planning" },
  { code: "DNOPS", name: "Digital Network Operations" },
];

export const ecosystemFeatures = [
  "Lập kế hoạch qua AI",
  "Phân tích & báo cáo",
  "Vận hành tự động",
  "Cập nhật realtime",
];

export const ecosystemIntegrations = ["API", "EDI", "IoT", "ERP"];

export const ecosystemStakeholders = [
  "Nhà cung cấp",
  "Cảng",
  "Kho hàng",
  "Bán lẻ",
  "Khách hàng",
];

export type KpiHighlight = {
  value: string;
  label: string;
};

export const kpiHighlights: KpiHighlight[] = [
  { value: "15%", label: "Chi phí vận tải" },
  { value: "10%", label: "Chi phí quản lý" },
  { value: "10-15%", label: "Chi phí vận hành kho" },
  { value: "99,99%", label: "Chính xác tồn kho" },
];

export const closingBanners = [
  {
    title: "Nền tảng tương lai với khả năng tích hợp vượt trội",
    description:
      "Kiến trúc mở, sẵn sàng kết nối với mọi hệ thống ERP, WMS, TMS, IoT và các nền tảng đối tác trong chuỗi cung ứng.",
  },
  {
    title: "Sẵn sàng cho mọi quy mô từ doanh nghiệp lớn đến các SMEs",
    description:
      "Giải pháp được thiết kế linh hoạt, mở rộng theo nhu cầu vận hành thực tế, đồng hành cùng doanh nghiệp ở mọi giai đoạn phát triển.",
  },
];

export const aboutQuote =
  "Chúng tôi tin rằng công nghệ là đòn bẩy giúp doanh nghiệp chuyển đổi mạnh mẽ, bứt phá hiệu quả. Góp phần nâng tầm chuỗi cung ứng Việt Nam trên bản đồ công nghiệp 4.0. Chúng tôi tiếp tục mở rộng quy mô và phát triển các giải pháp AI hiện đại, hỗ trợ khách hàng thích nghi và vươn tầm tăng trưởng trong kỷ nguyên số.";
