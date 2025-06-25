import KpiCard from "./KpiCard";

const KeyIndicatorsPanel = () => {
  const kpis = [
    {
      label: "Infrastructure Units",
      description: "This describes variable two and what the shown data means.",
      value: "€421.07",
    },
    {
      label: "Charging Growth",
      description: "This describes variable two and what the shown data means.",
      value: "33.07",
    },
    {
      label: "Localization Change",
      description: "This describes variable two and what the shown data means.",
      value: "21.9%",
    },
    {
      label: "Fleet Growth",
      description: "This describes variable two and what the shown data means.",
      value: "7.03%",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      {kpis.map((kpi, index) => (
        <KpiCard
          key={index}
          label={kpi.label}
          description={kpi.description}
          value={kpi.value}
        />
      ))}
    </div>
  );
};

export default KeyIndicatorsPanel;
