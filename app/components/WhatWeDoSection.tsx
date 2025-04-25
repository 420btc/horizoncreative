"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const skillsES = [
  { name: "Branding Creativo", value: 95, color: "bg-yellow-400" },
  { name: "Diseño Web", value: 92, color: "bg-blue-400" },
  { name: "Social Media", value: 90, color: "bg-pink-500" },
  { name: "Fotografía & Video", value: 88, color: "bg-green-400" },
  { name: "Marketing Digital", value: 85, color: "bg-purple-500" },
];
const skillsEN = [
  { name: "Creative Branding", value: 95, color: "bg-yellow-400" },
  { name: "Web Design", value: 92, color: "bg-blue-400" },
  { name: "Social Media", value: 90, color: "bg-pink-500" },
  { name: "Photography & Video", value: 88, color: "bg-green-400" },
  { name: "Digital Marketing", value: 85, color: "bg-purple-500" },
];

const wordsRow1ES = [
  { text: "Branding", color: "text-yellow-400" },
  { text: "Webs", color: "text-white" },
  { text: "Naming", color: "text-yellow-400" },
  { text: "Copywriting", color: "text-white" },
  { text: "Estrategia", color: "text-yellow-400" },
  { text: "Motion Graphics", color: "text-white" },
  { text: "UX/UI", color: "text-yellow-400" },
  { text: "Fotografía", color: "text-white" },
  { text: "Video", color: "text-yellow-400" },
  { text: "Campañas", color: "text-white" },
  { text: "Email Marketing", color: "text-yellow-400" },
  { text: "SEO", color: "text-white" },
  { text: "SEM", color: "text-yellow-400" },
  { text: "Diseño Gráfico", color: "text-white" },
  { text: "Storytelling", color: "text-yellow-400" },
  { text: "Packaging", color: "text-white" },
  { text: "Diseño Editorial", color: "text-yellow-400" },
  { text: "Producción Audiovisual", color: "text-white" },
  { text: "Influencers", color: "text-yellow-400" },
  { text: "Creatividad", color: "text-white" },
];
const wordsRow1EN = [
  { text: "Branding", color: "text-yellow-400" },
  { text: "Websites", color: "text-white" },
  { text: "Naming", color: "text-yellow-400" },
  { text: "Copywriting", color: "text-white" },
  { text: "Strategy", color: "text-yellow-400" },
  { text: "Motion Graphics", color: "text-white" },
  { text: "UX/UI", color: "text-yellow-400" },
  { text: "Photography", color: "text-white" },
  { text: "Video", color: "text-yellow-400" },
  { text: "Campaigns", color: "text-white" },
  { text: "Email Marketing", color: "text-yellow-400" },
  { text: "SEO", color: "text-white" },
  { text: "SEM", color: "text-yellow-400" },
  { text: "Graphic Design", color: "text-white" },
  { text: "Storytelling", color: "text-yellow-400" },
  { text: "Packaging", color: "text-white" },
  { text: "Editorial Design", color: "text-yellow-400" },
  { text: "Audiovisual Production", color: "text-white" },
  { text: "Influencers", color: "text-yellow-400" },
  { text: "Creativity", color: "text-white" },
];

const wordsRow2ES = [
  { text: "Social Media", color: "text-yellow-400" },
  { text: "Consultoría", color: "text-white" },
  { text: "Publicidad", color: "text-yellow-400" },
  { text: "E-commerce", color: "text-white" },
  { text: "Ilustración", color: "text-yellow-400" },
  { text: "Identidad Visual", color: "text-white" },
  { text: "Marketing Automation", color: "text-yellow-400" },
  { text: "Analítica Digital", color: "text-white" },
  { text: "Desarrollo Apps", color: "text-yellow-400" },
  { text: "Community Management", color: "text-white" },
  { text: "Relaciones Públicas", color: "text-yellow-400" },
  { text: "Press Kits", color: "text-white" },
  { text: "Workshops", color: "text-yellow-400" },
  { text: "Estrategia de Contenidos", color: "text-white" },
  { text: "Growth Hacking", color: "text-yellow-400" },
  { text: "Fotografía de Producto", color: "text-white" },
  { text: "Video Corporativo", color: "text-yellow-400" },
  { text: "Branding Sonoro", color: "text-white" },
  { text: "Presentaciones Creativas", color: "text-yellow-400" },
  { text: "Customer Experience", color: "text-white" },
];
const wordsRow2EN = [
  { text: "Social Media", color: "text-yellow-400" },
  { text: "Consulting", color: "text-white" },
  { text: "Advertising", color: "text-yellow-400" },
  { text: "E-commerce", color: "text-white" },
  { text: "Illustration", color: "text-yellow-400" },
  { text: "Visual Identity", color: "text-white" },
  { text: "Marketing Automation", color: "text-yellow-400" },
  { text: "Digital Analytics", color: "text-white" },
  { text: "App Development", color: "text-yellow-400" },
  { text: "Community Management", color: "text-white" },
  { text: "Public Relations", color: "text-yellow-400" },
  { text: "Press Kits", color: "text-white" },
  { text: "Workshops", color: "text-yellow-400" },
  { text: "Content Strategy", color: "text-white" },
  { text: "Growth Hacking", color: "text-yellow-400" },
  { text: "Product Photography", color: "text-white" },
  { text: "Corporate Video", color: "text-yellow-400" },
  { text: "Sound Branding", color: "text-white" },
  { text: "Creative Presentations", color: "text-yellow-400" },
  { text: "Customer Experience", color: "text-white" },
];

export default function WhatWeDoSection() {
  const [lang, setLang] = useState<'es'|'en'>(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
  useEffect(() => {
    function syncLang() {
      setLang(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
    }
    window.addEventListener('click', syncLang);
    return () => window.removeEventListener('click', syncLang);
  }, []);

  const t = {
    title: lang === 'en' ? 'What We Do' : 'Lo que hacemos',
    contact: lang === 'en' ? 'Contact Us' : 'Contáctanos',
    skills: lang === 'en' ? skillsEN : skillsES,
    wordsRow1: lang === 'en' ? wordsRow1EN : wordsRow1ES,
    wordsRow2: lang === 'en' ? wordsRow2EN : wordsRow2ES,
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (inView) setAnimateSkills(true);
  }, [inView]);

  return (
    <section className="w-full py-24 px-2 md:px-0 bg-black flex flex-col items-center" id="whatwedo">
      {/* Título animado desplegable */}
      <motion.h2
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="origin-top text-5xl md:text-6xl font-black text-center text-white mb-16 select-none"
      >
        {t.title}
      </motion.h2>

      {/* Frases/áreas interactivas */}
      {/* Tiras animadas tipo tren/marquee, dos filas, bucle infinito */}
      <div className="w-full flex flex-col items-center gap-y-6 mb-14 select-none overflow-hidden">
        {/* Fila superior: izquierda a derecha */}
        <motion.div
          className="flex flex-row whitespace-nowrap gap-x-14"
          style={{ width: 'max-content', paddingLeft: '12vw', paddingRight: '12vw' }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 240, ease: "linear" }}
        >
          {[...t.wordsRow1, ...t.wordsRow1, ...t.wordsRow1].map((h, i) => (
            <span
              key={h.text + i}
              className={`text-5xl md:text-6xl font-black ${h.color} drop-shadow-lg text-center px-4`}
              style={{ lineHeight: '1.08' }}
            >
              {h.text}
            </span>
          ))}
        </motion.div>
        {/* Fila inferior: derecha a izquierda */}
        <motion.div
          className="flex flex-row whitespace-nowrap gap-x-14"
          style={{ width: 'max-content', paddingLeft: '12vw', paddingRight: '12vw' }}
          animate={{ x: ["0%", "50%"] }}
          transition={{ repeat: Infinity, duration: 240, ease: "linear" }}
        >
          {[...t.wordsRow2, ...t.wordsRow2, ...t.wordsRow2].map((h, i) => (
            <span
              key={h.text + i}
              className={`text-5xl md:text-6xl font-black ${h.color} drop-shadow-lg text-center px-4`}
              style={{ lineHeight: '1.08' }}
            >
              {h.text}
            </span>
          ))}
        </motion.div>

        {/* Botón de contacto */}
        <div className="w-full flex justify-center mt-20">
          <a
            href="/contacto"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded-full shadow-md transition-colors duration-200 text-lg md:text-xl"
          >
            {t.contact}
          </a>
        </div>
      </div>


    </section>
  );
}
