/**
 * Channels showcase for SOM: visualizes "multi-channel order intake on a single platform".
 */
const channels = [
  { name: "Shopee", color: "#EE4D2D" },
  { name: "Lazada", color: "#0F146C" },
  { name: "Tiki", color: "#1A94FF" },
  { name: "Sendo", color: "#D0021B" },
  { name: "TikTok Shop", color: "#000000" },
  { name: "Zalo", color: "#0068FF" },
  { name: "Shopify", color: "#5E8E3E" },
  { name: "Website", color: "#3543F6" },
];

export default function SomChannels() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] leading-tight">
            SOM là công cụ đắc lực với bộ tính năng được thiết kế phù hợp cho đặc thù kênh bán của đa ngành hàng
          </h2>
          <p className="mt-4 text-base text-[#615F78] leading-relaxed">
            SOM sở hữu danh sách tính năng phong phú phục vụ từng giai đoạn của quá trình quản lý đơn hàng, hỗ trợ vận hành hiệu quả hơn.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6 items-center">
          {/* Channels grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {channels.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl bg-white border border-[#EDEEF1] px-4 py-3 flex items-center gap-3 shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
              >
                <span
                  aria-hidden
                  className="w-8 h-8 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: c.color }}
                />
                <span className="text-sm font-semibold text-[#333342]">
                  {c.name}
                </span>
              </div>
            ))}
          </div>

          {/* Center node */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-[#3543F6] text-white flex items-center justify-center text-2xl lg:text-3xl font-bold shadow-[0_8px_32px_rgba(53,67,246,0.4)]">
                SOM
              </div>
              <div aria-hidden className="absolute inset-0 rounded-full border-2 border-dashed border-[#3543F6]/30 -m-4" />
            </div>
          </div>

          {/* Right: orchestration capabilities */}
          <div className="lg:col-span-2 space-y-3">
            <Capability title="Đồng bộ đơn — tồn — giá realtime" />
            <Capability title="Tự động định tuyến đơn về kho tối ưu" />
            <Capability title="Phân bổ tồn thông minh theo kênh" />
            <Capability title="Báo cáo hợp nhất đa kênh tức thì" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Capability({ title }: { title: string }) {
  return (
    <div className="rounded-2xl bg-[#F7F9FF] border border-[#EDEEF1] px-5 py-4 flex items-center gap-3">
      <span className="w-9 h-9 rounded-full bg-[#3543F6]/10 text-[#3543F6] flex items-center justify-center flex-shrink-0">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="text-sm font-semibold text-[#333342]">{title}</span>
    </div>
  );
}
