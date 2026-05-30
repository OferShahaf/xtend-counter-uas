interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export function Section({ id, className = "", children, dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 ${dark ? "bg-surface-deep" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
