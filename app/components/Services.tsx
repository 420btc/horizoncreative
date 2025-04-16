"use client"

import { motion } from "framer-motion"
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
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-16 text-center text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestros Servicios
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
