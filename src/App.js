import { useEffect, useState } from "react";
import CoinCard from "./components/CoinCard";
import CoinList from "./components/CoinList";

function App() {

  const [coin ,setCoins] =useState([]);

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
      {coin.slice(0,10).map((coin) => (
      <CoinCard key={coin.id} coin={coin}/>
      ))}
      <CoinList />
    </div>
  );
}

export default App;
