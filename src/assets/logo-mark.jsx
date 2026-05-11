import { useState } from "react";

/* ──────────────────────────────────────────────────────────────────────────
   SVG fallbacks. If the user drops PNGs into /public/brand/, those win;
   otherwise these SVGs render.
   ────────────────────────────────────────────────────────────────────────── */

function SvgMark({ size = 40, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pharmicalGradient" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#E54B7A" />
          <stop offset="0.5" stopColor="#B547C6" />
          <stop offset="1" stopColor="#6849DD" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#pharmicalGradient)" />
      <path d="M22 22 H34 L50 44 L66 22 H78 V62 H66 V46 L54 62 H46 L34 46 V78 H22 Z" fill="#FFFFFF" />
      <rect x="22" y="62" width="56" height="10" fill="#FFFFFF" />
      <rect x="66" y="62" width="12" height="16" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * <LogoMark/> — the square gradient "M" icon.
 * Renders /brand/logo-mark.png if present, otherwise the SVG fallback.
 */
export function LogoMark({ size = 40, className = "" }) {
  const [errored, setErrored] = useState(false);
  if (errored) return <SvgMark size={size} className={className} />;
  return (
    <img
      src="/brand/logo-mark.png"
      alt="Pharmical"
      width={size}
      height={size}
      onError={() => setErrored(true)}
      className={className}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

/**
 * <LogoWordmark/> — full mark + wordmark.
 *   variant="auto"  → swaps based on parent `.dark` class (default)
 *   variant="light" → forces wordmark for light backgrounds (dark text)
 *   variant="dark"  → forces wordmark for dark backgrounds (white text)
 */
export function LogoWordmark({
  height = 28,
  variant = "auto",
  className = "",
}) {
  if (variant === "auto") {
    return (
      <span className={`inline-flex items-center ${className}`}>
        <span className="hidden dark:inline-flex">
          <WordmarkImage variant="dark" height={height} />
        </span>
        <span className="inline-flex dark:hidden">
          <WordmarkImage variant="light" height={height} />
        </span>
      </span>
    );
  }
  return <WordmarkImage variant={variant} height={height} className={className} />;
}

function WordmarkImage({ variant, height, className = "" }) {
  const [errored, setErrored] = useState(false);
  const src =
    variant === "dark"
      ? "/brand/logo-wordmark-dark.png"
      : "/brand/logo-wordmark-light.png";

  if (errored) {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <SvgMark size={height} />
        <span
          className={`font-black tracking-tight leading-none ${
            variant === "dark" ? "text-white" : "text-ink-900"
          }`}
          style={{ fontSize: height * 0.78 }}
        >
          PHARMICAL
        </span>
      </span>
    );
  }
  return (
    <img
      src={src}
      alt="Pharmical"
      style={{ height, width: "auto" }}
      onError={() => setErrored(true)}
      className={className}
    />
  );
}
