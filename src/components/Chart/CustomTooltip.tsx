import { ChevronUp } from "lucide-react";

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const value = payload[0].value ?? 0;
  const formattedValue = `$${(value / 1000).toFixed(2)}k`;
  const percentage = "4.6% above target";

  return (
    <div className="w-[193px] h-[93px] bg-[#22232433] border border-[#525252] rounded-md p-5 backdrop-blur-[10px]">
      <div className="flex justify-between items-center mb-3">
        <div className="text-[20px] font-bold leading-none">
          {formattedValue}
        </div>
        <div className="w-[14px] h-[14px] rounded-full border border-[#888888] flex items-center justify-center text-[#888888] text-xs">
          ?
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="w-[16px] h-[16px] rounded-full border border-[#C8E972] p-[3px] flex items-center justify-center">
          <ChevronUp size={10} className="text-[#C8E972]" />
        </div>
        <div className="text-[14px] font-normal text-[#878787] leading-none">
          {percentage}
        </div>
      </div>
    </div>
  );
};

const CustomCursor = ({ points }: any) => {
  const { x } = points[0];
  return (
    <line
      x1={x}
      x2={x}
      y1={0}
      y2={340}
      stroke="#C8E972"
      strokeDasharray="4 4"
      strokeWidth={2}
    />
  );
};

export { CustomTooltip, CustomCursor };
