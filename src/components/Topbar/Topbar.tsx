import { useState } from "react";
import { Search } from "lucide-react";

const Topbar = () => {
  const [currentTab, setCurrentTab] = useState("charging");
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-neutral-950">
      <div className="flex gap-4 items-center">
        <button
          className={`px-4 py-2 rounded-md font-medium text-base transition-colors ${
            currentTab === "charging"
              ? "bg-[#242424] border border-[#5A5A5A] text-white font-sans"
              : "text-white font-roobert"
          }`}
        >
          Charging Stations
        </button>

        <button
          className={`px-4 py-2 rounded-md font-medium text-base transition-colors ${
            currentTab === "fleet"
              ? "bg-[#242424] border border-[#5A5A5A] text-white font-sans"
              : "text-white font-roobert"
          }`}
        >
          Fleet Sizing
        </button>

        <button
          className={`px-4 py-2 rounded-md font-medium text-base transition-colors ${
            currentTab === "parking"
              ? "bg-[#242424] border border-[#5A5A5A] text-white font-sans"
              : "text-white font-roobert"
          }`}
        >
          Parking
        </button>
      </div>

      <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
        <Search className="w-4 h-4 text-white mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-white focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Topbar;
