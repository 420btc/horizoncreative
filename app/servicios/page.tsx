"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const servicios = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-camera w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>,
    title: "Fotografía",
    description: "Creamos contenido visual de alta calidad, con imágenes y videos diseñados para contar tu historia de manera auténtica, conectar con tu audiencia y fortalecer tu presencia en el mercado.",
    slug: "fotografia",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-megaphone w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-5v12L3 13v-2z"></path><path d="M11.6 16.8a2 2 0 1 1-3.2-2.6"></path></svg>,
    title: "Marketing Digital",
    description: "Potenciamos tu marca con marketing digital estratégico. Creamos campañas efectivas optimizando tu presencia en línea y utilizando las tendencias más recientes.",
    slug: "marketing-digital",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-smartphone w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" /><path d="M12 18h.01" /></svg>,
    title: "Diseño y Desarrollo de App",
    description: "Diseñamos y desarrollamos aplicaciones móviles a medida, modernas y funcionales, para destacar en el mercado digital.",
    slug: "aplicaciones-moviles",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-paintbrush w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18c0-2.5 2-4.5 4.5-4.5S11 15.5 11 18c0 2-1.5 4-4.5 4S2 20 2 18z"></path><path d="M6.5 2v13"></path><path d="M6.5 2a2.5 2.5 0 0 1 5 0v13"></path></svg>,
    title: "Diseño & Desarrollo Web",
    description: "Diseñamos y desarrollamos sitios web que destacan y marcan la diferencia, optimizando la experiencia del usuario y garantizando resultados.",
    slug: "diseno-web",
  },
]

export default function Servicios() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Flyer pegatina flotante, esquina superior derecha, solo visible en md+ */}
        <img
          src="/flyer.png"
          alt="Flyer Horizon Pegatina"
          className="hidden md:block absolute top-6 right-10 w-44 md:w-52 rotate-[15deg] z-10 pointer-events-none select-none"
        />
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-black mb-4 text-black dark:text-white">Nuestros Servicios</h1>
          {/* Imagen flyer tipo pegatina, solo visible en md+ */}

          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">Esto es todo lo que podemos hacer por ti</p>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
              Descubre Nuestros Servicios Destacados
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              En Horizon, ofrecemos soluciones personalizadas para impulsar tu presencia digital y conectar realmente
              con tu audiencia.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {servicios.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-black rounded-xl p-8 shadow-lg border border-primary/20 hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-2xl font-bold ml-4 text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <motion.div className="mt-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <a
                  href={`/servicios/${service.slug}`}
                  className="inline-flex items-center mt-4 text-primary hover:text-primary/80 transition-colors font-semibold"
                >
                  <span className="mr-2">Ver más</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Botón de contacto adaptativo */}
        <div className="w-full flex justify-center mt-16">
          {/* Botón SOLO para móvil */}
          <a
            href="/contacto"
            className="flex sm:hidden items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black w-40 h-12 rounded-full shadow-lg transition-all duration-200 mx-auto font-bold text-lg"
            aria-label="Contactar"
          >
            Contáctame
          </a>
          {/* Botón SOLO para desktop */}
          <a
            href="/contacto"
            className="hidden sm:inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-200 text-lg text-center"
            style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
          >
            Contáctanos para un presupuesto personalizado
          </a>
        </div>
      </div>
    </div>
  )
}
