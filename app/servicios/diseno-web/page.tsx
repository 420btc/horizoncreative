"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function DisenoWebGaleria() {
  return (
    <section className="w-full min-h-screen bg-black">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-white pt-10">Diseño Web</h1>
      {/* Galería de imágenes grandes */}
      <div className="w-full max-w-4xl mx-auto px-0 md:px-8 flex flex-col gap-8">
  <div className="overflow-hidden rounded-3xl shadow-2xl mb-4">
    <Image src="/assets/web1.jpg" alt="Diseño web destacado" width={1920} height={900} className="object-cover w-full h-[260px] md:h-[430px] lg:h-[520px] transition-all duration-500" priority />
  </div>
</div>
      {/* Banner informativo */}
      <div className="w-full bg-black py-10 md:py-14 px-4 md:px-0 flex flex-col items-center border-y border-gray-800">
        <div className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFD600] mb-2">Diseño web a medida, creativo y funcional</h2>
          <p className="text-base md:text-lg text-gray-900 dark:text-gray-200">Creamos sitios web personalizados que combinan estética, funcionalidad y tecnología de vanguardia. Nuestro enfoque está en la experiencia de usuario, la velocidad y la adaptabilidad para cualquier dispositivo.</p>
        </div>
      </div>
      {/* Línea amarilla animada y metodología */}
      <div className="w-full flex flex-col items-center py-10 bg-neutral-900 mb-8 md:mb-14">
        <div className="max-w-2xl w-full flex flex-col items-center">
          <div className="relative w-full flex flex-col gap-8 md:gap-12">
            {/* Línea amarilla animada */}
            <motion.div
              className="hidden md:block absolute z-0"
              style={{ top: '8px', left: '4%', right: '4%', height: '2px' }}
              initial={{ width: 0 }}
              animate={{ width: '92%' }}
              transition={{ duration: 1 }}
            >
              <div className="h-1 w-full bg-[#FFD600]" style={{ height: 2 }} />
            </motion.div>
            {/* Puntos y frases interactivos */}
            <MetodoInteractivoDisenoWeb />
          </div>
        </div>
      </div>
      {/* Sección final: Foto full display y texto a la izquierda */}
      <div className="w-full mt-8 md:mt-14 flex flex-col md:flex-row items-stretch rounded-xl md:rounded-3xl overflow-hidden shadow-2xl min-h-[180px]">
        {/* Bloque de texto sobre fondo blanco */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 md:p-12 rounded-t-xl md:rounded-l-3xl md:rounded-tr-none">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Webs que enamoran y convierten</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md">
              Cada proyecto es único: analizamos tu marca, tus objetivos y tu público para diseñar una web que destaque y ayude a crecer tu negocio. ¡Presume de web profesional!
            </p>
          </div>
        </div>
        {/* Imagen full display */}
        <div className="w-full md:w-1/2 rounded-b-xl md:rounded-r-3xl md:rounded-bl-none overflow-hidden">
          <Image src="/assets/web2.jpg" alt="Diseño web destacado" width={1920} height={900} className="object-cover w-full h-[260px] md:h-full lg:h-[520px] transition-all duration-500" />
        </div>
      </div>
    </section>
  );
}

function MetodoInteractivoDisenoWeb() {
  const points = [
    "Análisis y estrategia personalizada",
    "Diseño UI/UX creativo",
    "Desarrollo optimizado",
    "Entrega y soporte continuo"
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


