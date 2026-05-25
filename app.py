from flask import Flask, render_template, request

from forward_price import ForwardPrice

app = Flask(__name__)
calc = ForwardPrice()

CALCULATORS = {
    "commodities": {
        "title": "Physical Commodities",
        "method": "commodities",
        "fields": [
            ("P", "Commodity price"),
            ("t", "Time to maturity (months)"),
            ("r", "Interest rate (%)"),
            ("s", "Storage cost"),
            ("i", "Annual insurance cost"),
        ],
    },
    "stock": {
        "title": "Stock",
        "method": "stock",
        "fields": [
            ("P", "Spot price"),
            ("r", "Risk-free rate (%)"),
            ("d", "Dividend yield (%)"),
            ("t", "Time to maturity (months)"),
        ],
    },
    "bond": {
        "title": "Bond",
        "method": "bond",
        "fields": [
            ("P", "Bond price"),
            ("r", "Interest rate (%)"),
            ("c", "Coupon rate (%)"),
            ("t", "Time to maturity (months)"),
        ],
    },
}


@app.route("/")
def index():
    return render_template("index.html", calculators=CALCULATORS)


@app.route("/calculate/<calc_type>", methods=["GET", "POST"])
def calculate(calc_type):
    if calc_type not in CALCULATORS:
        return "Calculator not found", 404

    config = CALCULATORS[calc_type]
    result = None
    error = None
    values = {}

    if request.method == "POST":
        try:
            values = {
                name: float(request.form[name])
                for name, _ in config["fields"]
            }
            method = getattr(calc, config["method"])
            result = method(**values)
        except (ValueError, TypeError):
            error = "Please enter valid numbers in all fields."
        except KeyError:
            error = "Missing input fields."

    return render_template(
        "calculate.html",
        calc_type=calc_type,
        config=config,
        result=result,
        error=error,
        values=values,
    )


if __name__ == "__main__":
    import os

    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
