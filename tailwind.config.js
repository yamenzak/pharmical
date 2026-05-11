/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0A12",
          900: "#0F0F1A",
          800: "#171728",
          700: "#1F1F35",
          600: "#2A2A46",
          500: "#3D3D5C",
          400: "#5C5C7A",
          300: "#8A8AA8",
          200: "#B8B8D0",
          100: "#E4E4F0",
        },
        brand: {
          pink: "#E54B7A",
          magenta: "#C44A9F",
          purple: "#B547C6",
          violet: "#9248D6",
          indigo: "#6849DD",
          deep: "#4A3BC7",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          '"Geist"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #E54B7A 0%, #C44A9F 30%, #B547C6 55%, #9248D6 75%, #6849DD 100%)",
        "brand-soft":
          "linear-gradient(135deg, rgba(229,75,122,0.16), rgba(184,71,198,0.16), rgba(104,73,221,0.16))",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "dot-pattern":
          "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 80px -10px rgba(184,71,198,0.55)",
        "glow-sm": "0 0 30px -5px rgba(184,71,198,0.45)",
        soft: "0 12px 40px -12px rgba(15,15,26,0.25)",
        card: "0 1px 0 rgba(255,255,255,0.06) inset, 0 30px 60px -25px rgba(0,0,0,0.55)",
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "spin-slow": "spin 18s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.4s linear infinite",
        "blob": "blob 14s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.1)" },
          "66%": { transform: "translate(-30px,30px) scale(0.95)" },
        },
      },
    },
  },
  plugins: [],
};
