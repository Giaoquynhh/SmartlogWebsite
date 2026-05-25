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
  projectsStats,
  projectsFeatured,
  projectsRecent,
  projectsMore,
} from "../components/projects/data";

export const metadata = {
  title: "Dự án triển khai - Smartlog",
  description:
    "Khám phá những dự án Smartlog đã và đang triển khai cho các doanh nghiệp khách hàng tại đa lĩnh vực với đa quy mô và cơ cấu vận hành.",
};

const statsWithIds = projectsStats.map((s, i) => ({
  ...s,
  id: `projects.stats.${i}`,
}));
const featuredWithIds = projectsFeatured.map((c, i) => ({
  ...c,
  id: `projects.featured.${i}`,
}));
const recentWithIds = projectsRecent.map((c, i) => ({
  ...c,
  id: `projects.recent.${i}`,
}));
const moreWithIds = projectsMore.map((c, i) => ({
  ...c,
  id: `projects.more.${i}`,
}));

export default async function ProjectsPage() {
  return (
    <EditorShell pathname="/projects">
      <main className="relative">
        <Header />

        <ContentHero
          idPrefix="projects.hero"
          eyebrow="Dự án đáng chú ý"
          title="Dự án đã triển khai"
          description="Khám phá những dự án Smartlog đã và đang triển khai cho các doanh nghiệp khách hàng tại đa lĩnh vực với đa quy mô và cơ cấu vận hành."
          stats={statsWithIds}
          statsIdPrefix="projects.stats"
        />

        {/* "Dự án nổi bật" — 1 featured card on the left + 2x2 grid of 4 small
            cards on the right (same pattern as Blog) */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                id="projects.featured.title"
                className="text-center mx-auto max-w-3xl"
              >
                Dự án nổi bật
              </SectionHeading>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
              {featuredWithIds[0] && (
                <Reveal variant="left">
                  <ArticleCard
                    idPrefix="projects.featured"
                    index={0}
                    card={featuredWithIds[0]}
                    size="feature"
                  />
                </Reveal>
              )}

              <Reveal
                as="div"
                stagger
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {featuredWithIds.slice(1, 5).map((c, i) => (
                  <ArticleCard
                    key={i + 1}
                    idPrefix="projects.featured"
                    index={i + 1}
                    card={c}
                  />
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* "Dự án triển khai gần đây" — 3-card grid (matches Blog Insight section) */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                id="projects.recent.title"
                className="text-center mx-auto max-w-3xl"
              >
                Dự án triển khai gần đây
              </SectionHeading>
            </Reveal>
            <Reveal
              as="div"
              stagger
              className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {recentWithIds.map((c, i) => (
                <ArticleCard
                  key={i}
                  idPrefix="projects.recent"
                  index={i}
                  card={c}
                />
              ))}
            </Reveal>
          </div>
        </section>

        {/* Continuation of the "recent projects" grid — 9 more cards in a 3x3
            grid (no heading, intentionally seamless with the section above). */}
        <section className="pb-12 lg:pb-16 bg-white -mt-8 lg:-mt-10">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal
              as="div"
              stagger
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {moreWithIds.map((c, i) => (
                <ArticleCard
                  key={i}
                  idPrefix="projects.more"
                  index={i}
                  card={c}
                />
              ))}
            </Reveal>
            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl border border-[#3543F6] text-[#3543F6] hover:bg-[#3543F6] hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3543F6]/20 px-6 py-3 text-sm font-bold"
              >
                <Editable id="projects.more.cta" kind="text" as="span">
                  Xem thêm
                </Editable>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        <NewsletterCta idPrefix="projects.newsletter" />

        <Footer />
      </main>
    </EditorShell>
  );
}
