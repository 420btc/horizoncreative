"use client";

import React, { useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

function MetodoInteractivoApps({ lang }: { lang: 'es' | 'en' }) {
  const pointsES = [
    "Idea y diseño UI/UX",
    "Desarrollo multiplataforma",
    "Pruebas y optimización",
    "Publicación y soporte"
  ];
  const pointsEN = [
    "Idea and UI/UX design",
    "Cross-platform development",
    "Testing and optimization",
    "Publishing and support"
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

export default function AplicacionesMovilesGaleria() {
  const { theme } = useTheme();
  const [lang, setLang] = useState<'es'|'en'>(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
  React.useEffect(() => {
    function syncLang() {
      setLang(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
    }
    window.addEventListener('click', syncLang);
    return () => window.removeEventListener('click', syncLang);
  }, []);

  const t = {
    title: lang === 'en' ? 'Mobile Applications' : 'Aplicaciones Móviles',
    bannerTitle: lang === 'en' ? 'Custom Mobile App Development' : 'Desarrollo de Apps Móviles a Medida',
    bannerText: lang === 'en'
      ? 'We create innovative, secure, and scalable mobile applications for iOS and Android. Our team covers the entire cycle: UI/UX design, development, testing, publishing, and support, ensuring the best experience for your users and the success of your project.'
      : 'Creamos aplicaciones móviles innovadoras, seguras y escalables para iOS y Android. Nuestro equipo cubre todo el ciclo: diseño UI/UX, desarrollo, pruebas, publicación y soporte, garantizando la mejor experiencia para tus usuarios y el éxito de tu proyecto.',
    sectionTitle: lang === 'en' ? 'Apps that Make a Difference' : 'Apps que marcan la diferencia',
    sectionText: lang === 'en'
      ? 'We develop custom mobile solutions that drive your business. From conceptualization to publishing, we accompany you at every stage to launch functional, attractive apps aligned with your goals.'
      : 'Desarrollamos soluciones móviles personalizadas que impulsan tu negocio. Desde la conceptualización hasta la publicación, te acompañamos en cada etapa para lanzar apps funcionales, atractivas y alineadas con tus objetivos.'
  };

  return (
    <section className="w-full min-h-screen bg-black">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-white pt-10">{t.title}</h1>
      {/* Primera foto */}
      <div className="w-full max-w-7xl mx-auto px-0 md:px-8">
        <div className="overflow-hidden rounded-none md:rounded-3xl shadow-2xl">
          <Image src="/assets/apps1.jpg" alt={lang === 'en' ? 'Mobile application 1' : 'Aplicación móvil 1'} width={1920} height={900} className="object-cover w-full h-[260px] md:h-[430px] lg:h-[520px] transition-all duration-500" priority />
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
            <MetodoInteractivoApps lang={lang} />
          </div>
        </div>
      </div>
      {/* Segunda foto */}
      <div className="w-full max-w-7xl mx-auto px-0 md:px-8 mt-8 md:mt-14">
        <div className="overflow-hidden rounded-none md:rounded-3xl shadow-2xl">
          <Image src="/assets/apps2.jpg" alt={lang === 'en' ? 'Mobile application 2' : 'Aplicación móvil 2'} width={1920} height={900} className="object-cover w-full h-[260px] md:h-[430px] lg:h-[520px] transition-all duration-500" />
        </div>
      </div>
      {/* Sección final: Foto full display y texto a la izquierda */}
      <div className="w-full mt-8 md:mt-14 flex flex-col md:flex-row items-stretch rounded-xl md:rounded-3xl overflow-hidden shadow-2xl">
        {/* Bloque de texto sobre fondo blanco */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 md:p-12 rounded-t-xl md:rounded-l-3xl md:rounded-tr-none">
          <div>
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{t.sectionTitle}</h2>
            <p className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'} text-base md:text-lg leading-relaxed max-w-md`}>
              {t.sectionText}
            </p>
          </div>
        </div>
        {/* Imagen full display */}
        <div className="w-full md:w-1/2 rounded-b-xl md:rounded-r-3xl md:rounded-bl-none overflow-hidden">
          <Image src="/assets/apps3.jpg" alt={lang === 'en' ? 'Mobile application 3' : 'Aplicación móvil 3'} width={1920} height={900} className="object-cover w-full h-[260px] md:h-full lg:h-[520px] transition-all duration-500" />
        </div>
      </div>
      {/* Cuarta foto */}
      <div className="w-full max-w-7xl mx-auto px-0 md:px-8 mt-8 md:mt-14">
        <div className="overflow-hidden rounded-none md:rounded-3xl shadow-2xl">
          <Image src="/assets/apps4.jpg" alt={lang === 'en' ? 'Mobile application 4' : 'Aplicación móvil 4'} width={1920} height={900} className="object-cover w-full h-[260px] md:h-[430px] lg:h-[520px] transition-all duration-500" />
        </div>
      </div>
    </section>
  );
}
