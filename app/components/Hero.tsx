"use client"

import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion"
import Image from "next/image"
import TypewriterText from "./TypewriterText"



export default function Hero() {
  const isClient = typeof window !== 'undefined';

  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);

  // Solo sincroniza el estado con sessionStorage/timestamp en el primer render
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const played = localStorage.getItem('heroAnimationPlayed') === '1';
      const lastTime = parseInt(localStorage.getItem('heroAnimationTimestamp') || '0', 10);
      const now = Date.now();
      // Si nunca se ha visto la animación, o han pasado más de 10 minutos (600_000 ms), reproducirla
      if (!played || !lastTime || (now - lastTime > 600000)) {
        setHasPlayedAnimation(false);
        localStorage.removeItem('heroAnimationPlayed'); // resetea flag si expiró
      } else {
        setHasPlayedAnimation(true);
      }
    }
  }, []);

  const [showVideo, setShowVideo] = useState(() => !hasPlayedAnimation);
  const [videoFinished, setVideoFinished] = useState(() => hasPlayedAnimation);
  const [logoVisible, setLogoVisible] = useState(() => !hasPlayedAnimation);
  const [textAnimated, setTextAnimated] = useState(false);
  const videoTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (hasPlayedAnimation) {
      setLogoVisible(false);
      setShowVideo(false);
      setVideoFinished(true);
      return;
    }
    setLogoVisible(true);
    setShowVideo(false);
    setVideoFinished(false);
    // Autoplay video 3.2s después de cargar
    const timer = setTimeout(() => {
      setShowVideo(true);
      setVideoFinished(false);
      setLogoVisible(true);
      // Si el video dura 3s, lo ocultamos y cambiamos fondo al terminar
      videoTimeout.current = setTimeout(() => {
        setShowVideo(false);
        setVideoFinished(true);
        setTimeout(() => {
          setLogoVisible(false);
          setHasPlayedAnimation(true);
          if (isClient) {
            localStorage.setItem('heroAnimationPlayed', '1');
            localStorage.setItem('heroAnimationTimestamp', Date.now().toString());
          }
        }, 600); // animación salida logo
      }, 3000);
    }, 3200);
    return () => {
      clearTimeout(timer);
      if (videoTimeout.current) clearTimeout(videoTimeout.current);
    };
  }, [hasPlayedAnimation, isClient]);

  // Cuando el video termina manualmente (por seguridad)
  const handleVideoEnd = () => {
    setShowVideo(false);
    setVideoFinished(true);
    setTimeout(() => {
      setLogoVisible(false);
      setHasPlayedAnimation(true);
      if (isClient) {
        localStorage.setItem('heroAnimationPlayed', '1');
        localStorage.setItem('heroAnimationTimestamp', Date.now().toString());
      }
    }, 600);
  };

  return (
    <div className="relative isolate w-full h-screen lg:h-[63vh] overflow-hidden overflow-x-hidden bg-black">
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
            <div className="absolute inset-0 w-full h-full blur-[1px]">
              <Image
                src="/assets/fondohero.jpg"
                alt="Fondo Hero"
                fill
                className="object-cover object-center w-full h-full opacity-100 transition-all duration-700 scale-x-[-1]"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mx-auto max-w-7xl px-6 pt-8 pb-0 sm:pb-4 lg:pb-2 md:py-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        {/* Logo grande y video, móvil */}
        <div className="flex items-center justify-center lg:hidden mb-2 mt-2 pt-[64px] relative z-10 w-full min-h-[180px] h-[42vw] sm:h-[180px] overflow-visible">
          <AnimatePresence>
            {logoVisible && !videoFinished && (
              <motion.div
                className="relative"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.18 }}
                style={{ zIndex: 2 }}
              >
                <Image
                  src="/logotipo.png"
                  alt="Horizon Creative Logotipo"
                  width={320}
                  height={320}
                  className="w-auto max-w-[90vw] max-h-[40vh] h-auto mx-auto block cursor-pointer"
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
                className="mt-8 sm:mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl flex flex-col items-start md:items-start gap-0"
                onAnimationComplete={() => setTextAnimated(true)}
              >
                <motion.span
                  className="text-primary text-7xl md:text-8xl mb-0 block"
                  style={{
                    textShadow: '0 10px 40px #000, 0 1px 0 #fff8',
                    
                  }}
                  initial={{ x: '-100vw', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.7, type: 'spring', bounce: 0.3, delay: 0 }}
                >
                  Horizon
                </motion.span>
                <motion.span
                  className="text-primary text-7xl md:text-8xl block"
                  style={{
                    textShadow: '0 10px 40px #000, 0 1px 0 #fff8',
                    
                  }}
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
              <h1 className="mt-8 sm:mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl flex flex-col items-start md:items-start gap-0">
                <span
                  className="text-primary text-7xl md:text-8xl mb-0 block hero-blur-text"
                  style={{
                    textShadow: '0 8px 36px rgba(0,0,0,0.85), 0 2px 8px #FFD600aa, 0 1px 0 #fff8',
                    mixBlendMode: 'lighten',
                    filter: 'brightness(1.08) drop-shadow(0 2px 16px #FFD60044)'
                  }}
                >
                  Horizon
                </span>
                <span
                  className="text-primary text-7xl md:text-8xl block hero-blur-text"
                  style={{
                    textShadow: '0 8px 36px rgba(0,0,0,0.85), 0 2px 8px #FFD600aa, 0 1px 0 #fff8',
                    mixBlendMode: 'lighten',
                    filter: 'brightness(1.08) drop-shadow(0 2px 16px #FFD60044)'
                  }}
                >
                  Creative
                </span>
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
            {logoVisible && !videoFinished && (
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
