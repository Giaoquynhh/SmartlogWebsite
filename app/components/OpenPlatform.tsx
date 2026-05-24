"use client";

import { useEffect, useRef, useState } from "react";
import { home } from "../assets";

const usps = [
  {
    title: "Giảm chi phí thông qua tối ưu hoá đa module",
    desc: "Tiết kiệm 10-20% chi phí logistics khi áp dụng đồng thời các giải pháp vận tải, kho và hàng hoá.",
  },
  {
    title: "Dữ liệu thống nhất xuyên suốt vận hành",
    desc: "Loại bỏ các quy trình silos, tăng cường minh bạch và truy xuất thông tin chuỗi cung ứng.",
  },
  {
    title: "Ra quyết định nhanh chóng với khả năng hiển thị toàn diện",
    desc: "Giám sát và điều hành chuỗi cung ứng trên một nền tảng duy nhất.",
  },
];

// Hotspot tròn nhỏ tại vị trí từng icon sản phẩm trên kim tự tháp.
// Tọa độ % so với container ảnh (kim tự tháp).
type Hotspot = {
  id: string;
  name: string;
  desc: string;
  cx: string; // center X (%)
  cy: string; // center Y (%)
  size?: number; // px, default 32
};

const hotspots: Hotspot[] = [
  {
    id: "sct",
    name: "SCT",
    desc: "Smart Container Tracking — Theo dõi container realtime, định vị GPS chính xác đến từng phút.",
    cx: "50%",
    cy: "17%",
  },
  {
    id: "ai-analytics",
    name: "AI / Analytics",
    desc: "Phân tích dữ liệu logistics bằng AI, dự báo nhu cầu và tối ưu tuyến đường.",
    cx: "38%",
    cy: "25%",
  },
  {
    id: "automation",
    name: "Automation / Realtime",
    desc: "Tự động hoá quy trình vận hành, cập nhật trạng thái realtime trên toàn chuỗi.",
    cx: "62%",
    cy: "25%",
  },
  {
    id: "c-node",
    name: "C — Customer",
    desc: "Module quản lý khách hàng — CRM tích hợp toàn bộ chuỗi cung ứng.",
    cx: "42%",
    cy: "35%",
  },
  {
    id: "s-node",
    name: "S — Supplier",
    desc: "Module quản lý nhà cung cấp — kết nối và đánh giá đối tác xuyên suốt.",
    cx: "58%",
    cy: "35%",
  },
  {
    id: "t-node",
    name: "T — Transport",
    desc: "TMS — Quản lý vận tải, điều phối xe và theo dõi hành trình realtime.",
    cx: "44%",
    cy: "47%",
  },
  {
    id: "o-node",
    name: "O — Order",
    desc: "OMS — Quản lý đơn hàng đa kênh, đồng bộ E-commerce và Social-commerce.",
    cx: "52%",
    cy: "50%",
  },
  {
    id: "w-node",
    name: "W — Warehouse",
    desc: "WMS — Quản lý kho và DC quy mô lớn, tích hợp IoT và phân tích thông minh.",
    cx: "60%",
    cy: "47%",
  },
  {
    id: "api",
    name: "API",
    desc: "Open API — Tích hợp linh hoạt với mọi hệ thống nội bộ của doanh nghiệp.",
    cx: "33%",
    cy: "61%",
  },
  {
    id: "edi",
    name: "EDI",
    desc: "Electronic Data Interchange — Trao đổi dữ liệu chuẩn hóa giữa các đối tác.",
    cx: "45%",
    cy: "61%",
  },
  {
    id: "iot",
    name: "IoT",
    desc: "Kết nối thiết bị IoT — Sensor, GPS, RFID, barcode realtime trên toàn hệ thống.",
    cx: "57%",
    cy: "61%",
  },
  {
    id: "erp",
    name: "ERP",
    desc: "Tích hợp ERP — Đồng bộ kế toán, kho, nhân sự với nền tảng logistics.",
    cx: "69%",
    cy: "61%",
  },
  {
    id: "supplier",
    name: "Nhà cung cấp",
    desc: "Mắt xích đầu nguồn — nguyên liệu, hàng hoá đi vào chuỗi cung ứng.",
    cx: "20%",
    cy: "73%",
  },
  {
    id: "port",
    name: "Cảng",
    desc: "Điểm trung chuyển — xử lý container, hải quan, xếp dỡ hàng hoá.",
    cx: "37%",
    cy: "76%",
  },
  {
    id: "warehouse",
    name: "Kho hàng",
    desc: "Lưu trữ và phân phối — DC, kho lạnh, kho thường tích hợp toàn diện.",
    cx: "60%",
    cy: "76%",
  },
  {
    id: "customer",
    name: "Khách hàng",
    desc: "Mắt xích cuối — giao hàng tận tay, đảm bảo SLA và trải nghiệm tốt.",
    cx: "80%",
    cy: "73%",
  },
];

export default function OpenPlatform() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm sm:text-base text-[#1e3a8a] font-semibold">
              Không dừng lại ở những giải pháp thông thường
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#0b1320] leading-tight">
              Smartlog là Nền tảng mở cho Logistics tương lai
            </h2>

            <div className="mt-10 space-y-8">
              {usps.map((u, i) => (
                <div
                  key={u.title}
                  className={`flex gap-4 transition-all duration-700 ${
                    visible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#3b5fd9] grid place-items-center font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1e3a8a]">
                      {u.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-gray-700 leading-relaxed">
                      {u.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div
              className={`relative w-full max-w-[560px] pyramid-anim ${
                visible ? "is-visible" : ""
              }`}
            >
              <img
                src={home.openPlatform.diagram}
                alt="Smartlog platform diagram"
                className="w-full h-auto select-none"
                draggable={false}
              />

              {hotspots.map((h) => {
                const isActive = activeId === h.id;
                const size = h.size ?? 36;
                return (
                  <div
                    key={h.id}
                    className="absolute"
                    style={{
                      top: h.cy,
                      left: h.cx,
                      width: size,
                      height: size,
                      transform: "translate(-50%, -50%)",
                    }}
                    onMouseEnter={() => setActiveId(h.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onFocus={() => setActiveId(h.id)}
                    onBlur={() => setActiveId(null)}
                    tabIndex={0}
                    role="button"
                    aria-label={h.name}
                  >
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#1e3a8a]/30 ring-2 ring-[#1e3a8a] shadow-[0_0_20px_rgba(30, 58, 138,0.6)] scale-110"
                          : "bg-transparent ring-0"
                      }`}
                    />

                    <div
                      className={`pointer-events-none absolute left-1/2 -translate-x-1/2 z-30 transition-all duration-300 ease-out ${
                        isActive
                          ? "opacity-100 -translate-y-3 scale-100"
                          : "opacity-0 translate-y-0 scale-95"
                      }`}
                      style={{ bottom: "calc(100% + 12px)" }}
                    >
                      <div className="relative w-64 rounded-2xl bg-gradient-to-br from-[#1e3a8a] via-[#162a6b] to-[#0b1849] text-white p-4 border border-white/10 shadow-[0_20px_60px_-15px_rgba(11,24,73,0.6)]">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.07] to-transparent pointer-events-none" />

                        <div className="relative flex items-center gap-2">
                          <span className="inline-block w-2 h-2 rounded-full bg-[#3b5fd9] shadow-[0_0_8px_rgba(59, 95, 217,0.8)]" />
                          <div className="text-sm font-bold tracking-wide text-[#3b5fd9]">
                            {h.name}
                          </div>
                        </div>

                        <p className="relative mt-2 text-[13px] leading-relaxed text-white/90">
                          {h.desc}
                        </p>

                        <div
                          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0b1849] border-r border-b border-white/10 rotate-45"
                          style={{ bottom: "-8px" }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pyramid-anim {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition:
            opacity 1s ease-out,
            transform 1s ease-out;
        }
        .pyramid-anim.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </section>
  );
}
