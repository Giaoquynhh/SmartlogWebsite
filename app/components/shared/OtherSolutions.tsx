"use client";

import { useState } from "react";
import Link from "next/link";
import Editable from "../../editor/Editable";
import { allProducts, type ProductCardData } from "./productsData";
import Reveal from "../Reveal";

export type OtherSolutionsProps = {
  /** Product code to exclude (the current page's product). e.g. "STM" */
  excludeCode?: string;
  /** id prefix for Editable IDs (e.g. "stm.others") */
  idPrefix?: string;
  title?: string;
  /** How many cards visible at once (default 3) */
  pageSize?: number;
};

/**
 * "Khám phá các giải pháp khác từ Smartlog" — carousel of product cards on
 * STM/SWM/SOM pages, matching Figma. Excludes the product the user is
 * currently viewing.
 */
export default function OtherSolutions({
  excludeCode,
  idPrefix = "others",
  title = "Khám phá các giải pháp khác từ Smartlog",
  pageSize = 3,
}: OtherSolutionsProps) {
  const items: ProductCardData[] = excludeCode
    ? allProducts.filter((p) => p.code !== excludeCode)
    : allProducts;

  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const visible = items.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <Editable
            id={`${idPrefix}.title`}
            kind="text"
            as="h2"
            className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#333342] leading-tight block max-w-2xl"
          >
            {title}
          </Editable>
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 hover:text-[#3543F6] hover:border-[#3543F6] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors text-lg"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 hover:text-[#3543F6] hover:border-[#3543F6] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors text-lg"
              >
                →
              </button>
            </div>
          )}
        </div>

        <Reveal as="div" key={page} stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p) => {
            const pid = `${idPrefix}.cards.${p.code.toLowerCase()}`;
            return (
              <article
                key={p.code}
                className="card-lift bg-white rounded-3xl p-6 lg:p-7 border border-gray-100 shadow-[0_4px_24px_rgba(15,23,42,0.06)] flex flex-col hover:border-[#3543F6]/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <Editable
                    id={`${pid}.icon`}
                    kind="image"
                    src={p.iconSrc}
                    alt={p.code}
                    className="flex-shrink-0"
                    imgClassName="w-14 h-14 lg:w-16 lg:h-16"
                  />
                  <div className="flex gap-2 pt-1">
                    <span className="px-3 py-1 rounded-full text-xs font-bold border border-[#3543F6] text-[#3543F6]">
                      <Editable id={`${pid}.code`} kind="text" as="span">
                        {p.code}
                      </Editable>
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold border border-[#3543F6] text-[#3543F6]">
                      <Editable id={`${pid}.type`} kind="text" as="span">
                        {p.type}
                      </Editable>
                    </span>
                  </div>
                </div>

                <Editable
                  id={`${pid}.title`}
                  kind="text"
                  as="h3"
                  className="mt-5 text-lg lg:text-xl font-bold text-[#333342] leading-snug block"
                >
                  {p.title}
                </Editable>

                <ul className="mt-3 space-y-2 flex-1">
                  {p.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[13px] text-[#615F78] leading-relaxed"
                    >
                      <span className="text-[#3543F6] mt-1 flex-shrink-0">•</span>
                      <Editable id={`${pid}.bullets.${i}`} kind="text" as="span">
                        {b}
                      </Editable>
                    </li>
                  ))}
                </ul>

                {p.href ? (
                  <Link
                    href={p.href}
                    className="mt-5 self-start inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#3543F6] text-[#3543F6] text-sm font-semibold hover:bg-[#3543F6] hover:text-white transition-colors"
                  >
                    <Editable id={`${pid}.cta`} kind="text" as="span">
                      Khám phá
                    </Editable>
                    <span aria-hidden>→</span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    aria-disabled="true"
                    title="Trang chi tiết đang được cập nhật"
                    className="mt-5 self-start inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#3543F6] text-[#3543F6] text-sm font-semibold opacity-60 cursor-not-allowed"
                  >
                    <Editable id={`${pid}.cta`} kind="text" as="span">
                      Khám phá
                    </Editable>
                    <span aria-hidden>→</span>
                  </button>
                )}
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
