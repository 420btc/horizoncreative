"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Video, TrendingUp, Plane } from "lucide-react"

export default function InmobiliariasPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/exterior1.jpg"
            alt="Marketing Inmobiliario de Lujo"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-yellow-400 font-semibold tracking-widest uppercase mb-4 block"
          >
            Real Estate Marketing
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Vende Propiedades <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Más Rápido</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light"
          >
            Fotografía arquitectónica, videos con drones y tours virtuales que convierten visitas en ofertas en la Costa del Sol.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-8 py-6 rounded-none uppercase tracking-wide">
                Agendar Grabación
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Servicios Premium */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 group">
              <Plane className="w-10 h-10 text-white group-hover:text-yellow-400 mb-6 transition-colors" />
              <h3 className="text-xl font-bold mb-3">Drones 4K</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Vistas aéreas espectaculares para mostrar el entorno, la parcela y la magnitud de la propiedad.
              </p>
            </div>
            
            <div className="p-8 border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 group">
              <Video className="w-10 h-10 text-white group-hover:text-yellow-400 mb-6 transition-colors" />
              <h3 className="text-xl font-bold mb-3">Video Tours</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Recorridos fluidos y cinemáticos que permiten al comprador sentir que ya vive allí.
              </p>
            </div>
            
            <div className="p-8 border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 group">
              <Home className="w-10 h-10 text-white group-hover:text-yellow-400 mb-6 transition-colors" />
              <h3 className="text-xl font-bold mb-3">Foto HDR</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Fotografía de interiores con iluminación perfecta y gran angular sin distorsión.
              </p>
            </div>

            <div className="p-8 border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 group">
              <TrendingUp className="w-10 h-10 text-white group-hover:text-yellow-400 mb-6 transition-colors" />
              <h3 className="text-xl font-bold mb-3">Ads & Leads</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Campañas en Facebook e Instagram Ads segmentadas para encontrar compradores cualificados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Visual */}
      <section className="py-0 grid md:grid-cols-2 h-[600px]">
        <div className="relative h-full w-full">
           <Image
              src="/assets/golfclub-2.jpg"
              alt="Vista aérea campo de golf"
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <span className="text-white font-bold text-2xl tracking-widest">DRONE SHOTS</span>
             </div>
        </div>
        <div className="relative h-full w-full">
           <Image
              src="/assets/golfclub-3.jpg"
              alt="Interiores de lujo"
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <span className="text-white font-bold text-2xl tracking-widest">LIFESTYLE</span>
             </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">No vendemos casas, vendemos sueños</h2>
        <p className="text-xl text-zinc-400 mb-12">
          En el mercado inmobiliario actual, una foto con el móvil ya no sirve. Necesitas contar una historia. 
          Horizon Creative es tu partner visual para destacar en portales inmobiliarios y redes sociales.
        </p>
        <Link href="/contacto">
          <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-10 py-6 text-lg">
            Hablemos de tu Proyecto
          </Button>
        </Link>
      </section>
    </div>
  )
}
