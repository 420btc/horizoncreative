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
            <h2 className="text-5xl font-black mb-8 text-center text-white">
              Nuestros Servicios
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 w-full">
            {(() => { const directions: Direction[] = ["up","right","left","down"]; return services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                direction={directions[index%4]}
                delay={index * 0.15}
                className="h-full"
              >
                <div className="bg-black border border-gray-800 p-6 rounded-lg h-full min-h-[180px]">
                  {service.icon}
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
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
                </div>
              </AnimatedSection>
            )); })()}
          </div>
        </div>


      </div>
    </section>
  )
}
