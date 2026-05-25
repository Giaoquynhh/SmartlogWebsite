import Editable from "../../editor/Editable";
import Reveal from "../Reveal";

export type WhyCard = {
  /** stable id used as editable key (e.g. "stm.why.0") */
  id?: string;
  title: string;
  description: string;
  /** path to image; if omitted, a placeholder is shown */
  image?: string;
};

export type WhyDifferentProps = {
  title?: React.ReactNode;
  cards: WhyCard[];
};

const PLACEHOLDER_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#F2F6FF"/><text x="200" y="160" font-family="sans-serif" font-size="16" fill="#3543F6" text-anchor="middle" opacity="0.5">[Khung ảnh]</text></svg>`
  );

export default function WhyDifferent({
  title = "Điều gì khiến Smartlog trở nên khác biệt và ưu việt",
  cards,
}: WhyDifferentProps) {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] text-center max-w-3xl mx-auto">
          {title}
        </h2>
        <Reveal as="div" stagger className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => {
            const baseId = c.id ?? `why.${i}`;
            return (
              <article
                key={i}
                className="group card-lift rounded-3xl bg-white border border-[#EDEEF1] overflow-hidden shadow-[0_4px_24px_rgba(15,23,42,0.06)] flex flex-col hover:border-[#3543F6]/30"
              >
                <div className="aspect-[4/3] bg-[#F2F6FF] flex items-center justify-center overflow-hidden">
                  <Editable
                    id={`${baseId}.image`}
                    kind="image"
                    src={c.image ?? PLACEHOLDER_IMG}
                    alt={c.title}
                    className="w-full h-full flex items-center justify-center"
                    imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <Editable id={`${baseId}.title`} kind="text" as="h3" className="text-lg font-bold text-[#333342] leading-snug">
                    {c.title}
                  </Editable>
                  <Editable id={`${baseId}.description`} kind="text" as="p" className="mt-3 text-[14px] text-[#615F78] leading-relaxed">
                    {c.description}
                  </Editable>
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
