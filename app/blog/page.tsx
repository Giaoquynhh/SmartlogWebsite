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
  blogStats,
  blogFeatured,
  blogInsights,
  blogCareer,
} from "../components/blog/data";

export const metadata = {
  title: "Blog - Smartlog | Insight & xu hướng Logistics",
  description:
    "Khám phá kho tàng insight phong phú, xu hướng và tri thức công nghệ Logistics cập nhật nhất từ Smartlog.",
};

const featuredWithIds = blogFeatured.map((c, i) => ({
  ...c,
  id: `blog.featured.${i}`,
}));
const insightsWithIds = blogInsights.map((c, i) => ({
  ...c,
  id: `blog.insights.${i}`,
}));
const careerWithIds = blogCareer.map((c, i) => ({
  ...c,
  id: `blog.career.${i}`,
}));
const statsWithIds = blogStats.map((s, i) => ({
  ...s,
  id: `blog.stats.${i}`,
}));

export default async function BlogPage() {
  return (
    <EditorShell pathname="/blog">
      <main className="relative">
        <Header />

        <ContentHero
          idPrefix="blog.hero"
          eyebrow="Blog nổi bật"
          title="Blog"
          description="Khám phá kho tàng insight phong phú, xu hướng và tri thức công nghệ Logistics cập nhật nhất. Mở rộng tầm nhìn, nuôi dưỡng tư duy đổi mới để thăng tiến xa hơn trong kỷ nguyên dữ liệu!"
          stats={statsWithIds}
          statsIdPrefix="blog.stats"
        />

        {/* "Blog nổi bật" — 1 featured card on the left + 2x2 grid of small
            cards on the right (matches Figma) */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading id="blog.featured.title" className="text-center mx-auto max-w-3xl">
                Blog nổi bật
              </SectionHeading>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
              {featuredWithIds[0] && (
                <Reveal variant="left">
                  <ArticleCard
                    idPrefix="blog.featured"
                    index={0}
                    card={featuredWithIds[0]}
                    size="feature"
                  />
                </Reveal>
              )}

              <Reveal as="div" stagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {featuredWithIds.slice(1, 5).map((c, i) => (
                  <ArticleCard
                    key={i + 1}
                    idPrefix="blog.featured"
                    index={i + 1}
                    card={c}
                  />
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* Insight & xu hướng */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                id="blog.insights.title"
                className="text-center mx-auto max-w-3xl"
              >
                Insight & Xu hướng
              </SectionHeading>
            </Reveal>
            <Reveal as="div" stagger className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {insightsWithIds.map((c, i) => (
                <ArticleCard
                  key={i}
                  idPrefix="blog.insights"
                  index={i}
                  card={c}
                />
              ))}
            </Reveal>
            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl border border-[#3543F6] text-[#3543F6] hover:bg-[#3543F6] hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3543F6]/20 px-6 py-3 text-sm font-bold"
              >
                <Editable id="blog.insights.cta" kind="text" as="span">
                  Xem thêm
                </Editable>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Phát triển năng lực nghề nghiệp */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                id="blog.career.title"
                className="text-center mx-auto max-w-3xl"
              >
                Phát triển năng lực nghề nghiệp
              </SectionHeading>
            </Reveal>
            <Reveal as="div" stagger className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {careerWithIds.map((c, i) => (
                <ArticleCard
                  key={i}
                  idPrefix="blog.career"
                  index={i}
                  card={c}
                />
              ))}
            </Reveal>
            <div className="mt-8 flex justify-center">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl border border-[#3543F6] text-[#3543F6] hover:bg-[#3543F6] hover:text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3543F6]/20 px-6 py-3 text-sm font-bold"
              >
                <Editable id="blog.career.cta" kind="text" as="span">
                  Xem thêm
                </Editable>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        <NewsletterCta idPrefix="blog.newsletter" />

        <Footer />
      </main>
    </EditorShell>
  );
}
