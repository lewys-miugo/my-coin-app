// components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          CryptoApp
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
          <Link to="/all-coins" className="hover:text-blue-600">All Coins</Link>
          <Link to="/starred-coins" className="hover:text-blue-600">Starred</Link>
          <Link to="/created-coins" className="hover:text-blue-600">Created</Link>
          <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/create-coin"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md transition-all"
          >
            Create Coin
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="md:hidden bg-white shadow-inner px-6 py-4 space-y-4 font-medium text-gray-700">
          <Link to="/all-coins" className="block">All Coins</Link>
          <Link to="/starred-coins" className="block">Starred Coins</Link>
          <Link to="/created-coins" className="block">Created Coins</Link>
          <Link to="/dashboard" className="block">Dashboard</Link>
          <div className="border-t pt-4">
            <Link
              to="/create-coin"
              className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-full"
            >
              Create Coin
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
