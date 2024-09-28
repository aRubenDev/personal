import { Outlet } from "react-router-dom";
import SidenavIBC from "../../../components/projects/ibc/Sidenav-ibc";
export default function LayoutIBC() {
  return (
    <main className="flex relative h-screen bg-blue-700 p-4">
      <div className="w-1/5">
        <SidenavIBC />
      </div>
      <Outlet />
    </main>
  );
}
