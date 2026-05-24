const offices = [
  {
    label: "Trụ sở Hồ Chí Minh:",
    addr: "199C2 Nguyễn Văn Hưởng, phường Thảo Điền, TP. Thủ Đức, TP.HCM",
  },
  {
    label: "Văn phòng Hà Nội:",
    addr: "Số 4, ngách 6, ngõ 102, đường Nguỵ Như Kon Tum, phường Nhân Chính, Q. Thanh Xuân, TP. Hà Nội",
  },
  {
    label: "Văn phòng Ấn Độ:",
    addr: "Văn phòng đại diện Ấn Độ: 203, Pyramid Axis, B/h Croma Store, Baner Road, Pune, MH, IN - 411045",
  },
];

const contacts = [
  { label: "Phòng Kinh doanh", value: "0938 545 272" },
  { label: "Phòng Nhân sự", value: "028 2253 0709" },
  { label: "Sàn giao dịch COS", value: "0938 275 626" },
  { label: "Email", value: "marketing@gosmartlog.com" },
];

const aboutLinks = [
  "Lịch sử hình thành",
  "Global",
  "Khách hàng",
  "Smartlog Academy",
];
const solutionLinks = [
  "Smartlog Transport Management (STM)",
  "Smartlog Warehouse Management (SWM)",
  "Smartlog Order Management (SOM)",
  "Smartlog Transport Exchange (STX)",
  "Container Optimization Solutions (COS)",
  "Supply Chain Planning (SSCP)",
];
const careerLinks = [
  "Tuyển dụng",
  "Văn hoá",
  "Điều khoản và chính sách",
  "Điều khoản dịch vụ",
];

const countries = [
  "Việt Nam",
  "Ấn Độ",
  "Malaysia",
  "Philippines",
  "Indonesia",
  "Thái Lan",
  "Cambodia",
  "Tất cả quốc gia",
];

function PinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="flex-shrink-0 text-[#3b5fd9]"
      aria-hidden
    >
      <path
        d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
        fill="currentColor"
      />
    </svg>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-9 h-9 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-[#0b3b8c] transition-colors"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="section-dark text-white pt-16 pb-8 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Top: logo + 3 office addresses */}
        <div className="grid lg:grid-cols-4 gap-6 pb-10 border-b border-white/10 items-center divide-x divide-white/15">
          <div className="flex items-center justify-center lg:justify-start pr-2">
            <img
              src="/images/shared/logo/smartlog.png"
              alt="Smartlog"
              className="h-20 w-auto brightness-0 invert"
            />
          </div>
          {offices.map((o) => (
            <div key={o.label} className="flex gap-3 lg:px-6">
              <PinIcon />
              <div className="text-xs leading-relaxed">
                <div className="font-semibold text-white">{o.label}</div>
                <div className="text-white/70 mt-1">{o.addr}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-8 pt-10">
          <div className="lg:col-span-3">
            <h4 className="font-semibold mb-4 text-[15px]">Liên hệ</h4>
            <ul className="space-y-2.5 text-sm">
              {contacts.map((c) => (
                <li key={c.label} className="text-white/80">
                  <span className="text-white/60">{c.label}:</span>{" "}
                  <span className="text-white">{c.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4 text-[15px]">Về chúng tôi</h4>
            <ul className="space-y-2.5 text-sm">
              {aboutLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/70 hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-semibold mb-4 text-[15px]">Giải pháp & Nền tảng</h4>
            <ul className="space-y-2.5 text-sm">
              {solutionLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/70 hover:text-white whitespace-nowrap">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-semibold mb-4 text-[15px] invisible">.</h4>
            <ul className="space-y-2.5 text-sm">
              {careerLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-white/70 hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="mt-10 flex items-center gap-3">
          <SocialIcon>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99h-2.54V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
            </svg>
          </SocialIcon>
          <SocialIcon>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </SocialIcon>
          <SocialIcon>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
            </svg>
          </SocialIcon>
          <SocialIcon>
            <span className="text-[10px] font-bold">Zalo</span>
          </SocialIcon>
        </div>

        {/* Description + Countries */}
        <div className="mt-10 pt-8 border-t border-white/10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <p className="text-sm text-white/80 leading-relaxed font-semibold">
              Smartlog cung cấp giải pháp chuyển đổi số Logistics cho doanh nghiệp toàn cầu, thúc đẩy bứt phá vận hành logistics.
            </p>
          </div>
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-3 text-sm text-white/80">
              {countries.map((c) => (
                <a key={c} href="#" className="hover:text-white">
                  {c}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/60">
          © 2025 design by Smartlog. All Rights Reserved.
        </div>

        {/* Watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center select-none -z-0"
        >
          <img
            src="/images/shared/logo/smartlog.png"
            alt=""
            className="w-[80%] max-w-[1200px] h-auto opacity-[0.08] brightness-0 invert"
          />
        </div>
      </div>
    </footer>
  );
}
