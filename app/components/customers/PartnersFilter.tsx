"use client";

import { useState } from "react";
import { customerCategories, customerLogos } from "./data";

export default function PartnersFilter() {
  const [activeCat, setActiveCat] = useState<string>("all");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-10">
      <ul className="space-y-2 lg:sticky lg:top-28">
        {customerCategories.map((c) => {
          const active = c.key === activeCat;
          return (
            <li key={c.key}>
              <button
                type="button"
                onClick={() => setActiveCat(c.key)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? "bg-[#3543F6] text-white shadow-md shadow-[#3543F6]/20"
                    : "text-[#333342] hover:bg-[#ECF3FF]"
                }`}
              >
                {c.label}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {customerLogos.map((l, i) => (
          <div
            key={i}
            className="aspect-[3/2] rounded-2xl border border-[#EDEEF1] bg-white flex items-center justify-center p-4 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(53,67,246,0.25)] transition-all"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={l.src}
              alt={l.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
