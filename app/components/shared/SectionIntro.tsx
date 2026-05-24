export type SectionIntroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionIntroProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignCls} max-w-3xl`}>
      {eyebrow && (
        <div className="text-sm font-bold tracking-wide uppercase text-[#3543F6] mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-tight text-[#333342]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base lg:text-[17px] text-[#615F78] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
