"use client";

import { useState } from "react";

const slides = [0, 1, 2];

export default function PartnerExperience() {
  const [active, setActive] = useState(1);

  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-4 lg:gap-6">
        {slides.map((i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
              className={`group relative overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(53,67,246,0.35)] transition-all duration-500 ${
                isActive
                  ? "w-full max-w-[640px] aspect-video opacity-100 scale-100"
                  : "w-[180px] sm:w-[220px] lg:w-[280px] aspect-video opacity-70 scale-95 hover:opacity-90"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/global/success-story.png"
                alt={`Partner experience ${i + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-16 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div className="absolute top-3 left-3 text-xs text-white/95 font-light">
                Made at Theorem with love
              </div>
              {isActive && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-white/95 group-hover:bg-white shadow-xl group-hover:scale-110 transition-all">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path d="M8 5v14l11-7z" fill="#3543F6" />
                    </svg>
                  </span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Pagination dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {slides.map((i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-8 bg-[#3543F6]" : "w-2 bg-[#D8DBDF] hover:bg-[#9CA3AF]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
