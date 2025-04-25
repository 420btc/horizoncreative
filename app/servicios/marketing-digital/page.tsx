"use client";

import React, { useState } from "react";
import Image from "next/image";

function MetodoInteractivo({ lang }: { lang: 'es' | 'en' }) {
  const pointsES = [
    "Análisis y estrategia digital",
    "Gestión de campañas y contenido",
    "Optimización y analítica",
    "Resultados y escalado"
  ];
  const pointsEN = [
    "Digital analysis and strategy",
    "Campaign and content management",
    "Optimization and analytics",
    "Results and scaling"
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
      {points.map((txt, idx) => (
        <div key={idx} className="flex flex-col items-center md:w-1/4 w-full">
          <button
            type="button"
            aria-label={txt}
            className={`w-5 h-5 rounded-full bg-[#FFD600] border-4 border-black mb-2 transition-transform duration-200 ${activeIdx === idx ? 'scale-125 ring-2 ring-[#FFD600]' : ''}`}
            onClick={() => handleClick(idx)}
            tabIndex={0}
          />
          <span
            className={`text-gray-900 dark:text-gray-200 text-xs md:text-sm text-center break-words leading-tight max-w-[9.5rem] md:max-w-[11rem] transition-all duration-300 ${activeIdx === idx ? 'text-xl md:text-2xl font-bold scale-110 text-[#FFD600] drop-shadow-lg' : ''}`}
            style={{cursor:'pointer'}}
            onClick={() => handleClick(idx)}
          >
            {txt}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function MarketingDigitalGaleria() {
  const [lang, setLang] = useState<'es'|'en'>(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
  React.useEffect(() => {
    function syncLang() {
      setLang(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
    }
    window.addEventListener('click', syncLang);
    return () => window.removeEventListener('click', syncLang);
  }, []);

  const t = {
    title: lang === 'en' ? 'Digital Marketing' : 'Marketing Digital',
    bannerTitle: lang === 'en' ? 'Digital Marketing Specialists' : 'Especialistas en Marketing Digital',
    bannerText: lang === 'en'
      ? 'We boost your online presence and generate measurable results through customized digital strategies. Our team masters SEO, SEM, social media, email marketing, and web analytics to take your brand to the next level.'
      : 'Impulsamos tu presencia online y generamos resultados medibles a través de estrategias digitales personalizadas. Nuestro equipo domina SEO, SEM, redes sociales, email marketing y analítica web para llevar tu marca al siguiente nivel.'
  };

  return (
    <section className="w-full min-h-screen bg-black">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-white pt-10">{t.title}</h1>
      {/* Primera foto */}
      <div className="w-full max-w-7xl mx-auto px-0 md:px-8">
        <div className="overflow-hidden rounded-none md:rounded-3xl shadow-2xl">
          <Image src="/assets/mkdigital.jpg" alt={lang === 'en' ? 'Digital Marketing' : 'Marketing Digital'} width={1920} height={900} className="object-cover w-full h-[260px] md:h-[430px] lg:h-[520px] transition-all duration-500" priority />
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
            {/* Puntos y frases interactivos */}
            <MetodoInteractivo lang={lang} />
          </div>
        </div>
      </div>
      {/* Segunda foto */}
      <div className="w-full max-w-7xl mx-auto px-0 md:px-8 mt-8 md:mt-14">
        <div className="overflow-hidden rounded-none md:rounded-3xl shadow-2xl">
          <Image src="/assets/mkdigital2.jpg" alt={lang === 'en' ? 'Digital Campaign' : 'Campaña Digital'} width={1920} height={900} className="object-cover w-full h-[260px] md:h-[430px] lg:h-[520px] transition-all duration-500 rounded-none md:rounded-3xl md:object-bottom" />
        </div>
      </div>
      {/* Sección final: Foto full display y texto a la izquierda */}
      <div className="w-full mt-8 md:mt-14 flex flex-col md:flex-row items-stretch rounded-xl md:rounded-3xl overflow-hidden shadow-2xl min-h-[180px]">
        {/* Bloque de texto sobre fondo blanco */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 md:p-12 rounded-t-xl md:rounded-l-3xl md:rounded-tr-none">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{lang === 'en' ? 'Digital Marketing Solutions' : 'Soluciones de Marketing Digital'}</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md">
              {lang === 'en'
                ? 'We create comprehensive digital campaigns, results-oriented and tailored to your business objectives. From planning to execution and analysis, we accompany you every step to maximize your reach and conversion.'
                : 'Creamos campañas digitales integrales, orientadas a resultados y adaptadas a tus objetivos de negocio. Desde la planificación hasta la ejecución y el análisis, te acompañamos en cada paso para maximizar tu alcance y conversión.'}
            </p>
          </div>
        </div>
        {/* Imagen full display */}
        <div className="w-full md:w-1/2 rounded-b-xl md:rounded-r-3xl md:rounded-bl-none overflow-hidden">
          <Image src="/assets/mkdigital3.jpg" alt={lang === 'en' ? 'Digital Marketing Example' : 'Marketing Digital Ejemplo'} width={1920} height={900} className="object-cover object-center w-full h-[260px] md:h-full lg:h-[520px] transition-all duration-500 rounded-b-xl md:rounded-r-3xl md:rounded-bl-none" />
        </div>
      </div>
    </section>
  );
}
