// components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-extrabold text-blue-600 flex items-center space-x-2">
          <span></span>
          <span>DEKT Platform</span>
        </a>

        {/* Links - Desktop */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <li><a href="#about" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#platform" className="hover:text-blue-600">Platform</a></li>
          <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
          <li><a href="#support" className="hover:text-blue-600">Support</a></li>
          <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
          <li><a href="#blog" className="hover:text-blue-600">Blog</a></li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/login" className="text-gray-700 hover:text-blue-600">Log In</a>
          <a
            href="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md transition-all"
          >
            Sign Up
          </a>
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
          <a href="#about" className="block">About Us</a>
          <a href="#platform" className="block">Platform</a>
          <a href="#pricing" className="block">Pricing</a>
          <a href="#support" className="block">Support</a>
          <a href="#faq" className="block">FAQ</a>
          <a href="#blog" className="block">Blog</a>
          <div className="border-t pt-4 space-y-2">
            <a href="/login" className="block">Log In</a>
            <a
              href="/signup"
              className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-full"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}