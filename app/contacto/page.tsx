"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Send, MapPin, Mail, Phone, Sunrise } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Testimonials from "../components/Testimonials"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Image from "next/image"
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, introduce un correo electrónico válido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
})

export default function Contacto() {
  // Estado para mensajes de éxito/error del formulario
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  // Oculta automáticamente el mensaje de éxito tras 4 segundos
  useEffect(() => {
    if (formMessage && formMessage.type === 'success') {
      const timer = setTimeout(() => setFormMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [formMessage]);
  const mapContainer = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mapLoaded, setMapLoaded] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {


      // ENVÍO AL USUARIO (le llega el template)
      await emailjs.send(
        'service_06mwro7',
        'template_fbh9vyx', // CORRECTO: Template para el cliente
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
          reply_to: values.email,
          to_email: values.email, // <-- Añadido para que funcione el envío al cliente
        },
        'crT-xgI3BjGddLEgY'
      );

      // ENVÍO A LA EMPRESA
      await emailjs.send(
        'service_06mwro7',
        'template_o8x6wug', // Template para la empresa
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
          reply_to: values.email,
          to_email: 'info.horizoncreative@gmail.com',
        },
        'crT-xgI3BjGddLEgY'
      );

      setIsSubmitting(false);
      form.reset();
      setFormMessage({ type: 'success', text: '¡Mensaje enviado correctamente! Te contactaremos pronto.' });
    } catch (error) {
      setIsSubmitting(false);
      setFormMessage({ type: 'error', text: 'Error al enviar el mensaje. Inténtalo de nuevo.' });
      console.error(error);
    }
  }

  useEffect(() => {
    // Solo intentar cargar el mapa en el navegador, no durante SSR
    if (typeof window !== "undefined") {
      let mapboxgl: any

      // Cargar Mapbox dinámicamente
      const loadMapbox = async () => {
        try {
          // Importar dinámicamente mapbox-gl
          const mapboxModule = await import("mapbox-gl")
          mapboxgl = mapboxModule.default

          // Importar los estilos de mapbox-gl
          // @ts-ignore: Ignore CSS module type missing
          await import("mapbox-gl/dist/mapbox-gl.css")

          // Configurar el token de Mapbox
          mapboxgl.accessToken =
            "pk.eyJ1IjoiNDIwYnRjIiwiYSI6ImNtOTN3ejBhdzByNjgycHF6dnVmeHl2ZTUifQ.Utq_q5wN6DHwpkn6rcpZdw"

          if (mapContainer.current && !mapLoaded) {
            const map = new mapboxgl.Map({
              container: mapContainer.current,
              style: "mapbox://styles/mapbox/satellite-v9",
              center: [-4.5166, 36.5983], // Málaga, Benalmádena
              zoom: 13,
            })

            // Añadir marcador
            new mapboxgl.Marker({
              color: "#FFD700",
            })
              .setLngLat([-4.5166, 36.5983])
              .addTo(map)

            // Añadir controles de navegación
            map.addControl(new mapboxgl.NavigationControl())

            setMapLoaded(true)
          }
        } catch (error) {
          console.error("Error al cargar Mapbox:", error)
        }
      }

      loadMapbox()
    }
  }, [mapLoaded])

  return (
    <div className="bg-white dark:bg-black min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
        <div className="container mx-auto relative z-20 py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center w-full">
            <motion.div
              className="max-w-3xl w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl font-extrabold mb-2 text-white text-center">
                Conecta con <span className="text-yellow-400">nosotros</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 mb-6 text-center">
                El primer paso hacia el éxito empieza con un mensaje.
              </p>
            </motion.div>
          </div>
        </div>
        
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-0 px-3 sm:px-3 lg:px-6">
        <div className="grid md:grid-cols-2 gap-3 md:gap-4 min-h-[220px] items-stretch">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="bg-white dark:bg-neutral-900 border border-primary/20 rounded-xl p-4 sm:p-8 shadow-lg relative overflow-hidden h-full">

              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                La <span className="text-yellow-400">estrategia</span> digital que tu marca <span className="text-gray-900 dark:text-white">necesita</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">DIRECCIÓN</h3>
                    <p className="text-gray-300">Málaga, Benalmádena</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">EMAIL</h3>
                    <p className="text-gray-300">info.horizoncreative@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">LLÁMANOS</h3>
                    <p className="text-gray-300">656314757</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center">
                <p className="text-lg text-gray-300 mb-6 text-center">
                  Haz crecer tu negocio con nuestras soluciones digitales. Estamos aquí para ayudarte a alcanzar nuevos horizontes.
                </p>
                <img src="/assets/logoubi.png" alt="Logo ubicación" className="w-full max-w-xs mx-auto" />
              </div>
            </div>
          </motion.div>

          {/* Map and Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Map */}
            <div className="mb-8 rounded-xl overflow-hidden border-4 border-primary shadow-lg">
              <div ref={mapContainer} className="h-[300px] w-full bg-gray-900 relative">
                {/* Imagen estática de mapa como fallback */}
                <Image src="/images/malaga-map.jpg" alt="Mapa de Málaga, Benalmádena" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/80 text-black p-4 rounded-lg shadow-lg">
                    <p className="font-bold">Málaga, Benalmádena</p>
                    <p className="text-sm">Ubicación aproximada</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-black border border-primary/20 rounded-xl p-4 sm:p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">Envíanos un mensaje</h3>

              {/* Mensajes de éxito/error */}
              {formMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl mb-6 text-center shadow-lg border border-yellow-500"
                >
                  {formMessage.text}
                </motion.div>
              )}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800 dark:text-gray-200">Nombre</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Tu nombre"
                            {...field}
                            className="bg-white dark:bg-neutral-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border-gray-300 dark:border-neutral-700"
                          />
                        </FormControl>
                        <FormMessage className="text-gray-600 dark:text-gray-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800 dark:text-gray-200">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="tu@email.com"
                            {...field}
                            className="bg-white dark:bg-neutral-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border-gray-300 dark:border-neutral-700"
                          />
                        </FormControl>
                        <FormMessage className="text-gray-600 dark:text-gray-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800 dark:text-gray-200">Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="¿Cómo podemos ayudarte?"
                            className="min-h-[120px] bg-white dark:bg-neutral-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400 border-gray-300 dark:border-neutral-700"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-gray-600 dark:text-gray-400" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary text-black hover:bg-primary/90 flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <span className="mr-2">Enviar mensaje</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>

      <Testimonials />
      {/* Banner amarillo */}
      <motion.div
        className="bg-primary py-2 sm:py-3 px-2 sm:px-6 mt-4 sm:mt-8 border-t-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-5 tracking-tight md:tracking-normal">
            Alcanza nuevos horizontes con Horizon Creative
          </h2>
          <p className="text-base sm:text-xl text-black/80 max-w-3xl mx-auto tracking-tight md:tracking-normal">
            Transformamos ideas en estrategias digitales efectivas que impulsan el crecimiento de tu negocio.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
