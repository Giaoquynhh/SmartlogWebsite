import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import EditorShell from "../editor/EditorShell";
import Editable from "../editor/Editable";
import NewsletterCta from "../components/shared/NewsletterCta";
import PartnersFilter from "../components/customers/PartnersFilter";
import {
  customerTestimonials,
  customerSteps,
} from "../components/customers/data";

export const metadata = {
  title: "Khách hàng - Smartlog",
  description:
    "Hơn 200+ doanh nghiệp đã tin nhiệm Smartlog đồng hành tái thiết lập quản lý Logistics với công nghệ thông minh và toàn diện.",
};

export default async function CustomersPage() {
  return (
    <EditorShell pathname="/customers">
      <main className="relative">
        <Header />

        {/* Hero — tall navy band matching blog/contact hero height */}
        <section
          className="relative overflow-hidden text-white min-h-[520px] lg:min-h-[680px] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-28"
          style={{ backgroundColor: "#161A50" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/hero/hero-decor-group-10.svg"
              alt=""
              className="absolute left-0 opacity-60"
              style={{ bottom: 0, width: "50%", height: "auto" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/hero/hero-decor-group-9.svg"
              alt=""
              className="absolute opacity-80"
              style={{ left: "20%", top: "25%", width: "16%", height: "auto" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/hero/hero-dot-pattern.svg"
              alt=""
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: "16%",
                height: "68%",
                width: "auto",
                maxWidth: "none",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(22,26,80,0) 4%, rgba(22,26,80,0.85) 94%)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <Editable
              id="customers.hero.title"
              kind="text"
              as="h1"
              className="anim-fade-up text-5xl sm:text-6xl lg:text-[72px] leading-[1.05] font-bold tracking-tight text-[#ECF3FF] block"
            >
              Khách hàng
            </Editable>
            <Editable
              id="customers.hero.description"
              kind="text"
              as="p"
              className="anim-fade-up delay-100 mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#ECF3FF]/90 block"
            >
              Là trung tâm trong hành trình chuyển đổi số Logistics và Chuỗi cung
              ứng.
            </Editable>
          </div>
        </section>

        {/* Hơn 200+ doanh nghiệp */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <Editable
                  id="customers.partners.title"
                  kind="text"
                  as="h2"
                  className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#333342] leading-tight block"
                >
                  Hơn 200+ doanh nghiệp
                </Editable>
                <Editable
                  id="customers.partners.subtitle"
                  kind="text"
                  as="p"
                  className="mt-4 max-w-2xl mx-auto text-base text-[#6B7280] block"
                >
                  Đã tin nhiệm để Smartlog đồng hành tái thiết lập quản lý
                  Logistics với công nghệ thông minh và toàn diện
                </Editable>
              </div>
            </Reveal>

            <PartnersFilter />

            <Reveal as="div" variant="scale" className="mt-12 lg:mt-16">
              <div className="rounded-2xl bg-gradient-to-r from-[#3543F6] to-[#242EAF] px-6 py-10 lg:px-12 text-center text-white shadow-lg shadow-[#3543F6]/25">
                <Editable
                  id="customers.cta.text"
                  kind="text"
                  as="p"
                  className="text-base lg:text-lg block"
                >
                  Bạn đã sẵn sàng trở thành doanh nghiệp tiếp theo gia nhập
                </Editable>
                <a
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white text-[#3543F6] hover:bg-[#ECF3FF] hover:-translate-y-0.5 transition-all px-6 py-3 text-sm font-bold"
                >
                  <Editable id="customers.cta.button" kind="text" as="span">
                    Liên hệ với chúng tôi ngay
                  </Editable>
                  <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Khách hàng nói về chúng tôi */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <Editable
                  id="customers.testimonials.title"
                  kind="text"
                  as="h2"
                  className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#333342] leading-tight block"
                >
                  &quot;Khách hàng nói về chúng tôi&quot;
                </Editable>
                <Editable
                  id="customers.testimonials.subtitle"
                  kind="text"
                  as="p"
                  className="mt-4 max-w-2xl mx-auto text-base text-[#6B7280] block"
                >
                  Đã tin nhiệm để Smartlog đồng hành tái thiết lập quản lý
                  Logistics với công nghệ thông minh và toàn diện
                </Editable>
              </div>
            </Reveal>

            <Reveal as="div" stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {customerTestimonials.map((t) => (
                <article
                  key={t.key}
                  className="rounded-2xl border border-[#EDEEF1] bg-white p-6 lg:p-8 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(53,67,246,0.25)] transition-all flex flex-col"
                >
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="h-16 lg:h-20 flex items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={t.logo}
                        alt={t.customer}
                        className="max-h-full max-w-[140px] object-contain"
                      />
                    </div>
                    <span className="inline-flex items-center justify-center rounded-full border border-[#615F78] text-[#615F78] text-sm font-bold px-5 py-2">
                      {t.productCode}
                    </span>
                  </div>
                  <div className="h-px bg-[#EDEEF1] mb-5" />
                  <Editable
                    id={`customers.testimonials.${t.key}.customer`}
                    kind="text"
                    as="div"
                    className="text-lg font-bold text-[#333342] block"
                  >
                    {t.customer}
                  </Editable>
                  <Editable
                    id={`customers.testimonials.${t.key}.quote`}
                    kind="text"
                    as="p"
                    className="mt-3 text-sm lg:text-base leading-relaxed text-[#615F78] block"
                  >
                    {t.quote}
                  </Editable>
                </article>
              ))}
            </Reveal>

            <Reveal as="div" className="mt-10 flex justify-center">
              <a
                href="/case-study"
                className="inline-flex items-center gap-2 rounded-xl bg-[#3543F6] hover:bg-[#2A36D6] text-white px-6 py-3 text-sm font-bold shadow-lg shadow-[#3543F6]/25 hover:-translate-y-0.5 transition-all"
              >
                <Editable id="customers.testimonials.cta" kind="text" as="span">
                  Khám phá thêm Case Study
                </Editable>
                <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>
        </section>

        {/* Cách chúng tôi đồng hành — 5 steps */}
        <section className="py-16 lg:py-24 bg-[#F7F8F8]">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center mb-12 lg:mb-16">
                <Editable
                  id="customers.steps.title"
                  kind="text"
                  as="h2"
                  className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#333342] leading-tight block"
                >
                  Cách chúng tôi đồng hành
                </Editable>
                <Editable
                  id="customers.steps.subtitle"
                  kind="text"
                  as="p"
                  className="mt-4 max-w-3xl mx-auto text-base text-[#6B7280] block"
                >
                  để biến thách thức thành cơ hội cho khách hàng
                </Editable>
              </div>
            </Reveal>

            <Reveal as="div" stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 lg:gap-x-10 justify-items-center">
              {customerSteps.map((s) => (
                <div
                  key={s.index}
                  className="flex flex-col items-center text-center max-w-[220px] hover:-translate-y-1 transition-all"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.icon}
                    alt={s.title}
                    className="h-28 w-28 lg:h-36 lg:w-36 object-contain"
                  />
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-5xl lg:text-6xl font-bold leading-none text-[#3543F6]">
                      {s.index}
                    </span>
                    <Editable
                      id={`customers.steps.${s.index}.title`}
                      kind="text"
                      as="p"
                      className="text-left text-sm lg:text-base font-normal text-[#333342] leading-snug block"
                    >
                      {s.title}
                    </Editable>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <NewsletterCta idPrefix="customers.newsletter" />

        <Footer />
      </main>
    </EditorShell>
  );
}
