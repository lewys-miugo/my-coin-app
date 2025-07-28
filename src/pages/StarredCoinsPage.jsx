import React, { useState, useEffect } from 'react';
import { Search, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CoinCard from '../components/CoinCard';

export default function StarredCoinsPage() {
  const [starredCoins, setStarredCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    fetchStarredCoins();
  }, []);

  useEffect(() => {
    filterAndSortCoins();
  }, [starredCoins, searchTerm, sortBy]);

  const fetchStarredCoins = async () => {
    try {
      const response = await fetch('http://localhost:3001/starred', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      const data = await response.json();
      setStarredCoins(data || []);
    } catch (error) {
      console.error('Error fetching starred coins:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortCoins = () => {
    let filtered = starredCoins.filter(coin => 
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(b.price_usd) - parseFloat(a.price_usd);
        case 'change':
          return parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h);
        case 'dateStarred':
        default:
          return new Date(b.dateStarred || 0) - new Date(a.dateStarred || 0);
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
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Loading Starred Coins...</h1>
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
            <div className="flex items-center justify-center mb-4">
              <Star className="h-8 w-8 text-yellow-400 mr-2 fill-current" />
              <h1 className="text-4xl font-bold text-gray-900">Starred Coins</h1>
            </div>
            <p className="text-lg text-gray-600">Your favorite cryptocurrencies in one place</p>
          </div>

          {starredCoins.length === 0 ? (
            <div className="text-center py-12">
              <Star className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No Starred Coins Yet</h2>
              <p className="text-gray-600 mb-6">Start starring your favorite coins to see them here!</p>
              <a
                href="/all-coins"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Browse All Coins
              </a>
            </div>
          ) : (
            <>
              {/* Search and Filter Controls */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search starred coins..."
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
                    <option value="dateStarred">Sort by Date Starred</option>
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="change">Sort by 24h Change</option>
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {filteredCoins.length} of {starredCoins.length} starred coins
                </p>
              </div>

              {/* Coins Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCoins.map((coin) => (
                  <CoinCard key={coin.id} coin={coin} showStar={true} />
                ))}
              </div>

              {filteredCoins.length === 0 && searchTerm && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No starred coins found matching "{searchTerm}".</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}