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
import SomChannels from "../components/som/SomChannels";
import {
  somFeatures,
  somChannels,
  somWhyCards,
  somStats,
  somFaqs,
} from "../components/som/data";

export const metadata = {
  title:
    "SOM - Smartlog Order Management | Quản lý đơn hàng đa kênh trên một nền tảng",
  description:
    "SOM giúp bạn quản lý vòng đời đơn hàng và toàn bộ hoạt động bán hàng đa kênh, qua việc tích hợp linh hoạt các sàn TMĐT và hãng vận chuyển.",
};

export default function SomPage() {
  return (
    <main className="relative">
      <Header />

      <ProductHero
        badge="SOM · SaaS"
        title={
          <>
            SOM — Giải pháp quản lý đơn hàng
            <br className="hidden lg:block" /> trên một nền tảng duy nhất
          </>
        }
        description={
          <>
            SOM giúp bạn quản lý vòng đời đơn hàng và toàn bộ hoạt động bán hàng đa kênh, qua việc tích hợp linh hoạt các sàn TMĐT và hãng vận chuyển.
          </>
        }
      />

      <SomChannels />

      <section className="py-16 lg:py-20 bg-[#F7F9FF]">
        <div className="mx-auto max-w-4xl px-6">
          <SectionIntro
            eyebrow="8 nhóm tính năng"
            title="Khép kín vòng đời đơn hàng"
            description="Từ tiếp nhận, định tuyến, đến hoàn hàng và báo cáo — tất cả trong một dashboard."
          />
          <div className="mt-10">
            <FeatureAccordion items={somFeatures} defaultOpen={0} />
          </div>
        </div>
      </section>

      <IntegrationSection
        title="Tích hợp linh hoạt với kênh bán và đối tác vận chuyển"
        description="SOM kết nối nhanh với hệ sinh thái thương mại điện tử và logistics phổ biến tại Việt Nam."
        items={somChannels}
      />

      <CustomerLogosGrid />

      <WhyDifferent
        title="Điều gì khiến Smartlog trở nên khác biệt và ưu việt"
        cards={somWhyCards}
      />

      <StatsBand stats={somStats} ctaLabel="Nhận tư vấn 1-1 từ các chuyên gia" />

      <CtaBanner label="Khám phá câu chuyện của khách hàng" />

      <FAQ items={somFaqs} />

      <LeadForm />

      <Footer />
    </main>
  );
}
