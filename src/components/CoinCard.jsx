import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

function CoinCard ({coin, showStar = true}) {
  const [isStarred, setIsStarred] = useState(false);
  const priceChange = parseFloat(coin.percent_change_24h);
  const isPositive = priceChange >= 0;

  const formatMarketCap = (marketCap) => {
    const value = parseFloat(marketCap);
    if (value >= 1e9) {
      return `$${(value / 1e9).toFixed(2)}B`;
    } else if (value >= 1e6) {
      return `$${(value / 1e6).toFixed(2)}M`;
    } else if (value >= 1e3) {
      return `$${(value / 1e3).toFixed(2)}K`;
    }
    return `$${value.toLocaleString()}`;
  };

  const checkIfStarred = async () => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/lewys-miugo/my-coin-app/starred');
      const starredCoins = await response.json();
      setIsStarred(starredCoins.some(starredCoin => starredCoin.id === coin.id));
    } catch (error) {
      console.error('Error checking starred status:', error);
    }
  };

  useEffect(() => {
    checkIfStarred();
  }, [coin.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleStar = async () => {
    try {
      if (isStarred) {
        // Remove from starred
        const response = await fetch('https://my-json-server.typicode.com/lewys-miugo/my-coin-app/starred', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        });
        const starredCoins = await response.json();
        const coinToRemove = starredCoins.find(starredCoin => starredCoin.id === coin.id);
        
        if (coinToRemove) {
          await fetch(`https://my-json-server.typicode.com/lewys-miugo/my-coin-app/starred/${coinToRemove.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            }
          });
        }
        setIsStarred(false);
      } else {
        // Add to starred with timestamp
        await fetch('https://my-json-server.typicode.com/lewys-miugo/my-coin-app/starred', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...coin,
            dateStarred: new Date().toISOString()
          }),
        });
        setIsStarred(true);
      }
    } catch (error) {
      console.error('Error toggling star:', error);
    }
  };
  
  return (
    <div className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 min-w-[280px] relative'>
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{coin.name}</h2>
          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {coin.symbol}
          </span>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-gray-900">
            ${parseFloat(coin.price_usd).toFixed(2)}
          </p>
          <p className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? '+' : ''}{priceChange}%
          </p>
        </div>
      </div>
      
      {/* Market cap row with star */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>Rank: #{coin.rank}</span>
        <div className="flex items-center gap-1">
          <span>Market Cap: {formatMarketCap(coin.market_cap_usd)}</span>
          {showStar && (
            <button
              onClick={toggleStar}
              className="p-0.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Star 
                size={14} 
                className={`${isStarred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'} hover:text-yellow-400`}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CoinCard
