const ForwardPrice = {
  commodities(P, t, r, s, i) {
    return P * (1 + (r / 100) * (t / 12)) + s * (t / 12) + i * (t / 12);
  },

  stock(P, r, d, t) {
    return P * Math.exp(((r / 100) - (d / 100)) * (t / 12));
  },

  bond(P, r, c, t) {
    const rDec = r / 100;
    const cDec = c / 100;
    const tYears = t / 12;
    return P * (1 + (rDec - cDec) * tYears);
  },
};

const CALCULATORS = {
  commodities: {
    title: "Physical Commodities",
    method: "commodities",
    fields: [
      ["P", "Commodity price"],
      ["t", "Time to maturity (months)"],
      ["r", "Interest rate (%)"],
      ["s", "Storage cost"],
      ["i", "Annual insurance cost"],
    ],
  },
  stock: {
    title: "Stock",
    method: "stock",
    fields: [
      ["P", "Spot price"],
      ["r", "Risk-free rate (%)"],
      ["d", "Dividend yield (%)"],
      ["t", "Time to maturity (months)"],
    ],
  },
  bond: {
    title: "Bond",
    method: "bond",
    fields: [
      ["P", "Bond price"],
      ["r", "Interest rate (%)"],
      ["c", "Coupon rate (%)"],
      ["t", "Time to maturity (months)"],
    ],
  },
};
