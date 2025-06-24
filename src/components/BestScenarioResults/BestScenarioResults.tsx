import { useState } from "react";
import { ChevronUp, ChevronDown, Sparkles } from "lucide-react";
import BestScenarioRow from "./BestScenarioRow";

const BestScenarioResults = () => {
  const [open, setOpen] = useState(true);

  const rows = [
    "The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles.",
    "The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles.",
  ];

  return (
    <div className="w-full rounded-md p-4 mb-6 bg-[#18181A]">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center">
            <Sparkles size={20} className="stroke-[#C8E972] fill-[#C8E972]" />
          </div>
          <div className="font-sans font-semibold text-[24px] leading-[36px] text-[#C8E972]">
            Best Scenario Results
          </div>
        </div>

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

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {rows.map((text, index) => (
          <BestScenarioRow key={index} text={text} />
        ))}
      </div>
    </div>
  );
};

export default BestScenarioResults;
