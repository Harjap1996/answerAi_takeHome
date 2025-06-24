import Layout from "../components/Layout/Layout";
import Chart from "../components/Chart/Chart";
import BestScenarioResults from "../components/BestScenarioResults/BestScenarioResults";

const DashboardPage = () => (
  <Layout>
    <div className="flex flex-col gap-6">
      <BestScenarioResults />
      <h2 className="text-xl font-semibold">Graphs</h2>
      <Chart />
    </div>
  </Layout>
);

export default DashboardPage;
