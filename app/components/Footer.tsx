import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedSection from "./AnimatedSection"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-8 sm:py-10 lg:px-8">
        <AnimatedSection direction='up' delay={0.2}>
          <div className="flex justify-center">
            <a href="https://www.instagram.com/horizoncreative.agency/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Horizon Creative">
              <img src="/assets/logoig.png" alt="Instagram Horizon Creative" className="w-8 h-8 sm:w-10 sm:h-10 mx-auto" />
            </a>
          </div>
          <nav className="columns-2 sm:flex sm:justify-center sm:space-x-12 mt-2" aria-label="Footer">
            {["Inicio", "Sobre Nosotros", "Nuestros Servicios", "Contacto", "Privacidad", "Términos"].map((item) => (
              <div key={item} className="pb-6">
                <Link
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  {item}
                </Link>
              </div>
            ))}
          </nav>
          <div className="flex justify-center">
            </div>
          <p className="text-center text-sm leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Horizon Creative. Todos los derechos reservados.
          </p>
        </AnimatedSection>
      </div>
    </footer>
  )
}
