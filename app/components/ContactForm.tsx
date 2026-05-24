"use client";

import { useState } from "react";
import { home } from "@/app/assets";

const productOptions = [
  { code: "STM", label: "Hệ thống quản lý vận tải - STM" },
  { code: "SWM", label: "Hệ thống quản lý kho hàng - SWM" },
  { code: "SOM", label: "Hệ thống quản lý đơn hàng - SOM" },
  { code: "COS", label: "Nền tảng tối ưu container rỗng - COS" },
  { code: "STX", label: "Nền tảng giao dịch vận tải - STX" },
];
const sources = [
  "Google search",
  "Facebook",
  "Linkedin",
  "Sự kiện, truyền thông, báo đài",
  "Giới thiệu từ bạn bè, đồng nghiệp, đối tác",
];

export default function ContactForm() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);

  const toggle = (
    list: string[],
    setter: (v: string[]) => void,
    item: string,
  ) => {
    setter(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-8 lg:p-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b1320]">
          Đăng ký tư vấn chuyên sâu từ Smartlog
        </h2>
        <p className="mt-3 text-sm text-gray-500">
          Dấu (<span className="text-[#1e3a8a]">*</span>) là bắt buộc
        </p>

        <form
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Cảm ơn bạn đã đăng ký! Smartlog sẽ liên hệ sớm.");
          }}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Họ và tên" name="fullname" />
            <Field label="Số điện thoại" name="phone" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Doanh nghiệp của bạn" name="company" />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0b1320] mb-2">
              Doanh nghiệp của bạn đến từ đâu
            </label>
            <select className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c] focus:border-transparent">
              <option>Chọn quốc gia / khu vực</option>
              <option>Việt Nam</option>
              <option>Ấn Độ</option>
              <option>Malaysia</option>
              <option>Philippines</option>
              <option>Indonesia</option>
              <option>Thái Lan</option>
              <option>Cambodia</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0b1320] mb-3">
              Chọn sản phẩm cần tư vấn
            </label>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {productOptions.map((p) => (
                <label
                  key={p.code}
                  className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(p.code)}
                    onChange={() =>
                      toggle(selectedProducts, setSelectedProducts, p.code)
                    }
                    className="w-4 h-4 rounded border-gray-300 text-[#0b3b8c] focus:ring-[#0b3b8c]"
                  />
                  {p.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0b1320] mb-2">
              Lời nhắn
            </label>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c] focus:border-transparent"
              placeholder="Nội dung bạn muốn trao đổi..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0b1320] mb-3">
              Bạn biết đến Smartlog và các sản phẩm từ đâu
            </label>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {sources.map((s) => (
                <label
                  key={s}
                  className="flex items-center gap-2.5 text-sm text-gray-700 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedSources.includes(s)}
                    onChange={() => toggle(selectedSources, setSelectedSources, s)}
                    className="w-4 h-4 rounded border-gray-300 text-[#0b3b8c] focus:ring-[#0b3b8c]"
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1e3a8a] hover:bg-[#1e40af] transition-colors px-8 py-3.5 text-white font-semibold"
            >
              Đăng ký nhận bản tin
            </button>
          </div>
        </form>
        </div>

        <div className="hidden lg:block relative">
          <img
            src={home.contact.illustration}
            alt="Đăng ký tư vấn chuyên sâu từ Smartlog"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[#0b1320] mb-2"
      >
        {label}
        {required && <span className="text-[#1e3a8a] ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3b8c] focus:border-transparent"
      />
    </div>
  );
}
