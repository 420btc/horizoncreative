import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import InspirationTag from "./components/InspirationTag"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Portfolio />
      <div className="w-full flex justify-center my-2 bg-black border-0 shadow-none">
        <img
          src="/assets/logomano.png"
          alt="Logo Mano Horizon Creative"
          className="w-[320px] md:w-[280px] h-auto"
          loading="lazy"
        />
      </div>
      
      <InspirationTag />
    </div>
  );
}
