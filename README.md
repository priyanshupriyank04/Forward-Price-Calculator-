# Forward Price Calculator

A web-based forward price calculator built with Python and Flask. Choose an asset type, enter your inputs, and get the forward price in the browser. The app can be run locally or deployed publicly (e.g. on [Render](https://render.com)) so anyone can use it from any device.

**Repository:** [github.com/priyanshupriyank04/Forward-Price-Calculator-](https://github.com/priyanshupriyank04/Forward-Price-Calculator-)

## Features

- **Physical commodities** — commodity price, time to maturity, interest rate, storage cost, annual insurance
- **Stock** — spot price, risk-free rate, dividend yield, time to maturity
- **Bond** — bond price, interest rate, coupon rate, time to maturity
- Simple web UI with input validation and clear error messages
- Ready for deployment via `render.yaml`

## Project structure

```
├── app.py              # Flask routes and web UI wiring
├── forward_price.py    # Forward price calculation logic
├── requirements.txt    # Python dependencies
├── render.yaml         # Render deployment config
├── runtime.txt         # Python version for hosting
└── templates/          # HTML pages
    ├── base.html
    ├── index.html
    └── calculate.html
```

## Formulas

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

Where `P` is price, `r` and `c` are rates in percent, and `t` is time to maturity in **months** (converted to years inside the formulas).

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/priyanshupriyank04/Forward-Price-Calculator-.git
   cd Forward-Price-Calculator-
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Start the app:

   ```bash
   python app.py
   ```

4. Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

## Deploy on Render

1. Sign in at [render.com](https://render.com) and connect your GitHub account.
2. Click **New +** → **Blueprint**.
3. Select this repository (`priyanshupriyank04/Forward-Price-Calculator-`).
4. Render reads `render.yaml` and creates the web service automatically.
5. After deploy finishes, use the `*.onrender.com` URL to share the calculator.

**Manual setup (alternative):**

| Setting        | Value                                      |
|----------------|--------------------------------------------|
| Build command  | `pip install -r requirements.txt`          |
| Start command  | `gunicorn app:app --bind 0.0.0.0:$PORT`    |

On Render’s free plan, the service may sleep after inactivity; the first request after sleep can take up to a minute to respond.

## Tech stack

- Python 3.11
- Flask
- Gunicorn (production server)

## Contributing

Fork the repository, make your changes, and open a pull request.
