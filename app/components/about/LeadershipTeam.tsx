import Editable from "../../editor/Editable";
import Reveal from "../Reveal";
import { aboutQuote, leaders } from "./data";

export type LeadershipTeamProps = {
  idPrefix?: string;
};

const ROW_SIZES = [1, 2, 4, 4] as const;

export default function LeadershipTeam({
  idPrefix = "about.leaders",
}: LeadershipTeamProps) {
  const rows: { person: (typeof leaders)[number]; index: number }[][] = [];
  let cursor = 0;
  for (const size of ROW_SIZES) {
    const slice = leaders
      .slice(cursor, cursor + size)
      .map((person, k) => ({ person, index: cursor + k }));
    if (slice.length) rows.push(slice);
    cursor += size;
  }
  if (cursor < leaders.length) {
    rows.push(
      leaders
        .slice(cursor)
        .map((person, k) => ({ person, index: cursor + k })),
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <Editable
            id={`${idPrefix}.eyebrow`}
            kind="text"
            as="p"
            className="text-sm text-[#6B7280] mb-3 block"
          >
            Gắn liền với hành trình của Smartlog, không thể thiếu bệ phóng là...
          </Editable>
          <Editable
            id={`${idPrefix}.title`}
            kind="text"
            as="h2"
            className="title-underline text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#333342] leading-tight"
          >
            Đội ngũ lãnh đạo và chuyên gia
          </Editable>
          <Editable
            id={`${idPrefix}.description`}
            kind="text"
            as="p"
            className="mt-4 text-base text-[#6B7280] leading-relaxed block"
          >
            Những con người dẫn dắt Smartlog bằng tâm huyết, tầm nhìn chiến lược và
            năng lực thực thi vượt trội.
          </Editable>
        </div>

        <div className="space-y-10 lg:space-y-14">
          {rows.map((row, rIdx) => (
            <Reveal
              as="div"
              stagger
              key={rIdx}
              className={`grid gap-6 lg:gap-8 justify-center
                ${row.length === 1 ? "grid-cols-1 max-w-[260px] mx-auto" : ""}
                ${row.length === 2 ? "grid-cols-2 max-w-2xl mx-auto" : ""}
                ${row.length === 3 ? "grid-cols-3 max-w-4xl mx-auto" : ""}
                ${row.length === 4 ? "grid-cols-2 lg:grid-cols-4" : ""}
              `}
            >
              {row.map(({ person: p, index: i }) => {
                const accent = p.accent ?? "#3543F6";
                const initials = p.name
                  .replace(/^(Mr\.|Ms\.)\s+/, "")
                  .split(/\s+/)
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("");
                return (
                  <article key={i} className="leader-card flex flex-col items-center text-center">
                    <div
                      className="leader-photo-wrap relative w-full max-w-[240px] rounded-t-[120px] rounded-b-3xl overflow-hidden"
                      style={{
                        aspectRatio: "3 / 4",
                        backgroundColor: "#ECF3FF",
                      }}
                    >
                      {p.photo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.photo}
                          alt={p.name}
                          className="leader-photo absolute inset-0 h-full w-full object-cover object-top"
                        />
                      ) : (
                        <div
                          aria-hidden
                          className="absolute inset-0 flex items-end justify-center pb-10 text-5xl font-bold text-white"
                          style={{
                            background: `linear-gradient(160deg, ${accent} 0%, #161A50 100%)`,
                          }}
                        >
                          {initials}
                        </div>
                      )}
                    </div>

                    <div className="-mt-4 relative z-10">
                      <div
                        className="leader-pill inline-block px-4 py-1.5 rounded-lg text-sm font-bold text-white shadow-md"
                        style={{ backgroundColor: accent }}
                      >
                        <Editable
                          id={`${idPrefix}.items.${i}.name`}
                          kind="text"
                          as="span"
                        >
                          {p.name}
                        </Editable>
                      </div>
                    </div>
                    <div
                      className="mt-2 text-sm lg:text-base font-bold"
                      style={{ color: accent }}
                    >
                      <Editable
                        id={`${idPrefix}.items.${i}.role`}
                        kind="text"
                        as="span"
                      >
                        {p.role}
                      </Editable>
                    </div>
                    <Editable
                      id={`${idPrefix}.items.${i}.bio`}
                      kind="text"
                      as="p"
                      className="mt-3 max-w-[240px] text-xs lg:text-[13px] leading-relaxed text-[#6B7280] block"
                    >
                      {p.bio}
                    </Editable>
                  </article>
                );
              })}
            </Reveal>
          ))}
        </div>

        <Reveal as="div" variant="scale" className="mt-14 lg:mt-20">
          <div
            className="quote-card-glow relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-8 py-12 lg:px-16 lg:py-16"
            style={{
              background:
                "linear-gradient(135deg, #F5F7FF 0%, #FFFFFF 50%, #F0F3FF 100%)",
              border: "1px solid #E5E8F0",
            }}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-8 -left-2 select-none font-serif leading-none"
              style={{
                fontSize: "200px",
                color: "#3543F6",
                opacity: 0.08,
              }}
            >
              “
            </span>
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-4 select-none font-serif leading-none"
              style={{
                fontSize: "200px",
                color: "#3543F6",
                opacity: 0.08,
              }}
            >
              ”
            </span>

            <div className="relative">
              <div
                aria-hidden
                className="mx-auto mb-6 h-1 w-12 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #3543F6 0%, #9CBBFF 100%)",
                }}
              />
              <Editable
                id={`${idPrefix}.quote`}
                kind="text"
                as="p"
                className="text-center text-lg lg:text-xl leading-[1.8] text-[#333342] italic font-medium block"
              >
                {aboutQuote}
              </Editable>
              <div
                aria-hidden
                className="mx-auto mt-6 h-1 w-12 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #9CBBFF 0%, #3543F6 100%)",
                }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
