import { ArrowRightIcon } from "./icons";

export type CtaBannerProps = {
  label: React.ReactNode;
  href?: string;
};

export default function CtaBanner({ label, href = "#contact" }: CtaBannerProps) {
  return (
    <div className="flex justify-center py-10 bg-white">
      <a
        href={href}
        className="inline-flex items-center gap-2 rounded-xl bg-[#3543F6] hover:bg-[#2933D9] transition-colors px-7 py-3.5 text-base font-bold text-white shadow-lg"
      >
        {label}
        <ArrowRightIcon size={18} />
      </a>
    </div>
  );
}
