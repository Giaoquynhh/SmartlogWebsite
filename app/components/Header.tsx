"use client";

import Link from "next/link";
import { useState } from "react";

const navItems: { label: string; href: string }[] = [
  { label: "Giải pháp", href: "#" },
  { label: "Ngành hàng", href: "#" },
  { label: "Khách hàng", href: "/customers" },
  { label: "Tài nguyên", href: "/blog" },
  { label: "Về Smartlog", href: "/about" },
  { label: "Liên hệ", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white">
      <div className="mx-auto w-full max-w-[1720px] px-10 pt-7 pb-4 flex flex-col gap-5">
        {/* Hàng 1: logo + top utilities */}
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/images/shared/logo/smartlog-figma.svg"
              alt="Smartlog"
              className="h-10 sm:h-12 lg:h-14 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7 text-[15px] whitespace-nowrap">
            <span className="opacity-80">Global</span>
            <span className="opacity-80">Artificial intelligence</span>
            <span className="font-medium">VN / ENG</span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-gray-100 transition-colors px-5 py-2.5 text-[15px] font-semibold text-[#161A50] shadow-md"
            >
              Free demo
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Hàng 2: menu items căn trái dưới logo */}
        <nav className="hidden lg:flex items-center gap-9 text-[16px]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </div>
      <div className="absolute top-6 right-6 flex lg:hidden items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#1e3a8a] px-4 py-2 text-xs font-semibold shadow-md"
          >
            Free demo
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="p-2"
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5" />
            <span className="block w-6 h-0.5 bg-white mb-1.5" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
        </div>

      {open && (
        <div className="lg:hidden bg-[#0a1a3f] border-t border-white/10">
          <nav className="px-6 py-4 flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="py-1.5 opacity-90">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
