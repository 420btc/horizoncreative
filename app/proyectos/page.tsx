"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const proyectos = [
  {
    href: "/proyectos/golf-club-branding",
    image: "/assets/por1.jpeg",
    alt: { es: "Golf Club Marbella Branding", en: "Golf Club Marbella Branding" },
    title: { es: "Golf Club Branding", en: "Golf Club Branding" },
    desc: {
      es: "Branding y personaje de Club de Golf, Marbella.",
      en: "Branding and mascot for Golf Club, Marbella."
    },
  },
  {
    href: "/proyectos/vacation-benalmadena",
    image: "/assets/vacationproject.jpeg",
    alt: { es: "Vacation Benalmádena Social Media y Web", en: "Vacation Benalmádena Social Media & Web" },
    title: { es: "Vacation Benalmádena", en: "Vacation Benalmádena" },
    desc: {
      es: "Gestión de red social y web, Vacation Benalmádena.",
      en: "Social media and website management for Vacation Benalmádena."
    },
  },
  {
    href: "/proyectos/tennis-club-marbella",
    image: "/assets/por2.jpeg",
    alt: { es: "Tennis Club Marbella Branding", en: "Tennis Club Marbella Branding" },
    title: { es: "Tennis Club Marbella", en: "Tennis Club Marbella" },
    desc: {
      es: "Branding y publicidad de Club de Tennis, Marbella.",
      en: "Branding and advertising for Tennis Club, Marbella."
    },
  },
  {
    href: "/proyectos/enboca-gastrobar",
    image: "/assets/enboca.jpg",
    alt: { es: "Enboca Gastrobar Proyecto", en: "Enboca Gastrobar Project" },
    title: { es: "Enboca Gastrobar", en: "Enboca Gastrobar" },
    desc: {
      es: "Branding y comunicación digital para Enboca Gastrobar.",
      en: "Branding and digital communication for Enboca Gastrobar."
    },
  },
  {
    href: "/proyectos/hospital-virgen-victoria",
    image: "/assets/hospital.jpeg",
    alt: { es: "UAC – Hospital Virgen de la Victoria", en: "UAC – Virgen de la Victoria Hospital" },
    title: { es: "UAC – Hospital Virgen de la Victoria", en: "UAC – Virgen de la Victoria Hospital" },
    desc: {
      es: "Desarrollo de app UAC y branding para el Hospital Virgen de la Victoria.",
      en: "UAC app development and branding for Virgen de la Victoria Hospital."
    },
  },
  {
    href: "/proyectos/mosh-fun-kitchen",
    image: "/assets/mosh.jpeg",
    alt: { es: "Mosh Fun Kitchen", en: "Mosh Fun Kitchen" },
    title: { es: "Mosh Fun Kitchen", en: "Mosh Fun Kitchen" },
    desc: {
      es: "Sesión creativa y fotografía gastronómica para Mosh Fun Kitchen.",
      en: "Creative session and food photography for Mosh Fun Kitchen."
    },
  },
];

export default function Proyectos() {
  // Detecta idioma desde window o por defecto 'es'
  const [lang, setLang] = useState<'es'|'en'>(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
  // Sincroniza idioma si cambia globalmente
  useEffect(() => {
    function syncLang() {
      setLang(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
    }
    window.addEventListener('click', syncLang);
    return () => window.removeEventListener('click', syncLang);
  }, []);
  const t = {
    title: lang === 'en' ? 'Our ' : 'Nuestros ',
    projects: lang === 'en' ? 'Projects' : 'Proyectos',
    seeProject: lang === 'en' ? 'See project →' : 'Ver proyecto →',
    soon: lang === 'en' ? 'Coming soon' : 'Próximamente',
  };
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 sm:pt-16">
      <h1 className="text-6xl md:text-7xl font-black mb-8 text-white text-center mt-2">
        {t.title}
        <span className="text-yellow-400">{t.projects}</span>
      </h1>
      
      {/* Tarjetas de proyectos únicas para esta página */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-1 gap-10">
        {/* Primera fila de 3 proyectos */}
        <div className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-6 min-h-[350px] my-1">
          {proyectos.slice(0, 3).map((proy, idx) => {
            const [animating, setAnimating] = useState(false);
            const [hovered, setHovered] = useState(false);
            const router = useRouter();
            return (
              <motion.div
                key={proy.href + '-' + idx}
                className="group relative bg-[#101014] rounded-3xl shadow-2xl overflow-hidden w-[312px] lg:w-[364px] xl:w-[426px] transition-transform hover:scale-[1.035] cursor-pointer"
                style={{ minHeight: 437 }}
                initial={false}
                animate={animating ? { scale: 0.92, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.33, ease: 'easeInOut' }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onTouchStart={() => setHovered(true)}
                onTouchEnd={() => setHovered(false)}
                onClick={() => {
                  if (animating) return;
                  setAnimating(true);
                  setTimeout(() => {
                    router.push(proy.href);
                    setAnimating(false);
                  }, 330);
                }}
              >
                {/* SVG Animated Snake Border */}
                <motion.svg
  className="pointer-events-none absolute inset-0 w-full h-full z-30"
  viewBox="0 0 100 100"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{ borderRadius: '1.5rem' }}
  preserveAspectRatio="none"
>
  <motion.rect
    x="1" y="1" width="98" height="98" rx="24"
    stroke="#FFD600"
    strokeWidth="2"
    fill="none"
    vectorEffect="non-scaling-stroke"
    animate={{
      pathLength: hovered ? 1 : 0,
      opacity: hovered ? 1 : 0,
      transition: { duration: 1.2, ease: 'easeInOut' }
    }}
    style={{ filter: 'none' }}
  />
</motion.svg>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black opacity-80 z-10 rounded-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[233px] bg-gradient-to-t from-black/60 to-transparent z-20 rounded-t-3xl" />
                {proy.image ? (
                  <Image
                    src={proy.image}
                    alt={proy.alt[lang]}
                    width={410}
                    height={240}
                    className="w-full h-[233px] object-cover object-center rounded-t-3xl group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                ) : (
                  <div className="w-full h-[233px] flex items-center justify-center bg-[#000] rounded-t-3xl">
                    <span className="text-gray-300 text-lg">{t.soon}</span>
                  </div>
                )}
                <div className="relative z-20 p-6 flex flex-col justify-between h-[160px]">
                  <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                    {proy.title[lang]}
                  </h2>
                  <p className="text-gray-200 text-base mb-1">
                    {proy.desc[lang]}
                  </p>
                  <span className="inline-block mt-2 text-sm font-semibold text-yellow-600 dark:text-yellow-400 group-hover:underline">
                    {t.seeProject}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Segunda fila de 3 proyectos */}
        <div className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-6 min-h-[350px] my-1">
          {proyectos.slice(3, 6).map((proy, idx) => {
            const [animating, setAnimating] = useState(false);
            const [hovered, setHovered] = useState(false);
            const router = useRouter();
            return (
              <motion.div
                key={proy.href + '-' + idx}
                className="group relative bg-[#101014] rounded-3xl shadow-2xl overflow-hidden w-[312px] lg:w-[364px] xl:w-[426px] transition-transform hover:scale-[1.035] cursor-pointer"
                style={{ minHeight: 437 }}
                initial={false}
                animate={animating ? { scale: 0.92, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.33, ease: 'easeInOut' }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onTouchStart={() => setHovered(true)}
                onTouchEnd={() => setHovered(false)}
                onClick={() => {
                  if (animating) return;
                  setAnimating(true);
                  setTimeout(() => {
                    router.push(proy.href);
                    setAnimating(false);
                  }, 330);
                }}
              >
                {/* SVG Animated Snake Border */}
                <motion.svg
  className="pointer-events-none absolute inset-0 w-full h-full z-30"
  viewBox="0 0 100 100"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{ borderRadius: '1.5rem' }}
  preserveAspectRatio="none"
>
  <motion.rect
    x="1" y="1" width="98" height="98" rx="24"
    stroke="#FFD600"
    strokeWidth="2"
    fill="none"
    vectorEffect="non-scaling-stroke"
    animate={{
      pathLength: hovered ? 1 : 0,
      opacity: hovered ? 1 : 0,
      transition: { duration: 1.2, ease: 'easeInOut' }
    }}
    style={{ filter: 'none' }}
  />
</motion.svg>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black opacity-80 z-10 rounded-3xl pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[233px] bg-gradient-to-t from-black/60 to-transparent z-20 rounded-t-3xl" />
                {proy.image ? (
                  <Image
                    src={proy.image}
                    alt={proy.alt[lang]}
                    width={410}
                    height={240}
                    className="w-full h-[233px] object-cover object-center rounded-t-3xl group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                ) : (
                  <div className="w-full h-[233px] flex items-center justify-center bg-[#000] rounded-t-3xl">
                    <span className="text-gray-300 text-lg">{t.soon}</span>
                  </div>
                )}
                <div className="relative z-20 p-6 flex flex-col justify-between h-[160px]">
                  <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                    {proy.title[lang]}
                  </h2>
                  <p className="text-gray-200 text-base mb-1">
                    {proy.desc[lang]}
                  </p>
                  <span className="inline-block mt-2 text-sm font-semibold text-yellow-600 dark:text-yellow-400 group-hover:underline">
                    {t.seeProject}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Imágenes decorativas al final, arriba del footer */}
      <div className="w-full flex flex-col items-center justify-center mt-16 sm:mt-32 mb-2">
        <Image
          src="/assets/globito.png"
          alt="Globito decorativo"
          width={230}
          height={230}
          className="mb-6 scale-110 md:scale-150"
          priority
        />
        <Image
          src="/assets/prod1.png"
          alt="Proyecto destacado"
          width={1200}
          height={900}
          className="rounded-xl shadow-lg object-cover w-[95vw] max-w-2xl sm:max-w-3xl h-auto mb-2 scale-[1.5]"
          priority
        />
      </div>
    </div>
  );
}
