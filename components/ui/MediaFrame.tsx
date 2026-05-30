import Image from "next/image";
import { HUDFrame } from "./HUDFrame";
import type { Asset } from "@/lib/assets";

interface MediaFrameProps {
  asset: Asset;
  className?: string;
  priority?: boolean;
  showHUD?: boolean;
  aspectRatio?: string;
}

export function MediaFrame({ asset, className = "", priority = false, showHUD = false, aspectRatio = "16/9" }: MediaFrameProps) {
  const inner = asset.isPlaceholder ? (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center bg-surface-mid border border-[var(--color-border-subtle)]"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      <div className="text-xs text-dim tracking-widest uppercase mb-1">[ MEDIA PLACEHOLDER ]</div>
      <div className="text-[0.6rem] text-[#6B6B70] tracking-wider">{asset.alt}</div>
    </div>
  ) : (
    <Image
      src={asset.file}
      alt={asset.alt}
      fill
      priority={priority}
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );

  const content = (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio }}>
      {inner}
    </div>
  );

  return showHUD ? <HUDFrame>{content}</HUDFrame> : content;
}
