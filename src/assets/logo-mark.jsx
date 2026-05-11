export function LogoMark({ size = 40, className = "" }) {
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

export function LogoWordmark({ className = "", color = "currentColor" }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark size={32} />
      <span
        className="font-black tracking-tight text-[1.4rem] leading-none"
        style={{ color }}
      >
        PHARMICAL
      </span>
    </span>
  );
}
