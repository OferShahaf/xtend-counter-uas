import {
  Nav,
  Hero,
  CombatProvenBand,
  ThreatChanged,
  Ecosystem,
  Scorpio1000,
  DefendAir,
  Turret,
  Interceptor,
  Sentrycs,
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
          <Scorpio1000 />
          <DefendAir />
          <Turret />
          <Interceptor />
          <Sentrycs />
        </div>
        <WhyXtend />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
