import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import EditorShell from "../editor/EditorShell";
import Editable from "../editor/Editable";
import PartnerExperience from "../components/global/PartnerExperience";
import FaqAccordion from "../components/global/FaqAccordion";
import {
  globalStats,
  globalBrandLogos,
  globalAwards,
  globalSuccessStory,
  globalPartners,
  globalReachSteps,
  globalSolutions,
} from "../components/global/data";

export const metadata = {
  title: "Global - Smartlog | Power of Smartlog logistics ecosystem",
  description:
    "Delivering value across global logistics networks. First choice for Logistics Digital Transformation.",
};

export default async function GlobalPage() {
  return (
    <EditorShell pathname="/global">
      <main className="relative">
        <Header />

        {/* Hero — tall navy band matching blog/contact hero height */}
        <section
          className="relative overflow-hidden text-white min-h-[520px] lg:min-h-[680px] flex items-center pt-32 pb-24 lg:pt-40 lg:pb-32"
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
              id="global.hero.title"
              kind="text"
              as="h1"
              className="anim-fade-up hero-gradient-text text-4xl sm:text-5xl lg:text-[64px] leading-[1.15] font-bold tracking-tight block"
            >
              Power of Smartlog logistics ecosystem
            </Editable>
            <Editable
              id="global.hero.subtitle"
              kind="text"
              as="p"
              className="anim-fade-up delay-100 mt-5 text-xl sm:text-2xl lg:text-[28px] font-medium text-[#ECF3FF]/90 block"
            >
              Delivering value across global logistics networks
            </Editable>
          </div>
        </section>

        {/* First choice + stats + world map */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <Editable
                  id="global.firstChoice.title"
                  kind="text"
                  as="h2"
                  className="global-section-title text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#333342] leading-tight whitespace-pre-line"
                >
                  {"First choice for\nLogistics Digital Transformation"}
                </Editable>
              </div>
            </Reveal>

            {/* 4 stats with "Proven by performance" label on the left */}
            <Reveal as="div" className="stats-card mt-10 rounded-2xl border border-[#EDEEF1] bg-white px-6 py-8 lg:px-12 lg:py-10 shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-6 items-center">
                <Editable
                  id="global.stats.label"
                  kind="text"
                  as="div"
                  className="col-span-2 lg:col-span-1 text-lg lg:text-xl font-bold text-[#333342] block"
                >
                  Proven by performance
                </Editable>
                {globalStats.map((s, i) => (
                  <div key={i} className="kpi-pop text-center">
                    <div
                      className="stat-value text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-none whitespace-nowrap"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, #3543F6 0%, #242EAF 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "transparent",
                      }}
                    >
                      <Editable
                        id={`global.stats.${i}.value`}
                        kind="text"
                        as="span"
                      >
                        {s.value}
                      </Editable>
                    </div>
                    <Editable
                      id={`global.stats.${i}.label`}
                      kind="text"
                      as="div"
                      className="mt-2 text-xs lg:text-sm text-[#6B7280] leading-snug block"
                    >
                      {s.label}
                    </Editable>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* World map */}
            <Reveal as="div" variant="scale" className="mt-12 lg:mt-16">
              <div className="rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/global/world-map.png"
                  alt="Smartlog global presence"
                  className="world-map-breathe w-full h-auto"
                  style={{ filter: "drop-shadow(0 2px 12px rgba(53,67,246,0.08))" }}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Trusted by leading global brands — marquee */}
        <section className="py-16 lg:py-24 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <Editable
                id="global.brands.title"
                kind="text"
                as="h2"
                className="text-center text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#333342] leading-tight block mb-10 lg:mb-12"
              >
                Trusted by leading global brands
              </Editable>
            </Reveal>
          </div>

          {/* 3 marquee rows */}
          <div className="space-y-5">
            {[0, 1, 2].map((row) => (
              <div key={row} className="overflow-hidden">
                <div className={row === 1 ? "marquee-track-reverse" : "marquee-track"}>
                  {[...Array(2)].flatMap((_, dup) =>
                    globalBrandLogos.map((b, i) => (
                      <div
                        key={`${row}-${dup}-${i}`}
                        className="mx-2 inline-flex items-center justify-center rounded-2xl border border-[#EDEEF1] bg-white shadow-[0_4px_24px_rgba(81,79,99,0.06)] px-8 py-5 min-w-[232px] h-[152px]"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={b.src}
                          alt={b.name}
                          className="max-h-[104px] max-w-[184px] object-contain opacity-70"
                        />
                      </div>
                    )),
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Globally Recognized Excellence */}
        <section className="py-16 lg:py-24 bg-[#F7F8F8]">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <Editable
                  id="global.awards.title"
                  kind="text"
                  as="h2"
                  className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#333342] leading-tight block"
                >
                  Globally Recognized Excellence
                </Editable>
                <Editable
                  id="global.awards.subtitle"
                  kind="text"
                  as="p"
                  className="mt-4 max-w-2xl mx-auto text-base text-[#6B7280] block"
                >
                  Setting new standards for global logistics challenges
                </Editable>
              </div>
            </Reveal>

            <Reveal as="div" stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {globalAwards.map((a) => (
                <article
                  key={a.key}
                  className="award-card rounded-2xl bg-white border border-[#EDEEF1] p-8 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(53,67,246,0.18)] transition-all"
                >
                  <div className="aspect-[4/3] w-full rounded-xl bg-[#ECF3FF] mb-5 flex items-center justify-center">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                      className="award-icon"
                    >
                      <path
                        d="M12 2l3 6 6 1-4.5 4 1 6L12 16l-5.5 3 1-6L3 9l6-1z"
                        fill="#3543F6"
                      />
                    </svg>
                  </div>
                  <Editable
                    id={`global.awards.${a.key}.title`}
                    kind="text"
                    as="h3"
                    className="text-xl lg:text-2xl font-bold text-[#333342] block"
                  >
                    {a.title}
                  </Editable>
                  <Editable
                    id={`global.awards.${a.key}.subtitle`}
                    kind="text"
                    as="p"
                    className="mt-2 text-sm text-[#6B7280] block"
                  >
                    {a.subtitle}
                  </Editable>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Success Stories — video + customer quote */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <Editable
                  id="global.success.title"
                  kind="text"
                  as="h2"
                  className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#333342] leading-tight block"
                >
                  Success Stories
                </Editable>
                <Editable
                  id="global.success.subtitle"
                  kind="text"
                  as="p"
                  className="mt-3 text-base text-[#6B7280] italic block"
                >
                  See &ldquo;How [Customer] drive efficiency with Smartlog&rdquo;
                </Editable>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center">
              <Reveal variant="left">
                <div className="group relative aspect-video w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(53,67,246,0.35)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/global/success-story.png"
                    alt="Customer success story"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* Gradient overlay top */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-24 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)",
                    }}
                  />
                  {/* Top label */}
                  <div className="absolute top-4 left-4 text-sm text-white/95 font-light drop-shadow">
                    Made at Theorem with love
                  </div>
                  {/* Play button */}
                  <button
                    type="button"
                    aria-label="Play video"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="inline-flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-white/95 group-hover:bg-white shadow-xl group-hover:scale-110 transition-all">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path d="M8 5v14l11-7z" fill="#3543F6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </Reveal>

              <Reveal variant="right" className="space-y-5">
                <Editable
                  id="global.success.story.title"
                  kind="text"
                  as="h3"
                  className="text-xl lg:text-2xl font-bold text-[#333342] leading-snug block"
                >
                  {globalSuccessStory.title}
                </Editable>
                <Editable
                  id="global.success.story.quote"
                  kind="text"
                  as="p"
                  className="text-base text-[#615F78] italic leading-relaxed block"
                >
                  {`“${globalSuccessStory.quote}”`}
                </Editable>
                <div className="pt-2">
                  <Editable
                    id="global.success.story.name"
                    kind="text"
                    as="div"
                    className="text-base font-bold text-[#333342] block"
                  >
                    {globalSuccessStory.name}
                  </Editable>
                  <Editable
                    id="global.success.story.position"
                    kind="text"
                    as="div"
                    className="text-sm text-[#6B7280] block"
                  >
                    {globalSuccessStory.position}
                  </Editable>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#3543F6] hover:gap-3 transition-all"
                >
                  <Editable id="global.success.story.cta" kind="text" as="span">
                    Explore full story
                  </Editable>
                  <span aria-hidden>→</span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Our Partnership */}
        <section className="py-16 lg:py-24 bg-[#F7F8F8]">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <Editable
                  id="global.partnership.title"
                  kind="text"
                  as="h2"
                  className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#333342] leading-tight block"
                >
                  Our Partnership
                </Editable>
                <Editable
                  id="global.partnership.subtitle"
                  kind="text"
                  as="p"
                  className="mt-4 max-w-2xl mx-auto text-base text-[#6B7280] block"
                >
                  We unify a global network of expertise, cultivating a dynamic
                  ecosystem to lead the future of Logistics & Supply Chain
                </Editable>
              </div>
            </Reveal>

            <Reveal as="div" stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {globalPartners.map((p) => (
                <article
                  key={p.key}
                  className="rounded-2xl bg-white border border-[#EDEEF1] p-7 lg:p-8 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(53,67,246,0.18)] transition-all"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="h-12 w-12 rounded-full bg-[#ECF3FF] flex-shrink-0" />
                    <div>
                      <Editable
                        id={`global.partnership.${p.key}.name`}
                        kind="text"
                        as="div"
                        className="text-base font-bold text-[#333342] block"
                      >
                        {p.name}
                      </Editable>
                      <a
                        href="#"
                        className="text-sm text-[#3543F6] hover:underline"
                      >
                        <Editable
                          id={`global.partnership.${p.key}.website`}
                          kind="text"
                          as="span"
                        >
                          {p.website}
                        </Editable>
                      </a>
                    </div>
                  </div>
                  <Editable
                    id={`global.partnership.${p.key}.description`}
                    kind="text"
                    as="p"
                    className="text-sm lg:text-base leading-relaxed text-[#615F78] block"
                  >
                    {p.description}
                  </Editable>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm text-[#6B7280]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M12 22s-7-7.58-7-12a7 7 0 1 1 14 0c0 4.42-7 12-7 12Z"
                        stroke="#6B7280"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                        stroke="#6B7280"
                        strokeWidth="1.8"
                      />
                    </svg>
                    <Editable
                      id={`global.partnership.${p.key}.location`}
                      kind="text"
                      as="span"
                    >
                      {p.location}
                    </Editable>
                  </div>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Partner Experience — 3-slide carousel */}
        <section className="py-16 lg:py-24 bg-[#F7F8F8]">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <Editable
                  id="global.experience.title"
                  kind="text"
                  as="h2"
                  className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#333342] leading-tight block"
                >
                  Partner Experience
                </Editable>
                <Editable
                  id="global.experience.subtitle"
                  kind="text"
                  as="p"
                  className="mt-4 max-w-2xl mx-auto text-base text-[#6B7280] block"
                >
                  Beyond solutions, Smartlog is an elite partner, empowering
                  growth through seamless connectivity and collective impact
                </Editable>
              </div>
            </Reveal>

            <Reveal variant="scale">
              <PartnerExperience />
            </Reveal>
          </div>
        </section>

        {/* Expand your reach — 4 step cards 2x2 */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center mb-12">
                <Editable
                  id="global.reach.title"
                  kind="text"
                  as="h2"
                  className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#333342] leading-tight block"
                >
                  Expand your reach and grow your business
                </Editable>
                <Editable
                  id="global.reach.subtitle"
                  kind="text"
                  as="p"
                  className="mt-4 max-w-2xl mx-auto text-base text-[#6B7280] block"
                >
                  Beyond solutions, Smartlog is an elite partner, empowering
                  growth through seamless connectivity and collective impact
                </Editable>
              </div>
            </Reveal>

            <Reveal as="div" stagger className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {globalReachSteps.map((s) => (
                <div
                  key={s.index}
                  className="flex items-start gap-4 rounded-2xl bg-white border border-[#EDEEF1] p-6 lg:p-7 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(53,67,246,0.2)] transition-all"
                >
                  <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#ECF3FF] text-xl font-bold text-[#3543F6]">
                    {s.index}
                  </div>
                  <div>
                    <Editable
                      id={`global.reach.${s.index}.title`}
                      kind="text"
                      as="h3"
                      className="text-base lg:text-lg font-bold text-[#333342] leading-tight block"
                    >
                      {s.title}
                    </Editable>
                    <Editable
                      id={`global.reach.${s.index}.description`}
                      kind="text"
                      as="p"
                      className="mt-2 text-sm text-[#6B7280] leading-relaxed block"
                    >
                      {s.description}
                    </Editable>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* FAQs + Another Questions + Contact us */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left column: FAQs + Another Questions */}
              <Reveal variant="left" className="space-y-10">
                <div>
                  <Editable
                    id="global.faq.title"
                    kind="text"
                    as="h2"
                    className="text-center text-3xl lg:text-[40px] font-bold text-[#333342] leading-tight block"
                  >
                    What you need to know?
                  </Editable>
                  <Editable
                    id="global.faq.subtitle"
                    kind="text"
                    as="p"
                    className="mt-2 text-center text-base text-[#6B7280] italic block mb-8"
                  >
                    FAQs
                  </Editable>
                  <FaqAccordion />
                </div>

                <div className="rounded-2xl border border-[#EDEEF1] bg-[#F7F8F8] p-6 lg:p-8">
                  <Editable
                    id="global.another.title"
                    kind="text"
                    as="h3"
                    className="text-center text-2xl font-bold text-[#333342] mb-6 block"
                  >
                    Another Questions
                  </Editable>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your work email"
                      className="w-full rounded-xl border border-[#EDEEF1] bg-white px-4 py-3 text-sm text-[#333342] placeholder:text-[#B6BAC3] focus:outline-none focus:border-[#3543F6] focus:ring-4 focus:ring-[#3543F6]/15 transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Add your question/offer"
                      className="w-full rounded-xl border border-[#EDEEF1] bg-white px-4 py-3 text-sm text-[#333342] placeholder:text-[#B6BAC3] focus:outline-none focus:border-[#3543F6] focus:ring-4 focus:ring-[#3543F6]/15 transition-all"
                    />
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#3543F6] hover:bg-[#2A36D6] text-white text-sm font-bold px-6 py-3 shadow-lg shadow-[#3543F6]/25 hover:-translate-y-0.5 transition-all"
                    >
                      <Editable id="global.another.submit" kind="text" as="span">
                        Send Us
                      </Editable>
                    </button>
                    <p className="text-xs text-[#6B7280] text-center italic">
                      Your Canva profile name will be shared. Never submit passwords
                    </p>
                  </form>
                </div>
              </Reveal>

              {/* Right column: Contact us form */}
              <Reveal
                variant="right"
                className="rounded-2xl p-6 lg:p-10 text-white shadow-[0_24px_60px_-30px_rgba(53,67,246,0.35)]"
              >
                <div
                  className="rounded-2xl"
                  style={{
                    backgroundColor: "#3543F6",
                  }}
                >
                  <div className="p-6 lg:p-10">
                    <Editable
                      id="global.contact.title"
                      kind="text"
                      as="h2"
                      className="text-center text-3xl lg:text-[40px] font-bold leading-tight mb-8 block"
                    >
                      Contact us
                    </Editable>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                      <input
                        type="text"
                        placeholder="Full name"
                        className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/70 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number (with Country Code)"
                        className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/70 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/70 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all"
                      />
                      <input
                        type="text"
                        placeholder="Company name"
                        className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/70 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                      <select
                        defaultValue=""
                        className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all appearance-none"
                      >
                        <option value="" className="text-[#333342]">
                          Country
                        </option>
                        <option className="text-[#333342]">Vietnam</option>
                        <option className="text-[#333342]">Singapore</option>
                        <option className="text-[#333342]">Other</option>
                      </select>
                      <select
                        defaultValue=""
                        className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm text-white focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all appearance-none"
                      >
                        <option value="" className="text-[#333342]">
                          Industry
                        </option>
                        <option className="text-[#333342]">Logistics</option>
                        <option className="text-[#333342]">Retail</option>
                        <option className="text-[#333342]">FMCG</option>
                      </select>
                    </div>

                    <p className="text-sm font-bold mb-3">
                      Which solution are you interested in?
                    </p>
                    <div className="space-y-2 mb-5">
                      {globalSolutions.map((s) => (
                        <label
                          key={s.code}
                          className="solution-row flex items-center gap-2 text-sm cursor-pointer hover:opacity-90"
                        >
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-white/40 bg-white/10 text-white accent-white"
                          />
                          <span>{s.name}</span>
                        </label>
                      ))}
                    </div>

                    <textarea
                      placeholder="Your message"
                      rows={4}
                      className="w-full rounded-xl bg-white/15 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/70 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all resize-none mb-5"
                    />

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#3543F6] hover:bg-[#ECF3FF] hover:-translate-y-0.5 transition-all px-6 py-3.5 text-sm font-bold shadow-lg"
                    >
                      <Editable id="global.contact.submit" kind="text" as="span">
                        Book a meeting
                      </Editable>
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </EditorShell>
  );
}
