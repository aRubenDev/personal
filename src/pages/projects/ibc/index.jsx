import { Routes, Route } from "react-router-dom";
import LayoutIBC from "./Layout-ibc";
import HomeIBC from "./Home-ibc";
import ErrorIBC from "./Error-ibc";

export default function ProjectIBC() {
  return (
    <Routes>
      <Route path="/" element={<LayoutIBC />}>
        <Route index element={<HomeIBC />} />
        <Route path="/entities" element={<ErrorIBC />} />

        {/* Error page */}
        <Route path="*" element={<ErrorIBC />} />
      </Route>
    </Routes>
  );
}