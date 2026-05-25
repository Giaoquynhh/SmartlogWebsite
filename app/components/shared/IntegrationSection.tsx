import FeatureAccordion, { AccordionItem } from "./FeatureAccordion";
import Editable from "../../editor/Editable";
import Reveal from "../Reveal";

export type IntegrationSectionProps = {
  /** id prefix (e.g. "stm.integration") */
  idPrefix?: string;
  title: string;
  description?: string;
  items: AccordionItem[];
  /** optional illustration path for the right side */
  illustration?: string;
};

const PLACEHOLDER_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#FFFFFF"/><text x="200" y="160" font-family="sans-serif" font-size="16" fill="#3543F6" text-anchor="middle" opacity="0.4">[Khung ảnh minh hoạ tích hợp]</text></svg>`
  );

export default function IntegrationSection({
  idPrefix = "integration",
  title,
  description,
  items,
  illustration,
}: IntegrationSectionProps) {
  return (
    <section className="py-16 lg:py-20 bg-[#F7F9FF]">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-start">
        <Reveal variant="left" className="lg:sticky lg:top-24">
          <Editable id={`${idPrefix}.title`} kind="text" as="h2" className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] leading-tight block">
            {title}
          </Editable>
          {description && (
            <Editable id={`${idPrefix}.description`} kind="text" as="p" className="mt-4 text-base text-[#615F78] leading-relaxed block">
              {description}
            </Editable>
          )}
          <div className="mt-8 flex items-center justify-center">
            <Editable
              id={`${idPrefix}.illustration`}
              kind="image"
              src={illustration ?? PLACEHOLDER_IMG}
              alt={title}
              className="w-full max-w-[480px] flex items-center justify-center animate-float-slow"
              imgClassName="w-full h-auto object-contain"
            />
          </div>
        </Reveal>
        <Reveal variant="right">
          <FeatureAccordion items={items} defaultOpen={0} idPrefix={`${idPrefix}.items`} />
        </Reveal>
      </div>
    </section>
  );
}
