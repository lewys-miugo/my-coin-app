import React from 'react'

function CoinCard ({coin}) {
  const priceChange = parseFloat(coin.percent_change_24h);
  const isPositive = priceChange >= 0;
  
  return (
    <div className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200 min-w-[280px]'>
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
      
      <div className="flex justify-between text-sm text-gray-600">
        <span>Rank: #{coin.rank}</span>
        <span>Market Cap: ${parseFloat(coin.market_cap_usd).toLocaleString()}</span>
      </div>
    </div>
  )
}

export default CoinCard
