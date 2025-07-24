import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateCoinPage from "./pages/CreateCoinPage";

export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-coin" element={<CreateCoinPage />} />
        </Routes>
      </div>
    </Router>
  );
}
