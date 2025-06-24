const CustomYAxisTick = ({ x, y, payload }: any) => {
  const formattedValue = `$${(payload.value / 1000).toFixed(0)}K`;

  return (
    <text
      x={x - 10}
      y={y}
      dy={4}
      textAnchor="end"
      fontFamily="Inter"
      fontSize="12.25px"
      fontWeight="500"
      fill="#FFFFFF" // <-- THIS directly fixes color
    >
      {formattedValue}
    </text>
  );
};

export default CustomYAxisTick;
