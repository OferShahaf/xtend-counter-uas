import Image from "next/image";
import { HUDFrame } from "./HUDFrame";
import type { Asset } from "@/lib/assets";

interface MediaFrameProps {
  asset: Asset;
  className?: string;
  priority?: boolean;
  showHUD?: boolean;
  aspectRatio?: string;
  objectFit?: "cover" | "contain";
}

function TacticalVisual({ alt }: { alt: string }) {
  return (
    <div className="absolute inset-0" style={{ background: "var(--color-surface-deep)" }}>
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
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 65% at 50% 50%, rgba(201,162,74,0.06) 0%, transparent 70%)",
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 225"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <line x1="200" y1="82"  x2="200" y2="142" stroke="rgba(201,162,74,0.22)" strokeWidth="0.5" />
        <line x1="165" y1="112" x2="235" y2="112" stroke="rgba(201,162,74,0.22)" strokeWidth="0.5" />
        <circle cx="200" cy="112" r="24" fill="none" stroke="rgba(201,162,74,0.1)"  strokeWidth="0.75" />
        <circle cx="200" cy="112" r="9"  fill="none" stroke="rgba(201,162,74,0.2)"  strokeWidth="0.5" />
        <circle cx="200" cy="112" r="2.5" fill="rgba(201,162,74,0.35)" />
        <path d="M 22 22 L 22 38 M 22 22 L 38 22"     stroke="rgba(201,162,74,0.35)" strokeWidth="1" fill="none" />
        <path d="M 378 22 L 378 38 M 378 22 L 362 22"  stroke="rgba(201,162,74,0.35)" strokeWidth="1" fill="none" />
        <path d="M 22 203 L 22 187 M 22 203 L 38 203"    stroke="rgba(201,162,74,0.35)" strokeWidth="1" fill="none" />
        <path d="M 378 203 L 378 187 M 378 203 L 362 203" stroke="rgba(201,162,74,0.35)" strokeWidth="1" fill="none" />
      </svg>
      <div className="absolute top-3 right-4 flex items-center gap-1.5">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--color-gold)", opacity: 0.55, boxShadow: "0 0 5px var(--color-gold)" }}
        />
        <span className="font-mono text-[0.5rem] text-dim uppercase tracking-[0.18em]">STANDBY</span>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 px-4 py-2.5"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
      >
        <span className="font-mono text-[0.6rem] text-gold uppercase tracking-[0.18em] leading-none">
          {alt}
        </span>
      </div>
    </div>
  );
}

export function MediaFrame({
  asset,
  className = "",
  priority = false,
  showHUD = false,
  aspectRatio = "16/9",
  objectFit = "cover",
}: MediaFrameProps) {
  const inner = asset.isPlaceholder ? (
    <TacticalVisual alt={asset.alt} />
  ) : (
    <Image
      src={asset.file}
      alt={asset.alt}
      fill
      priority={priority}
      className={objectFit === "contain" ? "object-contain p-4" : "object-cover"}
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );

  const bg = objectFit === "contain" ? "var(--color-surface-deep)" : "transparent";

  const content = (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio, background: bg }}
    >
      {inner}
    </div>
  );

  return showHUD ? <HUDFrame>{content}</HUDFrame> : content;
}
