import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import VariablesPanel from "../components/VariablesPanel/VariablesPanel";
import Chart from "../components/Chart/Chart";
import KeyIndicatorsPanel from "../components/KeyIndicatorsPanel/KeyIndicatorsPanel";

const DashboardPage = () => (
  <div className="flex min-h-screen bg-black text-white">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Navbar />
      <div className="flex p-4 gap-4">
        <VariablesPanel />
        <Chart />
        <KeyIndicatorsPanel />
      </div>
    </div>
  </div>
);

export default DashboardPage;
