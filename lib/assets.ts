export interface Asset {
  file: string;
  alt: string;
  treatment: "duotone-gold" | "dark-grade" | "raw" | "placeholder";
  credit?: string;
  isPlaceholder: boolean;
}

export const ASSETS: Record<string, Asset> = {
  hero_poster: {
    file: "/media/hero-poster.webp",
    alt: "XTEND Counter-UAS — tactical deployment",
    treatment: "dark-grade",
    isPlaceholder: true,
  },
  combat_proven_1: {
    file: "/media/scorpio-1000-2.webp",
    alt: "SCORPIO 1000 — field deployment with operator",
    treatment: "dark-grade",
    isPlaceholder: false,
  },
  combat_proven_2: {
    file: "/media/scorpio-catalog.webp",
    alt: "XTEND SCORPIO 1000 X-NET system",
    treatment: "dark-grade",
    isPlaceholder: false,
  },
  scorpio_render: {
    file: "/media/scorpio-xnet.png",
    alt: "SCORPIO 1000 X-NET — net-capture counter-drone interceptor",
    treatment: "raw",
    isPlaceholder: false,
  },
  ai_fast_interceptor: {
    file: "/media/ai-fast-interceptor.png",
    alt: "AI Fast Interceptor — high-speed kinetic defeat drone",
    treatment: "dark-grade",
    isPlaceholder: false,
  },
  defendair_personal: {
    file: "/media/defendair-personal-2.png",
    alt: "DefendAir Personal net launcher",
    treatment: "raw",
    isPlaceholder: false,
  },
  defendair_turret: {
    file: "/media/defendair-turret.png",
    alt: "DefendAir Turret net interception system",
    treatment: "raw",
    isPlaceholder: false,
  },
  sentrycs: {
    file: "/media/sentrycs-field2.jpg",
    alt: "Sentrycs — deployed on rooftop for urban airspace protection",
    treatment: "dark-grade",
    isPlaceholder: false,
  },
};
