"use client";

import { useState } from "react";
import { home } from "@/app/assets";

type NewsItem = {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
};

const newsImages = [
  home.news[1],
  home.news[2],
  home.news[3],
  home.news[4],
];

const news: NewsItem[] = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  date: "09/08/2025",
  category: "NGÀNH LOGISTICS",
  title: "Lorem ipsum dolor sit amet consectetur",
  excerpt:
    "Lorem ipsum dolor sit amet consectetur. Lacinia vehicula quam senectus eleifend.",
  image: newsImages[i % newsImages.length],
}));

const itemsPerPage = 8;

export default function News() {
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(news.length / itemsPerPage));
  const currentNews = news.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage,
  );

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#1e3a8a]">
            Tin tức nổi bật
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 hover:text-[#1e3a8a] hover:border-[#1e3a8a] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 hover:text-[#1e3a8a] hover:border-[#1e3a8a] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {currentNews.map((n, i) => (
            <article
              key={n.id}
              className={`group rounded-2xl overflow-hidden bg-white border transition-all cursor-pointer ${
                i === 0
                  ? "border-[#1e3a8a]/30 shadow-[0_8px_30px_rgba(30,58,138,0.12)]"
                  : "border-gray-100 shadow-sm hover:shadow-lg"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider text-white bg-black/30 backdrop-blur-sm">
                    {n.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs text-gray-500">{n.date}</div>
                <h3 className="mt-2 font-bold text-[#0b1320] text-[15px] leading-snug line-clamp-2 group-hover:text-[#1e3a8a] transition-colors">
                  {n.title}
                </h3>
                <p className="mt-2 text-xs text-gray-600 line-clamp-2 leading-relaxed">
                  {n.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
              className={`transition-all rounded-full ${
                i === page
                  ? "w-8 h-2 bg-[#1e3a8a]"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
