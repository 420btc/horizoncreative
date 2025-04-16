"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-8 text-center text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Nosotros
        </motion.h2>

        <motion.h3
          className="text-3xl font-bold mb-6 text-center text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          La historia detrás de Horizon
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Hemos trabajado con diversas empresas, desde startups pequeñas hasta marcas consolidadas, adaptando
              nuestras estrategias a sus necesidades particulares y potenciando su crecimiento en el mercado digital.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              La idea de Horizon nació de la amistad y la energía que compartimos. Juntos decidimos combinar nuestras
              habilidades para ayudar a otras marcas a conectarse con su audiencia de manera efectiva.
            </p>
          </motion.div>
          <motion.div
            className="relative h-80"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/team-1.png"
              alt="Equipo de Horizon Creative"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <motion.h3
          className="text-3xl font-bold mb-6 text-center text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Nuestros Valores
        </motion.h3>

        <motion.p
          className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Creemos en la importancia de principios sólidos que guían nuestro trabajo y nuestras relaciones con los
          clientes.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-80 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Image
              src="/images/team-2.png"
              alt="Colaboración en Horizon Creative"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="mb-8">
              <h4 className="text-2xl font-bold mb-2 text-black dark:text-white">Creatividad</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Fomentamos un ambiente donde la innovación y la originalidad prosperan, brindando soluciones únicas que
                destacan a cada cliente en su mercado.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-bold mb-2 text-black dark:text-white">Colaboración</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Trabajamos como un equipo cohesionado, valorando la comunicación y la participación de todos, lo que
                resulta en un rendimiento óptimo en nuestros proyectos.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-2 text-black dark:text-white">Autenticidad</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Creemos en la transparencia y la honestidad en cada interacción, construyendo relaciones sólidas y de
                confianza con nuestros clientes y colaboradores.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
