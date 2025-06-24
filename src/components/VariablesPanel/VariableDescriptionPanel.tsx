import { Info } from "lucide-react";

type VariableDescriptionPanelProps = {
  variableName: string;
  text: string;
};

const VariableDescriptionPanel = ({
  variableName,
  text,
}: VariableDescriptionPanelProps) => (
  <div className="w-[625px] bg-[#222324] border-x border-b border-[#525252] rounded-b-[5px] p-6">
    <div className="flex items-center mb-4 gap-[10px]">
      <span className="font-sans font-medium text-[20px] leading-[17.6px] text-[#FFFFFF]">
        {variableName}
      </span>
      <div className="w-[24px] h-[24px] flex items-center justify-center">
        <Info size={14} className="text-[#888888]" />
      </div>
    </div>

    <div className="font-sans font-normal text-[15px] leading-[22.5px] text-[#BBBBBB]">
      {text}
    </div>
  </div>
);

export default VariableDescriptionPanel;
