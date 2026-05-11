export default function BackgroundFx() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 mask-fade-b opacity-[0.16] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "var(--grid-size) var(--grid-size)",
          color: "rgba(15,15,26,0.06)",
        }}
      />
      <div className="absolute inset-0 mask-fade-b hidden dark:block opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "var(--grid-size) var(--grid-size)",
        }}
      />
      <div className="absolute -top-24 left-1/2 h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-brand-magenta/10 blur-[120px] dark:bg-brand-magenta/20" />
      <div className="absolute top-[40%] -left-32 h-[420px] w-[420px] rounded-full bg-brand-pink/10 blur-[120px] animate-blob dark:bg-brand-pink/20" />
      <div className="absolute top-[55%] -right-32 h-[460px] w-[460px] rounded-full bg-brand-indigo/15 blur-[120px] animate-blob dark:bg-brand-indigo/25" style={{ animationDelay: "-7s" }} />
      <div className="absolute inset-0 bg-noise opacity-[0.02] dark:opacity-[0.04]" />
    </div>
  );
}
