import React from 'react'

function CoinCard ({coin}) {
  return (
    <div className='block'>
    <h2>{coin.name}</h2>
    <h1>{coin.symbol}</h1>
    <p>Price: ${coin.price_usd}</p>
    </div>
  )
}

export default CoinCard