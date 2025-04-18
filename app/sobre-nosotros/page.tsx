"use client"

import { motion } from "framer-motion"
import AnimatedSection from "../components/AnimatedSection"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function SobreNosotros() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl font-black mb-12 text-center text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre <span className="text-yellow-400">Nosotros</span>
        </motion.h1>

        <motion.h2
          className="text-3xl font-bold mb-6 text-center text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          La historia detrás de Horizon
        </motion.h2>

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
            className="relative h-80 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/488365731_17866198536358800_8381085028217055403_n.jpg-qRq9xoBMvNqbFIpXXRDUmI0eWDWQn3.jpeg"
              alt="Equipo de Horizon Creative"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.h2
          className="text-3xl font-bold mb-6 text-center text-black dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Nuestro <span className="text-yellow-400">Equipo</span> Creativo
        </motion.h2>

        <motion.p
          className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Somos un equipo de profesionales apasionados por el diseño y el marketing digital, comprometidos con la
          excelencia y la innovación.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="relative h-80 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/487998197_17866198554358800_5624454380913110215_n.jpg-76zFZEPjxtei5NauowWpqjm6yTgJI1.jpeg"
              alt="Miembro del equipo trabajando en diseños"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="order-first md:order-last"
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
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div>
              <h4 className="text-2xl font-bold mb-2 text-black dark:text-white">Autenticidad</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Creemos en la transparencia y la honestidad en cada interacción, construyendo relaciones sólidas y de
                confianza con nuestros clientes y colaboradores.
              </p>
              <h4 className="text-2xl font-bold mb-2 text-black dark:text-white">Innovación</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Estamos constantemente explorando nuevas tendencias y tecnologías para ofrecer soluciones de vanguardia
                que impulsen el crecimiento de nuestros clientes.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative h-80 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/488404776_17866198545358800_1740268853361836082_n.jpg-69VdKQwOVG6bFFXkjjsfUeXII5kCTq.jpeg"
              alt="Equipo colaborando en proyectos"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        {/* Galería de fotos grandes al final */}
        <div className="mt-20 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/studio1.jpg"
                alt="Eric en el estudio"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/studio2.jpg"
                alt="Ivan en el estudio"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-1">
          <div className="flex justify-center items-center">
            <img src="/assets/telescopio.png" alt="Telescopio" className="w-[400px] max-w-full h-auto" />
          </div>
          <div className="flex flex-col justify-center items-center md:justify-end md:items-start gap-2 mt-[-20px] md:-ml-8 md:mt-[-40px] max-w-xl w-full md:pr-4">
            <p className="text-xl text-gray-800 dark:text-gray-200 text-center md:text-left w-full">
              <span className="text-yellow-400 font-bold">Horizon Creative</span>, surgida de la amistad, conecta marcas con audiencias mediante creatividad, colaboración, autenticidad e innovación, impulsando su <span className="text-yellow-400 font-bold">crecimiento digital</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
