import { RotateCw, Upload } from "lucide-react";
import HeaderActionButton from "./HeaderActionButton";

type HeaderActionProps = {
  setIsPanelOpen: () => void;
};

const HeaderActions = ({ setIsPanelOpen }: HeaderActionProps) => (
  <div className="flex gap-4">
    <HeaderActionButton icon={<RotateCw size={16} />} />
    <HeaderActionButton label="Edit Variables" onClick={setIsPanelOpen} />
    <HeaderActionButton icon={<Upload size={16} />} />
  </div>
);

export default HeaderActions;
