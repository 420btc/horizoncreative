"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useTheme } from "next-themes";

function MetodoInteractivoFoto({ lang }: { lang: 'es' | 'en' }) {
  const points = lang === 'en'
    ? [
      "Briefing and visual concept",
      "Planning and pre-production",
      "Professional photo/video session",
      "Editing, delivery and optimization"
    ]
    : [
      "Briefing y concepto visual",
      "Planificación y pre-producción",
      "Sesión de fotos/video profesional",
      "Edición, entrega y optimización"
    ];
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
            className={`text-black dark:text-white text-xs md:text-sm text-center break-words leading-tight max-w-[9.5rem] md:max-w-[11rem] transition-all duration-300 ${activeIdx === idx ? 'text-xl md:text-2xl font-bold scale-110 text-[#FFD600] drop-shadow-lg' : ''}`}
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


export default function FotografiaGaleria() {
  const { theme: themeRaw } = useTheme();
  const [mounted, setMounted] = useState(false);
  React.useEffect(() => { setMounted(true); }, []);
  const theme = themeRaw || 'light';
  const [lang, setLang] = useState<'es'|'en'>(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
  React.useEffect(() => {
    function syncLang() {
      setLang(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
    }
    window.addEventListener('click', syncLang);
    return () => window.removeEventListener('click', syncLang);
  }, []);

  const t = {
    title: lang === 'en' ? 'Photography & Video' : 'Fotografía y Video',
    bannerTitle: lang === 'en' ? 'Photography & Video Specialists' : 'Especialistas en Fotografía y Video',
    bannerText: lang === 'en'
      ? 'We capture the essence of your brand and projects with high-impact images and videos. Our team combines creativity, technique, and technology to create visual content that connects and excites. From product, event, and lifestyle photography to corporate and promotional video, we adapt to your needs to tell your story in a unique way.'
      : 'Capturamos la esencia de tu marca y tus proyectos con imágenes y videos de alto impacto. Nuestro equipo combina creatividad, técnica y tecnología para crear contenido visual que conecta y emociona. Desde fotografía de producto, eventos y lifestyle hasta video corporativo y promocional, nos adaptamos a tus necesidades para contar tu historia de forma única.',
    sectionTitle: lang === 'en' ? 'Professional Photography' : 'Fotografía Profesional',
    sectionText: lang === 'en'
      ? 'Our photography work is based on capturing the essence and personality of each project, taking care of every detail of composition, lighting, and editing. We adapt to each client’s needs to offer images that convey emotions and enhance brand image.'
      : 'Nuestro trabajo de fotografía se basa en capturar la esencia y personalidad de cada proyecto, cuidando cada detalle de la composición, la luz y la edición. Nos adaptamos a las necesidades de cada cliente para ofrecer imágenes que transmitan emociones y potencien la imagen de marca.'
  };

  return (
    <section className="w-full min-h-screen bg-black">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center pt-10 text-black bg-white dark:text-white dark:bg-black">{t.title}</h1>
      {/* Primera foto */}
      <div className="w-full max-w-7xl mx-auto px-0 md:px-8">
        <div className="overflow-hidden rounded-none md:rounded-3xl shadow-2xl">
          <Image src="/assets/pagfoto.jpg" alt={lang === 'en' ? 'Professional photography' : 'Fotografía profesional'} width={1920} height={900} className="object-cover w-full h-[260px] md:h-[430px] lg:h-[520px] transition-all duration-500" priority />
        </div>
      </div>
      {/* Banner informativo */}
      <div className="w-full bg-black py-10 md:py-14 px-4 md:px-0 flex flex-col items-center border-y border-gray-800">
        <div className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFD600] mb-2">{t.bannerTitle}</h2>
          <p className="text-base md:text-lg text-white">{t.bannerText}</p>
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
            <MetodoInteractivoFoto lang={lang} />

          </div>
        </div>
      </div>
      {/* Segunda foto */}
      <div className="w-full max-w-7xl mx-auto px-0 md:px-8 mt-8 md:mt-14">
        <div className="overflow-hidden rounded-none md:rounded-3xl shadow-2xl">
          <Image src="/assets/pagfoto2.jpg" alt={lang === 'en' ? 'Professional video' : 'Video profesional'} width={1920} height={900} className="object-cover w-full h-[260px] md:h-[430px] lg:h-[520px] transition-all duration-500" />
        </div>
      </div>
      {/* Sección final: Foto full display y texto a la izquierda */}
      <div className="w-full mt-8 md:mt-14 flex flex-col md:flex-row items-stretch rounded-xl md:rounded-3xl overflow-hidden shadow-2xl min-h-[180px]">
        {/* Bloque de texto sobre fondo blanco */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 md:p-12 rounded-t-xl md:rounded-l-3xl md:rounded-tr-none">
          <div>
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-black' : 'text-black'}`}>{t.sectionTitle}</h2>
            <p className={`${theme === 'dark' ? 'text-black' : 'text-black'} text-base md:text-lg leading-relaxed max-w-md`}>
              {t.sectionText}
            </p>
          </div>
        </div>
        {/* Imagen full display */}
        <div className="w-full md:w-1/2 rounded-b-xl md:rounded-r-3xl md:rounded-bl-none overflow-hidden">
          <Image src="/assets/pagfoto3.jpg" alt={lang === 'en' ? 'Additional photography 3' : 'Fotografía adicional 3'} width={1920} height={900} className="object-cover w-full h-[260px] md:h-full lg:h-[520px] transition-all duration-500" />
        </div>
      </div>

    </section>
  );
}
