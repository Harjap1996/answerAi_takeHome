import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type SectionToggleHeaderProps = {
  title: string;
};

const SectionToggleHeader = ({ title }: SectionToggleHeaderProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-[625px] bg-[#222324] border border-[#5A5A5A] rounded-[5px] px-4 py-3 mb-3 flex justify-between items-center">
      <span className="font-sans font-medium text-[18px] leading-[22.5px] text-[#C8E972]">
        {title}
      </span>
      <button
        onClick={() => setOpen(!open)}
        className="border border-[#C8E972] rounded-full w-[44px] h-[34px] px-[5px] py-[10px] flex items-center justify-center"
      >
        {open ? (
          <ChevronUp className="text-[#C8E972]" />
        ) : (
          <ChevronDown className="text-[#C8E972]" />
        )}
      </button>
    </div>
  );
};

export default SectionToggleHeader;
