// Centralized image paths.
// Khi đổi tên/di chuyển file ảnh, chỉ sửa ở đây - không phải tìm khắp codebase.
// Component import: `import { home } from "@/app/assets"` rồi dùng `home.hero.illustration`.

export const shared = {
  logo: {
    default: "/images/shared/logo/smartlog.png",
    white: "/images/shared/logo/smartlog-white.svg",
    mark: "/images/shared/logo/smartlog-mark.svg",
  },
  heroWatermark: "/images/shared/hero-watermark.svg",
  newsletterIllustration: "/images/shared/newsletter-illustration.png",
} as const;

export const stm = {
  hero: {
    web: "/images/stm/hero/hero-web.png",
    phone: "/images/stm/hero/hero-phone.png",
  },
  integration: {
    illustration: "/images/stm/integration/integration-illustration.png",
  },
} as const;

export const som = {
  hero: {
    web: "/images/som/hero/hero-web.png",
    phone: "/images/som/hero/hero-phone.png",
  },
  integration: {
    illustration: "/images/som/integration/integration-illustration.png",
  },
} as const;

export const swm = {
  hero: {
    web: "/images/swm/hero/hero-web.png",
    phone: "/images/swm/hero/hero-phone.png",
  },
  integration: {
    illustration: "/images/swm/integration/integration-illustration.png",
  },
} as const;

export const home = {
  hero: {
    background: "/images/home/hero/hero-bg.png",
    truck: "/images/home/hero/hero-truck.png",
  },
  products: {
    icons: {
      som: "/images/home/products/icon-som.svg",
      stm: "/images/home/products/icon-stm.svg",
      swm: "/images/home/products/icon-swm.svg",
      stx: "/images/home/products/icon-stx.svg",
      cos: "/images/home/products/icon-cos.svg",
    },
  },
  openPlatform: {
    diagram: "/images/home/open-platform/platform-diagram.svg",
  },
  partners: {
    brenntag: "/images/home/partners/brenntag.png",
    hafele: "/images/home/partners/hafele.png",
    perfetti: "/images/home/partners/perfetti.png",
  },
  industries: {
    "san-xuat": "/images/home/industries/san-xuat.png",
    "duoc-pham": "/images/home/industries/duoc-pham.png",
    "xay-dung": "/images/home/industries/xay-dung.png",
    fnb: "/images/home/industries/fnb.png",
    "giao-duc": "/images/home/industries/giao-duc.png",
    "y-te": "/images/home/industries/y-te.png",
  },
  contact: {
    illustration: "/images/home/contact/contact-illustration.png",
  },
  news: {
    1: "/images/home/news/news-1.png",
    2: "/images/home/news/news-2.png",
    3: "/images/home/news/news-3.png",
    4: "/images/home/news/news-4.png",
  },
  achievements: {
    star: "/images/home/achievements/star.png",
    "2019": "/images/home/achievements/award-2019.png",
    "2020": "/images/home/achievements/award-2020.png",
    "2021": "/images/home/achievements/award-2021.png",
    "2022": "/images/home/achievements/award-2022.png",
    "2024": "/images/home/achievements/award-2024.png",
    "2025": "/images/home/achievements/award-2025.png",
  },
} as const;
