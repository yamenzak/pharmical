export default function BackgroundFx() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.25] mask-fade-b"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "var(--grid-size) var(--grid-size)",
        }}
      />
      <div className="absolute -top-24 left-1/2 h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-brand-magenta/20 blur-[120px]" />
      <div className="absolute top-[40%] -left-32 h-[420px] w-[420px] rounded-full bg-brand-pink/20 blur-[120px] animate-blob" />
      <div className="absolute top-[55%] -right-32 h-[460px] w-[460px] rounded-full bg-brand-indigo/25 blur-[120px] animate-blob" style={{ animationDelay: "-7s" }} />
      <div className="absolute inset-0 bg-noise opacity-[0.04]" />
    </div>
  );
}
