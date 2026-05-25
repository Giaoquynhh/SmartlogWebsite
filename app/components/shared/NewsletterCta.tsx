"use client";

import Editable from "../../editor/Editable";
import { shared } from "../../assets";
import Reveal from "../Reveal";

export type NewsletterCtaProps = {
  /** id prefix for editable text (e.g. "blog.newsletter") */
  idPrefix?: string;
  title?: string;
  submitLabel?: string;
};

/**
 * Newsletter subscription card used on Blog / Projects / Events pages.
 *
 * Two-column layout matching Figma:
 *  - Left: heading (top-aligned) + 5 stacked inputs + primary CTA
 *  - Right: full-bleed isometric illustration (server + shopping carts)
 */
export default function NewsletterCta({
  idPrefix = "newsletter",
  title = "Đăng ký bảng tin mới nhất từ Smartlog",
  submitLabel = "Đăng ký nhận bản tin",
}: NewsletterCtaProps) {
  const fields = [
    { name: "fullname", label: "Họ và tên" },
    { name: "email", label: "Email", type: "email" },
    { name: "company", label: "Doanh nghiệp đang công tác" },
    { name: "source", label: "Bạn biết đến Smartlog từ đâu?" },
    { name: "interest", label: "Bạn quan tâm đến thông tin nào?" },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal as="div" variant="scale" className="grid lg:grid-cols-2 rounded-[32px] bg-[#F7F8F8] overflow-hidden shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
          {/* Left — form */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <Editable
              id={`${idPrefix}.title`}
              kind="text"
              as="h2"
              className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#333342] leading-snug block"
            >
              {title}
            </Editable>

            <form
              className="mt-7 flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              {fields.map((f) => (
                <input
                  key={f.name}
                  type={f.type ?? "text"}
                  name={f.name}
                  placeholder={f.label}
                  className="rounded-full border border-[#EDEEF1] bg-white px-5 py-3 text-sm text-[#333342] placeholder:text-[#B6BAC3] focus:outline-none focus:border-[#3543F6] focus:ring-4 focus:ring-[#3543F6]/15 transition-all"
                />
              ))}

              <button
                type="submit"
                className="cta-shimmer group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#3543F6] hover:bg-[#2933D9] transition-all hover:-translate-y-0.5 px-6 py-3.5 text-sm font-bold text-[#ECF3FF] shadow-lg"
              >
                <Editable id={`${idPrefix}.submit`} kind="text" as="span">
                  {submitLabel}
                </Editable>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          </div>

          {/* Right — illustration, full bleed */}
          <div className="relative min-h-[280px] lg:min-h-full bg-[#0a1a3f] overflow-hidden">
            <Editable
              id={`${idPrefix}.illustration`}
              kind="image"
              src={shared.newsletterIllustration}
              alt="Smartlog newsletter"
              className="absolute inset-0 w-full h-full"
              imgClassName="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
