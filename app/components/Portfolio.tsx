"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion";
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
  // 13-18: Fotografía
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
  const palabrasClave = [
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

  const filteredItems = portfolioItems.filter((item) => item.category === activeCategory);
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
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-center items-center mt-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black dark:text-white text-center leading-tight">
            <span style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
              gap: '0.25ch',
              width: '100%',
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap',
            }}>
              <span style={{display:'inline', flexShrink:0}}>Transformamos tu</span>
              <span style={{
                display:'inline-block',
                position:'relative',
                verticalAlign:'baseline',
                textAlign:'left',
                minHeight:'1em',
                flexShrink:0,
                whiteSpace:'nowrap',
              }}>
                {/* Medidor invisible para el ancho máximo */}
                <span style={{
                  visibility:'hidden',
                  position:'absolute',
                  pointerEvents:'none',
                  fontWeight:'inherit',
                  fontSize:'inherit',
                  fontFamily:'inherit',
                  lineHeight:'inherit',
                  whiteSpace:'nowrap',
                }}>
                  {palabrasClave.reduce((a, b) => a.length > b.length ? a : b)}
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={palabraIndex}
                    initial={{ y: 30, opacity: 0, backgroundSize: '0% 100%' }}
                    animate={{ y: 0, opacity: 1, backgroundSize: '100% 100%' }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #ffe600 0%, #ffe600 100%)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'left',
                      backgroundSize: '100% 100%',
                      color: '#ffe600',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: '#ffe600',
                      display: 'inline-block',
                      transition: 'color 0.3s',
                    }}
                  >
                    {palabrasClave[palabraIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </h1>
        </div>
        <motion.div
          className="text-center mb-4 md:mb-8 mt-4 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl mt-4 md:mt-12 mb-4 md:mb-8">Nuestro Portfolio</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Descubre algunos de nuestros proyectos más destacados, donde combinamos creatividad y estrategia para lograr
            resultados excepcionales.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category ? "bg-primary text-black border-4 border-black shadow font-bold" : "bg-primary text-gray-700 border-2 border-black"}`}
              >
                {category}
                {activeCategory === category && (
                  <span className="sr-only">(seleccionado)</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Carousel Controls - Left */}
          {filteredItems.length > itemsPerPage && (
            <button
              onClick={handlePrev}
              disabled={carouselIndex === 0}
              className={`hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary text-black font-bold shadow transition-colors border-2 border-primary disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-label="Anterior"
              style={{ marginLeft: '-28px' }}
            >
              <span className="text-2xl"><span className="text-2xl">&#8592;</span></span>
            </button>
          )}
          {/* Carousel Controls - Right */}
          {filteredItems.length > itemsPerPage && (
            <button
              onClick={handleNext}
              disabled={carouselIndex === totalPages - 1}
              className={`hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-primary text-black font-bold shadow transition-colors border-2 border-primary disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-label="Siguiente"
              style={{ marginRight: '-28px' }}
            >
              <span className="text-2xl"><span className="text-2xl">&#8594;</span></span>
            </button>
          )}
          {/* Carousel Controls - Mobile (bottom center) */}
          {filteredItems.length > itemsPerPage && (
            <div className="flex md:hidden justify-center items-center gap-4 mt-2 mb-4">
              <button
                onClick={handlePrev}
                disabled={carouselIndex === 0}
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-primary text-black font-bold shadow transition-colors border-2 border-primary disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label="Anterior"
              >
                <span className="text-2xl"><span className="text-2xl">&#8592;</span></span>
              </button>
              <span className="text-black dark:text-white font-semibold">
                Página {carouselIndex + 1} de {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={carouselIndex === totalPages - 1}
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-primary text-black font-bold shadow transition-colors border-2 border-primary disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label="Siguiente"
              >
                <span className="text-2xl"><span className="text-2xl">&#8594;</span></span>
              </button>
            </div>
          )}
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {currentItems.map((item, idx) => (
              <AnimatedSection key={item.id} direction={idx % 2 === 0 ? "up" : "right"} delay={0.1 * idx}>
                <motion.div
                  className="group relative rounded-xl overflow-hidden shadow-lg h-80"
                  whileHover={{ scale: 1.03 }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105 cursor-zoom-in bg-black"
                    style={{ backgroundColor: 'black' }}
                  />
                  {/* Área invisible para capturar el click, debajo del overlay */}
                  <div
                    className="absolute inset-0 z-10 cursor-zoom-in"
                    style={{ pointerEvents: 'auto' }}
                    onClick={e => {
                      e.stopPropagation();
                      setModalImage(item.image);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-200 mb-4">{item.description}</p>
                    <a href="#" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                      <span className="mr-2">Ver proyecto</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
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
            ))}

{/* Modal de imagen ampliada */}
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
          src={modalImage}
          alt="Foto ampliada"
          fill
          className="object-contain"
          style={{ background: 'black' }}
        />
      </div>
    </div>
  </div>
)}
          </div>

        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-black font-medium hover:bg-primary/90 transition-colors"
          >
            Ver todos los proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
