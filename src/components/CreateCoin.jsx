import React, { useState } from 'react';

function CreateCoin() {
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    price_usd: '',
    percent_change_1h: '',
    percent_change_24h: '',
    percent_change_7d: '',
    market_cap_usd: '',
    rank: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const newCoin = {
        ...formData,
        id: Date.now().toString(), // Simple ID generation
        price_usd: parseFloat(formData.price_usd),
        percent_change_1h: parseFloat(formData.percent_change_1h),
        percent_change_24h: parseFloat(formData.percent_change_24h),
        percent_change_7d: parseFloat(formData.percent_change_7d),
        market_cap_usd: parseFloat(formData.market_cap_usd),
        rank: parseInt(formData.rank)
      };

      const response = await fetch('http://localhost:3001/coins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCoin),
      });

      if (response.ok) {
        setMessage('Coin created successfully!');
        setFormData({
          name: '',
          symbol: '',
          price_usd: '',
          percent_change_1h: '',
          percent_change_24h: '',
          percent_change_7d: '',
          market_cap_usd: '',
          rank: ''
        });
      } else {
        setMessage('Error creating coin. Please try again.');
      }
    } catch (error) {
      setMessage('Error creating coin. Make sure JSON server is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="create-coin" className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Create New Coin
          </h2>
          <p className="text-lg text-gray-600">
            Add your custom cryptocurrency to the platform
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Coin Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Bitcoin"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Symbol *
              </label>
              <input
                type="text"
                name="symbol"
                value={formData.symbol}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., BTC"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price (USD) *
              </label>
              <input
                type="number"
                step="0.01"
                name="price_usd"
                value={formData.price_usd}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 45000.50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rank *
              </label>
              <input
                type="number"
                name="rank"
                value={formData.rank}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1h Change (%)
              </label>
              <input
                type="number"
                step="0.01"
                name="percent_change_1h"
                value={formData.percent_change_1h}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 2.5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                24h Change (%)
              </label>
              <input
                type="number"
                step="0.01"
                name="percent_change_24h"
                value={formData.percent_change_24h}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., -1.2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                7d Change (%)
              </label>
              <input
                type="number"
                step="0.01"
                name="percent_change_7d"
                value={formData.percent_change_7d}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 5.8"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Market Cap (USD)
              </label>
              <input
                type="number"
                name="market_cap_usd"
                value={formData.market_cap_usd}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 850000000000"
              />
            </div>
          </div>

          {message && (
            <div className={`mt-6 p-4 rounded-lg ${
              message.includes('successfully') 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {message}
            </div>
          )}

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              {isSubmitting ? 'Creating Coin...' : 'Create Coin'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateCoin;