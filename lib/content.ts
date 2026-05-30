export const TAGLINE = "Combat Proven. Portable. Mission Ready.";
export const HERO_HEADLINE = "XTEND COUNTER-UAS";
export const HERO_SUB = "Portable. Layered. Mission Ready.";
export const HERO_BODY = "Defeat Modern Drone Threats Anywhere.";
export const HERO_ECOSYSTEM_SUB =
  "A complete layered Counter-UAS ecosystem — from an individual operator to the protection of strategic national infrastructure.";

export const THREAT_HEADLINE = "The Battlefield Has Moved Into The Air.";
export const THREAT_BODY =
  "Low-cost FPV drones, fiber-optic guided munitions, and commercial quadcopters are rewriting the rules of engagement. Traditional air defense wasn't designed for this. XTEND was.";

export const THREAT_STATS = [
  { value: "$400", label: "Cost of a threat drone" },
  { value: "$1M+", label: "Cost of assets it can destroy" },
  { value: "0m", label: "Minimum safe engagement altitude" },
  { value: "24/7", label: "Persistent threat window" },
];

export const THREAT_TYPES = [
  { label: "FPV Attack Drones", tag: "KINETIC" },
  { label: "Fiber-Optic Guided", tag: "UNJAMMABLE" },
  { label: "ISR / Reconnaissance", tag: "INTEL" },
  { label: "Commercial Quadcopters", tag: "PROLIFERATED" },
  { label: "Swarm Attacks", tag: "MASS" },
];

export const ECOSYSTEM_HEADLINE = "One Mission. Multiple Defeat Options.";
export const ECOSYSTEM_SUB =
  "XTEND's layered architecture delivers the right response for every threat — cyber, net capture, or kinetic interception.";

export const SCORPIO_HEADLINE = "SCORPIO 1000 X-NET";
export const SCORPIO_SUB = "The Flagship Counter-UAS Platform";
export const SCORPIO_BODY =
  "AI-assisted detection and autonomous homing combine with a reusable net-capture payload to neutralize drone threats with zero collateral damage.";
export const SCORPIO_CAPS = [
  "Reusable platform & payload",
  "AI-assisted detection",
  "Autonomous homing",
  "GPS-denied operation",
  "Full C2 integration",
  "Low collateral risk",
];
export const SCORPIO_SPECS = [
  { label: "Endurance", value: "≤10 min", verified: false },
  { label: "Range", value: "≤5 km LOS", verified: false },
  { label: "Speed", value: "≤70 km/h", verified: false },
  { label: "Payload", value: "≤1 kg", verified: false },
  { label: "Operation", value: "24 / 7", verified: false },
];

export const DEFENDAIR_HEADLINE = "DEFENDAIR PERSONAL";
export const DEFENDAIR_SUB = "Human-Portable Net Interception";
export const DEFENDAIR_MISSION =
  "Human-portable net interception system providing immediate protection against hostile drones in urban, military and critical infrastructure environments.";
export const DEFENDAIR_BODY =
  "When a hostile drone enters the engagement zone, the operator responds immediately. One person. One system. Non-explosive net interception — zero blast radius, zero collateral damage, effective in the tightest urban spaces.";
export const DEFENDAIR_ROLES = [
  {
    role: "Military Operator",
    context: "Squad-level last line of defence against FPV threats at the point of contact.",
  },
  {
    role: "Security Operator",
    context: "Perimeter defence without support teams or fixed infrastructure.",
  },
  {
    role: "VIP Protection",
    context: "Discrete close-protection capability — immediate engagement at standoff distance.",
  },
  {
    role: "Facility Defender",
    context: "Rapid response at critical assets, energy sites, and government compounds.",
  },
] as const;
export const DEFENDAIR_DEFEAT = [
  { label: "NON-EXPLOSIVE", detail: "Urban-safe interception. No blast, no fragments, no collateral." },
  { label: "< 3 SEC DEPLOY", detail: "System ready instantly. No setup time in dynamic threat scenarios." },
  { label: "FPV-CAPABLE", detail: "Effective against high-speed FPV attack drones at operational range." },
] as const;
export const DEFENDAIR_SPECS = [
  { label: "Range", value: "Up to 35 m", verified: true },
  { label: "Weight", value: "~1.7 kg", verified: false },
  { label: "Ready", value: "<3 s", verified: false },
];

export const INTERCEPTOR_HEADLINE = "XTEND Interceptor";
export const INTERCEPTOR_SUB = "Kinetic Defeat";
export const INTERCEPTOR_BODY =
  "Defeat hostile drones before they reach their objective. High-speed engagement, autonomous tracking, AI-assisted pursuit.";

export const TURRET_HEADLINE = "DefendAir Turret";
export const TURRET_SUB = "Persistent Infrastructure Protection.";
export const TURRET_BODY =
  "Fixed-site 360° net interception. Always on. Always watching.";
export const TURRET_APPS = [
  "Government compounds",
  "Critical infrastructure",
  "Energy facilities",
  "Airports",
  "Strategic assets",
];

export const SENTRYCS_HEADLINE = "Sentrycs";
export const SENTRYCS_SUB = "Cyber Defeat Before Kinetic Defeat.";
export const SENTRYCS_BODY =
  "Passive detection, pilot location, drone identification, protocol exploitation, controlled mitigation. Not every threat requires destruction — sometimes the smartest interception is invisible.";

export const WHY_HEADLINE = "Built For Modern Warfare.";
export const WHY_COMPARISON = [
  { feature: "Portable Deployment", xtend: true, traditional: false },
  { feature: "Urban Safe", xtend: true, traditional: false },
  { feature: "Low Collateral", xtend: true, traditional: false },
  { feature: "Layered Response", xtend: true, traditional: false },
  { feature: "Mobile Operation", xtend: true, traditional: false },
  { feature: "Open Architecture", xtend: true, traditional: false },
];

export const SCENARIOS = [
  { title: "Military Base", threat: "FPV attack drone", response: "SCORPIO 1000 + DefendAir", outcome: "Base perimeter secured" },
  { title: "Critical Infrastructure", threat: "Commercial ISR quad", response: "Sentrycs + Turret", outcome: "Asset protected, zero collateral" },
  { title: "VIP Protection", threat: "Swarm attempt", response: "DefendAir Personal + Interceptor", outcome: "Threat neutralized at standoff" },
  { title: "Urban Security", threat: "Fiber-optic FPV", response: "Sentrycs cyber defeat", outcome: "Pilot located, drone mitigated" },
  { title: "FOB", threat: "Recon drone", response: "SCORPIO 1000 intercept", outcome: "FOB perimeter maintained" },
  { title: "Border Security", threat: "Multi-drone incursion", response: "Layered ecosystem", outcome: "Complete area denial" },
  { title: "Convoy", threat: "FPV kamikaze", response: "DefendAir Personal", outcome: "Convoy protected in transit" },
  { title: "Counter-FPV", threat: "High-speed FPV", response: "XTEND Interceptor", outcome: "Kinetic defeat at range" },
];

export const FINAL_CTA_HEADLINE = "Build Your Layered Counter-UAS Capability.";
export const FINAL_CTA_BODY =
  "Scalable from individual operators to the protection of national critical assets. XTEND delivers the ecosystem your mission demands.";
