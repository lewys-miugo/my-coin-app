# 🧠 Contributing to My Coin App

Welcome! We're building a crypto monitoring dashboard that tracks price volatility using real-time data from the Coinlore API, along with user-defined coin simulations. Whether you're fixing a bug, improving UI, or extending features, we're excited to have your contribution! 💪

---

## 📌 Contribution Workflow

1. **Fork the repository** and clone it locally.
2. **Create a new branch** from the `development` branch:
   ```bash
   git checkout development
   git pull origin development
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**, commit clearly:
   ```bash
   git commit -m "Add: brief message about your change"
   ```

4. **Push to your forked repo**:
   ```bash
   git push origin your-name/your-feature-name
   ```

5. **Create a Pull Request (PR)** into the `development` branch from your GitHub fork.

> 🔁 **NEVER** push directly to the `main` branch. All changes must go through `development`.

---

## 👥 Team Allocation (Tasks)

To avoid overlap, each contributor is assigned a key feature. Collaborate, but lead on your part:

| Team Member | Responsibility                                     |
|-------------|----------------------------------------------------|
| **A**       | 📡 API Integration & Data Fetching                 |
| **B**       | 📊 Dashboard: View, Risk Score, Filtering          |
| **C**       | ⭐ Starred Coins (Watchlist), LocalStorage/DB sync |
| **D**       | 🛠️ CRUD for User Coins & 🧪 Market Simulation      |

---

## ✅ Feature Checklist

### 📡 API Integration & Data Fetching (A)
- [ ] Create utility to fetch from Coinlore API
- [ ] Normalize and structure data
- [ ] Implement `useFetchCoins` hook
- [ ] Handle loading, error, and fallback states

### 📊 Dashboard View & Filter (B)
- [ ] Display coins in card or table
- [ ] Show: name, price, % change (1h/24h/7d), rank
- [ ] Compute volatility score
- [ ] Label coins as: Stable, Moderate, Risky
- [ ] Filtering UI for risk level

### ⭐ Starred Coins / Watchlist (C)
- [ ] "Star" functionality for coins
- [ ] Persist to `localStorage` or `json-server`
- [ ] Watchlist toggle view
- [ ] Preserve starred coins on reload

### 🛠️ CRUD for User-Created Coins (D)
- [ ] Add coin form (manual input)
- [ ] Display user coins in dashboard
- [ ] Enable edit of % changes
- [ ] Enable deletion
- [ ] Use `json-server` for persistence

### 🧪 Simulate Market Volatility (D)
- [ ] Simulate % change values with randomness
- [ ] Button or trigger for simulation
- [ ] Automatically update visuals

---

## 🧪 Local Setup

```bash
git clone git@github.com:lewys-miugo/my-coin-app.git
cd my-coin-app
npm install
npx json-server --watch db.json --port 3001  # for local API
npm start
```

**Note:** Make sure `db.json` is properly structured for coins & watchlist persistence.

---

## 💬 Issues & Communication

- Use GitHub Issues for bugs, enhancements, or discussions
- Tag relevant people
- Keep commits and PRs small and focused

---

## 🧹 Code Style & Best Practices

- Use consistent formatting (e.g., Prettier)
- Prefer functional components and hooks (React)
- Write descriptive PR titles and messages
- Test your code before pushing

---

## 🙏 Thank You!

We're building this project as a team, and every bit of effort makes it stronger. Let's collaborate, learn, and grow together!

Happy coding! 🚀
