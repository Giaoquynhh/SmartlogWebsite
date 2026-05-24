"use client";

import { CheckSquareIcon } from "./icons";

export type LeadFormProps = {
  title?: string;
  subtitle?: string;
  /** Pre-selected product options shown as checkboxes */
  productOptions?: string[];
};

const DEFAULT_PRODUCTS = [
  "Hệ thống quản lý vận tải - STM",
  "Hệ thống quản lý kho hàng - SWM",
  "Hệ thống quản lý đơn hàng - SOM",
  "Nền tảng tối ưu container rỗng - COS",
];

export default function LeadForm({
  title = "Liên hệ ngay",
  subtitle = "Để lại thông tin chúng tôi sẽ tư vấn chi tiết",
  productOptions = DEFAULT_PRODUCTS,
}: LeadFormProps) {
  return (
    <section id="contact" className="py-16 lg:py-20 bg-[#F7F9FF]">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-[28px] bg-white border border-[#EDEEF1] shadow-[0_8px_32px_rgba(15,23,42,0.08)] p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] text-center leading-tight">
            {title}
          </h2>
          <p className="mt-3 text-base text-[#615F78] text-center">
            {subtitle}
          </p>

          <form
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input name="name" label="Họ và tên" />
            <Input name="email" type="email" label="Email" />
            <Input name="phone" label="Điện thoại" />
            <Input name="company" label="Tên doanh nghiệp" />
            <Select name="region" label="Khu vực" options={["Miền Bắc", "Miền Trung", "Miền Nam"]} />
            <Select
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

            <div className="md:col-span-2 mt-2">
              <div className="text-sm font-semibold text-[#333342] mb-3">
                Sản phẩm quan tâm
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {productOptions.map((p) => (
                  <label
                    key={p}
                    className="flex items-center gap-3 cursor-pointer text-[14px] text-[#333342]"
                  >
                    <input
                      type="checkbox"
                      name="products"
                      value={p}
                      className="peer sr-only"
                      defaultChecked
                    />
                    <span className="text-[#3543F6] peer-checked:opacity-100 opacity-100">
                      <CheckSquareIcon size={20} />
                    </span>
                    <span>{p}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 mt-4 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-[#3543F6] hover:bg-[#2933D9] transition-colors px-8 py-3.5 text-base font-bold text-white shadow-lg"
              >
                Gửi thông tin
                <span aria-hidden>→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-[#333342]">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={label}
        className="rounded-2xl border border-[#EDEEF1] bg-[#F7F9FF] px-4 py-3 text-[15px] text-[#333342] placeholder:text-[#615F78]/60 focus:outline-none focus:border-[#3543F6]"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-[#333342]">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="rounded-2xl border border-[#EDEEF1] bg-[#F7F9FF] px-4 py-3 text-[15px] text-[#333342] focus:outline-none focus:border-[#3543F6]"
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
