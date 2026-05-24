# Image folder structure

Ảnh được tổ chức theo **page → section** để dễ quản lý khi website lớn dần.

```
public/images/
├── shared/              # dùng chung toàn site
│   ├── logo/            # logo Smartlog (header, footer, favicon nguồn)
│   └── icons/           # icon SVG chung
│
└── home/                # trang chủ (app/page.tsx)
    ├── hero/            # Hero.tsx — illustration, background
    ├── stats/           # StatsHighlight.tsx — icon/illustration số liệu
    ├── products/        # Products.tsx — 5 sản phẩm: som, stm, swm, stx, cos
    ├── open-platform/   # OpenPlatform.tsx — sơ đồ nền tảng mở
    ├── industries/      # Industries.tsx — 6 ngành
    ├── testimonials/    # Testimonials.tsx — avatar khách hàng
    ├── achievements/    # Achievements.tsx — badge/giải thưởng theo năm
    ├── news/            # News.tsx — thumbnail tin tức
    ├── contact/         # ContactForm.tsx
    └── footer/          # Footer.tsx
```

## Quy ước đặt tên

- Lowercase, dùng dấu gạch ngang: `smartlog-logo.svg`, `hero-illustration.png`, `product-som.png`.
- Ưu tiên SVG cho logo/icon, WebP/PNG cho ảnh thực tế.
- File `<section>-bg.*` cho background, `<section>-illustration.*` cho minh hoạ chính.

## Cách dùng trong code

```tsx
import Image from "next/image";

<Image src="/images/shared/logo/smartlog.svg" alt="Smartlog" width={40} height={40} />
<Image src="/images/home/hero/hero-illustration.png" alt="" width={600} height={400} />
<Image src="/images/home/products/som.png" alt="SOM" width={400} height={300} />
```

## Thêm page mới

Khi tạo page mới, thêm folder cùng cấp với `home/`:
```
public/images/
├── shared/
├── home/
├── about/
└── solutions/
    ├── stm/
    └── swm/
```
