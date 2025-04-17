"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import TypewriterText from "./TypewriterText"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        {/* Logo móvil arriba, desktop a la derecha */}
        <motion.div
          className="flex justify-center lg:hidden mb-[3px]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, type: 'spring', bounce: 0.38, delay: 0 }}
        >
          <Image
            src="/logotipo.png"
            alt="Horizon Creative Logotipo"
            width={300}
            height={300}
            className="w-[300px] h-auto"
            priority
          />
        </motion.div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <div className="mt-10 font-bold tracking-tight text-black dark:text-white text-7xl md:text-8xl sm:text-6xl">
            <motion.span
              className="block text-primary"
              initial={{ opacity: 0, x: '-100vw' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', bounce: 0.45, duration: 2.2, delay: 0 }}
            >
              Horizon
            </motion.span>
            <motion.span
              className="block text-primary mt-1"
              initial={{ opacity: 0, x: '-50vw' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', bounce: 0.55, duration: 2.2, delay: 1.5 }}
            >
              Creative
            </motion.span>
          </div>
          <div className="mt-6 text-lg leading-8 text-black dark:text-gray-300 h-24">
            <TypewriterText
              text="Agencia de marketing online especializada en estrategias digitales que impulsan el crecimiento de tu negocio."
              delay={30}
            />
          </div>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/contacto"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Contáctanos
            </a>
            <a href="/servicios" className="text-sm font-semibold leading-6 text-black dark:text-white">
              Nuestros Servicios <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="hidden lg:block mx-auto mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <Image
              src="/logotipo.png"
              alt="Horizon Creative Logotipo"
              width={500}
              height={500}
              className="w-[300px] md:w-[500px] rounded-2xl shadow-xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
