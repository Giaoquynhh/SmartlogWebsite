import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductHero from "../components/shared/ProductHero";
import IntegrationSection from "../components/shared/IntegrationSection";
import CustomerLogosGrid from "../components/shared/CustomerLogosGrid";
import WhyDifferent from "../components/shared/WhyDifferent";
import CustomerTestimonials from "../components/shared/CustomerTestimonials";
import StatsBand from "../components/shared/StatsBand";
import FaqContactSection from "../components/shared/FaqContactSection";
import OtherSolutions from "../components/shared/OtherSolutions";
import CtaBanner from "../components/shared/CtaBanner";
import SomChannels from "../components/som/SomChannels";
import {
  somFeatures,
  somChannels,
  somWhyCards,
  somStats,
  somFaqs,
  somTestimonials,
} from "../components/som/data";
import EditorShell from "../editor/EditorShell";
import Editable from "../editor/Editable";
import { som as somAssets } from "../assets";

export const metadata = {
  title:
    "SOM - Smartlog Order Management | Quản lý đơn hàng đa kênh trên một nền tảng",
  description:
    "SOM giúp bạn quản lý vòng đời đơn hàng và toàn bộ hoạt động bán hàng đa kênh, qua việc tích hợp linh hoạt các sàn TMĐT và hãng vận chuyển.",
};

// The 8 SOM features now drive the SomChannels accordion (matches Figma).
const somFeaturesWithIds = somFeatures.map((it, i) => ({
  ...it,
  id: `som.channels.items.${i}`,
}));
const somChannelsWithIds = somChannels.map((it, i) => ({
  ...it,
  id: `som.integration.items.${i}`,
}));
const somWhyCardsWithIds = somWhyCards.map((c, i) => ({
  ...c,
  id: `som.why.${i}`,
}));
const somStatsWithIds = somStats.map((s, i) => ({
  ...s,
  id: `som.stats.${i}`,
}));
const somFaqsWithIds = somFaqs.map((f, i) => ({
  ...f,
  id: `som.faq.${i}`,
}));
const somTestimonialsWithIds = somTestimonials.map((t, i) => ({
  ...t,
  id: `som.testimonials.${i}`,
}));

export default async function SomPage() {
  return (
    <EditorShell pathname="/som">
      <main className="relative">
        <Header />

        <ProductHero
          badge={
            <Editable id="som.hero.badge" kind="text" as="span">
              SOM · SaaS
            </Editable>
          }
          title={
            <Editable id="som.hero.title" kind="text" as="span">
              SOM — Giải pháp quản lý đơn hàng trên một nền tảng duy nhất
            </Editable>
          }
          description={
            <Editable id="som.hero.description" kind="text" as="span">
              SOM giúp bạn quản lý vòng đời đơn hàng và toàn bộ hoạt động bán hàng đa kênh, qua việc tích hợp linh hoạt các sàn TMĐT và hãng vận chuyển.
            </Editable>
          }
          editableIllustrationId="som.hero.illustration"
        />

        <SomChannels items={somFeaturesWithIds} />

        <IntegrationSection
          idPrefix="som.integration"
          title="Đồng bộ đa kênh thông minh với hệ sinh thái phần mềm doanh nghiệp"
          description="SOM dễ dàng tích hợp với các hệ thống hiện có, từ ERP, kế toán, TMS đến thiết bị phần cứng như handheld — giúp dữ liệu xuyên suốt, vận hành liền mạch."
          items={somChannelsWithIds}
          illustration={somAssets.integration.illustration}
        />

        <CustomerLogosGrid
          editableIdPrefix="som.logos"
          title={
            <Editable id="som.logos.title" kind="text" as="span">
              Những khách hàng đã tin tưởng Smartlog
            </Editable>
          }
          description={
            <Editable id="som.logos.description" kind="text" as="span">
              Đã và đang là nhà cung cấp giải pháp cho hơn 150 doanh nghiệp Logistics, Sản xuất, Thương mại và Phân phối...
            </Editable>
          }
          ctaLabel={
            <Editable id="som.logos.cta" kind="text" as="span">
              Khám phá câu chuyện của khách hàng
            </Editable>
          }
        />

        <CustomerTestimonials
          idPrefix="som.testimonials"
          title="Và nhận được nhiều phản hồi tích cực"
          cards={somTestimonialsWithIds}
        />

        <WhyDifferent
          title={
            <Editable id="som.why.title" kind="text" as="span">
              Điều gì khiến Smartlog trở nên khác biệt và ưu việt
            </Editable>
          }
          cards={somWhyCardsWithIds}
        />

        <StatsBand
          idPrefix="som.stats"
          title="Những con số biết nói"
          stats={somStatsWithIds}
          ctaLabel="Nhận tư vấn 1-1 từ các chuyên gia"
        />

        <CtaBanner
          label={
            <Editable id="som.bottomCta" kind="text" as="span">
              Khám phá câu chuyện của khách hàng
            </Editable>
          }
        />

        <FaqContactSection
          faqIdPrefix="som.faq"
          faqItems={somFaqsWithIds}
          contactIdPrefix="som.contact"
        />

        <OtherSolutions idPrefix="som.others" excludeCode="SOM" />

        <Footer />
      </main>
    </EditorShell>
  );
}
