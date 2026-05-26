import Editable from "../../editor/Editable";
import Reveal from "../Reveal";
import { coreValues } from "./data";

export type CoreValuesProps = {
  idPrefix?: string;
};

/**
 * 5 giá trị cốt lõi: THỰC TẾ / THỰC TRÍ / THỰC TẦM / THỰC TÂM / THỰC TÍN.
 * Layout: heading center + 5 cards màu riêng theo grid responsive.
 */
export default function CoreValues({ idPrefix = "about.coreValues" }: CoreValuesProps) {
  return (
    <section className="py-16 lg:py-24 bg-[#F7F8F8]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <Editable
            id={`${idPrefix}.title`}
            kind="text"
            as="h2"
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#333342] leading-tight block"
          >
            Giá trị cốt lõi
          </Editable>
          <Editable
            id={`${idPrefix}.description`}
            kind="text"
            as="p"
            className="mt-4 text-base text-[#25272C] leading-relaxed block"
          >
            Chúng tôi tin rằng một tổ chức bền vững phải được xây dựng từ những giá trị thật,
            là kim chỉ nam cho mọi hành động, quyết định và định hướng phát triển.
          </Editable>
        </div>

        <Reveal as="div" stagger className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreValues.map((v, i) => (
            <div
              key={v.name}
              className="rounded-2xl bg-white p-6 lg:p-7 shadow-[0_4px_24px_rgba(15,23,42,0.06)] border border-[#EDEEF1] hover:-translate-y-1 transition-transform"
            >
              <div
                aria-hidden
                className="h-1.5 w-12 rounded-full mb-5"
                style={{ backgroundColor: v.color }}
              />
              <h3
                className="text-xl lg:text-2xl font-black tracking-wider mb-4"
                style={{ color: v.color }}
              >
                <Editable
                  id={`${idPrefix}.items.${i}.name`}
                  kind="text"
                  as="span"
                >
                  {v.name}
                </Editable>
              </h3>
              <ul className="space-y-2 text-sm text-[#25272C]">
                {v.keywords.map((kw, k) => (
                  <li key={k} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: v.color }}
                    />
                    <Editable
                      id={`${idPrefix}.items.${i}.keywords.${k}`}
                      kind="text"
                      as="span"
                    >
                      {kw}
                    </Editable>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
