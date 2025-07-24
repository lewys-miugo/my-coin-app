import React from "react";
import { useEffect, useState } from "react";
import CoinList from "./components/CoinList";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Optional: You can create separate pages or sections for each
// but here we'll just use sections with IDs to match navbar links.

export default function App() {
  const [coins ,setCoins] =useState([]);

  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/")
    .then(res => res.json())
    .then(data =>{ 
      console.log(data);
      setCoins(data.data)})
    .catch (err => console.error("Error fetching coins", err));
  }, []);
  
  return (
    <div className="font-sans text-gray-800">
      {/* Top Navigation */}
      <Navbar />
      <CoinList coins ={coins}/>
      <Dashboard />
        
      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-white to-blue-50 py-20 px-6 md:px-12 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
          Crypto Investment Platform
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
          Unlock the power of digital assets with a secure, user-friendly platform.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
          />
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all">
            Get Started
          </button>
        </form>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="max-w-3xl text-gray-600">
          We empower investors to manage, grow, and diversify their digital asset
          portfolios through cutting-edge blockchain technology.
        </p>
      </section>

      {/* Platform */}
      <section id="platform" className="py-20 px-6 md:px-12 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6">Our Platform</h2>
        <p className="max-w-3xl text-gray-600">
          A next-generation investment ecosystem integrating blockchain, DeFi,
          and secure analytics to give you the best returns.
        </p>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-3xl font-bold mb-6">Pricing</h2>
        <p className="max-w-3xl text-gray-600">
          Transparent pricing designed to suit every level of investor.
        </p>
      </section>

      {/* Support */}
      <section id="support" className="py-20 px-6 md:px-12 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6">Support</h2>
        <p className="max-w-3xl text-gray-600">
          Our team is here 24/7 to help you with your investment journey.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 md:px-12 bg-white">
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <p className="max-w-3xl text-gray-600">
          Find answers to common questions about our platform and services.
        </p>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 px-6 md:px-12 bg-blue-50">
        <h2 className="text-3xl font-bold mb-6">Blog</h2>
        <p className="max-w-3xl text-gray-600">
          Insights, trends, and news from the world of crypto investments.
        </p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}