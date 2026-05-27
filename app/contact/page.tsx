import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import EditorShell from "../editor/EditorShell";
import Editable from "../editor/Editable";
import {
  contactMethods,
  contactOffices,
  contactFormFields,
} from "../components/contact/data";

export const metadata = {
  title: "Liên hệ - Smartlog",
  description:
    "Kết nối với Smartlog. Để lại thông tin để đội ngũ của chúng tôi đồng hành cùng doanh nghiệp của bạn.",
};

function MethodIcon({ icon }: { icon: "phone" | "email" | "whatsapp" }) {
  if (icon === "phone") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"
          stroke="#3543F6"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (icon === "email") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="#3543F6"
          strokeWidth="1.8"
        />
        <path
          d="m3 7 9 6 9-6"
          stroke="#3543F6"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .18 5.32.18 11.88c0 2.1.55 4.13 1.59 5.93L0 24l6.36-1.67a11.84 11.84 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.32 11.88-11.88 0-3.17-1.23-6.16-3.43-8.42ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77.99 1-3.67-.24-.38a9.9 9.9 0 0 1-1.52-5.27c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.85 9.88Z"
        fill="#3543F6"
      />
      <path
        d="M17.5 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.41-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.89 1.23 3.09.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"
        fill="#3543F6"
      />
    </svg>
  );
}

export default async function ContactPage() {
  return (
    <EditorShell pathname="/contact">
      <main className="relative">
        <Header />

        {/* Hero — tall navy band matching blog hero height */}
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
              id="contact.hero.title"
              kind="text"
              as="h1"
              className="anim-fade-up text-5xl sm:text-6xl lg:text-[72px] leading-[1.05] font-bold tracking-tight text-[#ECF3FF] block"
            >
              Liên hệ
            </Editable>
          </div>
        </section>

        {/* Connect + Form — 1 unified card, 2 contact clusters + form */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-[1280px] px-6">
            <Reveal>
              <div className="rounded-[24px] border border-[#EDEEF1] bg-[#F7F8F8] px-6 py-10 lg:px-16 lg:py-14">
                <Editable
                  id="contact.connect.title"
                  kind="text"
                  as="h2"
                  className="text-center text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#333342] leading-tight block"
                >
                  Kết nối với Smartlog
                </Editable>

                {/* 2 contact clusters side-by-side */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div>
                    <Editable
                      id="contact.connect.methodsTitle"
                      kind="text"
                      as="h3"
                      className="text-base lg:text-lg font-bold text-[#333342] mb-5 block"
                    >
                      Liên hệ trực tiếp với chúng tôi
                    </Editable>
                    <ul className="space-y-5">
                      {contactMethods.map((m) => (
                        <li key={m.key} className="flex items-start gap-4">
                          <span className="mt-0.5 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#ECF3FF]">
                            <MethodIcon icon={m.icon} />
                          </span>
                          <div>
                            <Editable
                              id={`contact.connect.methods.${m.key}.label`}
                              kind="text"
                              as="div"
                              className="text-sm text-[#6B7280] block"
                            >
                              {m.label}
                            </Editable>
                            <Editable
                              id={`contact.connect.methods.${m.key}.value`}
                              kind="text"
                              as="div"
                              className="text-base lg:text-lg font-bold text-[#3543F6] block"
                            >
                              {m.value}
                            </Editable>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Editable
                      id="contact.connect.officesTitle"
                      kind="text"
                      as="h3"
                      className="text-base lg:text-lg font-bold text-[#333342] mb-5 block"
                    >
                      Liên hệ trực tiếp văn phòng
                    </Editable>
                    <ul className="space-y-5">
                      {contactOffices.map((o) => (
                        <li key={o.key} className="flex items-start gap-4">
                          <span className="mt-0.5 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#ECF3FF]">
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              aria-hidden
                            >
                              <path
                                d="M12 22s-7-7.58-7-12a7 7 0 1 1 14 0c0 4.42-7 12-7 12Z"
                                stroke="#3543F6"
                                strokeWidth="1.8"
                                strokeLinejoin="round"
                              />
                              <circle
                                cx="12"
                                cy="10"
                                r="2.5"
                                stroke="#3543F6"
                                strokeWidth="1.8"
                              />
                            </svg>
                          </span>
                          <div>
                            <Editable
                              id={`contact.connect.offices.${o.key}.city`}
                              kind="text"
                              as="div"
                              className="text-base lg:text-lg font-bold text-[#333342] block"
                            >
                              {o.city}
                            </Editable>
                            <Editable
                              id={`contact.connect.offices.${o.key}.address`}
                              kind="text"
                              as="p"
                              className="mt-1 text-sm text-[#6B7280] leading-relaxed block"
                            >
                              {o.address}
                            </Editable>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-10 lg:my-12 flex items-center gap-4">
                  <div className="flex-1 h-px bg-[#E5E8F0]" />
                  <Editable
                    id="contact.form.title"
                    kind="text"
                    as="div"
                    className="text-center text-base lg:text-lg font-bold text-[#333342] whitespace-nowrap"
                  >
                    Hoặc để lại lời nhắn, chúng tôi sẽ chủ động liên hệ!
                  </Editable>
                  <div className="flex-1 h-px bg-[#E5E8F0]" />
                </div>

                {/* Form */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                  {contactFormFields.map((f) =>
                    f.type === "textarea" ? (
                      <textarea
                        key={f.key}
                        name={f.key}
                        required={f.required}
                        placeholder={f.placeholder}
                        rows={4}
                        className="md:col-span-2 w-full rounded-xl border border-[#EDEEF1] bg-white px-4 py-3.5 text-sm text-[#333342] placeholder:text-[#B6BAC3] focus:outline-none focus:border-[#3543F6] focus:ring-4 focus:ring-[#3543F6]/15 transition-all resize-none"
                      />
                    ) : (
                      <input
                        key={f.key}
                        type={f.type}
                        name={f.key}
                        required={f.required}
                        placeholder={f.placeholder}
                        className="w-full rounded-xl border border-[#EDEEF1] bg-white px-4 py-3.5 text-sm text-[#333342] placeholder:text-[#B6BAC3] focus:outline-none focus:border-[#3543F6] focus:ring-4 focus:ring-[#3543F6]/15 transition-all"
                      />
                    ),
                  )}

                  <div className="md:col-span-2 mt-2 flex justify-center">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3543F6] hover:bg-[#2A36D6] text-white text-sm font-bold px-10 py-3.5 shadow-lg shadow-[#3543F6]/25 hover:-translate-y-0.5 transition-all"
                    >
                      <Editable
                        id="contact.form.submit"
                        kind="text"
                        as="span"
                      >
                        Nhận tư vấn 1-1
                      </Editable>
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </main>
    </EditorShell>
  );
}
