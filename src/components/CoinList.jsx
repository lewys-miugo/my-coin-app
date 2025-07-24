import React from 'react';
import CoinCard from './CoinCard'

function CoinList ({coins}){
    const coinsToDisplay = coins.slice(0, 8);
    
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Top Cryptocurrencies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track the latest prices and market movements of popular cryptocurrencies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coinsToDisplay.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoinList
