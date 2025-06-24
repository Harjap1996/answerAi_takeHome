import { MoreHorizontal } from "lucide-react";

type BestScenarioRowProps = {
  text: string;
};

const BestScenarioRow: React.FC<BestScenarioRowProps> = ({ text }) => (
  <div className="flex justify-between items-center bg-[#CCFF0005] border-[0.5px] border-[#C9FF3B] rounded-[6px] p-3 mb-2">
    <div className="font-sans font-medium text-[16px] leading-[24px] text-[#C9FF3B]">
      {text}
    </div>
    <MoreHorizontal className="text-[#C8E972]" />
  </div>
);

export default BestScenarioRow;
