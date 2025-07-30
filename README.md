# 🚀 Crypto Volatility Dashboard

A real-time cryptocurrency monitoring dashboard that tracks price volatility using data from the Coinlore API, featuring user-defined coin simulations and watchlist functionality.

🌐 **Live Demo:** [https://mycoins-app.netlify.app](https://mycoins-app.netlify.app)

## ✨ Features

- 📡 Real-time crypto data from Coinlore API
- 📊 Volatility scoring and risk assessment
- ⭐ Watchlist functionality with local storage
- 🛠️ CRUD operations for user-created coins
- 🧪 Market volatility simulation
- 🎨 Modern UI with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend:** React 19, Tailwind CSS
- **API:** Coinlore API
- **Storage:** LocalStorage, JSON Server
- **Testing:** Jest, React Testing Library
- **Deployment:** Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js (v22 or higher)
- npm 

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:lewys-miugo/my-coin-app.git
   cd my-coin-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the JSON server (for local API):
   ```bash
   npx json-server --watch db.json --port 3001
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🌐 Live Demo

Visit the live application at: **[https://mycoins-app.netlify.app](https://mycoins-app.netlify.app)**

*Note: The live demo uses localStorage for data persistence since JSON Server is not available in the production environment.*

## 📋 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: This is a one-way operation!** Removes the single build dependency and gives you full control over configuration files.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to get started.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch from `development`
3. Make your changes
4. Submit a pull request

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── services/      # API services
├── utils/         # Utility functions
└── App.js         # Main application component
```

## 🎯 Roadmap

- [ ] Real-time price updates
- [ ] Advanced filtering options
- [ ] Portfolio tracking
- [ ] Price alerts
- [ ] Mobile responsiveness
- [ ] Dark mode support

## 📄 License

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🆘 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/lewys-miugo/my-coin-app/issues) on GitHub.

---

**Happy Trading! 📈**
