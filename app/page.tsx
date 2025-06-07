import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import WhatWeDoSection from "./components/WhatWeDoSection"
import StatisticsSection from "./components/StatisticsSection"
import InspirationTag from "./components/InspirationTag"

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Hero />
      <Portfolio />
      <WhatWeDoSection />
      <StatisticsSection lang="es" />
      <div className="w-full flex justify-center my-2 bg-black border-0 shadow-none px-4">
        <img
src="/assets/logomano.png"
         alt="Logo Mano Horizon Creative"
          className="w-full max-w-[320px] md:max-w-[280px] h-auto"
          loading="lazy"
        />
      </div>
      
      <InspirationTag />
    </div>
  );
}
