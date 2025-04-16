"use client"

import { motion } from "framer-motion"
import { Camera, Globe, Smartphone, PenTool } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const services = [
  {
    title: "Fotografía",
    description:
      "Creamos contenido visual de alta calidad, con imágenes y videos diseñados para contar tu historia de manera auténtica, conectar con tu audiencia y fortalecer tu presencia en el mercado.",
    details:
      "Creación de contenido, edición y retoque profesional, animaciones, adaptación de contenido, sesiones corporativas.",
    icon: <Camera className="w-12 h-12 text-primary" />,
  },
  {
    title: "Marketing Digital",
    description:
      "Potenciamos tu marca con marketing digital estratégico. Para ello, creamos campañas efectivas optimizamos tu presencia en línea y utilizamos las tendencias más recientes para ayudarte a alcanzar tus objetivos.",
    details: "Estrategia digital, gestión RRSS, creación elementos visuales, campañas publicidad.",
    icon: <Globe className="w-12 h-12 text-primary" />,
  },
  {
    title: "Diseño y Desarrollo de App",
    description:
      "Diseñamos y desarrollamos aplicaciones móviles a medida, combinando interfaces modernas con experiencias intuitivas para el usuario. Nos enfocamos en crear soluciones funcionales, atractivas y optimizadas, que se adapten a las necesidades de tu negocio y destaquen en el mercado digital.",
    icon: <Smartphone className="w-12 h-12 text-primary" />,
  },
  {
    title: "Diseño & Desarrollo Web",
    description:
      "Diseñamos y desarrollamos sitios web que destacan y marcan la diferencia, para ello optimizamos la experiencia del usuario y desarrollamos la web, teniendo en cuenta las últimas tendencias para garantizar resultados impactantes.",
    details: "WordPress, SEO, shopity, optimización, identidad visual, diseño y desarrollo.",
    icon: <PenTool className="w-12 h-12 text-primary" />,
  },
]

export default function Servicios() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-black mb-4 text-black dark:text-white">Nuestros Servicios</h1>
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
          {services.map((service, index) => (
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
              {service.details && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-primary text-sm font-medium">{service.details}</p>
                </div>
              )}
              <motion.div className="mt-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <a
                  href="#contact"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="mr-2">Solicitar información</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a
            href="#contact"
            className="rounded-full bg-primary px-8 py-4 text-lg font-semibold text-black shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          >
            Contáctanos para un presupuesto personalizado
          </a>
        </motion.div>
      </div>
    </div>
  )
}
