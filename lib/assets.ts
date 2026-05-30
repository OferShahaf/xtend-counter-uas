export interface Asset {
  file: string;
  alt: string;
  treatment: "duotone-gold" | "dark-grade" | "raw" | "placeholder";
  credit?: string;
  isPlaceholder: boolean;
}

export const ASSETS: Record<string, Asset> = {
  hero_video: {
    file: "/media/hero-bg.mp4",
    alt: "XTEND Counter-UAS system in operation",
    treatment: "dark-grade",
    isPlaceholder: true,
  },
  hero_poster: {
    file: "/media/hero-poster.jpg",
    alt: "XTEND operator deploying counter-drone system",
    treatment: "duotone-gold",
    isPlaceholder: true,
  },
  combat_proven_1: {
    file: "/media/combat-proven-1.jpg",
    alt: "XTEND — live operation",
    treatment: "duotone-gold",
    credit: "XTEND — exercise imagery, clearance required before public deploy",
    isPlaceholder: true,
  },
  combat_proven_2: {
    file: "/media/combat-proven-2.jpg",
    alt: "XTEND — field deployment",
    treatment: "duotone-gold",
    credit: "XTEND — exercise imagery, clearance required before public deploy",
    isPlaceholder: true,
  },
  scorpio_render: {
    file: "/media/scorpio-1000.jpg",
    alt: "SCORPIO 1000 X-NET counter-drone interceptor",
    treatment: "dark-grade",
    isPlaceholder: true,
  },
  defendair_personal: {
    file: "/media/defendair-personal.jpg",
    alt: "DefendAir Personal handheld net launcher",
    treatment: "raw",
    isPlaceholder: true,
  },
};
