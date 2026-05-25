# Forward Price Calculator

Calculate forward prices for **physical commodities**, **stocks**, and **bonds** in the browser. No login or install—open the link on a phone, tablet, or laptop and enter your numbers.

**Repository:** [github.com/priyanshupriyank04/Forward-Price-Calculator-](https://github.com/priyanshupriyank04/Forward-Price-Calculator-)

## Live demo

Deploy with [Vercel](https://vercel.com) or [Netlify](https://netlify.com) (see below), then add your URL here:

`https://your-project.vercel.app`

## Features

| Asset type | Inputs |
|------------|--------|
| Physical commodities | Commodity price, time to maturity, interest rate (%), storage cost, annual insurance |
| Stock | Spot price, risk-free rate (%), dividend yield (%), time to maturity |
| Bond | Bond price, interest rate (%), coupon rate (%), time to maturity |

- Clean web UI with validation and error messages
- Runs entirely in the browser (fast, no server cold starts on free hosting)
- Same math in JavaScript (`public/js/forward-price.js`) and Python (`forward_price.py`)

## How it works

1. Home page — pick commodities, stock, or bond.
2. Calculator page — fill in the fields and click **Calculate**.
3. Forward price is computed instantly in the browser.

## Formulas

Time to maturity `t` is in **months** (the code converts to years with `t / 12`).

**Physical commodities**

```
F = P × (1 + r/100 × t/12) + s × t/12 + i × t/12
```

**Stock**

```
F = P × e^((r/100 − d/100) × t/12)
```

**Bond**

```
F = P × (1 + (r/100 − c/100) × t/12)
```

| Symbol | Meaning |
|--------|---------|
| `P` | Spot / bond / commodity price |
| `r` | Interest or risk-free rate (%) |
| `d` | Dividend yield (%) — stock only |
| `c` | Coupon rate (%) — bond only |
| `s` | Storage cost — commodities only |
| `i` | Annual insurance — commodities only |
| `t` | Time to maturity (months) |

## Project structure

```
Forward-Price-Calculator-/
├── public/                    # Static site (production)
│   ├── index.html             # Home — choose asset type
│   ├── calculate.html         # Input form + result
│   ├── css/styles.css
│   └── js/
│       ├── forward-price.js   # Calculation logic
│       └── calculate.js       # Form handling
├── vercel.json                # Vercel: output directory = public
├── netlify.toml               # Netlify: publish = public
├── forward_price.py           # Python formulas (reference / Flask)
├── app.py                     # Flask app (optional local server)
├── templates/                 # Flask HTML (optional)
├── requirements.txt
└── render.yaml                # Optional Python deploy on Render
```

## Deploy on Vercel (recommended)

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **Add New Project** → import **priyanshupriyank04/Forward-Price-Calculator-**.
3. Use these settings (do **not** use the Flask preset):

   | Setting | Value |
   |---------|--------|
   | Framework Preset | **Other** |
   | Root Directory | `./` |
   | Build Command | *(empty)* |
   | Output Directory | `public` |
   | Install Command | *(empty)* |

4. **Environment Variables** — none required.
5. Click **Deploy** and share your `*.vercel.app` URL.

`vercel.json` in the repo already sets the output directory to `public`.

## Deploy on Netlify

1. Sign in at [netlify.com](https://netlify.com) with GitHub.
2. **Add new site** → **Import an existing project** → select this repo.
3. Confirm settings from `netlify.toml`:

   | Setting | Value |
   |---------|--------|
   | Build command | *(empty)* |
   | Publish directory | `public` |

4. **Deploy site** → share your `*.netlify.app` URL.

## Run locally

**Static site (matches production):**

```bash
git clone https://github.com/priyanshupriyank04/Forward-Price-Calculator-.git
cd Forward-Price-Calculator-
cd public
python3 -m http.server 8080
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080).

**Flask (optional):**

```bash
pip install -r requirements.txt
python app.py
```

Open [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Deploy on Render (optional)

For a Python/Flask server instead of the static site:

1. [render.com](https://render.com) → **New** → **Blueprint** → connect this repo.
2. Uses `render.yaml` — build: `pip install -r requirements.txt`, start: `gunicorn app:app`.

Free tier may sleep after ~15 minutes of no traffic.

## Tech stack

| Layer | Technology |
|-------|------------|
| Production UI | HTML, CSS, JavaScript |
| Hosting | Vercel, Netlify, or Render |
| Optional backend | Python 3.11, Flask, Gunicorn |

## Contributing

Fork the repo, create a branch, commit your changes, and open a pull request.

## Author

[Priyanshu Priyank](https://github.com/priyanshupriyank04)
