import Editable from "../editor/Editable";

const testimonials = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  name: `Lorem ipsum`,
  stars: 5,
  quote:
    "Lorem ipsum dolor sit amet consectetur. Tincidunt felis ipsum ut eros sagittis at. Blandit mauris viverra nec egestas.",
}));

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`w-3.5 h-3.5 ${
            i < count ? "text-[#ffb800]" : "text-gray-300"
          }`}
          fill="currentColor"
        >
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="bg-[#2933d9] text-white py-20 lg:py-28 relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(255,255,255,0.06) 0%, transparent 50%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-12 items-start">
            <div>
              <Editable id="home.testimonials.eyebrow" kind="text" as="p" className="text-base text-white/80 block">
                Các dự án triển khai nhận được nhiều
              </Editable>
              <Editable id="home.testimonials.title" kind="text" as="h2" className="mt-2 text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight block">
                Phản hồi tích cực từ khách hàng
              </Editable>
              <Editable id="home.testimonials.description" kind="text" as="p" className="mt-5 text-sm text-white/75 leading-relaxed max-w-md block">
                Lorem ipsum dolor sit amet consectetur. Tincidunt felis ipsum ut eros sagittis at. Blandit mauris viverra nec egestas.
              </Editable>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {testimonials.map((t, i) => (
                <article
                  key={t.id}
                  className={`bg-white text-[#0b1320] rounded-2xl p-5 shadow-md ${
                    i % 2 === 1 ? "sm:translate-y-6" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a] flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <Editable id={`home.testimonials.cards.${i}.name`} kind="text" as="div" className="font-bold text-sm">
                        {t.name}
                      </Editable>
                      <StarRating count={t.stars} />
                    </div>
                  </div>
                  <Editable id={`home.testimonials.cards.${i}.quote`} kind="text" as="p" className="mt-3 text-[13px] text-gray-700 leading-relaxed block">
                    {t.quote}
                  </Editable>
                </article>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
