import React, { useState, useEffect } from 'react';
import CoinCard from './CoinCard';

function CreatedCoins() {
  const [createdCoins, setCreatedCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCreatedCoins();
  }, []);

  const fetchCreatedCoins = async () => {
    try {
      const response = await fetch('https://my-json-server.typicode.com/lewys-miugo/my-coin-app/coins');
      const data = await response.json();
      setCreatedCoins(data || []);
    } catch (error) {
      console.error('Error fetching created coins:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loading Created Coins...
            </h2>
          </div>
        </div>
      </section>
    );
  }

  if (createdCoins.length === 0) {
    return (
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Created Coins
          </h2>
          <p className="text-lg text-gray-600">
            No coins created yet. Create your first coin!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Created Coins
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your custom cryptocurrencies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {createdCoins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} showStar={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CreatedCoins;
