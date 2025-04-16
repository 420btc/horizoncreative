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
    slug: "diseno-web",
  },
  {
    icon: <Code className="w-12 h-12 mb-4 text-primary" />,
    title: "Desarrollo Web",
    description: "Construimos plataformas robustas, escalables y de alto rendimiento para tu negocio.",
    slug: "desarrollo-web",
  },
  {
    icon: <Megaphone className="w-12 h-12 mb-4 text-primary" />,
    title: "Marketing Digital",
    description: "Desarrollamos estrategias que aumentan la visibilidad de tu marca y generan conversiones.",
    slug: "marketing-digital",
  },
  {
    icon: <Smartphone className="w-12 h-12 mb-4 text-primary" />,
    title: "Aplicaciones Móviles",
    description: "Creamos aplicaciones innovadoras para plataformas iOS y Android.",
    slug: "aplicaciones-moviles",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="container mx-auto relative flex flex-col md:flex-row items-start md:items-center">
        <div className="flex-1">
          <AnimatedSection direction="up">
            <h2 className="text-5xl font-black mb-8 text-center text-black dark:text-white">
              Nuestros Servicios
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
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
<a
  href={`/servicios/${service.slug}`}
  className="inline-flex items-center mt-4 text-primary hover:text-primary/80 transition-colors font-semibold"
>
  <span className="mr-2">Ver más</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
</a>
                </div>
              </AnimatedSection>
            )); })()}
          </div>
        </div>


      </div>
    </section>
  )
}
