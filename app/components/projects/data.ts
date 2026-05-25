import type { StatItem } from "../shared/StatsRow";
import type { ArticleCardData } from "../shared/ArticleCard";

export const projectsStats: StatItem[] = [
  { value: "200+", label: "Doanh nghiệp khách hàng" },
  { value: "5 triệu m²", label: "Kho hàng được quản lý" },
  { value: "1,4 triệu", label: "Đơn được xử lý / tháng" },
  { value: "24.000", label: "Phương tiện được quản lý" },
];

/** Featured row: 1 large card + 4 small cards (same pattern as Blog). */
export const projectsFeatured: ArticleCardData[] = [
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
      "Smartlog tiếp tục trở thành nhà cung cấp giải pháp quản lý vận tải STM cho Mondelez Kinh Đô",
    tags: ["Tag 1", "Tag 2"],
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

/** Secondary section: 3-card grid (matches Blog "Insight & Xu hướng"). */
export const projectsRecent: ArticleCardData[] = [
  {
    date: "20/4/2025",
    title:
      "Smartlog tiếp tục trở thành nhà cung cấp giải pháp quản lý vận tải STM cho Mondelez Kinh Đô",
    tags: ["Tag 1", "Tag 2"],
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
      "PVOIL TRANS bắt đầu triển khai hệ thống quản lý vận tải STM vào hoạt động",
    tags: ["Tag 1", "Tag 2"],
  },
];

/**
 * "Và thêm nhiều dự án đầy tiềm năng!" section — 3x3 grid (9 cards) of
 * additional Kick-off project highlights at the bottom of the projects page.
 */
export const projectsMore: ArticleCardData[] = Array.from({ length: 9 }, () => ({
  date: "20/4/2025",
  title:
    "Kick-off: Smartlog triển khai dự án quản lý kho hàng SWM cho Toshiba Logistics Vietnam",
  tags: ["Tag 1", "Tag 2"],
}));
