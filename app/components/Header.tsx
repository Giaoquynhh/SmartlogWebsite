"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  "Giải pháp",
  "Ngành hàng",
  "Khách hàng",
  "Tài nguyên",
  "Về Smartlog",
  "Liên hệ",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white">
      <div className="mx-auto max-w-7xl px-6 pt-6 pb-4 flex items-start justify-between gap-6">
        <div className="flex flex-col items-start gap-3 flex-shrink-0">
          <Link href="/" className="flex items-center">
            <img
              src="/images/shared/logo/smartlog.png"
              alt="Smartlog"
              className="h-16 sm:h-20 lg:h-[88px] w-auto brightness-0 invert"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-[17px]">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-[15px] whitespace-nowrap">
          <span className="opacity-80">Global</span>
          <span className="opacity-80">Artificial intelligence</span>
          <span className="font-medium">VN / ENG</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-gray-100 transition-colors px-5 py-2.5 text-[15px] font-semibold text-[#1e3a8a] shadow-md"
          >
            Free demo
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-3">
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
      </div>

      {open && (
        <div className="lg:hidden bg-[#0a1a3f] border-t border-white/10">
          <nav className="px-6 py-4 flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <a key={item} href="#" className="py-1.5 opacity-90">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
