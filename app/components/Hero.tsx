"use client"

import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion"
import Image from "next/image"
import TypewriterText from "./TypewriterText"

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const [logoVisible, setLogoVisible] = useState(true);
  const videoTimeout = useRef<NodeJS.Timeout | null>(null);

  // Animar texto/botones solo una vez
  const [textAnimated, setTextAnimated] = useState(false);

  useEffect(() => {
    // Al cargar, inicia el flujo normal SIEMPRE
    setLogoVisible(true);
    setShowVideo(false);
    setVideoFinished(false);
    // Autoplay video 2s después de cargar
    const timer = setTimeout(() => {
      setShowVideo(true);
      setVideoFinished(false);
      setLogoVisible(true);
      // Si el video dura 3s, lo ocultamos y cambiamos fondo al terminar
      videoTimeout.current = setTimeout(() => {
        setShowVideo(false);
        setVideoFinished(true);
        setTimeout(() => setLogoVisible(false), 600); // animación salida logo
      }, 3000);
    }, 2000);
    return () => {
      clearTimeout(timer);
      if (videoTimeout.current) clearTimeout(videoTimeout.current);
    };
  }, []);

  // Cuando el video termina manualmente (por seguridad)
  const handleVideoEnd = () => {
    setShowVideo(false);
    setVideoFinished(true);
    setTimeout(() => setLogoVisible(false), 600);
  };

  return (
    <div className="relative isolate overflow-hidden bg-black">
      {/* Fondo desenfocado solo si el video terminó tras autoplay */}
      <AnimatePresence>
        {videoFinished && (
          <motion.div
            className="absolute inset-0 w-full h-full -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ pointerEvents: 'none' }}
          >
            <Image
              src="/assets/fondohero.jpg"
              alt="Fondo Hero"
              fill
              sizes="100vw"
              className="object-cover w-full h-full blur-[2px] scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-2 sm:pb-8 md:py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        {/* Logo grande y video, móvil */}
        <div className="flex justify-center lg:hidden mb-2 mt-2 relative z-10">
          <AnimatePresence>
            {logoVisible && (
              <motion.div
                className="relative"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                style={{ zIndex: 2 }}
              >
                <Image
                  src="/logotipo.png"
                  alt="Horizon Creative Logotipo"
                  width={320}
                  height={320}
                  className="w-[90vw] max-w-[340px] h-auto cursor-pointer"
                  priority
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
                    onEnded={handleVideoEnd}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Bloque de texto y botones SIEMPRE visible y animado solo al cargar */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0 relative z-20">
          {!textAnimated ? (
            <>
              <motion.h1
                className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl flex flex-col items-start md:items-start gap-0"
                onAnimationComplete={() => setTextAnimated(true)}
              >
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
            </>
          ) : (
            <>
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl flex flex-col items-start md:items-start gap-0">
                <span className="text-primary text-7xl md:text-8xl mb-0 block">Horizon</span>
                <span className="text-primary text-7xl md:text-8xl block">Creative</span>
              </h1>
              <div className="mt-6 text-lg leading-8 text-gray-300 h-24">
                <TypewriterText
                  text="Agencia de marketing online especializada en estrategias digitales que impulsan el crecimiento de tu negocio."
                  delay={30}
                />
              </div>
              <div className="mt-10 mb-2 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-2 sm:gap-x-6">
                <a
                  href="#contact"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Contáctanos
                </a>
                <a href="/servicios" className="text-sm font-semibold leading-6 text-white mt-2 sm:mt-0">
                  Nuestros Servicios <span aria-hidden="true">→</span>
                </a>
              </div>
            </>
          )}
        </div>
        {/* Logo grande y video, desktop */}
        <div className="hidden lg:block mx-auto mt-0">
          <AnimatePresence>
            {logoVisible && (
              <motion.div
                className="relative"
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.6 }}
                style={{ zIndex: 2 }}
              >
                <div className="relative group" style={{ width: 500, height: 500, maxWidth: 500, maxHeight: 500 }}>
                  <Image
                    src="/logotipo.png"
                    alt="Horizon Creative Logotipo"
                    width={500}
                    height={500}
                    className="w-[300px] md:w-[500px] rounded-2xl shadow-xl cursor-pointer"
                    priority
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
                      onEnded={handleVideoEnd}
                    />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
