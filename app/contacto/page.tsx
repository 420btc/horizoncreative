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
  const [lang, setLang] = useState<'es'|'en'>(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
  useEffect(() => {
    function syncLang() {
      setLang(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
    }
    window.addEventListener('click', syncLang);
    return () => window.removeEventListener('click', syncLang);
  }, []);

  // Textos traducidos
  const t = {
    title: lang === 'en' ? 'Get in Touch' : 'Conecta con nosotros',
    subtitle: lang === 'en' ? 'The first step to success starts with a message.' : 'El primer paso hacia el éxito empieza con un mensaje.',
    contactInfoTitle: lang === 'en' ? 'The digital strategy your brand needs' : 'La estrategia digital que tu marca necesita',
    address: lang === 'en' ? 'ADDRESS' : 'DIRECCIÓN',
    city: lang === 'en' ? 'Malaga, Benalmádena' : 'Málaga, Benalmádena',
    email: lang === 'en' ? 'EMAIL' : 'EMAIL',
    phone: lang === 'en' ? 'CALL US' : 'LLÁMANOS',
    phoneNum: '656314757',
    grow: lang === 'en' ? 'Grow your business with our digital solutions. We are here to help you reach new horizons.' : 'Haz crecer tu negocio con nuestras soluciones digitales. Estamos aquí para ayudarte a alcanzar nuevos horizontes.',
    formTitle: lang === 'en' ? 'Send us a message' : 'Envíanos un mensaje',
    name: lang === 'en' ? 'Name' : 'Nombre',
    emailLabel: lang === 'en' ? 'Email' : 'Email',
    message: lang === 'en' ? 'Message' : 'Mensaje',
    namePlaceholder: lang === 'en' ? 'Your name' : 'Tu nombre',
    emailPlaceholder: lang === 'en' ? 'your@email.com' : 'tu@email.com',
    messagePlaceholder: lang === 'en' ? 'How can we help you?' : '¿Cómo podemos ayudarte?',
    send: lang === 'en' ? 'Send message' : 'Enviar mensaje',
    sending: lang === 'en' ? 'Sending...' : 'Enviando...',
    success: lang === 'en' ? 'Message sent! We will contact you soon.' : '¡Mensaje enviado correctamente! Te contactaremos pronto.',
    error: lang === 'en' ? 'Error sending message. Please try again.' : 'Error al enviar el mensaje. Inténtalo de nuevo.',
    bannerTitle: lang === 'en' ? 'Reach new horizons with Horizon Creative' : 'Alcanza nuevos horizontes con Horizon Creative',
    bannerDesc: lang === 'en' ? 'We turn ideas into effective digital strategies that drive your business growth.' : 'Transformamos ideas en estrategias digitales efectivas que impulsan el crecimiento de tu negocio.'
  };

  const [eggCount, setEggCount] = useState(0);
  const [showEgg, setShowEgg] = useState(false);
  useEffect(() => {
    if (eggCount >= 3) {
      setShowEgg(true);
      setEggCount(0);
    }
  }, [eggCount]);
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
            // Inicializa vista global
            const map = new mapboxgl.Map({
              container: mapContainer.current,
              style: "mapbox://styles/mapbox/satellite-v9",
              center: [0, 20], // Vista global
              zoom: 1,
            })

            // Animación flyTo a Málaga
            map.on('load', () => {
              map.flyTo({
                center: [-4.5166, 36.5983],
                zoom: 13,
                speed: 1.2,
                curve: 1.7,
                essential: true
              });
            });

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
    <div className="bg-black min-h-screen overflow-x-hidden">
      {/* Easter Egg Modal */}
      {showEgg && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setShowEgg(false)}>
    <div
      className="relative w-full max-w-2xl flex flex-col items-center bg-black/90 rounded-2xl shadow-2xl p-8 md:p-12 mx-2"
      style={{maxWidth: '48rem'}} // 2xl
      onClick={e => e.stopPropagation()}
    >
      <button
        className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/40 rounded-full px-3 py-0.5 hover:bg-yellow-400 hover:text-black transition"
        onClick={() => setShowEgg(false)}
        aria-label="Cerrar"
      >×</button>
      <Image
        src="/assets/easteregg.png"
        alt="Carlos Pastor Freire"
        width={440}
        height={440}
        className="rounded-full shadow-lg mb-6 object-cover w-48 h-48 md:w-80 md:h-80"
        style={{maxWidth:'100%',height:'auto'}}
      />
      <p className="text-xl md:text-2xl text-white text-center leading-snug">
        Esta página ha sido creada con todo el amor y pasión por <span className="text-yellow-400 font-bold">Carlos</span> Pastor <span className="text-yellow-400 font-bold">Freire</span> y la colaboración de LLMs.<br/>
        <span className="block mt-4">¡Espero que te guste!</span>
      </p>
      <a
        href="https://www.instagram.com/carlosfreire1/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex flex-col items-center group"
        style={{ textDecoration: 'none' }}
      >
        <img
          src="/assets/logoig.png"
          alt="Instagram Carlos Freire"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg border-2 border-primary group-hover:scale-110 transition-transform duration-200"
          style={{ background: 'white', padding: '7px', marginBottom: '6px' }}
        />
        <span className="text-white text-base md:text-lg font-semibold group-hover:text-primary transition-colors duration-200">Sígueme en Instagram</span>
      </a>
    </div>
  </div>
)}

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="container mx-auto relative z-20 py-8 px-4 sm:px-6 lg:px-8">

          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-black text-white">
  {lang === 'en' ? (
    <>
      Connect with <button
        type="button"
        className="text-primary font-black focus:outline-none focus:ring-0 p-0 m-0 bg-transparent border-none cursor-pointer select-none"
        style={{appearance:'none'}}
        onClick={() => setEggCount(c => c+1)}
      >us</button>
    </>
  ) : (
    <>
      Conecta con <button
        type="button"
        className="text-primary font-black focus:outline-none focus:ring-0 p-0 m-0 bg-transparent border-none cursor-pointer select-none"
        style={{appearance:'none'}}
        onClick={() => setEggCount(c => c+1)}
      >nosotros</button>
    </>
  )}
</h1>
            <p className="text-xl text-white mb-4">{t.subtitle}</p>
          </motion.div>
        </div>
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-black opacity-70"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-0 pt-0 px-3 sm:px-3 lg:px-6">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 min-h-[300px] items-stretch">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="bg-black border border-primary/20 rounded-xl p-4 sm:p-8 shadow-lg relative overflow-hidden h-full">

              <h2 className="text-3xl font-bold mb-8 text-white">
                {t.contactInfoTitle}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{t.address}</h3>
                    <p className="text-gray-300">{t.city}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{t.email}</h3>
                    <p className="text-gray-300">info.horizoncreative@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{t.phone}</h3>
                    <p className="text-gray-300">{t.phoneNum}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center">
                <p className="text-lg text-gray-300 mb-6 text-center">
                  {t.grow}
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
                    <p className="font-bold">{t.city}</p>
                    <p className="text-sm">{t.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-black border border-primary/20 rounded-xl p-4 sm:p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">{t.formTitle}</h3>

              {/* Mensajes de éxito/error */}
              {formMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-xl mb-6 text-center shadow-lg border border-yellow-500"
                >
                  {formMessage.type === 'success' ? t.success : t.error}
                </motion.div>
              )}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">{t.name}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t.namePlaceholder}
                            {...field}
                            className="bg-[#222] !text-white !placeholder-white border-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">{t.emailLabel}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t.emailPlaceholder}
                            {...field}
                            className="bg-[#222] !text-white !placeholder-white border-gray-700"
                          />
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">{t.message}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t.messagePlaceholder}
                            className="min-h-[120px] bg-[#222] !text-white !placeholder-white border-gray-700"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-white" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary text-black hover:bg-primary/90 flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      t.sending
                    ) : (
                      <>
                        <span className="mr-2">{t.send}</span>
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
        className="bg-primary py-2 sm:py-6 px-2 sm:px-8 mt-8 sm:mt-14 border-t-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-5 tracking-tight md:tracking-normal">
            {t.bannerTitle}
          </h2>
          <p className="text-base sm:text-xl text-black/80 max-w-3xl mx-auto tracking-tight md:tracking-normal">
            {t.bannerDesc}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
