import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Smartlog - Kiến tạo hệ sinh thái Logistics hàng đầu Việt Nam",
  description:
    "Smartlog cung cấp giải pháp chuyển đổi số Logistics cho doanh nghiệp toàn cầu, thúc đẩy bứt phá vận hành logistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} antialiased`}>
      <body className="min-h-screen bg-white text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
