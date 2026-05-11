# Pharmical — Website

Marketing site for **Pharmical Pharmaceutical & Medical Supplies Company**, a UAE-based wholesale pharmaceuticals distributor (MOH 2625 · HAAD PF5020).

Built with **React 19 + Vite + Tailwind CSS + Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

## Stack

- **React 19** with Vite for the build pipeline
- **Tailwind CSS** with a custom Pharmical design token system (`tailwind.config.js`)
- **Framer Motion** for scroll-linked animations, layout transitions and micro-interactions
- **lucide-react** for line icons

## Design system

Color palette is derived from the Pharmical logo gradient:

| Token            | Hex       |
| ---------------- | --------- |
| `brand.pink`     | `#E54B7A` |
| `brand.magenta`  | `#C44A9F` |
| `brand.purple`   | `#B547C6` |
| `brand.violet`   | `#9248D6` |
| `brand.indigo`   | `#6849DD` |
| `brand.deep`     | `#4A3BC7` |

The site uses a dark, gradient-glow aesthetic (Stripe-/Linear-inspired) with grid overlays, animated blobs, mask fades, marquees and counter animations.

## Sections

1. **Hero** — Headline, CTAs, animated order console + live KPI cards
2. **Marquee** — Auto-scrolling product/service strip
3. **About** — Company intro + location cards (HQ + fulfillment centers)
4. **Product Ranges** — 6 product categories
5. **Values / Vision / Mission**
6. **Why Choose Pharmical** — Interactive tabs (Simplified Ordering, Fastest Delivery, Flexible Payments, Account Managers, Lowest Prices)
7. **The High Fives** — 5 quality pillars
8. **Services** — Animated tabbed services console
9. **Stats** — Counter-animated KPIs
10. **Partners & Memberships**
11. **CTA banner**
12. **Contact** — Channels + department email directory
13. **Footer**
