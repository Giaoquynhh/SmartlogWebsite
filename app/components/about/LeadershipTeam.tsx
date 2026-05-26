import Editable from "../../editor/Editable";
import Reveal from "../Reveal";
import { aboutQuote, leaders } from "./data";

export type LeadershipTeamProps = {
  idPrefix?: string;
};

/** Đội ngũ lãnh đạo & chuyên gia — 11 thẻ avatar + tên + vị trí + bio + 1 quote card. */
export default function LeadershipTeam({
  idPrefix = "about.leaders",
}: LeadershipTeamProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <Editable
            id={`${idPrefix}.eyebrow`}
            kind="text"
            as="p"
            className="text-sm text-[#25272C] mb-3 block"
          >
            Gắn liền với hành trình của Smartlog, không thể thiếu bệ phóng là...
          </Editable>
          <Editable
            id={`${idPrefix}.title`}
            kind="text"
            as="h2"
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#333342] leading-tight block"
          >
            Đội ngũ lãnh đạo và chuyên gia
          </Editable>
          <Editable
            id={`${idPrefix}.description`}
            kind="text"
            as="p"
            className="mt-4 text-base text-[#25272C] leading-relaxed block"
          >
            Những con người dẫn dắt Smartlog bằng tâm huyết, tầm nhìn chiến lược và
            năng lực thực thi vượt trội.
          </Editable>
        </div>

        <Reveal as="div" stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((p, i) => {
            const accent = p.accent ?? "#3543F6";
            const initials = p.name
              .replace(/^(Mr\.|Ms\.)\s+/, "")
              .split(/\s+/)
              .map((w) => w[0])
              .slice(0, 2)
              .join("");
            return (
              <article
                key={i}
                className="group rounded-2xl bg-[#F7F8F8] border border-[#EDEEF1] p-6 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(81,79,99,0.18)] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div
                    aria-hidden
                    className="h-20 w-20 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-inner flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${accent} 0%, #161A50 100%)`,
                    }}
                  >
                    {initials}
                  </div>
                  <div>
                    <div
                      className="inline-block px-3 py-1 rounded-lg text-sm font-bold text-white"
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
                    <div
                      className="mt-2 text-base font-bold"
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
                  </div>
                </div>
                <Editable
                  id={`${idPrefix}.items.${i}.bio`}
                  kind="text"
                  as="p"
                  className="mt-4 text-sm leading-relaxed text-[#25272C] block"
                >
                  {p.bio}
                </Editable>
              </article>
            );
          })}
        </Reveal>

        <Reveal as="div" variant="scale" className="mt-12 lg:mt-16">
          <Editable
            id={`${idPrefix}.quote`}
            kind="text"
            as="p"
            className="mx-auto max-w-4xl rounded-2xl bg-[#F7F8F8] border border-[#EDEEF1] p-8 lg:p-10 text-base lg:text-lg leading-relaxed text-[#25272C] text-center italic block"
          >
            {`“${aboutQuote}”`}
          </Editable>
        </Reveal>
      </div>
    </section>
  );
}
