import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductHero from "../components/shared/ProductHero";
import IntegrationSection from "../components/shared/IntegrationSection";
import CustomerLogosGrid from "../components/shared/CustomerLogosGrid";
import WhyDifferent from "../components/shared/WhyDifferent";
import StatsBand from "../components/shared/StatsBand";
import FAQ from "../components/shared/FAQ";
import LeadForm from "../components/shared/LeadForm";
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
} from "../components/stm/data";

export const metadata = {
  title:
    "STM - Smartlog Transport Management | Giải pháp quản lý vận tải thông minh",
  description:
    "STM là giải pháp toàn diện giúp doanh nghiệp nâng cao hiệu quả quản lý vận tải, tối ưu chi phí, thời gian và độ chính xác.",
};

export default function StmPage() {
  return (
    <main className="relative">
      <Header />

      <ProductHero
        badge="STM · SaaS"
        title={
          <>
            STM — Giải pháp quản lý vận tải thông minh
            <br className="hidden lg:block" /> cho doanh nghiệp logistics, sản xuất, thương mại và phân phối
          </>
        }
        description={
          <>
            Hơn cả một hệ thống điều phối xe, STM là giải pháp toàn diện giúp doanh nghiệp nâng cao hiệu quả quản lý vận tải rõ rệt, thông qua tối ưu triệt để chi phí, thời gian và độ chính xác. Hơn <b>100+</b> doanh nghiệp đã thành công TỐI ƯU VẬN TẢI VỚI STM!
          </>
        }
        illustrationSlot={<StmHeroIllustration />}
      />

      <StmFeaturesHighlight items={stmFeatures} />

      <IntegrationSection
        title="Thông dụng hơn với khả năng tích hợp linh hoạt"
        description="STM dễ dàng kết nối với hệ sinh thái phần mềm doanh nghiệp và đa dạng chuẩn dữ liệu."
        items={stmIntegration}
        illustration={stmAssets.integration.illustration}
      />

      <CustomerLogosGrid />

      <WhyDifferent cards={stmWhyCards} />

      <StatsBand stats={stmStats} ctaLabel="Nhận tư vấn 1-1 từ các chuyên gia" />

      <CtaBanner label="Khám phá câu chuyện của khách hàng" />

      <FAQ items={stmFaqs} />

      <LeadForm />

      <Footer />
    </main>
  );
}
