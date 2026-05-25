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
  eventsStats,
  eventsFeatured,
  eventsRecent,
  eventsMore,
} from "../components/events/data";

export const metadata = {
  title: "Hoạt động & Sự kiện - Smartlog",
  description:
    "Khám phá dấu ấn Smartlog tại các sự kiện chuyên ngành, các tin tức hợp tác chiến lược mới nhất.",
};

const statsWithIds = eventsStats.map((s, i) => ({
  ...s,
  id: `events.stats.${i}`,
}));
const featuredWithIds = eventsFeatured.map((c, i) => ({
  ...c,
  id: `events.featured.${i}`,
}));
const recentWithIds = eventsRecent.map((c, i) => ({
  ...c,
  id: `events.recent.${i}`,
}));
const moreWithIds = eventsMore.map((c, i) => ({
  ...c,
  id: `events.more.${i}`,
}));

export default async function EventsPage() {
  return (
    <EditorShell pathname="/events">
      <main className="relative">
        <Header />

        <ContentHero
          idPrefix="events.hero"
          eyebrow="Hoạt động nổi bật"
          title="Hoạt động & Sự kiện"
          description="Khám phá dấu ấn Smartlog tại các sự kiện chuyên ngành, các tin tức hợp tác chiến lược mới nhất, nơi sự sáng tạo và đổi mới tạo nên những trải nghiệm đầy khác biệt!"
          stats={statsWithIds}
          statsIdPrefix="events.stats"
        />

        {/* "Sự kiện nổi bật" — 1 featured card on the left + 2x2 grid of 4 small
            cards on the right (same pattern as Blog) */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                id="events.featured.title"
                className="text-center mx-auto max-w-3xl"
              >
                Sự kiện nổi bật
              </SectionHeading>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
              {featuredWithIds[0] && (
                <Reveal variant="left">
                  <ArticleCard
                    idPrefix="events.featured"
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
                    idPrefix="events.featured"
                    index={i + 1}
                    card={c}
                  />
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* "Tin tức & Sự kiện gần đây" — 3-card grid (matches Blog Insight section) */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <SectionHeading
                id="events.recent.title"
                className="text-center mx-auto max-w-3xl"
              >
                Tin tức & Sự kiện gần đây
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
                  idPrefix="events.recent"
                  index={i}
                  card={c}
                />
              ))}
            </Reveal>
          </div>
        </section>

        {/* Continuation of the "recent events" grid — 6 more cards in a 2x3
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
                  idPrefix="events.more"
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
                <Editable id="events.more.cta" kind="text" as="span">
                  Xem thêm
                </Editable>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        <NewsletterCta idPrefix="events.newsletter" />

        <Footer />
      </main>
    </EditorShell>
  );
}
