import type { ReactNode, CSSProperties } from "react";
import clsx from "clsx";

type AppButtonProps = {
  icon?: ReactNode;
  label?: string;
  variant?: "default" | "outline" | "highlight";
  onClick?: () => void;
  className?: string;
};

const AppButton = ({
  icon,
  label,
  variant = "default",
  onClick,
  className,
}: AppButtonProps) => {
  const baseClasses = clsx(
    "flex items-center justify-center gap-2 px-4 h-[40px] rounded-[4px] font-sans font-medium text-[16px] leading-[24px] tracking-[-0.02em] transition",
    className
  );

  const variants = {
    default:
      "bg-[#18181A] border border-[#525252] text-white hover:bg-[#222324]",
    outline: "border border-[#C8E972] text-[#C8E972] bg-transparent",
    highlight: "bg-[#23291E] text-[#C9FF3B]",
  };

  const highlightBorderStyle: CSSProperties = {
    borderWidth: "1px",
    borderImageSource:
      "linear-gradient(180deg, #C8E972 0%, rgba(112, 131, 64, 0) 100%)",
    borderImageSlice: 1,
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseClasses, variants[variant])}
      style={variant === "highlight" ? highlightBorderStyle : undefined}
    >
      {icon}
      {label && (
        <span className="font-sans font-medium text-[16px] leading-[24px] tracking-[-0.02em]">
          {label}
        </span>
      )}{" "}
    </button>
  );
};

export default AppButton;
