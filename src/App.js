import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateCoinPage from "./pages/CreateCoinPage";
import DashboardPage from "./pages/DashboardPage";
import AllCoinsPage from "./pages/AllCoinsPage";
import StarredCoinsPage from "./pages/StarredCoinsPage";
import CreatedCoinsPage from "./pages/CreatedCoinsPage";

export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-coin" element={<CreateCoinPage />} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/all-coins" element={<AllCoinsPage />} />
          <Route path="/starred-coins" element={<StarredCoinsPage />} />
          <Route path="/created-coins" element={<CreatedCoinsPage />} />
        </Routes>
      </div>
    </Router>
  );
}
