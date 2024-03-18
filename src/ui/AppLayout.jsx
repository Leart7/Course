import { Outlet } from "react-router";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="mt-[83px] h-screen bg-stone-50">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
