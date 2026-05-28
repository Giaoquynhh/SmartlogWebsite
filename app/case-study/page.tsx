import Header from "../components/Header";
import Footer from "../components/Footer";
import ContentHero from "../components/shared/ContentHero";
import ArticleCard from "../components/shared/ArticleCard";
import NewsletterCta from "../components/shared/NewsletterCta";
import SectionHeading from "../components/shared/SectionHeading";
import Reveal from "../components/Reveal";
import EditorShell from "../editor/EditorShell";
import Editable from "../editor/Editable";
import {
  caseStudyStats,
  caseStudyLatest,
  caseStudyIndustries,
} from "../components/case-study/data";

export const metadata = {
  title: "Case Study - Smartlog | Câu chuyện chuyển đổi số Logistics",
  description:
    "Khám phá hành trình Smartlog đồng hành cùng doanh nghiệp, biến những thách thức vận hành thành lợi thế cạnh tranh, thông qua những dự án chuyển đổi số Logistics ưu việt.",
};

const latestWithIds = caseStudyLatest.map((c, i) => ({
  ...c,
  id: `caseStudy.latest.${i}`,
}));
const statsWithIds = caseStudyStats.map((s, i) => ({
  ...s,
  id: `caseStudy.stats.${i}`,
}));
const industryGroups = caseStudyIndustries.map((g) => ({
  ...g,
  items: g.items.map((c, i) => ({
    ...c,
    id: `caseStudy.industry.${g.key}.${i}`,
  })),
}));

export default async function CaseStudyPage() {
  return (
    <EditorShell pathname="/case-study">
      <main className="relative">
        <Header />

        <ContentHero
          idPrefix="caseStudy.hero"
          eyebrow="Case Study"
          title="Case Study"
          description="Khám phá hành trình Smartlog đồng hành cùng doanh nghiệp, biến những thách thức vận hành thành lợi thế cạnh tranh, thông qua những dự án chuyển đổi số Logistics ưu việt!"
          stats={statsWithIds}
          statsIdPrefix="caseStudy.stats"
        />

        {/* Case Study mới nhất — 1 feature + 2x2 grid */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                id="caseStudy.latest.title"
                className="text-center mx-auto max-w-3xl"
              >
                Case Study mới nhất
              </SectionHeading>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
              {latestWithIds[0] && (
                <Reveal variant="left">
                  <ArticleCard
                    idPrefix="caseStudy.latest"
                    index={0}
                    card={latestWithIds[0]}
                    size="feature"
                  />
                </Reveal>
              )}

              <Reveal as="div" stagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {latestWithIds.slice(1, 5).map((c, i) => (
                  <ArticleCard
                    key={i + 1}
                    idPrefix="caseStudy.latest"
                    index={i + 1}
                    card={c}
                  />
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* Case Study theo từng ngành hàng — mỗi nhóm 1 row 3 cards + "Xem thêm" */}
        {industryGroups.map((group) => (
          <section key={group.key} className="py-12 lg:py-16 bg-white">
            <div className="mx-auto max-w-7xl px-6">
              <Reveal>
                <SectionHeading
                  id={`caseStudy.industry.${group.key}.title`}
                  className="text-center mx-auto max-w-3xl"
                >
                  {group.title}
                </SectionHeading>
              </Reveal>
              <Reveal as="div" stagger className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((c, i) => (
                  <ArticleCard
                    key={i}
                    idPrefix={`caseStudy.industry.${group.key}`}
                    index={i}
                    card={c}
                  />
                ))}
              </Reveal>
              <div className="mt-8 flex justify-center">
                <a
                  href="#"
                  className="cta-shimmer group inline-flex items-center gap-2 rounded-xl border border-[#3543F6] text-[#3543F6] hover:bg-[#3543F6] hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3543F6]/20 px-6 py-3 text-sm font-bold"
                >
                  <Editable
                    id={`caseStudy.industry.${group.key}.cta`}
                    kind="text"
                    as="span"
                  >
                    Xem thêm
                  </Editable>
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </section>
        ))}

        <NewsletterCta idPrefix="caseStudy.newsletter" />

        <Footer />
      </main>
    </EditorShell>
  );
}
