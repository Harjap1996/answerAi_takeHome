import Layout from "../components/Layout/Layout";
import Chart from "../components/Chart/Chart";

const DashboardPage = () => (
  <Layout>
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold">Graphs</h2>
      <Chart />
    </div>
  </Layout>
);

export default DashboardPage;
