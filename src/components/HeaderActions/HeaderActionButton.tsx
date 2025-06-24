import type { ReactNode } from "react";

type HeaderActionButtonProps = {
  icon?: ReactNode;
  label?: string;
  onClick?: () => void;
};

const HeaderActionButton = ({
  icon,
  label,
  onClick,
}: HeaderActionButtonProps) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#18181A] border border-[#525252] text-white hover:bg-[#222324] transition"
  >
    {icon}
    {label && (
      <span className="font-sans font-medium text-[16px] leading-[24px] tracking-[-0.02em]">
        {label}
      </span>
    )}
  </button>
);

export default HeaderActionButton;
