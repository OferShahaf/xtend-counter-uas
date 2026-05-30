interface GoldDividerProps {
  className?: string;
}

export function GoldDivider({ className = "" }: GoldDividerProps) {
  return <div className={`gold-divider my-8 ${className}`} />;
}
