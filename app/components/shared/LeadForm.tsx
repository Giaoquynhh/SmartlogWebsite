"use client";

import { CheckSquareIcon } from "./icons";
import Editable from "../../editor/Editable";

export type LeadFormVariant = "light" | "dark";

export type LeadFormProps = {
  /** id prefix (e.g. "stm.contact") */
  idPrefix?: string;
  title?: string;
  subtitle?: string;
  /** Pre-selected product options shown as checkboxes */
  productOptions?: string[];
  /**
   * "light" → white card on light background (legacy standalone section).
   * "dark"  → solid blue card with white text, matches Figma side-by-side layout.
   */
  variant?: LeadFormVariant;
  /**
   * If true, the form renders without its outer <section> wrapper, so it can
   * be embedded inside a parent grid (e.g. FaqContactSection).
   */
  embedded?: boolean;
  /** Label of the submit button. */
  submitLabel?: string;
};

const DEFAULT_PRODUCTS = [
  "Hệ thống quản lý vận tải - STM",
  "Hệ thống quản lý kho hàng - SWM",
  "Hệ thống quản lý đơn hàng - SOM",
  "Nền tảng tối ưu container rỗng - COS",
  "Nền tảng giao dịch vận tải - STX",
  "Supply Chain Planning - SSCP",
];

const SOURCES = [
  "Google Search",
  "Facebook",
  "LinkedIn",
  "Sự kiện, truyền thông báo đài",
  "Qua giới thiệu từ bạn bè, đồng nghiệp hoặc đối tác",
];

export default function LeadForm({
  idPrefix = "contact",
  title = "Liên hệ ngay",
  subtitle = "Để lại thông tin chúng tôi sẽ tư vấn chi tiết",
  productOptions = DEFAULT_PRODUCTS,
  variant = "light",
  embedded = false,
  submitLabel = "Nhận tư vấn ngay",
}: LeadFormProps) {
  const dark = variant === "dark";

  const card = (
    <div
      className={
        dark
          ? "rounded-[28px] bg-[#3543F6] text-white p-8 lg:p-10 shadow-[0_8px_32px_rgba(53,67,246,0.25)]"
          : "rounded-[28px] bg-white border border-[#EDEEF1] shadow-[0_8px_32px_rgba(15,23,42,0.08)] p-8 lg:p-12"
      }
    >
      <Editable
        id={`${idPrefix}.title`}
        kind="text"
        as="h2"
        className={`text-2xl sm:text-3xl lg:text-[34px] font-bold text-center leading-tight block ${dark ? "text-white" : "text-[#333342]"}`}
      >
        {title}
      </Editable>
      <Editable
        id={`${idPrefix}.subtitle`}
        kind="text"
        as="p"
        className={`mt-3 text-sm text-center block ${dark ? "text-white/85" : "text-[#615F78]"}`}
      >
        {subtitle}
      </Editable>

      <form
        className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-3.5"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input dark={dark} name="name" label="Họ và tên" />
        <Input dark={dark} name="phone" label="Điện thoại" />
        <Input dark={dark} name="email" type="email" label="Email" />
        <Input dark={dark} name="company" label="Tên doanh nghiệp" />
        <Select dark={dark} name="region" label="Khu vực" options={["Miền Bắc", "Miền Trung", "Miền Nam"]} />
        <Select
          dark={dark}
          name="industry"
          label="Lĩnh vực"
          options={[
            "Sản xuất",
            "Phân phối",
            "Bán lẻ",
            "Logistics",
            "Dược phẩm",
            "FMCG",
          ]}
        />

        <div className="md:col-span-2 mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-3">
          <div>
            <div className={`text-xs font-semibold mb-2 ${dark ? "text-white" : "text-[#333342]"}`}>
              Chọn sản phẩm bạn quan tâm
            </div>
            <div className="flex flex-col gap-1.5">
              {productOptions.map((p) => (
                <label
                  key={p}
                  className={`flex items-center gap-2 cursor-pointer text-[13px] ${dark ? "text-white/90" : "text-[#333342]"}`}
                >
                  <input
                    type="checkbox"
                    name="products"
                    value={p}
                    className="sr-only peer"
                  />
                  <span
                    className={`inline-flex items-center justify-center w-4 h-4 rounded border ${dark ? "border-white/60 peer-checked:bg-white" : "border-[#3543F6]/40 peer-checked:bg-[#3543F6]"}`}
                  >
                    <CheckSquareIcon size={14} className={dark ? "text-[#3543F6]" : "text-white"} />
                  </span>
                  <span>{p}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <div className={`text-xs font-semibold mb-2 ${dark ? "text-white" : "text-[#333342]"}`}>
              Bạn biết đến Smartlog qua kênh nào?
            </div>
            <div className="flex flex-col gap-1.5">
              {SOURCES.map((s) => (
                <label
                  key={s}
                  className={`flex items-center gap-2 cursor-pointer text-[13px] ${dark ? "text-white/90" : "text-[#333342]"}`}
                >
                  <input type="checkbox" name="source" value={s} className="sr-only peer" />
                  <span
                    className={`inline-flex items-center justify-center w-4 h-4 rounded border ${dark ? "border-white/60 peer-checked:bg-white" : "border-[#3543F6]/40 peer-checked:bg-[#3543F6]"}`}
                  >
                    <CheckSquareIcon size={14} className={dark ? "text-[#3543F6]" : "text-white"} />
                  </span>
                  <span>{s}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <textarea
            rows={3}
            placeholder="Lời nhắn"
            className={
              dark
                ? "w-full rounded-2xl bg-white/15 border border-white/25 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white"
                : "w-full rounded-2xl bg-[#F7F9FF] border border-[#EDEEF1] px-4 py-3 text-sm text-[#333342] placeholder:text-[#615F78]/60 focus:outline-none focus:border-[#3543F6]"
            }
          />
        </div>

        <div className="md:col-span-2 mt-2 flex justify-center">
          <button
            type="submit"
            className={
              dark
                ? "inline-flex items-center gap-2 rounded-xl bg-white text-[#3543F6] hover:bg-[#ECF3FF] transition-colors px-8 py-3 text-sm font-bold shadow-lg"
                : "inline-flex items-center gap-2 rounded-xl bg-[#3543F6] hover:bg-[#2933D9] transition-colors px-8 py-3 text-sm font-bold text-white shadow-lg"
            }
          >
            <Editable id={`${idPrefix}.submit`} kind="text" as="span">
              {submitLabel}
            </Editable>
            <span aria-hidden>→</span>
          </button>
        </div>
      </form>
    </div>
  );

  if (embedded) return card;

  return (
    <section id="contact" className={`py-16 lg:py-20 ${dark ? "bg-white" : "bg-[#F7F9FF]"}`}>
      <div className="mx-auto max-w-4xl px-6">{card}</div>
    </section>
  );
}

function Input({
  label,
  name,
  type = "text",
  dark,
}: {
  label: string;
  name: string;
  type?: string;
  dark: boolean;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className={`text-xs font-semibold ${dark ? "text-white/90" : "text-[#333342]"}`}>{label}</span>
      <input
        type={type}
        name={name}
        placeholder={label}
        className={
          dark
            ? "rounded-xl border border-white/25 bg-white/15 px-3.5 py-2.5 text-sm text-white placeholder:text-white/55 focus:outline-none focus:border-white"
            : "rounded-xl border border-[#EDEEF1] bg-[#F7F9FF] px-3.5 py-2.5 text-sm text-[#333342] placeholder:text-[#615F78]/60 focus:outline-none focus:border-[#3543F6]"
        }
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
  dark,
}: {
  label: string;
  name: string;
  options: string[];
  dark: boolean;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className={`text-xs font-semibold ${dark ? "text-white/90" : "text-[#333342]"}`}>{label}</span>
      <select
        name={name}
        defaultValue=""
        className={
          dark
            ? "rounded-xl border border-white/25 bg-white/15 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-white [&>option]:text-[#333342]"
            : "rounded-xl border border-[#EDEEF1] bg-[#F7F9FF] px-3.5 py-2.5 text-sm text-[#333342] focus:outline-none focus:border-[#3543F6]"
        }
      >
        <option value="" disabled>
          Chọn {label.toLowerCase()}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
