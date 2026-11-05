export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 32 32" className="size-8 shrink-0">
        <rect width="32" height="32" rx="6" fill="#B6FF3B" />
        <path
          d="M7 23V9.5h3.4L16 17l5.6-7.5H25V23h-3.6v-7.6L16 22.4l-5.4-7V23z"
          fill="#101010"
        />
      </svg>
      <span className="display text-[1.35rem] leading-none tracking-wide text-paper">
        Maya Stone<span className="text-lime">.</span>
      </span>
    </span>
  );
}
