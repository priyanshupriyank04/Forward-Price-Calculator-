import math


class ForwardPrice:
    def commodities(self, P, t, r, s, i):
        return P * (1 + r / 100 * t / 12) + s * t / 12 + i * t / 12

    def stock(self, P, r, d, t):
        return P * math.exp((r / 100 - d / 100) * t / 12)

    def bond(self, P, r, c, t):
        r_dec = r / 100
        c_dec = c / 100
        t_years = t / 12
        return P * (1 + (r_dec - c_dec) * t_years)
