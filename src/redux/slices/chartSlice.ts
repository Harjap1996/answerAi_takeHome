import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ChartDataPoint = {
  name: string;
  value: number;
};

type ChartState = {
  data: ChartDataPoint[];
};

const initialState: ChartState = {
  data: [
    { name: "Apr", value: 20000 },
    { name: "May", value: 45000 },
    { name: "Jun", value: 40000 },
    { name: "Jul", value: 89000 },
    { name: "Aug", value: 60000 },
    { name: "Sep", value: 45000 },
    { name: "Oct", value: 55000 },
  ],
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    setChartData(state, action: PayloadAction<ChartDataPoint[]>) {
      state.data = action.payload;
    },
  },
});

export const { setChartData } = chartSlice.actions;
export default chartSlice.reducer;
