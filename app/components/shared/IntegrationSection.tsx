import FeatureAccordion, { AccordionItem } from "./FeatureAccordion";

export type IntegrationSectionProps = {
  title: string;
  description?: string;
  items: AccordionItem[];
  /** optional illustration path for the right side */
  illustration?: string;
};

export default function IntegrationSection({
  title,
  description,
  items,
  illustration,
}: IntegrationSectionProps) {
  return (
    <section className="py-16 lg:py-20 bg-[#F7F9FF]">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div className="lg:sticky lg:top-24">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base text-[#615F78] leading-relaxed">
              {description}
            </p>
          )}
          {illustration ? (
            <div className="mt-8 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={illustration}
                alt={title}
                className="w-full max-w-[480px] h-auto object-contain"
              />
            </div>
          ) : (
            <div className="mt-8 aspect-[4/3] rounded-3xl border border-[#EDEEF1] bg-white flex items-center justify-center text-[#3543F6]/40 text-sm overflow-hidden">
              <div className="text-center px-4">
                <div className="mx-auto w-14 h-14 rounded-2xl border border-dashed border-[#3543F6]/40 mb-2 flex items-center justify-center">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                    <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span>[Khung ảnh minh hoạ tích hợp]</span>
              </div>
            </div>
          )}
        </div>
        <FeatureAccordion items={items} defaultOpen={0} />
      </div>
    </section>
  );
}
