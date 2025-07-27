import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CoinCard from '../components/CoinCard';

export default function AllCoinsPage() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rank');
  const [filterBy, setFilterBy] = useState('all');

  useEffect(() => {
    fetchCoins();
  }, []);

  useEffect(() => {
    filterAndSortCoins();
  }, [coins, searchTerm, sortBy, filterBy]);

  const fetchCoins = async () => {
    try {
      const response = await fetch("https://api.coinlore.net/api/tickers/?start=0&limit=20");
      const data = await response.json();
      console.log('Fetched data:', data); // Debug log
      setCoins(data.data || []);
    } catch (error) {
      console.error('Error fetching coins:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortCoins = () => {
    let filtered = coins.filter(coin => 
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filter by price change
    if (filterBy === 'gainers') {
      filtered = filtered.filter(coin => parseFloat(coin.percent_change_24h) > 0);
    } else if (filterBy === 'losers') {
      filtered = filtered.filter(coin => parseFloat(coin.percent_change_24h) < 0);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(b.price_usd) - parseFloat(a.price_usd);
        case 'change':
          return parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h);
        case 'rank':
        default:
          return parseInt(a.rank) - parseInt(b.rank);
      }
    });

    setFilteredCoins(filtered);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="animate-pulse">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Loading All Coins...</h1>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">All Cryptocurrencies</h1>
            <p className="text-lg text-gray-600">Browse and search through all available cryptocurrencies</p>
          </div>

          {/* Search and Filter Controls */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search coins..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="rank">Sort by Rank</option>
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="change">Sort by 24h Change</option>
              </select>

              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Coins</option>
                <option value="gainers">Top Gainers</option>
                <option value="losers">Top Losers</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredCoins.length} of {coins.length} coins
            </p>
          </div>

          {/* Coins Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCoins.map((coin) => (
              <CoinCard key={coin.id} coin={coin} showStar={true} />
            ))}
          </div>

          {filteredCoins.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No coins found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
