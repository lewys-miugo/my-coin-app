import React, { useState, useEffect } from 'react';
import { Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CoinCard from '../components/CoinCard';

export default function CreatedCoinsPage() {
  const [createdCoins, setCreatedCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    fetchCreatedCoins();
  }, []);

  useEffect(() => {
    filterAndSortCoins();
  }, [createdCoins, searchTerm, sortBy]);

  const fetchCreatedCoins = async () => {
    try {
      const response = await fetch('http://localhost:3001/coins', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      const data = await response.json();
      setCreatedCoins(data || []);
    } catch (error) {
      console.error('Error fetching created coins:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortCoins = () => {
    let filtered = createdCoins.filter(coin => 
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return parseFloat(b.price_usd) - parseFloat(a.price_usd);
        case 'marketCap':
          return parseFloat(b.market_cap_usd) - parseFloat(a.market_cap_usd);
        case 'oldest':
          return parseInt(a.id) - parseInt(b.id);
        case 'newest':
        default:
          return parseInt(b.id) - parseInt(a.id);
      }
    });

    setFilteredCoins(filtered);
  };

  const deleteCoin = async (coinId) => {
    if (window.confirm('Are you sure you want to delete this coin?')) {
      try {
        await fetch(`http://localhost:3001/coins/${coinId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        fetchCreatedCoins(); // Refresh the list
      } catch (error) {
        console.error('Error deleting coin:', error);
      }
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="animate-pulse">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Loading Created Coins...</h1>
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
              <Plus className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-4xl font-bold text-gray-900">Created Coins</h1>
            </div>
            <p className="text-lg text-gray-600">Manage your custom cryptocurrencies</p>
          </div>

          {createdCoins.length === 0 ? (
            <div className="text-center py-12">
              <Plus className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">No Created Coins Yet</h2>
              <p className="text-gray-600 mb-6">Create your first custom cryptocurrency!</p>
              <Link
                to="/create-coin"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Create New Coin
              </Link>
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
                      placeholder="Search created coins..."
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
                    <option value="newest">Sort by Newest</option>
                    <option value="oldest">Sort by Oldest</option>
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="marketCap">Sort by Market Cap</option>
                  </select>
                </div>
              </div>

              {/* Results Count and Create Button */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing {filteredCoins.length} of {createdCoins.length} created coins
                </p>
                <Link
                  to="/create-coin"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Coin
                </Link>
              </div>

              {/* Coins Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCoins.map((coin) => (
                  <div key={coin.id} className="relative">
                    <CoinCard coin={coin} showStar={true} />
                    <button
                      onClick={() => deleteCoin(coin.id)}
                      className="absolute top-2 left-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full text-xs transition-colors"
                      title="Delete coin"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {filteredCoins.length === 0 && searchTerm && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No created coins found matching "{searchTerm}".</p>
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