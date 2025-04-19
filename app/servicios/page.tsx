"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect } from "react"

const servicios = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-camera w-12 h-12 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>,
    title: "Fotografía y Video",
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
    icon: (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="11" y="14" width="26" height="18" rx="2.5" fill="none" stroke="currentColor"/>
    <rect x="8" y="36" width="32" height="4" rx="1.5" fill="none" stroke="currentColor"/>
    <path d="M14 36V32a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4" stroke="currentColor"/>
    <rect x="18" y="18" width="13" height="8" rx="1.5" fill="none" stroke="currentColor"/>
  </svg>
),
    title: "Diseño & Desarrollo Web",
    description: "Diseñamos y desarrollamos sitios web que destacan y marcan la diferencia, optimizando la experiencia del usuario y garantizando resultados.",
    slug: "diseno-web",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8c0-1.657-1.343-3-3-3H7C5.343 5 4 6.343 4 8v8c0 1.657 1.343 3 3 3h7c1.657 0 3-1.343 3-3V8z"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h4m-2-2v4"/></svg>,
    title: "Gestión de Redes Sociales",
    description: "Gestionamos tus redes sociales con estrategias personalizadas, creando contenido atractivo y relevante para fortalecer tu comunidad, aumentar tu alcance y consolidar tu presencia digital.",
    slug: "gestion-redes-sociales",
  },
]

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Servicios() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [buttonAnimatingMobile, setButtonAnimatingMobile] = useState(false);
  const [buttonAnimatingDesktop, setButtonAnimatingDesktop] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), [])

  return (
    <div className="bg-black min-h-screen">
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
          <h1 className="text-5xl font-black mb-4 text-white">Nuestros <span className="text-yellow-400">Servicios</span></h1>
          {/* Imagen flyer tipo pegatina, solo visible en md+ */}

                    <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Descubre Nuestros Servicios Destacados
            </h2>
            <p className="text-lg text-gray-300">
              En <span className="text-yellow-400">Horizon</span>, ofrecemos soluciones personalizadas para impulsar <span className="text-yellow-400">tu presencia digital</span> y conectar realmente
              con tu audiencia.
            </p>
          </div>
        </motion.div>


        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-9 md:gap-y-8 w-full">
          {servicios.slice(0,4).map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-black rounded-xl p-5 shadow-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 min-h-[180px] w-full max-w-sm md:max-w-full mx-auto"
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
                  className="flex items-center justify-center mt-6 w-9 h-9 rounded-full bg-primary text-black hover:bg-primary/80 transition-colors shadow-lg mx-auto"
                  aria-label={`Ver detalles de ${service.title}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <circle cx="10" cy="10" r="9" fill="none" />
                    <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          ))}
          {/* Quinta tarjeta centrada */}
          <div className="col-span-2 w-full flex justify-center mt-4">
            <motion.div
              key={servicios[4].title}
              className="bg-black rounded-xl p-5 shadow-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 min-h-[180px] max-w-lg md:w-[57.5%] w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center mb-4">
                {servicios[4].icon}
                <h3 className="text-2xl font-bold ml-4 text-white">{servicios[4].title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{servicios[4].description}</p>
              <motion.div className="mt-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <a
                  href={`/servicios/${servicios[4].slug}`}
                  className="flex items-center justify-center mt-6 w-9 h-9 rounded-full bg-primary text-black hover:bg-primary/80 transition-colors shadow-lg mx-auto"
                  aria-label={`Ver detalles de ${servicios[4].title}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <circle cx="10" cy="10" r="9" fill="none" />
                    <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>


        
        {/* Botón de contacto adaptativo */}
        <div className="w-full flex flex-col items-center justify-center mt-12 mb-2">
  {/* Botón SOLO para móvil */}
  {/* Botón SOLO para móvil */}
  <motion.a
    className="flex sm:hidden items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black w-40 h-12 rounded-full shadow-lg transition-all duration-200 mx-auto font-bold text-lg"
    aria-label="Contactar"
    initial={false}
    animate={buttonAnimatingMobile ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }}
    transition={{ duration: 0.35, ease: "easeInOut" }}
    onClick={async (e) => {
      e.preventDefault();
      setButtonAnimatingMobile(true);
      setTimeout(() => {
        router.push("/contacto");
        setButtonAnimatingMobile(false);
      }, 350);
    }}
    href="/contacto"
    style={{ cursor: buttonAnimatingMobile ? 'not-allowed' : undefined }}
  >
    Contáctanos
  </motion.a>
  {/* Botón SOLO para desktop */}
  {/* Botón SOLO para desktop */}
  <motion.a
    href="/contacto"
    className="hidden sm:inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200 text-lg text-center"
    style={{ wordBreak: 'break-word', whiteSpace: 'normal', cursor: buttonAnimatingDesktop ? 'not-allowed' : undefined }}
    initial={false}
    animate={buttonAnimatingDesktop ? { scale: 0.8, opacity: 0 } : { scale: 1, opacity: 1 }}
    transition={{ duration: 0.35, ease: "easeInOut" }}
    onClick={async (e) => {
      e.preventDefault();
      setButtonAnimatingDesktop(true);
      setTimeout(() => {
        router.push("/contacto");
        setButtonAnimatingDesktop(false);
      }, 350);
    }}
  >
    Contáctanos
  </motion.a>

</div>
      </div>
    </div>
  )
}
