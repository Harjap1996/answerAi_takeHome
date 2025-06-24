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

const data = [
  { name: "Apr", value: 20000 },
  { name: "May", value: 45000 },
  { name: "Jun", value: 40000 },
  { name: "Jul", value: 89000 },
  { name: "Aug", value: 60000 },
  { name: "Sep", value: 45000 },
  { name: "Oct", value: 55000 },
];

const Chart = () => (
  <div className="w-[761px] h-[449px] bg-[#222324] border border-[#525252] rounded-md p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">Graphs</h2>
      <select className="bg-[#222324] border border-[#525252] rounded-md text-white px-3 py-1">
        <option>Unsatisfied Demand %</option>
      </select>
    </div>

    <LineChart width={691} height={340} data={data}>
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
      <XAxis dataKey="name" stroke="#aaa" tick={CustomXAxisTick} />{" "}
      <YAxis stroke="#aaa" tick={CustomYAxisTick} domain={["auto", "auto"]} />
      <Tooltip
        contentStyle={{
          background: "#222324",
          border: "1px solid #525252",
          borderRadius: "8px",
        }}
      />
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
        activeDot={{ r: 8 }}
      />
    </LineChart>
  </div>
);

export default Chart;
