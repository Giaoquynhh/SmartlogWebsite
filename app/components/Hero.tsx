import Image from "next/image";
import { home } from "../assets";
import Editable from "../editor/Editable";

const stats = [
  { value: "2015", label: "Khởi đầu hành trình" },
  { value: "100+", label: "Khách hàng doanh nghiệp" },
  { value: "50+", label: "Đối tác chiến lược" },
  { value: "20+", label: "Ngành hàng" },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white pt-32 pb-20 lg:pt-40 lg:pb-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${home.hero.background})`,
        backgroundBlendMode: "screen",
        backgroundColor: "#0f1f5c",
      }}
    >
      <div
        className="pointer-events-none absolute hidden md:block overflow-hidden anim-fade-in delay-200"
        style={{
          top: "0",
          right: "0",
          bottom: "0",
          left: "50%",
        }}
      >
        <div className="relative w-full h-full animate-float-slow">
          <Image
            src={home.hero.truck}
            alt="Smartlog truck"
            fill
            priority
            sizes="(max-width: 1024px) 60vw, 800px"
            style={{ objectFit: "cover", objectPosition: "15% center" }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-[720px]">
          <Editable id="home.hero.title" kind="text" as="h1" className="anim-fade-up text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] leading-[1.2] font-bold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] block">
            Kiến tạo hệ sinh thái Logistics hàng đầu Việt Nam
          </Editable>
          <Editable id="home.hero.description" kind="text" as="p" className="anim-fade-up delay-200 mt-6 max-w-xl text-base sm:text-lg text-white/90 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)] block">
            Smartlog không ngừng đổi mới về công nghệ và giải pháp để doanh nghiệp Việt Nam có thể cạnh tranh ở tầm khu vực, trước nhất là ngay tại "sân nhà" Việt Nam.
          </Editable>
          <div className="mt-8 anim-fade-up delay-300">
            <a
              href="#products"
              className="cta-shimmer inline-flex items-center gap-2 rounded-full bg-[#1e3a8a] hover:bg-[#1e40af] transition-all hover:-translate-y-0.5 px-7 py-3.5 text-base font-semibold shadow-lg shadow-[#0a1a3f]/40"
            >
              <Editable id="home.hero.cta" kind="text" as="span">
                Tìm hiểu thêm
              </Editable>
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 max-w-xl">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="anim-fade-up rounded-2xl bg-[#0a1a3f]/60 backdrop-blur-md border border-white/15 px-5 py-4 transition-all hover:-translate-y-1 hover:bg-[#0a1a3f]/80 hover:border-white/30"
                style={{ animationDelay: `${400 + i * 100}ms` }}
              >
                <Editable id={`home.hero.stats.${i}.value`} kind="text" as="div" className="text-3xl sm:text-4xl font-bold text-white">
                  {s.value}
                </Editable>
                <Editable id={`home.hero.stats.${i}.label`} kind="text" as="div" className="mt-1 text-sm text-white/80">
                  {s.label}
                </Editable>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
