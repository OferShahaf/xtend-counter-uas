interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  narrow?: boolean;
}

export function Container({ className = "", children, narrow = false }: ContainerProps) {
  return (
    <div className={`mx-auto px-6 md:px-12 ${narrow ? "max-w-3xl" : "max-w-7xl"} ${className}`}>
      {children}
    </div>
  );
}
