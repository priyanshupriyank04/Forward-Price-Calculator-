# Forward Price Calculator

A forward price calculator for physical commodities, stocks, and bonds. The live site is a **static web app** (HTML + JavaScript) so it deploys free on **Vercel** or **Netlify** and works on any device—no install, no cold starts.

**Repository:** [github.com/priyanshupriyank04/Forward-Price-Calculator-](https://github.com/priyanshupriyank04/Forward-Price-Calculator-)

## Features

- **Physical commodities** — commodity price, time to maturity, interest rate, storage cost, annual insurance
- **Stock** — spot price, risk-free rate, dividend yield, time to maturity
- **Bond** — bond price, interest rate, coupon rate, time to maturity
- Input validation and clear error messages
- Same formulas in the browser (`public/js/forward-price.js`) and in Python (`forward_price.py`)

## Project structure

```
├── public/                 # Static site (deploy this)
│   ├── index.html
│   ├── calculate.html
│   ├── css/styles.css
│   └── js/
│       ├── forward-price.js
│       └── calculate.js
├── vercel.json             # Vercel config
├── netlify.toml            # Netlify config
├── forward_price.py        # Python formulas (optional / local Flask)
├── app.py                  # Flask app (optional local dev)
└── render.yaml             # Optional Render (Python) deploy
```

## Formulas

**Physical commodities:** `F = P × (1 + r/100 × t/12) + s × t/12 + i × t/12`

**Stock:** `F = P × e^((r/100 − d/100) × t/12)`

**Bond:** `F = P × (1 + (r/100 − c/100) × t/12)`

`t` is time to maturity in **months**.

## Deploy on Vercel (recommended)

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New Project** → import `priyanshupriyank04/Forward-Price-Calculator-`.
3. Leave defaults (Vercel uses `vercel.json` → publishes the `public` folder).
4. Click **Deploy** → share your `*.vercel.app` URL.

No build command needed. The site is always on (no sleep like free Render).

## Deploy on Netlify

1. Sign in at [netlify.com](https://netlify.com) with GitHub.
2. **Add new site** → **Import an existing project** → select this repo.
3. Build settings (auto from `netlify.toml`):
   - **Publish directory:** `public`
   - **Build command:** (leave empty)
4. **Deploy site** → share your `*.netlify.app` URL.

## Run locally (static)

```bash
cd public
python3 -m http.server 8080
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080).

## Run locally (Flask, optional)

```bash
pip install -r requirements.txt
python app.py
```

Open [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Deploy on Render (optional)

Python + Flask hosting via `render.yaml`. Free tier may sleep after inactivity.

## Tech stack

- **Production:** HTML, CSS, JavaScript (Vercel / Netlify)
- **Optional:** Python 3.11, Flask, Gunicorn (local or Render)

## Contributing

Fork the repository, make your changes, and open a pull request.
