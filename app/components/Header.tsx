"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <motion.header
      className="sticky top-0 z-50 bg-white dark:bg-black"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
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
        <div className="flex gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-black dark:text-white hover:text-primary transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="/sobre-nosotros"
            className="text-sm font-semibold leading-6 text-black dark:text-white hover:text-primary transition-colors"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/servicios"
            className="text-sm font-semibold leading-6 text-black dark:text-white hover:text-primary transition-colors"
          >
            Nuestros Servicios
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-semibold leading-6 text-black dark:text-white hover:text-primary transition-colors"
          >
            Contacto
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-black dark:text-primary hover:bg-primary/20 transition-colors"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}
