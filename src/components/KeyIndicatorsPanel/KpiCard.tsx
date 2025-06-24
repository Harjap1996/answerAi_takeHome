type KpiCardProps = {
  label: string;
  description: string;
  value: string;
};

const KpiCard = ({ label, description, value }: KpiCardProps) => (
  <div className="w-[241px] h-[214px] rounded-[5px] p-[30px] border-[1px] border-[#525252] bg-[#222324] flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <div className="font-sans font-medium text-[18px] leading-none text-white">
        {label}
      </div>
      <div className="w-[14px] h-[14px] rounded-full border border-[#888888] flex items-center justify-center text-[#888888] text-xs">
        ?
      </div>
    </div>

    <div className="mt-[-45px] text-[12px] text-[#AAAAAA] leading-snug">
      {description}
    </div>

    <div className="text-[32px] font-bold text-white leading-[88%] tracking-[-0.02em] text-right">
      {value}
    </div>
  </div>
);

export default KpiCard;
