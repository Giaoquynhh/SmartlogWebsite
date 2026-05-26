import Editable from "../../editor/Editable";
import Reveal from "../Reveal";

export type CoreValuesProps = {
  idPrefix?: string;
};

/**
 * "Giá trị cốt lõi" — clone 1:1 từ Figma node 3223-5388.
 *
 * Layout: heading center + khung 1600×1600 chứa hình minh hoạ
 * (PNG export trực tiếp từ Figma, gồm sẵn ngôi sao 5 cánh 3D + 5 icon + 5 cụm
 * text THỰC TẾ / TRÍ / TẦM / TÂM / TÍN với keywords).
 * Background section: `#F7F8F8`.
 *
 * Vì PNG đã bao gồm sẵn text từ Figma, ta KHÔNG overlay thêm text code-side
 * để tránh duplicate. Nếu sau này muốn edit text trong editor mode, sẽ cần
 * export riêng phần ngôi sao + icons (không có text) rồi overlay <Editable>.
 */
export default function CoreValues({ idPrefix = "about.coreValues" }: CoreValuesProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-[#F7F8F8] overflow-hidden">
      <div className="relative mx-auto max-w-[1600px] px-6">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-12">
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
            className="mt-4 text-base text-[#25272C] leading-[1.6] block"
          >
            Chúng tôi tin rằng một tổ chức bền vững phải được xây dựng từ những giá trị thật,
            là kim chỉ nam cho mọi hành động, quyết định và định hướng phát triển.
          </Editable>
        </div>

        {/* Khung 1600×1600 chứa toàn bộ illustration (sao + icon + text) */}
        <Reveal as="div" variant="scale">
          <div
            className="relative mx-auto"
            style={{
              width: "100%",
              maxWidth: "1280px",
              aspectRatio: "1600 / 1600",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about/values/core-values-star.png"
              alt="5 giá trị cốt lõi của Smartlog: Thực tế, Thực trí, Thực tầm, Thực tâm, Thực tín"
              className="absolute inset-0 w-full h-full object-contain select-none"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
