import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from "recharts";
import CustomYAxisTick from "./CustomYAxisTick";
import CustomXAxisTick from "./CustomXAxisTick";
import Dropdown from "./Dropdown";
import { CustomTooltip, CustomCursor } from "./CustomTooltip";
import { type RootState } from "../../redux/store";

const Chart = () => {
  const chartData = useSelector((state: RootState) => state.chart.data);
  return (
    <div className="w-[761px] h-[449px] bg-[#222324] border border-[#525252] rounded-md p-6">
      <div className="flex justify-end mb-4">
        <Dropdown />
      </div>

      <LineChart width={691} height={340} data={chartData}>
        <defs>
          <pattern
            id="vertical-stripes"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="8" fill="#333" />
          </pattern>
        </defs>

        <CartesianGrid stroke="#333" />
        <XAxis dataKey="name" stroke="#aaa" tick={CustomXAxisTick} />
        <YAxis stroke="#aaa" tick={CustomYAxisTick} domain={["auto", "auto"]} />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />

        <Area
          type="linear"
          dataKey="value"
          stroke="none"
          fill="url(#vertical-stripes)"
          baseLine={0}
          fillOpacity={1}
        />
        <Line
          type="linear"
          dataKey="value"
          stroke="#C8E972"
          strokeWidth={2}
          dot={{ r: 6, stroke: "#C8E972", strokeWidth: 3, fill: "#222324" }}
          activeDot={{
            r: 8,
            stroke: "#C8E972",
            strokeWidth: 3,
            fill: "#222324",
            filter: "drop-shadow(0 0 4px #C8E972)",
          }}
        />
      </LineChart>
    </div>
  );
};

export default Chart;
