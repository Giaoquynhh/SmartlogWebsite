import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import VisionMission from "../components/about/VisionMission";
import CoreValues from "../components/about/CoreValues";
import LeadershipTeam from "../components/about/LeadershipTeam";
import JourneyTimeline from "../components/about/JourneyTimeline";
import EcosystemMap from "../components/about/EcosystemMap";
import KpiHighlight from "../components/about/KpiHighlight";
import NewsletterCta from "../components/shared/NewsletterCta";
import EditorShell from "../editor/EditorShell";

export const metadata = {
  title: "Về Smartlog - Hành trình kiến tạo hệ sinh thái Logistics",
  description:
    "Smartlog cung cấp hệ sinh thái giải pháp công nghệ Logistics toàn diện dẫn đầu Việt Nam và mở rộng toàn cầu — từ tầm nhìn, sứ mệnh, giá trị cốt lõi đến đội ngũ chuyên gia và hành trình 10 năm.",
};

export default async function AboutPage() {
  return (
    <EditorShell pathname="/about">
      <main className="relative">
        <Header />
        <AboutHero />
        <VisionMission />
        <CoreValues />
        <JourneyTimeline />
        <EcosystemMap />
        <KpiHighlight />
        <LeadershipTeam />
        <NewsletterCta idPrefix="about.newsletter" />
        <Footer />
      </main>
    </EditorShell>
  );
}
