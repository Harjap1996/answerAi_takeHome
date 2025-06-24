import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-screen w-screen bg-neutral-900 text-white">
    <Sidebar />
    <div className="flex flex-col flex-1">
      <Topbar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  </div>
);

export default Layout;
