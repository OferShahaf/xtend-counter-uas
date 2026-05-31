import {
  Nav,
  Hero,
  CombatProvenBand,
  ThreatChanged,
  Ecosystem,
  AIFastInterceptor,
  Scorpio1000,
  DefendAir,
  Turret,
  CyberDefeat,
  WhyXtend,
  FinalCTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CombatProvenBand />
        <ThreatChanged />
        <Ecosystem />
        <div id="systems">
          <AIFastInterceptor />
          <Scorpio1000 />
          <DefendAir />
          <Turret />
          <CyberDefeat />
        </div>
        <WhyXtend />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
