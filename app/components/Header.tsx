"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import AnimatedSection from "./AnimatedSection"
import { MoonIcon, SunIcon } from "lucide-react"
import Image from "next/image"

import { useState as useReactState } from "react";
function LangSwitchButton() {
  const [lang, setLang] = useReactState<'es'|'en'>("es");
  function handleToggle() {
    setLang(l => l === 'es' ? 'en' : 'es');
    if (typeof window !== 'undefined') {
      (window as any).__contactLang = lang === 'es' ? 'en' : 'es';
    }
  }
  return (
    <button
      aria-label="Cambiar idioma"
      className="flex items-center justify-center w-[57.6px] h-[57.6px] md:w-[57.6px] md:h-[57.6px] p-2.5 bg-transparent rounded-full focus:outline-none transition-all duration-200 -ml-2"
      onClick={handleToggle}
      style={{ overflow: 'hidden' }}
    >
      <img
        src="/assets/traductor.png"
        alt="Traducir"
        className={`w-[38.4px] h-[38.4px] md:w-[38.4px] md:h-[38.4px] object-contain transition-all duration-200 ${lang === 'en' ? 'opacity-100 scale-110' : 'opacity-80'}`}
        style={{ display: 'block', margin: '0 auto' }}
      />
    </button>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const [isForcedLight, setIsForcedLight] = useState(false);
const [logoSpin, setLogoSpin] = useState(false);
const [logoFlip, setLogoFlip] = useState(false);
  useEffect(() => setMounted(true), [])

  // Sincroniza clase forced-light con localStorage al cargar y actualiza estado
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const forced = localStorage.getItem('forcedLightMode');
      if (forced) {
        document.documentElement.classList.add('forced-light');
        setIsForcedLight(true);
      } else {
        document.documentElement.classList.remove('forced-light');
        setIsForcedLight(false);
      }
    }
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-50 bg-black border-b border-gray-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 sm:p-4 md:p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Horizon Creative</span>
            <div className="relative h-12 w-auto overflow-hidden">
              <>
  <style jsx>{`
    
    .logo-rotating-z {
  animation: logo-spin-z 1.2s linear infinite;
  transform-style: preserve-3d;
  will-change: transform;
}
@keyframes logo-spin-z {
  0% { transform: rotateZ(0deg); }
  100% { transform: rotateZ(360deg); }
}
.logo-flip-y {
  animation: logo-flip-y 0.8s cubic-bezier(.8,.2,.2,1) 1;
}
@keyframes logo-flip-y {
  0% { transform: rotateZ(0deg) rotateY(0deg); }
  100% { transform: rotateZ(0deg) rotateY(360deg); }
}

  `}</style>
  <img
    src="/logohorizon.png"
    alt="Horizon Creative Logo"
    width={120}
    height={48}
    className={`h-12 w-auto object-contain mx-auto${logoSpin ? ' logo-rotating-z' : ''}${logoFlip ? ' logo-flip-y' : ''}`}
    onMouseEnter={() => setLogoSpin(true)}
onMouseLeave={() => setLogoSpin(false)}
onTouchStart={() => setLogoSpin(true)}
onTouchEnd={() => setLogoSpin(false)}
onClick={() => setLogoFlip(true)}
onAnimationEnd={e => {
  if (e.animationName === 'logo-flip-y') setLogoFlip(false);
}}
    style={{ display: 'block', margin: '0 auto' }}
  />
</>
            </div>
          </Link>
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-x-6 lg:gap-x-10">
          <Link href="/" className={`text-sm font-bold leading-6 transition-colors ${pathname === '/' ? 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]' : 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]'}`}>Inicio</Link>
          <Link href="/servicios" className={`text-sm font-bold leading-6 transition-colors ${pathname === '/servicios' ? 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]' : 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]'}`}>Servicios</Link>
          <Link href="/proyectos" className={`text-sm font-bold leading-6 transition-colors ${pathname === '/proyectos' ? 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]' : 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]'}`}>Proyectos</Link>
          <Link href="/sobre-nosotros" className={`text-sm font-bold leading-6 transition-colors ${pathname === '/sobre-nosotros' ? 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]' : 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]'}`}>Equipo</Link>
          <Link href="/contacto" className={`text-sm font-bold leading-6 transition-colors ${pathname === '/contacto' ? 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]' : 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]'}`}>Contacto</Link>
        </div>
        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center p-2 ml-4 focus:outline-none"
            aria-label="Abrir menú"
            style={{ background: 'none', border: 'none', boxShadow: 'none' }}
          >
            <svg className="h-7 w-7" fill="none" stroke="#FFD600" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile nav menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black shadow-md py-4 flex flex-col items-center md:hidden animate-fade-in z-40 border-b border-gray-700">
            <Link href="/" className={`py-2 text-base font-semibold w-full text-center transition-colors ${pathname === '/' ? 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]' : 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]'}`} onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link href="/servicios" className={`py-2 text-base font-semibold w-full text-center transition-colors ${pathname === '/servicios' ? 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]' : 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]'}`} onClick={() => setMenuOpen(false)}>Servicios</Link>
            <Link href="/proyectos" className={`py-2 text-base font-semibold w-full text-center transition-colors ${pathname === '/proyectos' ? 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]' : 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]'}`} onClick={() => setMenuOpen(false)}>Proyectos</Link>
            <Link href="/sobre-nosotros" className={`py-2 text-base font-semibold w-full text-center transition-colors ${pathname === '/sobre-nosotros' ? 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]' : 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]'}`} onClick={() => setMenuOpen(false)}>Equipo</Link>
            <Link href="/contacto" className={`py-2 text-base font-semibold w-full text-center transition-colors ${pathname === '/contacto' ? 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]' : 'text-white hover:text-[#FFD600] focus:text-[#FFD600] active:text-[#FFD600]'}`} onClick={() => setMenuOpen(false)}>Contacto</Link>
          </div>
        )}
        <div className="flex flex-1 justify-end items-center gap-8 pr-4">
          {/* Botón luna/sol modo claro forzado */}
          <button
            aria-label="Forzar modo claro"
            className="p-2 rounded-full border-2 border-[#FFD600] bg-black flex items-center justify-center transition-colors hover:bg-[#222]"
            onClick={() => {
              const html = document.documentElement;
              const forced = html.classList.contains('forced-light');
              if (forced) {
                html.classList.remove('forced-light');
                localStorage.removeItem('forcedLightMode');
                setIsForcedLight(false);
              } else {
                html.classList.add('forced-light');
                localStorage.setItem('forcedLightMode', '1');
                setIsForcedLight(true);
              }
            }}
          >
            {/* Icono sol/luna amarillo */}
            {isForcedLight ? (
              // Sol
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#FFD600" strokeWidth="2"><circle cx="12" cy="12" r="5" fill="#FFD600"/><path stroke="#FFD600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
            ) : (
              // Luna (oscuro por defecto)
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#FFD600" strokeWidth="2"><path stroke="#FFD600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
            )}
          </button>
          {/* Botón idioma: SIEMPRE visible y más grande */}
          <LangSwitchButton />
        </div>
      </nav>
    </motion.header>
  )
}
