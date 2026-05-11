# Pharmical — Website

Marketing site for **Pharmical Pharmaceutical & Medical Supplies Company**, a UAE-based wholesale pharmaceuticals distributor (MOH 2625 · HAAD PF5020).

Built with **React 18 + Vite 5 + Tailwind CSS + Framer Motion**.

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

## Brand assets

Drop your own PNG logos into `public/brand/` — the site uses them automatically and falls back to built-in SVGs when files are missing. See [`public/brand/README.md`](public/brand/README.md) for filenames and recommended sizes.

## Themes

The site ships with both **light** (default) and **dark** modes. Users toggle via the moon/sun button in the nav; the choice persists in `localStorage` and is applied before paint to avoid a flash.

## Stack

- **React 18** + Vite 5
- **Tailwind CSS** (class-based dark mode) with a custom Pharmical design token system (`tailwind.config.js`)
- **Framer Motion** for scroll-linked animations, layout transitions and micro-interactions
- **lucide-react** for line icons

## Design system

Color palette derived from the Pharmical logo gradient:

| Token            | Hex       |
| ---------------- | --------- |
| `brand.pink`     | `#E54B7A` |
| `brand.magenta`  | `#C44A9F` |
| `brand.purple`   | `#B547C6` |
| `brand.violet`   | `#9248D6` |
| `brand.indigo`   | `#6849DD` |
| `brand.deep`     | `#4A3BC7` |

Stripe-/Linear-inspired aesthetic with gradient text, grid overlays, animated blobs, mask fades, marquees and counter animations — adapted for both light and dark backgrounds.

## Sections

1. **Hero** — Headline, CTAs, animated order console + live KPI cards
2. **Marquee** — Auto-scrolling product/service strip
3. **About** — Company intro + location cards (HQ + fulfillment centers)
4. **Product Ranges** — 6 product categories
5. **Values / Vision / Mission**
6. **Why Choose Pharmical** — Interactive vertical tabs
7. **The High Fives** — 5 quality pillars
8. **Services** — Animated tabbed services console
9. **Stats** — Counter-animated KPIs
10. **Partners & Memberships**
11. **CTA banner**
12. **Contact** — Channels + department email directory
13. **Footer**
