interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className = "h-full w-full" }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="38" cy="50" r="26" fill="none" stroke="#E2E8F0" strokeWidth="7" />
      <circle cx="62" cy="50" r="26" fill="none" stroke="#149293" strokeWidth="7" />
    </svg>
  );
}
