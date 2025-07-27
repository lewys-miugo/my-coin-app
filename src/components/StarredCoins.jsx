import React, { useState, useEffect } from 'react';
import CoinCard from './CoinCard';

function StarredCoins() {
  const [starredCoins, setStarredCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStarredCoins();
  }, []);

  const fetchStarredCoins = async () => {
    try {
      const response = await fetch('http://localhost:3001/starred');
      const data = await response.json();
      setStarredCoins(data || []);
    } catch (error) {
      console.error('Error fetching starred coins:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loading Starred Coins...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  if (starredCoins.length === 0) {
    return (
      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Starred Coins
          </h2>
          <p className="text-lg text-gray-600">
            No coins starred yet. Star your favorite coins!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 md:px-12 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Starred Coins
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your favorite cryptocurrencies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {starredCoins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} showStar={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StarredCoins;