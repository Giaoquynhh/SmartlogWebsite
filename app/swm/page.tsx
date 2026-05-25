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
import SwmWorkflow from "../components/swm/SwmWorkflow";
import SwmHeroIllustration from "../components/swm/SwmHeroIllustration";
import {
  swmFeatures,
  swmIntegration,
  swmWhyCards,
  swmStats,
  swmFaqs,
  swmTestimonials,
} from "../components/swm/data";
import EditorShell from "../editor/EditorShell";
import Editable from "../editor/Editable";
import { swm as swmAssets } from "../assets";

export const metadata = {
  title:
    "SWM - Smartlog Warehouse Management | Giải pháp quản lý kho hàng toàn diện",
  description:
    "SWM là nền tảng vận hành kho hiện đại, kiểm soát toàn bộ luồng hàng — nhập, cất, soạn, xuất — với độ chính xác 99%.",
};

// The 8 SWM features now drive the SwmWorkflow accordion (matches Figma).
const swmFeaturesWithIds = swmFeatures.map((it, i) => ({
  ...it,
  id: `swm.workflow.items.${i}`,
}));
const swmIntegrationWithIds = swmIntegration.map((it, i) => ({
  ...it,
  id: `swm.integration.items.${i}`,
}));
const swmWhyCardsWithIds = swmWhyCards.map((c, i) => ({
  ...c,
  id: `swm.why.${i}`,
}));
const swmStatsWithIds = swmStats.map((s, i) => ({
  ...s,
  id: `swm.stats.${i}`,
}));
const swmFaqsWithIds = swmFaqs.map((f, i) => ({
  ...f,
  id: `swm.faq.${i}`,
}));
const swmTestimonialsWithIds = swmTestimonials.map((t, i) => ({
  ...t,
  id: `swm.testimonials.${i}`,
}));

export default async function SwmPage() {
  return (
    <EditorShell pathname="/swm">
      <main className="relative">
        <Header />

        <ProductHero
          title={
            <Editable id="swm.hero.title" kind="text" as="span">
              SWM — Giải pháp quản lý kho hàng toàn diện cho doanh nghiệp sản xuất, phân phối, bán lẻ và logistics
            </Editable>
          }
          description={
            <Editable id="swm.hero.description" kind="text" as="span">
              Là nền tảng vận hành kho hiện đại giúp doanh nghiệp kiểm soát toàn bộ luồng hàng — từ nhập, cất, soạn đến xuất — với độ chính xác 99%, giúp tăng tốc độ xử lý và giảm thiểu sai sót vận hành. Hơn 100+ doanh nghiệp đã thành công TỐI ƯU KHO HÀNG VỚI SWM!
            </Editable>
          }
          illustrationSlot={<SwmHeroIllustration />}
        />

        <SwmWorkflow items={swmFeaturesWithIds} />

        <IntegrationSection
          idPrefix="swm.integration"
          title="Kết nối toàn diện với hệ sinh thái phần mềm doanh nghiệp"
          description="SWM dễ dàng tích hợp với các hệ thống hiện có, từ ERP, kế toán, TMS đến thiết bị phần cứng như handheld — giúp dữ liệu xuyên suốt, vận hành liền mạch."
          items={swmIntegrationWithIds}
          illustration={swmAssets.integration.illustration}
        />

        <CustomerLogosGrid
          editableIdPrefix="swm.logos"
          title={
            <Editable id="swm.logos.title" kind="text" as="span">
              Những khách hàng đã tin tưởng Smartlog
            </Editable>
          }
          description={
            <Editable id="swm.logos.description" kind="text" as="span">
              Đã và đang là nhà cung cấp giải pháp cho hơn 150 doanh nghiệp Logistics, Sản xuất, Thương mại và Phân phối...
            </Editable>
          }
          ctaLabel={
            <Editable id="swm.logos.cta" kind="text" as="span">
              Khám phá câu chuyện của khách hàng
            </Editable>
          }
        />

        <CustomerTestimonials
          idPrefix="swm.testimonials"
          title="Và nhận được nhiều phản hồi tích cực"
          cards={swmTestimonialsWithIds}
        />

        <WhyDifferent
          title={
            <Editable id="swm.why.title" kind="text" as="span">
              Điều gì khiến Smartlog trở nên khác biệt và ưu việt
            </Editable>
          }
          cards={swmWhyCardsWithIds}
        />

        <StatsBand
          idPrefix="swm.stats"
          title="Những con số biết nói"
          stats={swmStatsWithIds}
          ctaLabel="Nhận tư vấn 1-1 từ các chuyên gia"
        />

        <CtaBanner
          label={
            <Editable id="swm.bottomCta" kind="text" as="span">
              Khám phá câu chuyện của khách hàng
            </Editable>
          }
        />

        <FaqContactSection
          faqIdPrefix="swm.faq"
          faqItems={swmFaqsWithIds}
          contactIdPrefix="swm.contact"
        />

        <OtherSolutions idPrefix="swm.others" excludeCode="SWM" />

        <Footer />
      </main>
    </EditorShell>
  );
}
