import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedSection from "./AnimatedSection"

export default function Footer() {
  return (
    <footer className="bg-black border-t-0">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-4 sm:py-10 lg:px-8">
        <AnimatedSection direction='up' delay={0.2}>
          {/* Logo arriba en móvil */}
          <div className="flex justify-center mb-2 sm:mb-4">
            <a href="https://www.instagram.com/horizoncreative.agency/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Horizon Creative">
              <img src="/assets/logoig.png" alt="Instagram Horizon Creative" className="w-8 h-8 sm:w-10 sm:h-10 mx-auto" />
            </a>
          </div>
          {/* Menú más compacto en móvil */}
          <nav className="grid grid-cols-2 gap-y-1 gap-x-3 justify-items-center sm:flex sm:justify-center sm:space-x-12 mt-1 sm:mt-2 mb-2 sm:mb-4" aria-label="Footer">
            {[
              "Inicio", "Sobre Nosotros", "Nuestros Servicios", "Contacto", "Privacidad", "Términos"
            ].map((item) => (
              <div key={item} className="pb-2 sm:pb-6">
                <Link
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm leading-6 text-gray-400 hover:text-white"
                >
                  {item}
                </Link>
              </div>
            ))}
          </nav>
          <p className="text-center text-xs sm:text-sm leading-5 text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} Horizon Creative. Todos los derechos reservados.
          </p>
        </AnimatedSection>
      </div>
    </footer>
  )
}
