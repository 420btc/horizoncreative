"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

// Componente máscara animada por scroll
// Ahora: revela la imagen de color de arriba a abajo tras 3s, en 4s
function ColorRevealMask() {
  const [reveal, setReveal] = useState(0); // 0 (oculto), 1 (completo)
  useEffect(() => {
    const start = performance.now();
    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / 5000, 1); // 5s
      setReveal(progress);
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, []);

  // La máscara es un gradiente que baja según el reveal
  const maskStyle: React.CSSProperties = {
    WebkitMaskImage: `linear-gradient(to bottom, white ${reveal * 100}%, transparent ${reveal * 100 + 15}%)`,
    maskImage: `linear-gradient(to bottom, white ${reveal * 100}%, transparent ${reveal * 100 + 15}%)`,
    WebkitMaskSize: '100% 100%',
    maskSize: '100% 100%',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    pointerEvents: 'none',
    transition: 'WebkitMaskImage 0.18s, maskImage 0.18s',
  };
  return (
    <div className="absolute inset-0 w-full h-full z-10 pointer-events-none" style={maskStyle}>
      <Image
        src="/assets/fondohero.jpg"
        alt="Fondo Hero Color"
        fill
        className="object-cover object-center w-full h-full opacity-100 transition-all duration-700"
        priority
        style={{ 
          pointerEvents: 'none', 
          transform: 'scaleX(-1)', 
          filter: reveal === 1 ? 'blur(10%)' : 'none',
          transition: 'filter 0.7s'
        }}
      />
    </div>
  );
}

export default function Hero() {

  // Estado solo para detectar si es móvil (para otras lógicas de layout)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  // --- Scroll y morphing ---
  const [isScrolled, setIsScrolled] = useState(false);
  const [horizonText, setHorizonText] = useState('Horizon');
  const [creativeText, setCreativeText] = useState('Creative');
  const [morphing, setMorphing] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false); // Para no romper animación inicial
  const morphTimeout = useRef<NodeJS.Timeout | null>(null);
  const [morphCount, setMorphCount] = useState(0);
  const [canMorph, setCanMorph] = useState(true);

  // --- Control de repeticiones y persistencia ---
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const now = Date.now();
    const lastMorph = parseInt(localStorage.getItem('hc_lastMorph') || '0', 10);
    const storedCount = parseInt(localStorage.getItem('hc_morphCount') || '0', 10);
    if (now - lastMorph > 10 * 60 * 1000) {
      // Más de 10 minutos, resetear
      localStorage.setItem('hc_morphCount', '0');
      setMorphCount(0);
      setCanMorph(true);
      localStorage.setItem('hc_lastMorph', now.toString());
    } else {
      setMorphCount(storedCount);
      setCanMorph(storedCount < 2);
    }
  }, []);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar fin de animación inicial para permitir morphing
  useEffect(() => {
    // Espera a que acaben las animaciones iniciales (~2.5s)
    const timer = setTimeout(() => setHasAnimatedIn(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  // Morphing: cuando isScrolled y animación inicial terminada y permitido
  useEffect(() => {
    if (isScrolled && hasAnimatedIn && canMorph) {
      setMorphing(true);
      // Borrar Horizon letra a letra
      let h = 'Horizon';
      let c = 'Creative';
      let i = 0;
      const eraseHorizon = () => {
        if (h.length > 0) {
          setHorizonText(h.slice(0, -1));
          h = h.slice(0, -1);
          morphTimeout.current = setTimeout(eraseHorizon, 70);
        } else {
          // Cuando Horizon está vacío, borrar "tive" de Creative
          eraseTive();
        }
      };
      const eraseTive = () => {
        if (c.endsWith('tive')) {
          c = c.slice(0, -4);
          setCreativeText(c);
          morphTimeout.current = setTimeout(eraseTive, 100);
        } else {
          // Añadir la "r" final
          if (!c.endsWith('r')) {
            c = c + 'r';
            setCreativeText(c);
          }
          // Al terminar, dejar el título estático en "Crear" y bloquear morph hasta el reset
          setTimeout(() => {
            setMorphCount(prev => {
              const next = prev + 1;
              if (typeof window !== 'undefined') {
                localStorage.setItem('hc_morphCount', next.toString());
                localStorage.setItem('hc_lastMorph', Date.now().toString());
              }
              if (next >= 2) setCanMorph(false);
              setMorphing(false);
              setHorizonText('');
              setCreativeText('Crear');
              return next;
            });
          }, 700);
        }
      };
      eraseHorizon();
    } else {
      // Si el usuario vuelve arriba, mantener el título estático si ya se ha hecho morph
      if (!canMorph) {
        setMorphing(false);
        setHorizonText('');
        setCreativeText('Crear');
        if (morphTimeout.current) clearTimeout(morphTimeout.current);
      } else {
        setMorphing(false);
        setHorizonText('Horizon');
        setCreativeText('Creative');
        if (morphTimeout.current) clearTimeout(morphTimeout.current);
      }
    }
  }, [isScrolled, hasAnimatedIn, canMorph]);

  // --- Internacionalización ---
  const [lang, setLang] = useState<'es'|'en'>(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
  useEffect(() => {
    function syncLang() {
      setLang(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
    }
    window.addEventListener('click', syncLang);
    return () => window.removeEventListener('click', syncLang);
  }, []);

  const t = {
    subtitle: lang === 'en'
      ? 'Online marketing agency specialized in digital strategies that drive your business growth.'
      : 'Agencia de marketing online especializada en estrategias digitales que impulsan el crecimiento de tu negocio.',
    contact: lang === 'en' ? 'Contact Us' : 'Contáctanos',
    services: lang === 'en' ? 'Our Services' : 'Nuestros Servicios',
  };

  return (
    <div
      className="relative isolate w-full h-screen lg:h-[63vh] overflow-hidden overflow-x-hidden bg-black"
    >
      {/* Fondo color SIEMPRE visible */}
      {/* Imagen B/N de fondo SIEMPRE visible */}
      <Image
        src="/assets/fondohero2.jpg"
        alt="Fondo Hero Blanco y Negro"
        fill
        className="object-cover object-center w-full h-full opacity-100 transition-all duration-700 -z-10"
        priority
        style={{ filter: 'none' }}
      />
      {/* Imagen color encima, se revela con máscara animada */}
      <ColorRevealMask />
      {/* Logo móvil */}
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-0 sm:pb-4 lg:pb-2 md:py-12 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="flex items-center justify-center lg:hidden mb-2 mt-2 pt-[64px] relative z-10 w-full min-h-[180px] h-[42vw] sm:h-[180px] overflow-visible">
          
        </div>
        {/* Bloque de texto y botones */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0 relative z-20 mt-8 md:mt-12">
          <h1 className="font-black text-5xl md:text-8xl leading-none text-white mb-2 md:mb-3 flex flex-col gap-0">
            {/* Branding normal si no está morphing, morphing si procede */}
            {!morphing ? (
              <>
                <motion.span
                  className="text-primary text-7xl md:text-8xl mb-0 block hero-blur-text"
                  style={{
                    textShadow: '0 10px 48px rgba(0,0,0,0.88), 0 2px 14px #6c560022, 0 1px 0 #fff8',
                    mixBlendMode: 'lighten',
                    filter: 'brightness(1.08)'
                  }}
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{
                    x: hasAnimatedIn ? (isScrolled ? '-100%' : '0%') : '0%',
                    opacity: hasAnimatedIn ? (isScrolled ? 0 : 1) : 1,
                  }}
                  transition={{
                    x: { duration: hasAnimatedIn ? 0.8 : 1.2, ease: 'easeOut' },
                    opacity: { duration: hasAnimatedIn ? 0.6 : 1.2, ease: 'easeOut' },
                  }}
                >
                  {['H','o','r','i','z','o','n'].map((char, idx) => {
                    if (char === 'o' && idx === 5) {
                      return (
                        <motion.span
                          key={char + idx}
                          style={{ display: 'inline-block', transformOrigin: '50% 50%' }}
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 2.1,
                            ease: 'easeInOut',
                            delay: 0.32
                          }}
                        >
                          {char}
                        </motion.span>
                      );
                    }
                    return <span key={char + idx}>{char}</span>;
                  })}
                </motion.span>
                <motion.span
                  className="text-primary text-7xl md:text-8xl block hero-blur-text"
                  style={{
                    textShadow: '0 10px 48px rgba(0,0,0,0.88), 0 2px 14px #6c560022, 0 1px 0 #fff8',
                    mixBlendMode: 'lighten',
                    filter: 'brightness(1.08)'
                  }}
                  initial={{ x: '100%', opacity: 0 }}
                  animate={{
                    x: hasAnimatedIn ? (isScrolled ? '100%' : '0%') : '0%',
                    opacity: hasAnimatedIn ? (isScrolled ? 0 : 1) : 1,
                  }}
                  transition={{
                    x: { duration: hasAnimatedIn ? 0.8 : 1.2, ease: 'easeOut' },
                    opacity: { duration: hasAnimatedIn ? 0.6 : 1.2, ease: 'easeOut' },
                  }}
                >
                  {['C','r','e','a','t','i','v','e'].map((char, idx) => {
                    if (char === 'e' && idx === 2) {
                      return (
                        <motion.span
                          key={char + idx}
                          style={{ display: 'inline-block', transformOrigin: '50% 50%' }}
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 2.1,
                            ease: 'easeInOut',
                            delay: 1.05
                          }}
                        >
                          {char}
                        </motion.span>
                      );
                    }
                    return <span key={char + idx}>{char}</span>;
                  })}
                </motion.span>
              </>
            ) : (
              <>
                <span
                  className="text-primary text-7xl md:text-8xl mb-0 block hero-blur-text"
                  style={{
                    textShadow: '0 10px 48px rgba(0,0,0,0.88), 0 2px 14px #6c560022, 0 1px 0 #fff8',
                    mixBlendMode: 'lighten',
                    filter: 'brightness(1.08)'
                  }}
                >
                  {horizonText}
                </span>
                <span
                  className="text-primary text-7xl md:text-8xl block hero-blur-text"
                  style={{
                    textShadow: '0 10px 48px rgba(0,0,0,0.88), 0 2px 14px #6c560022, 0 1px 0 #fff8',
                    mixBlendMode: 'lighten',
                    filter: 'brightness(1.08)'
                  }}
                >
                  {creativeText}
                </span>
              </>
            )}
          </h1>
          <div className="mt-6 text-lg leading-8 text-gray-300 h-24">
            <span style={{ textShadow: '0 2px 12px rgba(0,0,0,0.85), 0 1px 2px #000' }}>
              <TypewriterText
                text={t.subtitle}
                delay={30}
              />
            </span>
          </div>
          <div className="mt-10 mb-2 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-2 sm:gap-x-6">
            <a
              href="#contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {t.contact}
            </a>
            <a href="/servicios" className="text-sm font-semibold leading-6 text-white mt-2 sm:mt-0">
              {t.services} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
