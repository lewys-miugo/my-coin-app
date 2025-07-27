import React, { useState } from 'react';

function CreateCoin() {
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    price_usd: '',
    total_supply: ''
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

  const generateRandomData = () => {
    return {
      percent_change_1h: (Math.random() * 10 - 5).toFixed(2), // -5% to +5%
      percent_change_24h: (Math.random() * 20 - 10).toFixed(2), // -10% to +10%
      percent_change_7d: (Math.random() * 50 - 25).toFixed(2), // -25% to +25%
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Check if symbol already exists
      const existingCoins = await fetch('http://localhost:3001/coins');
      const coins = await existingCoins.json();
      
      if (coins.some(coin => coin.symbol.toLowerCase() === formData.symbol.toLowerCase())) {
        setMessage('Error: Symbol already exists. Please choose a unique symbol.');
        setIsSubmitting(false);
        return;
      }

      const newCoin = {
        ...formData,
        id: Date.now().toString(),
        price_usd: parseFloat(formData.price_usd),
        total_supply: parseFloat(formData.total_supply),
        market_cap_usd: parseFloat(formData.price_usd) * parseFloat(formData.total_supply),
        rank: coins.length + 1,
        ...generateRandomData()
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
          total_supply: ''
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
          <div className="grid grid-cols-1 gap-6">
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
                Symbol * (Must be unique)
              </label>
              <input
                type="text"
                name="symbol"
                value={formData.symbol}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., BTC"
                maxLength="10"
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
                min="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 45000.50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Supply *
              </label>
              <input
                type="number"
                name="total_supply"
                value={formData.total_supply}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 21000000"
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
