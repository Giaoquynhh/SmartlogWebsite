import type { StatItem } from "../shared/StatsRow";
import type { ArticleCardData } from "../shared/ArticleCard";

export const eventsStats: StatItem[] = [
  { value: "30+", label: "Sự kiện lớn hàng năm trong lĩnh vực công nghệ" },
  { value: "40+", label: "Phiên diễn giả tại các hội thảo chuyên ngành" },
  { value: "50+", label: "Dự án hợp tác chiến lược trong và ngoài nước" },
  { value: "50+", label: "Kênh thông tin uy tín đề cập và phỏng vấn" },
];

/** Featured row: 1 large card + 4 small cards (same pattern as Blog / Projects). */
export const eventsFeatured: ArticleCardData[] = [
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
export const eventsRecent: ArticleCardData[] = [
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
 * "Và thêm nhiều hoạt động đầy tiềm năng!" — 2x3 grid (6 cards) of
 * additional Kick-off highlights at the bottom of the events page.
 */
export const eventsMore: ArticleCardData[] = Array.from({ length: 6 }, () => ({
  date: "20/4/2025",
  title:
    "Kick-off: Smartlog triển khai dự án quản lý kho hàng SWM cho Toshiba Logistics Vietnam",
  tags: ["Tag 1", "Tag 2"],
}));
