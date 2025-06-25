import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Variable = {
  label: string;
  selected: boolean;
  description: string;
};

type Category = {
  title: string;
  variables: Variable[];
};

type VariableState = {
  categories: Category[];
};

const initialState: VariableState = {
  categories: [
    {
      title: "Variable Category 1",
      variables: [
        { label: "Carbon 1", selected: false, description: "fff" },
        {
          label: "Co2 Distribution",
          selected: true,
          description:
            "But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, or even a skateboard, making it suitable for people of all ages. Whether you're a student, a professional, or a senior citizen, Switch adapts to your needs and lifestyle.",
        },
        { label: "Fleet sizing", selected: true, description: "sffsf" },
      ],
    },
    {
      title: "Variable Category 2",
      variables: [
        { label: "Parking Rate", selected: false, description: "" },
        { label: "Border Rate", selected: true, description: "" },
        { label: "Border Rate", selected: true, description: "" },
      ],
    },
    {
      title: "Variable Category 3",
      variables: [
        { label: "Variable 1", selected: true, description: "" },
        { label: "Variable 2", selected: false, description: "" },
      ],
    },
  ],
};

const variableSlice = createSlice({
  name: "variables",
  initialState,
  reducers: {
    toggleVariable(
      state,
      action: PayloadAction<{ categoryIndex: number; variableIndex: number }>
    ) {
      const { categoryIndex, variableIndex } = action.payload;
      const variable = state.categories[categoryIndex].variables[variableIndex];
      variable.selected = !variable.selected;
    },
  },
});

export const { toggleVariable } = variableSlice.actions;
export default variableSlice.reducer;
