import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateCoinPage from "./pages/CreateCoinPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-coin" element={<CreateCoinPage />} />
          <Route path="/dashboard" element={<DashboardPage/>} />
        </Routes>
      </div>
    </Router>
  );
}
