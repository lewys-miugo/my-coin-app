import { useEffect, useState } from "react";
import CoinList from "./components/CoinList";

import Dashboard from "./components/Dashboard";


function App() {

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
    <div className="App">

      <CoinList coins ={coins}/>
      <Dashboard />

    </div>
  );
}

export default App;
