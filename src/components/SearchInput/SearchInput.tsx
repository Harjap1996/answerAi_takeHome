import { Search } from "lucide-react";
import clsx from "clsx";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search",
  className,
}: SearchInputProps) => (
  <div
    className={clsx(
      "flex items-center bg-[#161618] border border-[#525252] rounded-[4px] px-4 h-[40px] w-[300px]",
      className
    )}
  >
    <Search size={16} className="text-[#AAAAAA] mr-2" />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="bg-transparent outline-none text-white placeholder-[#AAAAAA] w-full font-sans font-medium text-[16px] leading-[24px] tracking-[-0.02em]"
    />
  </div>
);

export default SearchInput;
