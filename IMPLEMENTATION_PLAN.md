# XTEND Counter-UAS Landing Page — Implementation Plan

**Status:** Awaiting `EXECUTE` approval · **Date:** 2026-05-30
**Deliverable:** A world-class, single-page Counter-UAS landing site for XTEND, with the look and feel of a premium defense-technology product launch (XTEND × Anduril × SOCOM).
**Priority message:** XTEND is not selling a single Counter-UAS product — it provides a complete **layered Counter-UAS ecosystem** that scales from an individual soldier to the protection of strategic national infrastructure.
**Tagline to communicate throughout:** *Combat Proven. Portable. Mission Ready.*

---

## 1. Confirmed decisions (from clarification)

| Topic | Decision |
|---|---|
| **Visual assets** | Use real local XTEND media where it fits + cinematic placeholders/treatment elsewhere, with clearly labeled swap-slots. |
| **Specs & copy** | Verify the brief's numbers against local PDFs (DefendAir one-pager, Scorpio 1000/500 manuals) before publishing them as fact. |
| **Project & deploy** | New folder `~/Desktop/xtend-counter-uas/`, init git, **create a GitHub repo and push**. (Vercel left import-ready; no live deploy unless requested.) |
| **Typography** | License-clear free fonts matched to the XTEND / Anduril–Helsing feel. |

---

## 2. Grounding findings (from local material review)

1. **Real photography is authentic but bright daytime *training* footage.** The `UK/UK Live 16 brig/` set shows British Army operators (MTP camo, Virtus helmets, plate carriers) with an XTEND representative on a grassy range — mostly candid / from-behind. Genuinely valuable as **proof**, but raw it fights the black-and-gold cinematic aesthetic. → It will be **treated** (gold/black duotone, dark grade, grain, vignette, HUD framing) and used primarily as a **"Combat Proven" authenticity band** and treated scenario backgrounds, not as raw hero imagery.
2. **Hero relies on motion + treatment.** I cannot *generate* cinematic battlefield video. The hero's 5-beat sequence (FPV approach → operator deploys → interceptor launches → drone neutralized → mission continues) will be **assembled from the best available XTEND footage + cinematic grading**, with a labeled swap-slot for a final professionally-cut reel.
3. **OPSEC / consent flag (on the record).** Recognizable faces and unit insignia (16 Bde) are visible in the real photos, and the chosen workflow publishes to a public GitHub repo + Vercel. **Default:** face/insignia-safe crops + heavy treatment. **Recommendation:** XTEND clears any recognizable imagery before any public deploy.
4. **PDF tooling absent.** `pdftoppm` is not installed, so PDFs can't be rendered as images directly. Spec verification will use the `pdf` skill (or `brew install poppler` → `pdftotext`). If a figure can't be confirmed, it will be flagged rather than published as fact.

---

## 3. Tech stack & key technical decisions

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript. **Fallback:** Next 15.x if 16 isn't cleanly installable (confirmed in execution step 1).
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` tokens). **Fallback:** Tailwind v3.4 with `tailwind.config.ts`. Design tokens live in CSS variables either way.
- **Animation:** Framer Motion (`motion` package, `motion/react`). All motion respects `prefers-reduced-motion`.
- **Fonts (self-hosted via `next/font`, zero layout shift):** Display = **Saira** (technical/aerospace grotesk) · Body = **Inter** · Data/specs = **JetBrains Mono**. Tunable; exact picks reconciled against XTEND brand at execution.
- **Single-page SPA**, SEO-optimized, responsive, Vercel-ready, zero-config deploy.
- **No cartoon icons:** custom thin-stroke SVG + HUD corner-brackets only; any icon library limited to functional nav chevrons.

---

## 4. Design system

**Palette** (verify exact XTEND gold from xtend.ai / PDF first):
- Backgrounds: true black `#000`; near-black surfaces `#0A0A0B`, `#0E0F11`, `#14151A`.
- Gold: primary `~#C9A24A`; bright accent `#E8C76B` (glows/edges).
- Text: `#F4F4F2` (primary), `#A1A1A6` (muted), `#6B6B70` (dim).
- Threat-red `#C0392B` — used **sparingly** for "hostile" tags only. Gold stays dominant.

**Form language:** high contrast, minimal corner radius (sharp/tactical), hairline gold/white borders at low alpha, generous negative space, large cinematic section transitions, HUD corner-brackets and thin reticle motifs as the recurring "tactical UI" element.

**Type scale:** large condensed display headlines, comfortable body measure, mono for all numeric readouts/specs (range, endurance, weight) to read like instrumentation.

**Motion tokens:** shared easings/durations in `lib/motion.ts` (slow cinematic reveals, eased parallax, count-ups, SVG path-draws).

---

## 5. Architecture & file structure

Single-page App Router site. `app/page.tsx` composes one component per section. Shared primitives in `components/ui/`. Asset manifest in `lib/assets.ts` so swapping media later = editing one file.

```
xtend-counter-uas/
├─ app/
│  ├─ layout.tsx            # fonts, metadata, JSON-LD, global frame
│  ├─ page.tsx              # composes all sections
│  ├─ globals.css           # tokens, base, utilities
│  ├─ opengraph-image.tsx   # generated OG image
│  ├─ sitemap.ts
│  └─ robots.ts
├─ components/
│  ├─ ui/                   # Section, Container, Kicker, GoldDivider, StatCounter,
│  │                        # SpecGrid, Tag, CTAButton, MediaFrame, HUDFrame, ScrollReveal
│  └─ sections/             # Nav, Hero, ThreatChanged, Ecosystem, Yolka, Scorpio1000,
│                           # Interceptor, DefendAirPersonal, DefendAirTurret, Sentrycs,
│                           # DefeatFlow, Scenarios, WhyXtend, OpenArchitecture,
│                           # FinalCTA, Footer, CombatProvenBand
├─ lib/
│  ├─ assets.ts             # media manifest (key → file, alt, treatment, credit, isPlaceholder)
│  ├─ motion.ts             # shared Framer Motion variants/easings
│  └─ content.ts            # all copy + verified specs in one place
├─ public/media/...         # curated, optimized, treated assets per section
└─ config: tailwind, tsconfig, eslint/prettier, .gitignore, README, vercel (zero-config)
```

---

## 6. Section-by-section spec (build order: Hero + Scorpio first as bar-setters)

1. **Nav** — fixed, minimal; gold wordmark, anchor links, "Request Demonstration" CTA, mobile menu.
2. **Hero** — full-screen graded video + scrim; `XTEND COUNTER-UAS` / **Portable. Layered. Mission Ready.** / "Defeat Modern Drone Threats Anywhere." + ecosystem subtext / CTAs **Request Demonstration** · **Download Capability Brief** / scroll cue / HUD framing.
3. **The Threat Has Changed** — *"The Battlefield Has Moved Into The Air."* Threat taxonomy (FPV, fiber-optic, ISR, commercial quad, swarms) + animated stats (low-cost drone vs. assets worth millions; faster/lower/closer/more frequent) → *"Traditional air defense wasn't designed for this. XTEND was."*
4. **The XTEND Ecosystem** — *"One Mission. Multiple Defeat Options."* Animated layered architecture: central **Drone Threat** node, SVG connectors drawing out to cyber / net / kinetic defeat options.
5. **YOLKA** — rapid vehicle-deployed C-UAS; capabilities (vehicle portable, rapid deployment, mobile protection, force protection, critical-asset defense); *"Deploy where the threat appears."*
6. **SCORPIO 1000 X-NET** *(flagship — largest, most prominent)* — large hero render, dark treatment, full description, ✓ capabilities (reusable platform & payload, AI-assisted detection, autonomous homing, GPS-denied, full C2, low collateral), full **spec block** (Endurance ≤10 min · Range ≤5 km LOS · Speed ≤70 km/h · Payload ≤1 kg · 24/7 — *verified*), and a staged **intercept-sequence animation** (acquire → lock → net-launch → capture).
7. **XTEND Interceptor** — kinetic defeat; high-speed engagement, autonomous tracking, AI-assisted pursuit, precision interception; *"Defeat hostile drones before they reach their objective."*
8. **DefendAir Personal** — *"Last Line of Defense."* Soldier-carried net launcher; lightweight, rapid, urban-safe, non-explosive, FPV-capable; specs (Range 35 m · Weight 1.7 kg · Ready <3 s — *verified vs. PDF*); *"Protection at the point of contact."*
9. **DefendAir Turret** — *"Persistent Infrastructure Protection."* Fixed-site 360° net interception; applications (compounds, gov sites, energy, airports, strategic assets); *"Always on. Always watching."*
10. **Sentrycs Cyber/RF** — *"Cyber Defeat Before Kinetic Defeat."* Passive detection, pilot location, drone ID, protocol exploitation, controlled mitigation, safe-landing; *"Not every threat requires destruction… sometimes the smartest interception is invisible."* (positioned as strategic ecosystem partner)
11. **How XTEND Defeats Drones** — animated **ROE decision tree**: detect → cyber? (Sentrycs) → net capture? (YOLKA / X-NET / DefendAir) → kinetic interception, with branch highlighting. *"Every threat. The right response."*
12. **Operational Scenarios** — 8 cinematic cards (Military Base, Critical Infrastructure, VIP, Urban Security, FOB, Border Security, Convoy, Counter-FPV), each: **Threat / XTEND response / Operational outcome**.
13. **Why XTEND** — *"Built For Modern Warfare."* XTEND vs Traditional comparison table (Portable, Urban Safe, Low Collateral, Layered Response, Mobile Deployment, Open Architecture) with animated ✓/✗.
14. **Open Architecture** — *"Integrates With Existing Defense Ecosystems."* Integration diagram (radar, EO/IR, existing C2, air defense, security platforms, BMS); *"Enhances existing architecture rather than replacing it."*
15. **Final CTA** — *"Build Your Layered Counter-UAS Capability."* Scalable from individual operators to national assets; CTAs **Request Demonstration** · **Schedule Technical Briefing** · **Contact XTEND**.
16. **Footer** — wordmark, contact, export-control/ITAR-style note, anchor nav.
17. **Combat Proven band** *(added)* — treated real exercise stills as authenticity proof, carrying *Combat Proven. Portable. Mission Ready.*

---

## 7. Asset pipeline & provisional mapping

- `lib/assets.ts` manifest: logical key → `{ file, alt, treatment, credit, isPlaceholder }`. `MediaFrame` renders image/video or a styled placeholder with a labeled swap-slot.
- **Treatments** (CSS/SVG): gold↔black duotone, dark gradient scrims, grain, vignette, HUD corner-brackets — unifies mixed sources and softens identifiable detail.
- **Optimization:** `next/image` (AVIF/WebP, responsive sizes); videos compressed + poster frames; below-fold media lazy-loaded.
- **Provisional real-asset map** (each clip/photo qualified before use):
  - *Combat Proven band + some scenario backgrounds:* treated stills from `UK/UK Live 16 brig/`.
  - *Hero / in-action B-roll:* best of `UK/yoni/` XTEND demos (e.g. AXON XTENDER taser-drone, TURKEY 45s, inspection) + `UK Live 16 brig/*.mov/*.mp4`, dark-graded; final cut = swap-slot.
  - *DefendAir Personal:* real specs + imagery from `DefendAirOnePagerPrintReadyENG.pdf`.
  - *"The Threat Has Changed" (FPV POV):* possibly `Privet/100GOPRO/*.MP4` if content fits.
  - **Only curated XTEND assets are copied into `/public`; no personal/financial files are touched.**

---

## 8. Animation spec (Framer Motion; all reduced-motion aware)

Scroll-reveal (fade/translate/blur) on section enter · hero parallax + slow Ken-Burns + gradient sweep · stat count-ups · ecosystem SVG path-draw + pulsing nodes · Scorpio intercept sequence · decision-tree sequential reveal + branch highlighting · comparison-table staggered ✓/✗ pops · optional smooth-scroll (reduced-motion aware).

---

## 9. SEO / accessibility / performance

- **SEO:** Metadata API (title/description/keywords/canonical/robots), OpenGraph + Twitter card with generated OG image, JSON-LD (Organization + Product/Service), `sitemap.ts` + `robots.ts`.
- **A11y:** semantic landmarks, aria labels, full keyboard nav + visible focus, AA contrast for gold-on-black at used sizes, reduced-motion.
- **Performance:** `next/font` + `next/image` + lazy media + poster frames; Lighthouse pass targeted.

---

## 10. Repository & deployment

Init git in `~/Desktop/xtend-counter-uas/`, add `.gitignore`, README, ESLint/Prettier. **Create a GitHub repo via `gh` and push** — `gh auth status` confirmed first; if unauthenticated, pause and ask rather than guess. Vercel is zero-config from the repo (left import-ready; no live deploy unless requested).

---

## 11. Verification before "done"

`npm run build` clean · `npm run dev` loads · then drive the running site with preview/browser tools to **screenshot hero + flagship Scorpio + a couple of animated sections** at desktop and mobile widths and confirm visually. Real output reported, not assertions.

---

## 12. Execution phases (checklist)

1. Verify stack versions (Next 16 / Tailwind); pull exact XTEND gold + fonts from xtend.ai; extract real specs from PDFs via the `pdf` skill.
2. Scaffold project + design tokens + fonts + UI primitives.
3. Asset triage → treatment → optimize into `/public` + manifest.
4. Build sections top-to-bottom (Hero + Scorpio first).
5. Wire animations + responsive + reduced-motion.
6. SEO / a11y / performance pass.
7. Build, verify, screenshot.
8. Git + create GitHub repo + push.
9. Hand off with swap-slot / credits / OPSEC checklist.

---

## 13. Risks & assumptions

- Next.js 16 / Tailwind v4 install friction → documented fallback to 15.x / v3.
- PDF tooling absent → use `pdf` skill (or poppler) to verify specs; unconfirmed figures flagged, not published as fact.
- Real footage ≠ the literal 5-beat night/urban hero; closest material assembled + graded + swap-slot.
- Exact gold/fonts/product facts verified at execution; any unsubstantiated copy flagged.
- **OPSEC:** default face/insignia-safe treatment; XTEND clearance recommended before public deploy (GitHub/Vercel are public).

---

## 14. Open handoff items

- [ ] Final approved hero reel (swap-slot).
- [ ] XTEND brand gold hex + official typefaces confirmed.
- [ ] Verified spec figures signed off.
- [ ] OPSEC clearance on any recognizable imagery.
- [ ] Real CTA destinations (demo request, capability brief PDF, contact).
- [ ] GitHub repo name + visibility (public/private).

---

*This document is the plan only. No project files, code, or scaffolding have been created. Implementation begins on explicit `EXECUTE` approval.*
