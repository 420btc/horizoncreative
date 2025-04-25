"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AnimatedSection from "./AnimatedSection"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
};

const portfolioItems: PortfolioItem[] = [
  // 13-18: Fotografía (Primera página: nuevas fotos primero)
  {
    id: 13,
    title: "Retrato Urbano",
    description: "Sesión de retrato en exteriores urbanos.",
    image: "/assets/fotografia-1.jpg",
    category: "Fotografía",
  },
  {
    id: 14,
    title: "Producto en Estudio",
    description: "Fotografía de producto en estudio profesional.",
    image: "/assets/fotografia-2.jpg",
    category: "Fotografía",
  },
  {
    id: 25,
    title: "Exterior 1",
    description: "Fotografía de exteriores: exterior1.jpg",
    image: "/assets/exterior1.jpg",
    category: "Fotografía",
  },
  {
    id: 26,
    title: "Exterior 2",
    description: "Fotografía de exteriores: exterior2.jpg",
    image: "/assets/exterior2.jpg",
    category: "Fotografía",
  },
  {
    id: 27,
    title: "Interior 1",
    description: "Fotografía de interiores: interior1.jpg",
    image: "/assets/interior1.jpg",
    category: "Fotografía",
  },
  {
    id: 28,
    title: "Interior 2",
    description: "Fotografía de interiores: interior2.jpg",
    image: "/assets/interior2.jpg",
    category: "Fotografía",
  },
  // Segunda página: las dos primeras antiguas y las nuevas de comida
  {
    id: 15,
    title: "Evento Corporativo",
    description: "Cobertura fotográfica de evento empresarial.",
    image: "/assets/fotografia-3.jpg",
    category: "Fotografía",
  },
  {
    id: 16,
    title: "Fotografía Gastronomica",
    description: "Fotografía de platos para restaurante.",
    image: "/assets/fotografia-4.jpg",
    category: "Fotografía",
  },
  {
    id: 29,
    title: "Comida 1",
    description: "Fotografía gastronómica: comida1.jpg",
    image: "/assets/comida1.jpg",
    category: "Fotografía",
  },
  {
    id: 30,
    title: "Comida 2",
    description: "Fotografía gastronómica: comida2.jpg",
    image: "/assets/comida2.jpg",
    category: "Fotografía",
  },
  {
    id: 31,
    title: "Comida 4",
    description: "Video gastronómico: comida4.mp4",
    image: "/assets/comida4.mp4",
    category: "Fotografía",
  },
  {
    id: 32,
    title: "Comida 3",
    description: "Fotografía gastronómica: comida3.jpg",
    image: "/assets/comida3.jpg",
    category: "Fotografía",
  },
  // Tercera página: las antiguas restantes y nuevas imágenes
  {
    id: 17,
    title: "Moda Editorial",
    description: "Editorial de moda para catálogo de temporada.",
    image: "/assets/fotografia-5.jpg",
    category: "Fotografía",
  },
  {
    id: 18,
    title: "Moda Editorial",
    description: "Fotografía de moda.",
    image: "/assets/fotografia-6.jpg",
    category: "Fotografía",
  },
  {
    id: 33,
    title: "Retrato Masculino",
    description: "Sesión con modelo masculino: chico1.jpg",
    image: "/assets/chico1.jpg",
    category: "Fotografía",
  },
  {
    id: 34,
    title: "Moda Urbana",
    description: "Editorial de ropa urbana: ropa1.jpg",
    image: "/assets/ropa1.jpg",
    category: "Fotografía",
  },
  {
    id: 35,
    title: "Retrato Femenino",
    description: "Sesión con modelo femenina: chica1.jpg",
    image: "/assets/chica1.jpg",
    category: "Fotografía",
  },
  {
    id: 36,
    title: "Moda Creativa",
    description: "Editorial creativa: ropa2.jpg",
    image: "/assets/ropa2.jpg",
    category: "Fotografía",
  },
  // Nuevas fotos para la segunda página del carrusel de Fotografía
  {
    id: 19,
    title: "Fotografía Lifestyle",
    description: "Sesión lifestyle en exteriores naturales.",
    image: "/assets/fotografia-7.jpg",
    category: "Fotografía",
  },
  {
    id: 20,
    title: "Fotografía Arquitectónica",
    description: "Captura de espacios y arquitectura moderna.",
    image: "/assets/fotografia-8.jpg",
    category: "Fotografía",
  },
  {
    id: 21,
    title: "Fotografía de Producto Creativa",
    description: "Composición creativa para catálogo de productos.",
    image: "/assets/fotografia-9.jpg",
    category: "Fotografía",
  },
  {
    id: 22,
    title: "Fotografía Editorial Urbana",
    description: "Editorial realizada en entorno urbano.",
    image: "/assets/fotografia-10.jpg",
    category: "Fotografía",
  },
  {
    id: 23,
    title: "Fotografía de Retrato Creativo",
    description: "Retrato artístico con iluminación especial.",
    image: "/assets/fotografia-11.jpg",
    category: "Fotografía",
  },
  {
    id: 24,
    title: "Fotografía de Viajes",
    description: "Paisajes y momentos de viaje.",
    image: "/assets/fotografia-12.jpg",
    category: "Fotografía",
  },
  // 1-6: Golf Club
  {
    id: 1,
    title: "Golf Club Poster",
    description: "Diseño de póster para The Golf Club Marbella.",
    image: "/assets/golfclub-1.jpg",
    category: "Marketing",
  },
  {
    id: 2,
    title: "Golf Club Colores",
    description: "Paleta de colores corporativa para The Golf Club.",
    image: "/assets/golfclub-2.jpg",
    category: "Marketing",
  },
  {
    id: 3,
    title: "Golf Club Invitación",
    description: "Invitación a experiencia en The Golf Club Marbella.",
    image: "/assets/golfclub-6.jpg",
    category: "Marketing",
  },
  {
    id: 4,
    title: "Golf Club Grand Opening",
    description: "Cartel de apertura y torneo de The Golf Club.",
    image: "/assets/golfclub-4.jpg",
    category: "Marketing",
  },
  {
    id: 5,
    title: "Golf Club Branding",
    description: "Branding y personaje para The Golf Club Marbella.",
    image: "/assets/golfclub-5.jpg",
    category: "Marketing",
  },
  {
    id: 6,
    title: "Golf Club Aérea",
    description: "Vista aérea y branding de The Golf Club.",
    image: "/assets/golfclub-3.jpg",
    category: "Marketing",
  },
  // 7-12: Inventadas
  {
    id: 7,
    title: "Campaña Primavera",
    description: "Campaña de marketing para la colección primavera.",
    image: "/assets/marketing-1.jpg",
    category: "Marketing",
  },
  {
    id: 8,
    title: "Rediseño Logo",
    description: "Nuevo logo para cliente internacional.",
    image: "/assets/marketing-2.jpg",
    category: "Marketing",
  },
  {
    id: 9,
    title: "Evento Creativo",
    description: "Cobertura de evento creativo para cliente.",
    image: "/assets/marketing-3.jpg",
    category: "Marketing",
  },
  {
    id: 10,
    title: "Anuncio Verano",
    description: "Creatividad para campaña de verano.",
    image: "/assets/marketing-4.jpg",
    category: "Marketing",
  },
  {
    id: 11,
    title: "Packaging Gourmet",
    description: "Diseño de packaging para productos gourmet.",
    image: "/assets/marketing-5.jpg",
    category: "Marketing",
  },
  {
    id: 12,
    title: "Flyer Digital",
    description: "Flyer digital para lanzamiento de app.",
    image: "/assets/marketing-6.jpg",
    category: "Marketing",
  },
];


const categories = ["Marketing", "Fotografía", "Diseño Web/Apps"];

export default function Portfolio() {
  const router = useRouter();
  const [buttonAnimating, setButtonAnimating] = useState(false);
  // const buttonRef = useRef<HTMLButtonElement>(null); // Not needed unless focusing or measuring

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
    title: lang === 'en' ? 'Our Portfolio' : 'Nuestro Portfolio',
    desc: lang === 'en'
      ? 'Discover some of our most outstanding projects, where we combine creativity and strategy to achieve exceptional results.'
      : 'Descubre algunos de nuestros proyectos más destacados, donde combinamos creatividad y estrategia para lograr resultados excepcionales.',
    categories: lang === 'en'
      ? ["Marketing", "Photography", "Web/App Design"]
      : ["Marketing", "Fotografía", "Diseño Web/Apps"],
    seeAllProjects: lang === 'en' ? 'See all Projects' : 'Ver todos los Proyectos',
    seeAllServices: lang === 'en' ? 'See all Services' : 'Ver todos los Servicios',
  };




  useEffect(() => {
    function syncLang() {
      setLang(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
    }
    window.addEventListener('click', syncLang);
    return () => window.removeEventListener('click', syncLang);
  }, []);

  const palabrasClave = lang === 'en'
    ? [
        "digital presence",
        "online success",
        "digital impact",
        "virtual brand",
        "web visibility",
        "digital business",
        "online audience"
      ]
    : [
        "presencia digital",
        "éxito online",
        "impacto digital",
        "marca virtual",
        "visibilidad web",
        "negocio digital",
        "audiencia online"
      ];
  const [palabraIndex, setPalabraIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPalabraIndex((prev) => (prev + 1) % palabrasClave.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Marketing")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredItems = activeCategory === "Diseño Web/Apps"
  ? [
      {
        id: 101,
        title: "Hospital Web",
        description: "Web corporativa para hospital privado.",
        image: "/assets/hospital1.png",
        category: "Diseño Web/Apps",
      },
      {
        id: 102,
        title: "Proyecto Web 1",
        description: "Landing para inmobiliaria.",
        image: "/assets/pr1.png",
        category: "Diseño Web/Apps",
      },
      {
        id: 103,
        title: "Proyecto Web 2",
        description: "Web para restaurante.",
        image: "/assets/pr2.png",
        category: "Diseño Web/Apps",
      },
      {
        id: 104,
        title: "Tenis App",
        description: "App móvil de reservas para club de tenis.",
        image: "/assets/tenismovil.png",
        category: "Diseño Web/Apps",
      },
      {
        id: 105,
        title: "Golf App",
        description: "App móvil para golfistas.",
        image: "/assets/golfmovil.png",
        category: "Diseño Web/Apps",
      },
    ]
  : portfolioItems.filter((item) => item.category === activeCategory);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice(carouselIndex * itemsPerPage, (carouselIndex + 1) * itemsPerPage);

  const handlePrev = () => {
    setCarouselIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setCarouselIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  useEffect(() => {
    setCarouselIndex(0); // Reset al cambiar de sección
  }, [activeCategory]);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-black">
        <div className="w-full flex justify-start items-center mt-4 mb-6">
          <div className="flex justify-start items-end ml-0 sm:ml-[9rem]">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight text-left relative inline-block">
              <span className="block sm:hidden text-white text-center w-full">
                {lang === 'en' ? 'We transform' : 'Transformamos'}<br />
                <span className="text-white">{lang === 'en' ? 'your' : 'tu'}</span>
              </span>
              <span className="hidden sm:inline text-white">
                {lang === 'en' ? 'We transform your' : 'Transformamos tu'}
              </span>
              <span className="block mt-2 sm:mt-0 sm:inline sm:absolute sm:left-full sm:top-0 sm:ml-[0.25ch] sm:whitespace-nowrap text-center sm:text-left w-full sm:w-auto" style={{height: '100%', display: 'inline-block'}}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={palabraIndex}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="text-yellow-400 font-extrabold"
                    style={{ color: '#ffe600', display: 'inline-block', transition: 'color 0.3s' }}
                  >
                    {palabrasClave[palabraIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </div>
        </div>
        <motion.div
          className="text-center mb-4 md:mb-8 mt-4 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-4 md:mt-12 mb-4 md:mb-8">{t.title}</h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto text-center">{t.desc}</p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {t.categories.map((category, idx) => (
              <button
                key={category}
                onClick={() => setActiveCategory(categories[idx])}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors bg-primary text-black active:scale-95 ${activeCategory === categories[idx] ? 'font-bold shadow-[0_0_12px_4px_rgba(255,255,0,0.7),0_0_32px_8px_rgba(255,255,0,0.5)]' : 'border-2 border-black'} w-auto min-w-[110px] text-center`}
              >
                {category}
                {activeCategory === categories[idx] && (
                  <span className="sr-only">(seleccionado)</span>
                )}
              </button>
            ))}
            {/* Botón circular + */}
            <motion.button
              type="button"
              onClick={() => router.push('/proyectos')}
              className="flex items-center justify-center rounded-full bg-primary text-black font-bold text-2xl w-12 h-12 shadow-md border-2 border-black hover:bg-yellow-300 focus:outline-none active:scale-95 transition-all"
              whileTap={{ scale: 0.92 }}
              aria-label="Ver todos los proyectos"
            >
              <span className="flex items-center justify-center w-full h-full">+</span>
            </motion.button>
          </div>
        </div>

        <div className="relative">
          {/* Carousel Controls - Left */}
          {filteredItems.length > itemsPerPage && (
            <button
              onClick={handlePrev}
              disabled={carouselIndex === 0}
              className={`hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary text-black font-bold shadow transition-colors border-2 border-primary disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-label="Anterior"
              style={{ marginLeft: '-20px' }}
            >
              {/* SVG flecha izquierda, más fina */}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5L8 11L14 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
          {/* Carousel Controls - Right */}
          {filteredItems.length > itemsPerPage && (
            <button
              onClick={handleNext}
              disabled={carouselIndex === totalPages - 1}
              className={`hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary text-black font-bold shadow transition-colors border-2 border-primary disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-label="Siguiente"
              style={{ marginRight: '-20px' }}
            >
              {/* SVG flecha derecha, más fina */}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5L14 11L8 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
          {/* Carousel Controls - Mobile (bottom center) */}
          {filteredItems.length > itemsPerPage && (
            <div className="flex md:hidden justify-center items-center gap-3 mt-2 mb-4">
              <button
                onClick={handlePrev}
                disabled={carouselIndex === 0}
                className={`w-8 h-8 flex items-center justify-center rounded-full bg-primary text-black font-bold shadow transition-colors border-2 border-primary disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label="Anterior"
              >
                {/* SVG flecha izquierda, más pequeña */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 3L6 8L10.5 13" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="text-black dark:text-white font-semibold text-sm">
                Página {carouselIndex + 1} de {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={carouselIndex === totalPages - 1}
                className={`w-8 h-8 flex items-center justify-center rounded-full bg-primary text-black font-bold shadow transition-colors border-2 border-primary disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label="Siguiente"
              >
                {/* SVG flecha derecha, más pequeña */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 3L10.5 8L6 13" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}
          {/* Grid */}
          <div className={`grid gap-4 md:gap-8 ${activeCategory === 'Diseño Web/Apps' ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'}`}>
            {activeCategory === 'Diseño Web/Apps' && currentItems.length === 5 ? (
              <>
                {/* Primera fila: 3 imágenes */}
                <div className="col-span-3 flex flex-row gap-4 md:gap-8 justify-center">
                  {currentItems.slice(0, 3).map((item: any, idx: number) => (
                    <div key={item.id} className="flex-1 max-w-xs">
                      <AnimatedSection direction={idx % 2 === 0 ? "up" : "right"} delay={0.1 * idx}>
                        <motion.div
                          className="group relative rounded-xl overflow-hidden shadow-lg h-80"
                          whileHover={{ scale: 1.03 }}
                          onMouseEnter={() => setHoveredItem(item.id)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain rounded-xl transition-transform duration-500 group-hover:scale-105 cursor-zoom-in bg-black"
                            style={{ backgroundColor: 'black' }}
                          />
                          <div
                            className="absolute inset-0 z-10 cursor-zoom-in"
                            style={{ pointerEvents: 'auto' }}
                            onClick={e => {
                              e.stopPropagation();
                              setModalImage(item.image);
                            }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-primary/20 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: hoveredItem === item.id ? 0.2 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      </AnimatedSection>
                    </div>
                  ))}
                </div>
                {/* Segunda fila: 2 imágenes */}
                <div className="col-span-3 flex flex-row gap-4 md:gap-8 justify-center mt-4">
                  {currentItems.slice(3, 5).map((item: any, idx: number) => (
                    <div key={item.id} className="flex-1 max-w-xs">
                      <AnimatedSection direction={idx % 2 === 0 ? "up" : "right"} delay={0.1 * (idx + 3)}>
                        <motion.div
                          className="group relative rounded-xl overflow-hidden shadow-lg h-80"
                          whileHover={{ scale: 1.03 }}
                          onMouseEnter={() => setHoveredItem(item.id)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain rounded-xl transition-transform duration-500 group-hover:scale-105 cursor-zoom-in bg-black"
                            style={{ backgroundColor: 'black' }}
                          />
                          <div
                            className="absolute inset-0 z-10 cursor-zoom-in"
                            style={{ pointerEvents: 'auto' }}
                            onClick={e => {
                              e.stopPropagation();
                              setModalImage(item.image);
                            }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-primary/20 pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: hoveredItem === item.id ? 0.2 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      </AnimatedSection>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              currentItems.map((item: any, idx: number) => (
                <AnimatedSection key={item.id} direction={idx % 2 === 0 ? "up" : "right"} delay={0.1 * idx}>
                  <motion.div
                    className="group relative rounded-xl overflow-hidden shadow-lg h-80"
                    whileHover={{ scale: 1.03 }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.image.endsWith('.mp4') ? (
                      <video
                        src={item.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="object-contain rounded-xl transition-transform duration-500 group-hover:scale-105 cursor-zoom-in bg-black absolute inset-0 w-full h-full"
                        style={{ backgroundColor: 'black' }}
                      />
                    ) : (
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-contain rounded-xl transition-transform duration-500 group-hover:scale-105 cursor-zoom-in bg-black"
                        style={{ backgroundColor: 'black' }}
                      />
                    )}
                    {/* Área invisible para capturar el click, debajo del overlay */}
                    <div
                      className="absolute inset-0 z-10 cursor-zoom-in"
                      style={{ pointerEvents: 'auto' }}
                      onClick={e => {
                        e.stopPropagation();
                        setModalImage(item.image);
                      }}
                    />

                    <motion.div
                      className="absolute inset-0 bg-primary/20 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredItem === item.id ? 0.2 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </AnimatedSection>
              ))
            )}
          </div>
        </div>
        {modalImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setModalImage(null)}>
            <div className="relative max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 z-10 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/90 transition-colors"
                onClick={() => setModalImage(null)}
                aria-label="Cerrar"
              >
                ×
              </button>
              <div className="w-full aspect-[3/4] bg-black flex items-center justify-center rounded-xl overflow-hidden">
                <Image
                  src={modalImage || "/placeholder.svg"}
                  alt="Foto ampliada"
                  fill
                  className="object-contain"
                  style={{ background: 'black' }}
                />
              </div>
            </div>
          </div>
        )}
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            type="button"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-black font-medium hover:bg-primary/90 transition-colors focus:outline-none"
            initial={{ scale: 1, opacity: 1 }}
            animate={buttonAnimating ? { scale: 0.7, opacity: 0, transition: { duration: 0.32 } } : { scale: 1, opacity: 1 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setButtonAnimating(true)}
            onAnimationComplete={() => {
              if (buttonAnimating) router.push('/proyectos');
            }}
            style={{ pointerEvents: buttonAnimating ? 'none' : 'auto' }}
            aria-label="Ver todos los proyectos"
          >
            {t.seeAllProjects}
          </motion.button>
          <motion.button
            type="button"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black border-2 border-primary text-primary font-medium hover:bg-primary hover:text-black transition-colors focus:outline-none"
            initial={{ scale: 1, opacity: 1 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => router.push('/servicios')}
            aria-label={t.seeAllServices}
          >
            {t.seeAllServices}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
