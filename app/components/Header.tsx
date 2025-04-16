"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import AnimatedSection from "./AnimatedSection"
import { MoonIcon, SunIcon } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <motion.header
      className="sticky top-0 z-50 bg-black border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 sm:p-4 md:p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Horizon Creative</span>
            <div className="relative h-12 w-auto overflow-hidden">
              <Image
                src="/logohorizon.png"
                alt="Horizon Creative Logo"
                width={120}
                height={48}
                className="h-12 w-auto object-contain mx-auto"
                priority
              />
            </div>
          </Link>
        </div>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-x-8 lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold leading-6 text-black dark:text-white hover:text-primary transition-colors">Inicio</Link>
          <Link href="/sobre-nosotros" className="text-sm font-semibold leading-6 text-black dark:text-white hover:text-primary transition-colors">Sobre Nosotros</Link>
          <Link href="/servicios" className="text-sm font-semibold leading-6 text-black dark:text-white hover:text-primary transition-colors">Nuestros Servicios</Link>
          <Link href="/contacto" className="text-sm font-semibold leading-6 text-black dark:text-white hover:text-primary transition-colors">Contacto</Link>
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
          <div className="absolute top-full left-0 w-full bg-white dark:bg-black shadow-md py-4 flex flex-col items-center md:hidden animate-fade-in z-40 border-b border-gray-100 dark:border-gray-800">
            <Link href="/" className="py-2 text-base font-semibold text-black dark:text-white hover:text-primary w-full text-center" onClick={() => setMenuOpen(false)}>Inicio</Link>
            <Link href="/sobre-nosotros" className="py-2 text-base font-semibold text-black dark:text-white hover:text-primary w-full text-center" onClick={() => setMenuOpen(false)}>Sobre Nosotros</Link>
            <Link href="/servicios" className="py-2 text-base font-semibold text-black dark:text-white hover:text-primary w-full text-center" onClick={() => setMenuOpen(false)}>Nuestros Servicios</Link>
            <Link href="/contacto" className="py-2 text-base font-semibold text-black dark:text-white hover:text-primary w-full text-center" onClick={() => setMenuOpen(false)}>Contacto</Link>
          </div>
        )}
        <div className="flex flex-1 justify-end">
          {/* Botón de tema eliminado, sólo espacio para alinear menú */}
        </div>
      </nav>
    </motion.header>
  )
}
