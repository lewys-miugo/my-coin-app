import React from "react";
import { useEffect, useState } from "react";
import CoinList from "../components/CoinList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OthersParent from "../others/OthersParent";
import Hero from "../others/Hero";

export default function HomePage() {
  const [coins, setCoins] = useState([]);
  

  useEffect(() => {
    fetch("https://api.coinlore.net/api/tickers/")
      .then(res => res.json())
      .then(data => { 
        console.log(data);
        setCoins(data.data)
      })
      .catch(err => console.error("Error fetching coins", err));
  }, []);
  
  return (
    <>
      {/* Top Navigation */}
      <Navbar />
      <Hero />
      
      {/* Coin List Section */}
      <CoinList coins={coins}/>
      {/* <CoinList createdCoins={createdCoins}/> */}
      
      
      <OthersParent />

      {/* Footer */}
      <Footer />
    </>
  );
}