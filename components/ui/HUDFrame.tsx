interface HUDFrameProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function HUDFrame({ children, className = "", size = "md" }: HUDFrameProps) {
  const cornerSize = { sm: "w-3 h-3", md: "w-5 h-5", lg: "w-8 h-8" };
  const cs = cornerSize[size];
  return (
    <div className={`relative ${className}`}>
      {/* Top-left corner */}
      <span className={`absolute top-0 left-0 ${cs} border-t border-l border-[var(--color-gold)] opacity-60 pointer-events-none`} />
      {/* Top-right corner */}
      <span className={`absolute top-0 right-0 ${cs} border-t border-r border-[var(--color-gold)] opacity-60 pointer-events-none`} />
      {/* Bottom-left corner */}
      <span className={`absolute bottom-0 left-0 ${cs} border-b border-l border-[var(--color-gold)] opacity-60 pointer-events-none`} />
      {/* Bottom-right corner */}
      <span className={`absolute bottom-0 right-0 ${cs} border-b border-r border-[var(--color-gold)] opacity-60 pointer-events-none`} />
      {children}
    </div>
  );
}
