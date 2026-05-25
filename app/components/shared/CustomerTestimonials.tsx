import Editable from "../../editor/Editable";
import Reveal from "../Reveal";

export type CustomerTestimonialCard = {
  /** stable id (e.g. "som.testimonials.0") */
  id?: string;
  /** path to company logo image; placeholder shown if missing */
  logo?: string;
  /** company name shown next to the logo */
  name: string;
  /** short company description */
  description: string;
  /** the testimonial quote itself */
  quote: string;
};

export type CustomerTestimonialsProps = {
  /** id prefix used to derive ids when card.id is missing (e.g. "som.testimonials") */
  idPrefix?: string;
  /** Section title — component wraps it in <Editable> automatically. */
  title?: string;
  cards: CustomerTestimonialCard[];
};

const LOGO_PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><rect width="80" height="80" rx="12" fill="#F7F9FF"/><text x="40" y="46" font-family="sans-serif" font-size="11" fill="#3543F6" text-anchor="middle" opacity="0.5">[Logo]</text></svg>`
  );

export default function CustomerTestimonials({
  idPrefix = "testimonials",
  title = "Và nhận được nhiều phản hồi tích cực",
  cards,
}: CustomerTestimonialsProps) {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Editable
          id={`${idPrefix}.title`}
          kind="text"
          as="h2"
          className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] text-center max-w-3xl mx-auto block"
        >
          {title}
        </Editable>

        <Reveal as="div" stagger className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const cid = c.id ?? `${idPrefix}.${i}`;
            return (
              <article
                key={i}
                className="card-lift rounded-3xl bg-white border border-[#EDEEF1] p-6 lg:p-7 shadow-[0_4px_24px_rgba(15,23,42,0.06)] flex flex-col"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F7F9FF] border border-[#EDEEF1] flex items-center justify-center overflow-hidden flex-shrink-0">
                    <Editable
                      id={`${cid}.logo`}
                      kind="image"
                      src={c.logo ?? LOGO_PLACEHOLDER}
                      alt={c.name}
                      className="w-full h-full flex items-center justify-center"
                      imgClassName="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <Editable
                      id={`${cid}.name`}
                      kind="text"
                      as="div"
                      className="font-bold text-[#333342] text-base leading-tight"
                    >
                      {c.name}
                    </Editable>
                    <Editable
                      id={`${cid}.description`}
                      kind="text"
                      as="div"
                      className="mt-0.5 text-[12px] text-[#615F78] leading-snug"
                    >
                      {c.description}
                    </Editable>
                  </div>
                </div>

                <Editable
                  id={`${cid}.quote`}
                  kind="text"
                  as="p"
                  className="mt-5 text-[14px] text-[#25272C] leading-relaxed italic block"
                >
                  {c.quote}
                </Editable>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
