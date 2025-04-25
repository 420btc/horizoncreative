"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

function MetodoInteractivoRedes({ lang }: { lang: 'es' | 'en' }) {
  const pointsES = [
    "Planificación de contenido",
    "Publicación estratégica",
    "Interacción con la comunidad",
    "Análisis de resultados"
  ];
  const pointsEN = [
    "Content planning",
    "Strategic publishing",
    "Community engagement",
    "Results analysis"
  ];
  const points = lang === 'en' ? pointsEN : pointsES;
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  React.useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % points.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, points.length]);

  const handleClick = (idx: number) => {
    setActiveIdx(idx);
    setAutoPlay(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full relative z-10 gap-8 md:gap-16">
      <motion.div
        className="hidden md:block absolute z-0 left-0 right-0"
        style={{ top: '8px', left: '4%', right: '4%', height: '2px' }}
        initial={{ width: 0 }}
        animate={{ width: '92%' }}
        transition={{ duration: 1 }}
      >
        <div className="h-1 w-full bg-[#FFD600]" style={{ height: 2 }} />
      </motion.div>
      {points.map((txt, idx) => (
        <div key={idx} className="flex flex-col items-center md:w-1/4 w-full">
          <motion.button
            type="button"
            aria-label={txt}
            className={`w-5 h-5 rounded-full bg-[#FFD600] border-4 border-black mb-2 transition-transform duration-200 ${activeIdx === idx ? 'scale-125 ring-2 ring-[#FFD600]' : ''}`}
            onClick={() => handleClick(idx)}
            tabIndex={0}
            whileTap={{ scale: 1.2 }}
            animate={activeIdx === idx ? { scale: 1.25 } : { scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
          <span
            className={`text-gray-900 dark:text-gray-200 text-xs md:text-sm text-center break-words leading-tight max-w-[9.5rem] md:max-w-[11rem] transition-all duration-300 ${activeIdx === idx ? 'text-xl md:text-2xl font-bold scale-110 text-[#FFD600] drop-shadow-lg' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => handleClick(idx)}
          >
            {txt}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function GestionRedesSocialesGaleria() {
  const [lang, setLang] = useState<'es'|'en'>(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
  React.useEffect(() => {
    function syncLang() {
      setLang(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
    }
    window.addEventListener('click', syncLang);
    return () => window.removeEventListener('click', syncLang);
  }, []);

  const t = {
    title: lang === 'en' ? 'Social Media Management' : 'Gestión de Redes Sociales',
    bannerTitle: lang === 'en' ? 'Boost Your Digital Community' : 'Impulsa tu Comunidad Digital',
    bannerText: lang === 'en'
      ? 'We manage your social media with personalized strategies, creating attractive and relevant content to strengthen your community, increase your reach, and consolidate your digital presence. We handle planning, publishing, engagement, and analysis so your brand stands out online.'
      : 'Gestionamos tus redes sociales con estrategias personalizadas, creando contenido atractivo y relevante para fortalecer tu comunidad, aumentar tu alcance y consolidar tu presencia digital. Nos encargamos de la planificación, publicación, interacción y análisis para que tu marca destaque en el entorno digital.',
    sectionTitle: lang === 'en' ? 'Professional Social Media Management' : 'Gestión Profesional de Redes',
    sectionText: lang === 'en'
      ? 'Our team manages your social networks with creativity and analysis, ensuring every post and action aligns with your brand goals. We focus on building a strong community and generating measurable results for your business.'
      : 'Nuestro equipo gestiona tus redes sociales con creatividad y análisis, asegurando que cada publicación y acción esté alineada con tus objetivos de marca. Nos enfocamos en construir una comunidad sólida y en generar resultados medibles para tu negocio.',
    alt1: lang === 'en' ? 'Social Media Management 1' : 'Gestión de Redes Sociales 1',
    alt2: lang === 'en' ? 'Social Media Management 2' : 'Gestión de Redes Sociales 2',
    alt3: lang === 'en' ? 'Social Media Management 3' : 'Gestión de Redes Sociales 3',
  };

  return (
    <section className="w-full min-h-screen bg-black">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-white pt-10">{t.title}</h1>
      {/* Primera foto */}
      <div className="w-full max-w-7xl mx-auto px-0 md:px-8">
        <div className="overflow-hidden rounded-none md:rounded-3xl shadow-2xl">
          <Image src="/assets/gredes.jpg" alt={t.alt1} width={1920} height={900} className="object-cover w-full h-[260px] md:h-[430px] lg:h-[520px] transition-all duration-500" priority />
        </div>
      </div>
      {/* Banner informativo */}
      <div className="w-full bg-black py-10 md:py-14 px-4 md:px-0 flex flex-col items-center border-y border-gray-800">
        <div className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFD600] mb-2">{t.bannerTitle}</h2>
          <p className="text-base md:text-lg text-gray-900 dark:text-gray-200">{t.bannerText}</p>
        </div>
      </div>
      {/* Banner divisor con línea y metodología */}
      <div className="w-full flex flex-col items-center py-10 bg-neutral-900 mb-8 md:mb-14">
        <div className="max-w-2xl w-full flex flex-col items-center">
          {/* Línea conectora con puntos y frases */}
          <div className="relative w-full flex flex-col gap-8 md:gap-12">
            {/* Línea amarilla conectando los puntos SOLO en desktop, perfectamente alineada */}
            <div className="hidden md:block absolute z-0" style={{top: '8px', left: '4%', right: '4%', height: '2px'}}>
              <div className="h-1 w-full bg-[#FFD600]" style={{height:2}} />
            </div>
            <MetodoInteractivoRedes lang={lang} />

          </div>
        </div>
      </div>
      {/* Segunda foto */}
      <div className="w-full max-w-7xl mx-auto px-0 md:px-8 mt-8 md:mt-14">
        <div className="overflow-hidden rounded-none md:rounded-3xl shadow-2xl">
          <Image src="/assets/gredes2.jpg" alt={t.alt2} width={1920} height={900} className="object-cover w-full h-[260px] md:h-[430px] lg:h-[520px] transition-all duration-500" />
        </div>
      </div>
      {/* Sección final: Foto full display y texto a la izquierda */}
      <div className="w-full mt-8 md:mt-14 flex flex-col md:flex-row items-stretch rounded-xl md:rounded-3xl overflow-hidden shadow-2xl min-h-[180px]">
        {/* Bloque de texto sobre fondo blanco */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 md:p-12 rounded-t-xl md:rounded-l-3xl md:rounded-tr-none">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.sectionTitle}</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md">
              {t.sectionText}
            </p>
          </div>
        </div>
        {/* Imagen full display */}
        <div className="w-full md:w-1/2 rounded-b-xl md:rounded-r-3xl md:rounded-bl-none overflow-hidden">
          <Image src="/assets/gredes3.jpg" alt={t.alt3} width={1920} height={900} className="object-cover w-full h-[260px] md:h-full lg:h-[520px] transition-all duration-500" />
        </div>
      </div>
    </section>
  );
}
