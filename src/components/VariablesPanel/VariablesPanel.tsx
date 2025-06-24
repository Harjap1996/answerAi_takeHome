import { useState } from "react";
import { X } from "lucide-react";
import { Sparkles } from "lucide-react";
import { RotateCw } from "lucide-react";
import VariableSection from "./VariableSection";
import AppButton from "../AppButton/AppButton";
import SearchInput from "../SearchInput/SearchInput";
import VariableDescriptionPanel from "./VariableDescriptionPanel";
import SectionToggleHeader from "../SectionToggleHeader/SectionToggleHeader";

type VariablesPanelProps = {
  onClose: () => void;
};

const VariablesPanel = ({ onClose }: VariablesPanelProps) => {
  const [search, setSearch] = useState("");
  const [variableCategories, setVariableCategories] = useState([
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
  ]);
  const [hoveredDescription, setHoveredDescription] = useState<{
    label: string;
    text: string;
  } | null>(null);

  const toggleVariable = (categoryIndex: number, variableIndex: number) => {
    setVariableCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      const category = updatedCategories[categoryIndex];
      const updatedVariables = [...category.variables];

      updatedVariables[variableIndex] = {
        ...updatedVariables[variableIndex],
        selected: !updatedVariables[variableIndex].selected,
      };

      updatedCategories[categoryIndex] = {
        ...category,
        variables: updatedVariables,
      };

      return updatedCategories;
    });
  };

  return (
    <div className="w-half h-full bg-[#0E0D0D] border-l-[2px] border-l-[#525252] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] p-6 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[24px] font-semibold text-white">Edit Variables</h2>
        <button onClick={onClose}>
          <X className="text-white" />
        </button>
      </div>

      <div className="flex items-center justify-between mb-6">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search Variables"
          className="w-[351px] h-[38px]"
        />

        <div className="flex items-center gap-4">
          <AppButton
            icon={<Sparkles size={16} />}
            label="Autofill"
            className="w-[128px]"
          />

          <AppButton
            icon={<RotateCw size={16} />}
            label="Rerun"
            variant="highlight"
            className="w-[128px]"
          />
        </div>
      </div>

      <div className=" overflow-y-auto">
        <VariableSection
          categories={variableCategories.map((category, catIndex) => ({
            ...category,
            variables: category.variables.map((variable, varIndex) => ({
              ...variable,
              onHoverStart: () =>
                setHoveredDescription({
                  label: variable.label,
                  text: variable.description,
                }),
              onHoverEnd: () => setHoveredDescription(null),

              toggleVariable: () => toggleVariable(catIndex, varIndex),
            })),
          }))}
        />
        {hoveredDescription && (
          <VariableDescriptionPanel
            variableName={hoveredDescription.label}
            text={hoveredDescription.text}
          />
        )}
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <SectionToggleHeader title="Primary Variables" />
        <SectionToggleHeader title="Secondary Variables" />
      </div>
    </div>
  );
};

export default VariablesPanel;
