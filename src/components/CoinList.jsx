import React from 'react'
import CoinCard from './CoinCard'

function CoinList (coin){
    const [coins,setCoin] =useState([]);
    const [search, setSearch] =useState(['']);

    

  return (
    <div>
        <CoinCard coin={coin}/>
    </div>
  )
}

export default CoinList