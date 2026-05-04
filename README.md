# Casa da Geyse — MVP

Adult escort listing platform. React frontend + PHP REST API + MySQL.

---

## Stack

| Layer    | Tech |
|----------|------|
| Frontend | React 18, React Router 6, TailwindCSS 3, Vite 5 |
| Backend  | PHP 8+, MySQLi |
| Database | MySQL 8 |

---

## Quick Start

### 1. Database

```bash
mysql -u root -p < backend/database.sql
```

Edit `backend/config/database.php` if your credentials differ from the defaults (`root` / no password).

### 2. PHP API server

```bash
cd backend
php -S localhost:8000
```

The API is now available at `http://localhost:8000/api/`.

### 3. React frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

Vite proxies `/api/*` → `http://localhost:8000/api/*`, so no CORS issues in dev.

---

## API Endpoints

| Method | URL                   | Description              |
|--------|-----------------------|--------------------------|
| GET    | /api/escorts.php      | List escorts (filterable)|
| GET    | /api/escorts.php?city=São Paulo | Filter by city |
| GET    | /api/escorts.php?state=SP | Filter by state      |
| GET    | /api/escorts.php?category=novatas | Filter by category |
| GET    | /api/escorts.php?sort=views | Sort by views     |
| GET    | /api/escort.php?id=1  | Single escort profile    |
| POST   | /api/escorts.php      | Create escort (JSON body)|

---

## Project Structure

```
casa-da-geyse/
├── backend/
│   ├── api/
│   │   ├── escorts.php     # List + Create
│   │   └── escort.php      # Single profile
│   ├── config/
│   │   └── database.php    # DB credentials
│   └── database.sql        # Schema + seed data
│
└── frontend/
    ├── src/
    │   ├── api/
    │   │   └── escorts.js  # Fetch helpers
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── Hero.jsx
    │   │   ├── FilterBar.jsx
    │   │   ├── FeatureCards.jsx
    │   │   ├── LocationGrid.jsx
    │   │   ├── EscortCard.jsx
    │   │   ├── EscortListing.jsx
    │   │   ├── CTASection.jsx
    │   │   └── Footer.jsx
    │   └── pages/
    │       ├── Home.jsx
    │       ├── EscortsPage.jsx
    │       ├── ProfilePage.jsx
    │       └── StatesPage.jsx
    ├── index.html
    ├── vite.config.js
    └── tailwind.config.js
```

---

## Production Deployment

1. `npm run build` — outputs to `frontend/dist/`
2. Serve `dist/` from the same web root as the PHP files (Apache/Nginx)
3. Configure server to rewrite all non-API paths to `index.html`
4. Update CORS in PHP files to restrict to your domain
