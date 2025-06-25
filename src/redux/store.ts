import { configureStore } from "@reduxjs/toolkit";
import variableReducer from "./slices/variableSlice";
import chartReducer from "./slices/chartSlice";

export const store = configureStore({
  reducer: {
    variables: variableReducer,
    chart: chartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
