import { Sparkles, Plus, Check } from "lucide-react";
import clsx from "clsx";
import { useRef } from "react";

type VariableButtonProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
  onHoverStart?: (label: string) => void;
  onHoverEnd?: () => void;
};

const VariableButton = ({
  label,
  selected,
  onClick,
  onHoverStart,
  onHoverEnd,
}: VariableButtonProps) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      onHoverStart?.(label);
    }, 1500);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    onHoverEnd?.();
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={onClick}
        className={clsx(
          "flex items-center gap-2 px-4 h-[40px] rounded-full transition border",
          selected
            ? "bg-[#23291E] text-[#C9FF3B] border-[#C8E972] hover:shadow-[0px_2px_6px_rgba(200,233,114,0.5)]"
            : "bg-[#5959594D] border border-[#525252] text-[#D5D5D5]"
        )}
      >
        <span className="font-sans font-normal text-[15px] leading-[22.5px] pr-[15px]">
          {label}
        </span>
        <Sparkles size={16} />
        {selected ? <Check size={16} /> : <Plus size={16} />}
      </button>
    </div>
  );
};

export default VariableButton;
