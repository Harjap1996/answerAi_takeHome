import { ClipboardList, CloudUpload, Settings } from "lucide-react";
import {
  HomeIcon,
  BellIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const Sidebar = () => (
  <div className="w-20 h-screen bg-neutral-950 flex flex-col justify-between pt-8 pb-4 items-center">
    <div className="flex flex-col items-center gap-10 w-8">
      <Bars3Icon className="w-6 h-6 text-white hover:text-lime-400 cursor-pointer transition-colors" />
      <HomeIcon className="w-6 h-6 text-white hover:text-lime-400 cursor-pointer transition-colors" />
      <BellIcon className="w-6 h-6 text-neutral-500 hover:text-lime-400 cursor-pointer transition-colors" />
      <ClipboardList className="w-6 h-6 text-neutral-500 hover:text-lime-400 cursor-pointer transition-colors" />
      <CloudUpload className="w-6 h-6 text-neutral-500 hover:text-lime-400 cursor-pointer transition-colors" />
      <Settings className="w-6 h-6 text-neutral-500 hover:text-lime-400 cursor-pointer transition-colors" />
    </div>

    <div>
      <UserCircleIcon className="w-8 h-8 text-white hover:text-lime-400 cursor-pointer transition-colors" />
    </div>
  </div>
);

export default Sidebar;
