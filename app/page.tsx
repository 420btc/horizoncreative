import Hero from "./components/Hero"
import ContactForm from "./components/ContactForm"
import Portfolio from "./components/Portfolio"

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />

      <div className="w-full flex justify-center my-2">
        <img
          src="/assets/logomano.png"
          alt="Logo Mano Horizon Creative"
          className="w-[320px] md:w-[280px] h-auto"
          loading="lazy"
        />
      </div>
      <ContactForm />
    </>
  )
}
