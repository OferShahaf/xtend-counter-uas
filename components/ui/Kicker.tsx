interface KickerProps {
  children: React.ReactNode;
  className?: string;
}

export function Kicker({ children, className = "" }: KickerProps) {
  return (
    <p className={`kicker mb-4 ${className}`}>
      {children}
    </p>
  );
}
