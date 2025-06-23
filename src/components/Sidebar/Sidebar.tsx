import { Home, BarChart3, Cloud, Settings } from "lucide-react";

const Sidebar = () => (
  <div className="w-16 bg-neutral-900 flex flex-col items-center py-4 space-y-6">
    <div className="flex-1 flex flex-col justify-center space-y-6">
      <Home className="w-6 h-6 text-white hover:text-lime-400 cursor-pointer" />
      <BarChart3 className="w-6 h-6 text-white hover:text-lime-400 cursor-pointer" />
      <Cloud className="w-6 h-6 text-white hover:text-lime-400 cursor-pointer" />
      <Settings className="w-6 h-6 text-white hover:text-lime-400 cursor-pointer" />
    </div>
    <div className="pb-4">
      <div className="w-8 h-8 rounded-full bg-white" />
    </div>
  </div>
);

export default Sidebar;
