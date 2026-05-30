import { HUDFrame } from "./HUDFrame";

interface TacticalPlaceholderProps {
  label: string;
  sublabel?: string;
  aspectRatio?: string;
  className?: string;
}

export function TacticalPlaceholder({
  label,
  sublabel,
  aspectRatio = "16/9",
  className = "",
}: TacticalPlaceholderProps) {
  return (
    <HUDFrame size="lg" className={className}>
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio, background: "var(--color-surface-deep)" }}
      >
        {/* Tactical grid via CSS */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(201,162,74,0.04) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(201,162,74,0.04) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "40px 40px",
          }}
        />

        {/* Radial centre glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 65% at 50% 50%, rgba(201,162,74,0.06) 0%, transparent 70%)",
          }}
        />

        {/* SVG crosshair + corner marks */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 225"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          {/* Centre crosshair */}
          <line x1="200" y1="82" x2="200" y2="142" stroke="rgba(201,162,74,0.22)" strokeWidth="0.5" />
          <line x1="165" y1="112" x2="235" y2="112" stroke="rgba(201,162,74,0.22)" strokeWidth="0.5" />
          <circle cx="200" cy="112" r="24" fill="none" stroke="rgba(201,162,74,0.1)" strokeWidth="0.75" />
          <circle cx="200" cy="112" r="9"  fill="none" stroke="rgba(201,162,74,0.2)" strokeWidth="0.5" />
          <circle cx="200" cy="112" r="2.5" fill="rgba(201,162,74,0.35)" />

          {/* Corner brackets */}
          <path d="M 22 22 L 22 38 M 22 22 L 38 22" stroke="rgba(201,162,74,0.35)" strokeWidth="1" fill="none" />
          <path d="M 378 22 L 378 38 M 378 22 L 362 22" stroke="rgba(201,162,74,0.35)" strokeWidth="1" fill="none" />
          <path d="M 22 203 L 22 187 M 22 203 L 38 203" stroke="rgba(201,162,74,0.35)" strokeWidth="1" fill="none" />
          <path d="M 378 203 L 378 187 M 378 203 L 362 203" stroke="rgba(201,162,74,0.35)" strokeWidth="1" fill="none" />

          {/* Side scan marks */}
          <line x1="24" y1="68"  x2="70"  y2="68"  stroke="rgba(201,162,74,0.1)" strokeWidth="0.5" />
          <line x1="24" y1="157" x2="70"  y2="157" stroke="rgba(201,162,74,0.1)" strokeWidth="0.5" />
          <line x1="330" y1="68"  x2="376" y2="68"  stroke="rgba(201,162,74,0.1)" strokeWidth="0.5" />
          <line x1="330" y1="157" x2="376" y2="157" stroke="rgba(201,162,74,0.1)" strokeWidth="0.5" />
        </svg>

        {/* Top-right status dot */}
        <div className="absolute top-3 right-4 flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{
              background: "var(--color-gold)",
              opacity: 0.55,
              boxShadow: "0 0 5px var(--color-gold)",
            }}
          />
          <span className="font-mono text-[0.5rem] text-dim uppercase tracking-[0.18em]">
            STANDBY
          </span>
        </div>

        {/* Bottom label strip */}
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-2.5"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
          }}
        >
          <div className="flex items-end justify-between gap-4">
            <span className="font-mono text-[0.6rem] text-gold uppercase tracking-[0.18em] leading-none">
              {label}
            </span>
            {sublabel && (
              <span className="font-mono text-[0.5rem] text-dim uppercase tracking-wider leading-none whitespace-nowrap">
                {sublabel}
              </span>
            )}
          </div>
        </div>
      </div>
    </HUDFrame>
  );
}
