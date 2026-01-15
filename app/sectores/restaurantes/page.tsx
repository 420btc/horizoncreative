"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Instagram, MapPin } from "lucide-react"

export default function RestaurantesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/enboca1.jpg"
            alt="Marketing para Restaurantes"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Marketing Gastronómico <span className="text-yellow-400">que abre el apetito</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            Llenamos tus mesas con estrategias de contenido, fotografía profesional y gestión de redes sociales en Málaga.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contacto">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-8 py-6 rounded-full">
                Solicitar Auditoría Gratis
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problema / Solución */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tu comida es increíble. <br/>¿Tu marketing también lo es?</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              En el sector de la hostelería, la imagen lo es todo. Los clientes deciden dónde comer basándose en lo que ven en Instagram y Google Maps.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Si tus redes no reflejan la calidad de tus platos, estás perdiendo clientes cada día. En Horizon Creative, transformamos tu presencia digital para que sea tan irresistible como tu menú.
            </p>
            <ul className="space-y-4">
              {[
                "Fotografía gastronómica profesional",
                "Videos Reels virales para Instagram y TikTok",
                "Gestión de reseñas en Google y TripAdvisor",
                "Publicidad segmentada para atraer clientes locales"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-gray-800">
             <Image
              src="/assets/comida1.jpg"
              alt="Fotografía de alimentos profesional"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Servicios Específicos */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Nuestros Ingredientes Secretos</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-yellow-400/50 transition-colors">
              <Camera className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Fotografía y Video</h3>
              <p className="text-gray-400">
                Sesiones profesionales en tu local. Capturamos la textura, el color y la esencia de cada plato. Contenido visual que hace salivar.
              </p>
            </div>
            
            <div className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-yellow-400/50 transition-colors">
              <Instagram className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Gestión de Redes</h3>
              <p className="text-gray-400">
                No solo publicamos, creamos comunidad. Calendario editorial, copy persuasivo y respuesta a comentarios para fidelizar a tus clientes.
              </p>
            </div>
            
            <div className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-yellow-400/50 transition-colors">
              <MapPin className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">SEO Local</h3>
              <p className="text-gray-400">
                Optimizamos tu ficha de Google Business Profile para que cuando alguien busque "dónde comer cerca", tu restaurante sea la primera opción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">¿Listo para llenar el local?</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Deja de preocuparte por las redes y céntrate en la cocina. Nosotros nos encargamos de traer a los clientes.
        </p>
        <Link href="/contacto">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-8 rounded-full h-auto text-xl">
            Empezar Ahora <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
        </Link>
      </section>
    </div>
  )
}
