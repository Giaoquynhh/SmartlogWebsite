"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: "Giải pháp",
    href: "#",
    children: [
      { label: "SWM", href: "/swm" },
      { label: "SOM", href: "/som" },
      { label: "STM", href: "/stm" },
    ],
  },
  { label: "Ngành hàng", href: "#" },
  { label: "Khách hàng", href: "/customers" },
  { label: "Tài nguyên", href: "/blog" },
  { label: "Về Smartlog", href: "/about" },
  { label: "Liên hệ", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
            <Link href="/global" className="opacity-80 hover:opacity-100 transition-opacity">Global</Link>
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
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap"
                  >
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-70">
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-2">
                      <div className="rounded-xl bg-[#0a1a3f]/95 border border-white/10 shadow-xl backdrop-blur-sm overflow-hidden min-w-[160px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-2.5 text-[15px] opacity-90 hover:opacity-100 hover:bg-white/10 transition-colors whitespace-nowrap"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className="opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                {item.label}
              </Link>
            );
          })}
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
              <div key={item.label} className="flex flex-col">
                <Link href={item.href} className="py-1.5 opacity-90">
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 flex flex-col gap-1 border-l border-white/10 ml-2">
                    {item.children.map((child) => (
                      <Link key={child.label} href={child.href} className="py-1 text-[13px] opacity-80 hover:opacity-100 transition-opacity">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
