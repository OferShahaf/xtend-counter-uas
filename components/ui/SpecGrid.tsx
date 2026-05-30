interface Spec {
  label: string;
  value: string;
  verified?: boolean;
}

interface SpecGridProps {
  specs: Spec[];
  className?: string;
}

export function SpecGrid({ specs, className = "" }: SpecGridProps) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-px bg-[var(--color-border-subtle)] ${className}`}
      style={{ borderRadius: "2px" }}>
      {specs.map((spec) => (
        <div key={spec.label} className="bg-surface-deep p-4">
          <div className="font-mono text-xl font-bold text-gold">
            {spec.value}
            {spec.verified === false && (
              <span className="text-[0.55rem] text-dim align-super ml-1">†</span>
            )}
          </div>
          <div className="text-xs text-dim uppercase tracking-widest mt-1">{spec.label}</div>
        </div>
      ))}
    </div>
  );
}
