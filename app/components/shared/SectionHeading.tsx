import Editable from "../../editor/Editable";

export type SectionHeadingProps = {
  id: string;
  children: string;
  className?: string;
};

/** Simple bold h2 used to introduce article grids on the content pages. */
export default function SectionHeading({ id, children, className = "" }: SectionHeadingProps) {
  return (
    <Editable
      id={id}
      kind="text"
      as="h2"
      className={`text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#333342] leading-tight block ${className}`}
    >
      {children}
    </Editable>
  );
}
