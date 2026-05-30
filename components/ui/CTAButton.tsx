interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function CTAButton({ children, href, variant = "primary", className = "", onClick }: CTAButtonProps) {
  const base = "inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-200";
  const variants = {
    primary: "bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-bright)] hover:shadow-[0_0_20px_rgba(201,162,74,0.4)]",
    secondary: "border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold-glow)]",
  };
  const style = { borderRadius: "2px" };

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`} style={style}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`} style={style}>
      {children}
    </button>
  );
}
