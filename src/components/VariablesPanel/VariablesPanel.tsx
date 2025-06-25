import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { X } from "lucide-react";
import { Sparkles } from "lucide-react";
import { RotateCw } from "lucide-react";
import { type RootState } from "../../redux/store";
import { toggleVariable } from "../../redux/slices/variableSlice";
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
  const dispatch = useDispatch();
  const variableCategories = useSelector(
    (state: RootState) => state.variables.categories
  );

  const [hoveredDescription, setHoveredDescription] = useState<{
    label: string;
    text: string;
  } | null>(null);

  const handleToggle = (categoryIndex: number, variableIndex: number) => {
    dispatch(toggleVariable({ categoryIndex, variableIndex }));
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
              onClick: () => handleToggle(catIndex, varIndex),
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
