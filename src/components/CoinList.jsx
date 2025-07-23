import React from 'react';
import CoinCard from './CoinCard'

function CoinList ({coins}){
    const coinsToDisplay = coins.slice(0, 8);
    
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {coinsToDisplay.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}

export default CoinList