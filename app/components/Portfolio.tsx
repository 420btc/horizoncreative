"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "Diseño de Interiores",
    description: "Proyecto de diseño interior para restaurante en Málaga",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%281%29.jpg-wcotWWsKstxl146q8T902XWKQwPF3I.jpeg",
    category: "Diseño",
  },
  {
    id: 2,
    title: "Espacios Gastronómicos",
    description: "Creación de ambientes únicos para experiencias culinarias",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%282%29.jpg-gCgdQi6qxhZnnrpbxU7ZMjHSSRH254.jpeg",
    category: "Diseño",
  },
  {
    id: 3,
    title: "Decoración Moderna",
    description: "Combinación de elementos contemporáneos y funcionales",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%283%29.jpg-iPKYWkgmbKjlJXjMIoe4KnwGCFevUw.jpeg",
    category: "Diseño",
  },
  {
    id: 4,
    title: "Marketing Inmobiliario",
    description: "Estrategia de marca para propiedades de lujo en Benalmádena",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%285%29.jpg-H4mhfoNf6Aet5jQRHGmVbTPtgW40ei.jpeg",
    category: "Marketing",
  },
  {
    id: 5,
    title: "Propiedades Vacacionales",
    description: "Promoción digital para villas exclusivas en la Costa del Sol",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%284%29.jpg-QrZeBllB3qJekI9YMS7j0DOvVK9n8z.jpeg",
    category: "Marketing",
  },
]

const categories = ["Todos", ...Array.from(new Set(portfolioItems.map((item) => item.category)))]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems =
    activeCategory === "Todos" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Nuestro Portfolio</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre algunos de nuestros proyectos más destacados, donde combinamos creatividad y estrategia para lograr
            resultados excepcionales.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-black"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="group relative rounded-xl overflow-hidden shadow-lg h-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.id * 0.1 }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-200 mb-4">{item.description}</p>
                <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                  <span className="mr-2">Ver proyecto</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <motion.div
                className="absolute inset-0 bg-primary/20 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredItem === item.id ? 0.2 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-black font-medium hover:bg-primary/90 transition-colors"
          >
            Ver todos los proyectos
          </a>
        </div>
      </div>
    </section>
  )
}
