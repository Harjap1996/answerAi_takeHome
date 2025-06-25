import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-neutral-900 flex text-white">
    <Sidebar />
    <div className="flex flex-col flex-1">
      <Topbar />
      <div className="flex-1 max-w-[1440px] min-w-[1200px] mt-5 px-6">
        {children}
      </div>
    </div>
  </div>
);

export default Layout;
