import type { StatItem } from "../shared/StatsRow";
import type { ArticleCardData } from "../shared/ArticleCard";

export const caseStudyStats: StatItem[] = [
  { value: "200+", label: "Khách hàng doanh nghiệp tin dùng" },
  { value: "20+", label: "Ngành hàng cực kỳ cạnh tranh" },
  { value: "50-70%", label: "Thời gian tích hợp được tối ưu" },
  { value: "10-20%", label: "Chi phí Logistics được tiết kiệm" },
];

export const caseStudyLatest: ArticleCardData[] = [
  {
    date: "20/4/2025",
    title:
      "SMARTLOG đạt Sao Khuê 2025 cho sản phẩm Smart AI First Route Planning (SARP)",
    excerpt:
      "Ngày 19/4/2025 vừa qua tại Hà Nội, đại diện Công ty cổ phần Giải pháp Chuỗi cung ứng Smartlog, ông Hạnh Đỗ – Giám đốc phát triển AI đã có mặt để nhận Giải thưởng Sao Khuê 2025 cho sản phẩm Smart AI First Route Planning (SARP).",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
  },
  {
    date: "20/4/2025",
    title:
      "Kick-off: Smartlog triển khai dự án quản lý kho hàng SWM cho Toshiba Logistics Vietnam",
    tags: ["Tag 1", "Tag 2"],
  },
  {
    date: "20/4/2025",
    title:
      "Smartlog tiếp tục trở thành nhà cung cấp giải pháp quản lý vận tải STM cho Mondelez Kinh Đô",
    tags: ["Tag 1", "Tag 2"],
  },
  {
    date: "20/4/2025",
    title:
      "PVOIL TRANS bắt đầu triển khai hệ thống quản lý vận tải STM vào hoạt động",
    tags: ["Tag 1", "Tag 2"],
  },
  {
    date: "20/4/2025",
    title:
      "Golive: Smartlog hợp tác cùng QD Trans triển khai hệ thống quản lý vận tải hiện đại, toàn diện STM",
    tags: ["Tag 1", "Tag 2"],
  },
];

export type IndustryCaseGroup = {
  key: string;
  title: string;
  items: ArticleCardData[];
};

const kickoffCard: ArticleCardData = {
  date: "20/4/2025",
  title:
    "Kick-off: Smartlog triển khai dự án quản lý kho hàng SWM cho Toshiba Logistics Vietnam",
  tags: ["Tag 1", "Tag 2"],
};

export const caseStudyIndustries: IndustryCaseGroup[] = [
  {
    key: "retail",
    title: "Bán lẻ & Phân phối",
    items: [kickoffCard, kickoffCard, kickoffCard],
  },
  {
    key: "fmcg",
    title: "FMCG",
    items: [kickoffCard, kickoffCard, kickoffCard],
  },
  {
    key: "raw-materials",
    title: "Nguyên vật liệu - Hóa chất",
    items: [kickoffCard, kickoffCard, kickoffCard],
  },
  {
    key: "3pl-logistics",
    title: "3PL & Logistics",
    items: [kickoffCard, kickoffCard, kickoffCard],
  },
  {
    key: "appliances",
    title: "Điện máy gia dụng",
    items: [kickoffCard, kickoffCard, kickoffCard],
  },
  {
    key: "agri-food",
    title: "Nông nghiệp & Cung ứng thực phẩm",
    items: [kickoffCard, kickoffCard, kickoffCard],
  },
  {
    key: "others",
    title: "Một số ngành hàng đa dạng khác",
    items: [kickoffCard, kickoffCard, kickoffCard],
  },
];
