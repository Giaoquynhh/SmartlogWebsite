import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductHero from "../components/shared/ProductHero";
import FeatureAccordion from "../components/shared/FeatureAccordion";
import SectionIntro from "../components/shared/SectionIntro";
import IntegrationSection from "../components/shared/IntegrationSection";
import CustomerLogosGrid from "../components/shared/CustomerLogosGrid";
import WhyDifferent from "../components/shared/WhyDifferent";
import StatsBand from "../components/shared/StatsBand";
import FAQ from "../components/shared/FAQ";
import LeadForm from "../components/shared/LeadForm";
import CtaBanner from "../components/shared/CtaBanner";
import SwmWorkflow from "../components/swm/SwmWorkflow";
import {
  swmFeatures,
  swmIntegration,
  swmWhyCards,
  swmStats,
  swmFaqs,
} from "../components/swm/data";

export const metadata = {
  title:
    "SWM - Smartlog Warehouse Management | Giải pháp quản lý kho hàng toàn diện",
  description:
    "SWM là nền tảng vận hành kho hiện đại, kiểm soát toàn bộ luồng hàng — nhập, cất, soạn, xuất — với độ chính xác 99%.",
};

export default function SwmPage() {
  return (
    <main className="relative">
      <Header />

      <ProductHero
        badge="SWM · SaaS"
        title={
          <>
            SWM — Giải pháp quản lý kho hàng toàn diện
            <br className="hidden lg:block" /> cho doanh nghiệp sản xuất, phân phối, bán lẻ và logistics
          </>
        }
        description={
          <>
            Là nền tảng vận hành kho hiện đại giúp doanh nghiệp kiểm soát toàn bộ luồng hàng — từ nhập, cất, soạn đến xuất — với độ chính xác 99%, giúp tăng tốc độ xử lý và giảm thiểu sai sót vận hành. Hơn <b>100+</b> doanh nghiệp đã thành công TỐI ƯU KHO HÀNG VỚI SWM!
          </>
        }
      />

      <SwmWorkflow />

      <section className="py-16 lg:py-20 bg-[#F7F9FF]">
        <div className="mx-auto max-w-4xl px-6">
          <SectionIntro
            eyebrow="8 nhóm tính năng"
            title="Khép kín mọi nghiệp vụ kho hàng"
            description="Từ nhận đơn đến tính bill, mỗi nghiệp vụ đều được số hoá và liên thông."
          />
          <div className="mt-10">
            <FeatureAccordion items={swmFeatures} defaultOpen={0} />
          </div>
        </div>
      </section>

      <IntegrationSection
        title="Kết nối toàn diện với hệ sinh thái phần mềm doanh nghiệp"
        description="SWM dễ dàng tích hợp với các hệ thống hiện có, từ ERP, kế toán, TMS đến thiết bị phần cứng như handheld — giúp dữ liệu xuyên suốt, vận hành liền mạch."
        items={swmIntegration}
      />

      <CustomerLogosGrid />

      <WhyDifferent cards={swmWhyCards} />

      <StatsBand stats={swmStats} ctaLabel="Nhận tư vấn 1-1 từ các chuyên gia" />

      <CtaBanner label="Khám phá câu chuyện của khách hàng" />

      <FAQ items={swmFaqs} />

      <LeadForm />

      <Footer />
    </main>
  );
}
