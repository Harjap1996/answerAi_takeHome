import Layout from "../components/Layout/Layout";
import Chart from "../components/Chart/Chart";
import BestScenarioResults from "../components/BestScenarioResults/BestScenarioResults";
import KeyIndicatorsPanel from "../components/KeyIndicatorsPanel/KeyIndicatorsPanel";

const DashboardPage = () => (
  <Layout>
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
  </Layout>
);

export default DashboardPage;
