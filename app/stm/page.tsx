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
import StmFeaturesHighlight from "../components/stm/StmFeaturesHighlight";
import StmHeroIllustration from "../components/stm/StmHeroIllustration";
import { stm as stmAssets } from "../assets";
import {
  stmFeatures,
  stmIntegration,
  stmWhyCards,
  stmStats,
  stmFaqs,
  stmTestimonials,
} from "../components/stm/data";
import EditorShell from "../editor/EditorShell";
import Editable from "../editor/Editable";

export const metadata = {
  title:
    "STM - Smartlog Transport Management | Giải pháp quản lý vận tải thông minh",
  description:
    "STM là giải pháp toàn diện giúp doanh nghiệp nâng cao hiệu quả quản lý vận tải, tối ưu chi phí, thời gian và độ chính xác.",
};

// Attach stable editable ids to data items so titles/bullets are persistable
const stmFeaturesWithIds = stmFeatures.map((it, i) => ({
  ...it,
  id: `stm.features.items.${i}`,
}));
const stmIntegrationWithIds = stmIntegration.map((it, i) => ({
  ...it,
  id: `stm.integration.items.${i}`,
}));
const stmWhyCardsWithIds = stmWhyCards.map((c, i) => ({
  ...c,
  id: `stm.why.${i}`,
}));
const stmStatsWithIds = stmStats.map((s, i) => ({
  ...s,
  id: `stm.stats.${i}`,
}));
const stmFaqsWithIds = stmFaqs.map((f, i) => ({
  ...f,
  id: `stm.faq.${i}`,
}));
const stmTestimonialsWithIds = stmTestimonials.map((t, i) => ({
  ...t,
  id: `stm.testimonials.${i}`,
}));

export default async function StmPage() {
  return (
    <EditorShell pathname="/stm">
      <main className="relative">
        <Header />

        <ProductHero
          badge={
            <Editable id="stm.hero.badge" kind="text" as="span">
              STM · SaaS
            </Editable>
          }
          title={
            <Editable id="stm.hero.title" kind="text" as="span">
              STM — Giải pháp quản lý vận tải thông minh cho doanh nghiệp logistics, sản xuất, thương mại và phân phối
            </Editable>
          }
          description={
            <Editable id="stm.hero.description" kind="text" as="span">
              Hơn cả một hệ thống điều phối xe, STM là giải pháp toàn diện giúp doanh nghiệp nâng cao hiệu quả quản lý vận tải rõ rệt, thông qua tối ưu triệt để chi phí, thời gian và độ chính xác. Hơn 100+ doanh nghiệp đã thành công TỐI ƯU VẬN TẢI VỚI STM!
            </Editable>
          }
          primaryCta={{ label: "Hẹn lịch Demo", href: "#contact" }}
          secondaryCta={{ label: "Xem Brochure", href: "#" }}
          illustrationSlot={<StmHeroIllustration />}
        />

        <StmFeaturesHighlight items={stmFeaturesWithIds} />

        <IntegrationSection
          idPrefix="stm.integration"
          title="Thông dụng hơn với khả năng tích hợp linh hoạt"
          description="STM dễ dàng kết nối với hệ sinh thái phần mềm doanh nghiệp và đa dạng chuẩn dữ liệu."
          items={stmIntegrationWithIds}
          illustration={stmAssets.integration.illustration}
        />

        <CustomerLogosGrid
          editableIdPrefix="stm.logos"
          title={
            <Editable id="stm.logos.title" kind="text" as="span">
              Những khách hàng đã tin tưởng Smartlog
            </Editable>
          }
          description={
            <Editable id="stm.logos.description" kind="text" as="span">
              Đã và đang là nhà cung cấp giải pháp cho hơn 150 doanh nghiệp Logistics, Sản xuất, Thương mại và Phân phối...
            </Editable>
          }
          ctaLabel={
            <Editable id="stm.logos.cta" kind="text" as="span">
              Khám phá câu chuyện của khách hàng
            </Editable>
          }
        />

        <CustomerTestimonials
          idPrefix="stm.testimonials"
          title="Và nhận được nhiều phản hồi tích cực"
          cards={stmTestimonialsWithIds}
        />

        <WhyDifferent
          title={
            <Editable id="stm.why.title" kind="text" as="span">
              Điều gì khiến Smartlog trở nên khác biệt và ưu việt
            </Editable>
          }
          cards={stmWhyCardsWithIds}
        />

        <StatsBand
          idPrefix="stm.stats"
          title="Những con số biết nói"
          stats={stmStatsWithIds}
          ctaLabel="Nhận tư vấn 1-1 từ các chuyên gia"
        />

        <CtaBanner
          label={
            <Editable id="stm.bottomCta" kind="text" as="span">
              Khám phá câu chuyện của khách hàng
            </Editable>
          }
        />

        <FaqContactSection
          faqIdPrefix="stm.faq"
          faqItems={stmFaqsWithIds}
          contactIdPrefix="stm.contact"
        />

        <OtherSolutions idPrefix="stm.others" excludeCode="STM" />

        <Footer />
      </main>
    </EditorShell>
  );
}
