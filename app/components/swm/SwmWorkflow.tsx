/**
 * 5-stage warehouse workflow horizontal display (Nhập hàng → Cất hàng → Châm hàng → Soạn hàng → Xuất hàng)
 */
const stages = [
  { num: "01", label: "Nhập hàng" },
  { num: "02", label: "Cất hàng" },
  { num: "03", label: "Châm hàng" },
  { num: "04", label: "Soạn hàng" },
  { num: "05", label: "Xuất hàng" },
];

export default function SwmWorkflow() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] leading-tight">
            Đa tính năng kết nối xuyên suốt hoạt động kho
          </h2>
          <p className="mt-4 text-base text-[#615F78] leading-relaxed">
            Các tính năng của SWM được thiết kế theo dòng chảy vận hành kho thực tế — từ nhập hàng, cất hàng, soạn hàng đến xuất hàng. Giúp nhân viên dễ thao tác, quản lý dễ giám sát, dữ liệu luôn đồng nhất và realtime.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-[#C4E0FD]/40 border border-[#C4E0FD] p-6 lg:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stages.map((s, i) => (
              <div
                key={s.num}
                className="relative rounded-2xl bg-white border border-[#EDEEF1] p-5 text-center shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
              >
                <div className="text-xs font-bold text-[#3543F6]/60">{s.num}</div>
                <div className="mt-2 text-base font-bold text-[#333342]">
                  {s.label}
                </div>
                {i < stages.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#3543F6] text-white items-center justify-center text-xs"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 aspect-[16/8] rounded-2xl bg-white border border-[#EDEEF1] flex items-center justify-center text-[#615F78]/50 text-sm">
            <div className="text-center">
              <div className="mx-auto w-14 h-14 rounded-xl border border-dashed border-[#3543F6]/40 mb-3 flex items-center justify-center text-[#3543F6]/60">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 11h18M8 7V4h8v3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              [Khung ảnh: mockup vận hành kho]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
