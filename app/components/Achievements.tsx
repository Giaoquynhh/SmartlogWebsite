"use client";

import { useState } from "react";
import { home } from "../assets";

type Milestone = {
  year: string;
  bullets: string[];
};

const milestones: Milestone[] = [
  {
    year: "2019",
    bullets: [
      "Lorem ipsum dolor sit amet consectetur. Tellus lectus sem nisi integer nam purus vel et.",
      "Lorem ipsum dolor sit amet consectetur. Tellus lectus sem nisi integer nam purus vel et.",
      "Lorem ipsum dolor sit amet consectetur. Tellus lectus sem nisi integer nam purus vel et.",
    ],
  },
  {
    year: "2020",
    bullets: [
      "Mở rộng hệ sinh thái sản phẩm SaaS, ra mắt nhiều giải pháp logistics mới.",
      "Hợp tác chiến lược với các tập đoàn lớn trong và ngoài nước.",
    ],
  },
  {
    year: "2021",
    bullets: [
      "Top 10 doanh nghiệp công nghệ logistics Việt Nam.",
      "Nhận giải thưởng Sao Khuê cho giải pháp công nghệ xuất sắc.",
    ],
  },
  {
    year: "2022",
    bullets: [
      "Ra mắt nền tảng STX kết nối chủ hàng và nhà vận tải.",
      "Vượt mốc 10.000 nhà vận tải tham gia hệ sinh thái.",
    ],
  },
  {
    year: "2024",
    bullets: [
      "Mở rộng thị trường khu vực Đông Nam Á.",
      "Khai trương văn phòng tại Ấn Độ và mở rộng sang Malaysia, Philippines.",
    ],
  },
  {
    year: "2025",
    bullets: [
      "Hệ sinh thái 50.000+ người dùng trên toàn nền tảng.",
      "Triển khai AI và Analytics cho toàn bộ chuỗi sản phẩm.",
    ],
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
    </svg>
  );
}

function ChevronIcon({
  open,
  className,
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} transition-transform ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Achievements() {
  const [openYear, setOpenYear] = useState("2019");

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#1e3a8a] text-center leading-tight">
          Những thành tựu mà Smartlog đạt được
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
          Mỗi sự công nhận là một động lực thúc đẩy chúng tôi vươn xa và bền bỉ
          hơn
          <br />
          Hiệu quả vận hành được minh chứng thực tế qua các danh hiệu và giải
          thưởng uy tín
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-3">
            {milestones.map((m) => {
              const isOpen = openYear === m.year;
              return (
                <div
                  key={m.year}
                  className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenYear(isOpen ? "" : m.year)}
                    className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors ${
                      isOpen
                        ? "bg-[#1e3a8a] text-white"
                        : "bg-white text-[#0b1320] hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <StarIcon
                        className={`w-5 h-5 ${
                          isOpen ? "text-[#3b5fd9]" : "text-[#1e3a8a]"
                        }`}
                      />
                      <span className="text-lg font-bold">{m.year}</span>
                    </div>
                    <ChevronIcon
                      open={isOpen}
                      className={`w-5 h-5 ${
                        isOpen ? "text-white" : "text-gray-500"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 bg-white ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="px-5 py-5 space-y-2.5">
                        {m.bullets.map((b, i) => (
                          <li
                            key={i}
                            className="flex gap-2.5 text-sm leading-relaxed text-gray-700"
                          >
                            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1e3a8a]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden lg:flex justify-center items-center sticky top-24">
            <img
              src={home.achievements.star}
              alt="Crystal star"
              className="w-full max-w-md h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
