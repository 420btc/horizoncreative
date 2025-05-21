import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import WhatWeDoSection from "./components/WhatWeDoSection"
import InspirationTag from "./components/InspirationTag"

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Overlay blanco que cubre toda la pantalla */}
      <div className="fixed inset-0 bg-white z-50"></div>
      <Hero />
      <Portfolio />
      <WhatWeDoSection />
      <div className="w-full flex justify-center my-2 bg-black border-0 shadow-none">
        <img
          src="/assets/logomano.png"
          alt="Logo Mano Horizon Creative"
          className="w-[320px] md:w-[280px] h-auto"
          loading="lazy"
        />
      </div>
      
      <InspirationTag />
      {/* Fin del overlay */}
    </div>
  );
}
