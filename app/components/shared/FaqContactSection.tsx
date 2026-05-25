import FAQ from "./FAQ";
import LeadForm from "./LeadForm";
import type { FaqItem } from "./FAQ";

export type FaqContactSectionProps = {
  /** id prefix for FAQ (e.g. "som.faq") */
  faqIdPrefix?: string;
  faqTitle?: string;
  faqItems: FaqItem[];
  /** id prefix for the contact form (e.g. "som.contact") */
  contactIdPrefix?: string;
  contactTitle?: string;
  contactSubtitle?: string;
};

/**
 * Bottom section of product pages: FAQ accordion on the left,
 * dark-blue lead form on the right. Matches the Figma layout where
 * "Câu hỏi thường gặp" and "Liên hệ ngay" sit side-by-side.
 */
export default function FaqContactSection({
  faqIdPrefix = "faq",
  faqTitle = "Câu hỏi thường gặp",
  faqItems,
  contactIdPrefix = "contact",
  contactTitle = "Liên hệ ngay",
  contactSubtitle = "Để lại thông tin chúng tôi sẽ tư vấn chi tiết",
}: FaqContactSectionProps) {
  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
        <div>
          <FAQ idPrefix={faqIdPrefix} title={faqTitle} items={faqItems} embedded />
        </div>
        <div className="lg:sticky lg:top-24">
          <LeadForm
            idPrefix={contactIdPrefix}
            title={contactTitle}
            subtitle={contactSubtitle}
            variant="dark"
            embedded
          />
        </div>
      </div>
    </section>
  );
}
