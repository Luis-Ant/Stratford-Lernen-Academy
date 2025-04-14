import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardAdmin from "./pages/dashboard.admin.js";
import DashboardProfe from "./pages/dashboard.profe.js";
import DashboardAlumn from "./pages/dashboard.alumn.js";
import Login from "./pages/Login.js";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/admin" element={<DashboardAdmin />} />
      <Route path="/dashboard/profe" element={<DashboardProfe />} />
      <Route path="/dashboard/alumn" element={<DashboardAlumn />} />
      <Route path="/login" element={<Login />} />
      {/* Ruta por defecto */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
