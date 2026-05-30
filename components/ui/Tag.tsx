interface TagProps {
  children: React.ReactNode;
  variant?: "gold" | "red" | "dim";
  className?: string;
}

export function Tag({ children, variant = "gold", className = "" }: TagProps) {
  const variants = {
    gold: "border border-gold text-gold",
    red: "border border-[#C0392B] text-[#C0392B]",
    dim: "border border-[rgba(255,255,255,0.15)] text-dim",
  };
  return (
    <span
      className={`kicker inline-block px-2 py-0.5 text-[0.65rem] ${variants[variant]} ${className}`}
      style={{ borderRadius: "2px" }}
    >
      {children}
    </span>
  );
}
