import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

function Layout() {
  return (
    <div className="h-screen max-h-screen flex flex-grow">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;