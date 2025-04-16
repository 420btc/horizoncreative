"use client"

import { motion } from "framer-motion"
import AnimatedSection from "./AnimatedSection"
import type { Direction } from "./AnimatedSection"
import { Code, Paintbrush, Megaphone, Smartphone } from "lucide-react"

const services = [
  {
    icon: <Paintbrush className="w-12 h-12 mb-4 text-primary" />,
    title: "Diseño Web",
    description: "Creamos sitios web atractivos y funcionales que representan la identidad de tu marca.",
  },
  {
    icon: <Code className="w-12 h-12 mb-4 text-primary" />,
    title: "Desarrollo Web",
    description: "Construimos plataformas robustas, escalables y de alto rendimiento para tu negocio.",
  },
  {
    icon: <Megaphone className="w-12 h-12 mb-4 text-primary" />,
    title: "Marketing Digital",
    description: "Desarrollamos estrategias que aumentan la visibilidad de tu marca y generan conversiones.",
  },
  {
    icon: <Smartphone className="w-12 h-12 mb-4 text-primary" />,
    title: "Aplicaciones Móviles",
    description: "Creamos aplicaciones innovadoras para plataformas iOS y Android.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto relative flex flex-col md:flex-row items-start md:items-center">
        <div className="flex-1">
          <AnimatedSection direction="up">
            <h2 className="text-5xl font-black mb-8 text-center text-black dark:text-white">
              Nuestros Servicios
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {(() => { const directions: Direction[] = ["up","right","left","down"]; return services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                direction={directions[index%4]}
                delay={index * 0.15}
                className="h-full"
              >
                <div className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 p-6 rounded-lg h-full">
                  {service.icon}
                  <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{service.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                </div>
              </AnimatedSection>
            )); })()}
          </div>
        </div>

        {/* Botón de contacto adaptativo */}
        <div className="w-full flex justify-center mt-8">
          <a
            href="/contacto"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg transition-all duration-200 w-full sm:w-auto text-center text-sm sm:text-lg break-words whitespace-normal"
            style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
          >
            Contáctanos para un presupuesto personalizado
          </a>
        </div>
      </div>
    </section>
  )
}
