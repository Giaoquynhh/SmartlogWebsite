import Editable from "../../editor/Editable";

export type StatItem = {
  /** stable id (e.g. "blog.stats.0") */
  id?: string;
  value: string;
  label: string;
};

export type StatsRowProps = {
  /** id prefix when item.id is missing (e.g. "blog.stats") */
  idPrefix?: string;
  items: StatItem[];
};

/**
 * 4-column stat strip used at the top of Blog / Projects / Events pages.
 * Sits in a light-blue rounded band with vertical dividers between stats
 * (matches Figma).
 */
export default function StatsRow({ idPrefix = "stats", items }: StatsRowProps) {
  return (
    <section className="py-10 lg:py-12 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-[#ECF3FF] px-6 py-8 lg:px-12 lg:py-10 grid grid-cols-2 lg:grid-cols-4 gap-y-6">
          {items.map((s, i) => {
            const sid = s.id ?? `${idPrefix}.${i}`;
            const showDivider = i > 0;
            return (
              <div
                key={i}
                className={`relative text-center px-4 lg:px-8 ${showDivider ? "lg:border-l lg:border-[#3543F6]/15" : ""}`}
              >
                <Editable
                  id={`${sid}.value`}
                  kind="text"
                  as="div"
                  className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#3543F6] leading-none tracking-tight"
                >
                  {s.value}
                </Editable>
                <Editable
                  id={`${sid}.label`}
                  kind="text"
                  as="div"
                  className="mt-3 text-sm text-[#333342] leading-snug"
                >
                  {s.label}
                </Editable>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
