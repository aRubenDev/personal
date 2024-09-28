import { Outlet } from "react-router-dom";

export default function ProjectsLayout() {
  return (
    <>
      <main className="relative h-screen overflow-hidden">
        <Outlet />
      </main>
    </>
  );
}
