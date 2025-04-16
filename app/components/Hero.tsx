"use client"

import { motion } from "framer-motion"
import AnimatedSection from "./AnimatedSection"
import Image from "next/image"
import TypewriterText from "./TypewriterText"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 flex flex-col-reverse items-center justify-center gap-2 lg:flex-row lg:items-center lg:gap-x-10 lg:px-8 lg:py-20 lg:gap-8">
        <div className="w-full max-w-2xl flex flex-col items-center lg:items-start lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-0 md:mt-10 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
  className="text-primary text-7xl md:text-8xl mb-4 block"
  initial={{ opacity: 0, x: "-100vw", y: -100 }}
  animate={{ opacity: 1, x: 0, y: 0 }}
  transition={{ duration: 2, ease: "easeOut" }}
>
  Horizon Creative
</motion.span>
          </motion.h1>
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
          className="mx-auto mb-8 lg:mb-0 lg:mt-0 flex items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative flex items-center justify-center">
            <Image
              src="/logotipo.png"
              alt="Horizon Creative Logotipo"
              width={222}
              height={222}
              className="w-[355px] h-[355px] md:w-[370px] md:h-[370px] lg:w-[616px] lg:h-[616px] rounded-2xl shadow-xl object-contain mt-0 md:mt-8"
              style={{ transform: 'rotate(5deg)' }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
