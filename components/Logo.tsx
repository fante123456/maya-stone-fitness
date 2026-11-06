/** Text logo: "ACCRO TEMPLE" with a small "coaching" underneath (no logo file exists). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span className="display text-[1.55rem] tracking-[0.04em] text-paper">
        Accro <span className="text-lime">Temple</span>
      </span>
      <span className="mt-0.5 text-[0.62rem] font-bold tracking-[0.42em] text-mute uppercase">coaching</span>
    </span>
  );
}
