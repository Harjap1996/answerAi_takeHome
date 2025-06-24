const CustomXAxisTick = ({ x, y, payload }: any) => {
  return (
    <text
      x={x}
      y={y + 16} // Shift label downward under axis line
      textAnchor="middle"
      fontFamily="Inter"
      fontSize="12.25px"
      fontWeight="500"
      fill="#FFFFFF"
    >
      {payload.value}
    </text>
  );
};

export default CustomXAxisTick;
