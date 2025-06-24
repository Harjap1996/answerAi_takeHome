import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Chart from "../components/Chart/Chart";
import BestScenarioResults from "../components/BestScenarioResults/BestScenarioResults";
import KeyIndicatorsPanel from "../components/KeyIndicatorsPanel/KeyIndicatorsPanel";
import SlideOver from "../components/SlideOver/SlideOver";
import VariablesPanel from "../components/VariablesPanel/VariablesPanel";
import HeaderActions from "../components/HeaderActions/HeaderActions";

const DashboardPage = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-[18px] h-[18px] flex items-center justify-center">
            <span className="text-black text-sm">⚡</span>
          </div>
          <h2 className="font-sans font-bold text-[32px] leading-[48px] text-white">
            Charging Station
          </h2>
        </div>
        <HeaderActions setIsPanelOpen={() => setIsPanelOpen(true)} />
      </div>
      <div className="flex flex-col gap-6">
        <BestScenarioResults />
        <div className="flex gap-6 items-start">
          <div>
            <h2 className="text-xl font-semibold pb-[15px]">Graphs</h2>
            <Chart />
          </div>
          <div>
            <h2 className="text-xl font-semibold pb-[15px]">
              Key Performance Indicators
            </h2>
            <KeyIndicatorsPanel />
          </div>
        </div>
      </div>
      <SlideOver isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)}>
        <VariablesPanel onClose={() => setIsPanelOpen(false)} />
      </SlideOver>
    </Layout>
  );
};

export default DashboardPage;
