import VariableButton from "./VariableButton";

type VariableSectionProps = {
  categories: {
    title: string;
    variables: {
      label: string;
      selected: boolean;
      toggleVariable: () => void;
      onHoverStart?: (label: string) => void;
      onHoverEnd?: () => void;
    }[];
  }[];
};

const VariableSection = ({ categories }: VariableSectionProps) => {
  return (
    <div className="w-[625px] bg-[#161618] border border-[#525252] rounded-t-[5px] rounded-b-none p-6">
      {categories.map((category, index) => (
        <div key={index} className="mb-6 pt-[15px]">
          <h3 className="font-sans font-medium text-[15px] leading-[22.5px] tracking-[-0.023em] text-[#D5D5D5] mb-4">
            {category.title}
          </h3>

          <div className="flex flex-wrap gap-4">
            {category.variables.map((variable, i) => (
              <VariableButton
                key={i}
                label={variable.label}
                selected={variable.selected}
                onClick={variable.toggleVariable}
                onHoverStart={variable.onHoverStart}
                onHoverEnd={variable.onHoverEnd}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VariableSection;
