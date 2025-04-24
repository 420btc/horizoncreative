"use client";
import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedSection from "./AnimatedSection"

import { useState } from "react"



export default function Footer() {
  const [showNewsletter, setShowNewsletter] = useState(false)
  function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setShowNewsletter(false)
    // Aquí podrías integrar un servicio real de newsletter
    alert('¡Gracias por suscribirte!');
  }
  return (
    <footer className="bg-white dark:bg-black border-t-0">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-4 sm:py-10 lg:px-8">
        <AnimatedSection direction='up' delay={0.2}>
          {/* Logo arriba en móvil */}
          <div className="flex justify-center items-center gap-2 mb-2 sm:mb-4 lg:mt-8 ml-0 sm:ml-14">
  <a href="https://www.instagram.com/horizoncreative.agency/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Horizon Creative">
    <img src="/assets/logoig.png" alt="Instagram Horizon Creative" className="w-8 h-8 sm:w-10 sm:h-10" />
  </a>
  <img src="/assets/logofc.png" alt="Logo FC Horizon Creative" className="w-5 h-6 sm:w-6" />
  <img src="/assets/twitt.png" alt="Logo Twitter Horizon Creative" className="w-8 sm:w-8 h-8 relative top-0.5" />
</div>
          {/* Menú más compacto en móvil */}
          <nav className="grid grid-cols-2 gap-y-1 gap-x-3 justify-items-center sm:flex sm:justify-center sm:space-x-12 mt-1 sm:mt-2 mb-2 sm:mb-4 lg:mt-2 lg:mb-1" aria-label="Footer">
            {(() => {
              const links = [
                { label: "Inicio", href: "/" },
                { label: "Sobre Nosotros", href: "/sobre-nosotros" },
                { label: "Nuestros Servicios", href: "/servicios" },
                { label: "Contacto", href: "/contacto" },
                { label: "Privacidad", href: "/privacidad" },
                { label: "Aviso Legal", href: "/aviso-legal" },
              ];
              return [
                links.slice(0, 3).map(({ label, href }) => (
                  <div key={label} className="pb-2 sm:pb-6">
                    <Link href={href} className="text-sm leading-6 text-white dark:text-white hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-400 transition-colors">
                      {label}
                    </Link>
                  </div>
                )),
                // Newsletter button en el centro
                <div key="newsletter" className="pb-2 sm:pb-6">
                  <button
                    type="button"
                    className="text-sm leading-6 text-gray-900 bg-yellow-400 px-4 py-1 rounded-full font-semibold shadow hover:bg-yellow-300 transition-colors dark:text-black"
                    onClick={() => setShowNewsletter(true)}
                  >
                    Newsletter
                  </button>
                </div>,
                links.slice(3).map(({ label, href }) => (
                  <div key={label} className="pb-2 sm:pb-6">
                    <Link href={href} className="text-sm leading-6 text-white dark:text-white hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-400 transition-colors">
                      {label}
                    </Link>
                  </div>
                )),
              ];
            })()}

          </nav>
          {/* Newsletter popover */}
          {showNewsletter && (
            <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/30 dark:bg-black/50" onClick={() => setShowNewsletter(false)}>
              <div
                className="relative mb-12 sm:mb-0 bg-yellow-400 rounded-2xl shadow-xl px-6 py-7 w-full max-w-[220px] sm:max-w-[320px] flex flex-col items-center border-2 border-yellow-300"
                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
                onClick={e => e.stopPropagation()}
              >
                <button className="absolute top-2 right-3 text-black text-xl font-bold" onClick={() => setShowNewsletter(false)} aria-label="Cerrar">&times;</button>
                <div className="mb-2 text-center text-black font-bold text-lg">¡Suscríbete al Newsletter!</div>
                <div className="mb-3 text-black text-sm">Recibe ideas creativas y novedades exclusivas 1 vez a la semana.</div>
                <form className="flex flex-col gap-2 w-full" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    required
                    placeholder="Tu correo electrónico"
                    className="px-3 py-2 rounded-lg border border-gray-300 focus:border-yellow-600 focus:ring-2 focus:ring-yellow-400 text-black bg-white placeholder-gray-500 text-sm w-full"
                  />
                  <button
                    type="submit"
                    className="mt-1 bg-black text-yellow-400 font-bold py-2 rounded-lg transition-colors hover:bg-gray-900 text-sm dark:bg-white dark:text-yellow-500"
                  >
                    Suscribirme
                  </button>
                </form>
              </div>
            </div>
          )}
          

<p className="text-center text-xs sm:text-sm leading-5 text-white dark:text-white hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-400 transition-colors mt-2 lg:mt-1">
  &copy; 2025 Horizon Creative. Todos los derechos reservados.
</p>
        </AnimatedSection>
      </div>
    </footer>
  )
}
