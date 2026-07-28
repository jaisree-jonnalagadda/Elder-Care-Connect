import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import WelfareSchemes from "../pages/WelfareSchemes";
import Healthcare from "../pages/Healthcare";
import Emergency from "../pages/Emergency";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/welfare"
        element={<WelfareSchemes />}
      />

      <Route
        path="/healthcare"
        element={<Healthcare />}
      />

      <Route
        path="/emergency"
        element={<Emergency />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />
    </Routes>
  );
}

export default AppRoutes;