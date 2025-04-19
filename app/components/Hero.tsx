"use client"

import { useState } from "react";
import { motion } from "framer-motion"
import Image from "next/image"
import TypewriterText from "./TypewriterText"

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="relative isolate overflow-hidden bg-black">
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-2 sm:pb-8 md:py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        {/* Logo móvil arriba, desktop a la derecha */}
        <motion.div
          className="flex justify-center lg:hidden mb-2 mt-2 relative"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, type: 'spring', bounce: 0.38, delay: 0 }}
        >
          <Image
            src="/logotipo.png"
            alt="Horizon Creative Logotipo"
            width={320}
            height={320}
            className="w-[90vw] max-w-[340px] h-auto cursor-pointer"
            priority
            onClick={() => {
              setShowVideo(true);
              setTimeout(() => setShowVideo(false), 3000);
            }}
          />
          {/* Video superpuesto en móvil */}
          {showVideo && (
            <video
              src="/assets/librom.mp4"
              autoPlay
              playsInline
              muted
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 10 }}
              onLoadedMetadata={e => { e.currentTarget.currentTime = 0; }}
            />
          )}
        </motion.div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl flex flex-col items-start md:items-start gap-0">
  <motion.span
    className="text-primary text-7xl md:text-8xl mb-0 block"
    initial={{ x: '-100vw', opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1.7, type: 'spring', bounce: 0.3, delay: 0 }}
  >
    Horizon
  </motion.span>
  <motion.span
    className="text-primary text-7xl md:text-8xl block"
    initial={{ x: '-100vw', opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 2.1, type: 'spring', bounce: 0.3, delay: 0.85 }}
  >
    Creative
  </motion.span>

</motion.h1>
          <div className="mt-6 text-lg leading-8 text-gray-300 h-24">
            <TypewriterText
              text="Agencia de marketing online especializada en estrategias digitales que impulsan el crecimiento de tu negocio."
              delay={30}
            />
          </div>
          <motion.div
            className="mt-10 mb-2 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-2 sm:gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Contáctanos
            </a>
            <a href="/servicios" className="text-sm font-semibold leading-6 text-white mt-2 sm:mt-0">
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
          <div className="relative group" style={{ width: 500, height: 500, maxWidth: 500, maxHeight: 500 }}>
            {/* Logotipo grande clickable */}
            <Image
              src="/logotipo.png"
              alt="Horizon Creative Logotipo"
              width={500}
              height={500}
              className="w-[300px] md:w-[500px] rounded-2xl shadow-xl cursor-pointer"
              priority
              onClick={() => {
                setShowVideo(true);
                setTimeout(() => setShowVideo(false), 3000);
              }}
            />
            {/* Video superpuesto */}
            {showVideo && (
              <video
                src="/assets/librom.mp4"
                autoPlay
                playsInline
                muted
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'contain', zIndex: 10 }}
                onLoadedMetadata={e => { e.currentTarget.currentTime = 0; }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
