"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import CarouselGallery from "../../components/CarouselGallery";

export default function HospitalVirgenVictoria() {
  const [lang, setLang] = useState<'es'|'en'>(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
  useEffect(() => {
    function syncLang() {
      setLang(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
    }
    window.addEventListener('click', syncLang);
    return () => window.removeEventListener('click', syncLang);
  }, []);

  const t = {
    title: lang === 'en' ? 'PROJECT ' : 'PROYECTO ',
    subtitle: lang === 'en' ? 'UAC – Hospital Virgen de la Victoria' : 'UAC – Hospital Virgen de la Victoria',
    xhorizon: ' X HORIZON',
    mainAlt: lang === 'en' ? 'UAC App main' : 'UAC App principal',
    intro: lang === 'en'
      ? 'At Horizon we had the pleasure of developing UAC (Caregiver Support Unit), an app designed for Hospital Virgen de la Victoria (Málaga) with the aim of providing real, accessible, and close support to those who care for others.'
      : 'En Horizon tuvimos el placer de desarrollar UAC (Unidad de Atención al Cuidador), una app diseñada para el Hospital Virgen de la Victoria (Málaga) con el objetivo de ofrecer apoyo real, accesible y cercano a quienes cuidan de los demás.',
    col1title: lang === 'en' ? 'DESIGN THINKING & ' : 'DESIGN THINKING & ',
    col1subtitle: lang === 'en' ? 'USER' : 'USUARIO',
    col1desc: lang === 'en'
      ? 'The project was built on a solid Design Thinking foundation.\nWe deeply understood the end user, validated key ideas, and created a digital experience aligned with their needs.'
      : 'El proyecto se construyó desde una base sólida de Design Thinking.\nEntendimos a fondo al usuario final, validamos ideas clave y creamos una experiencia digital alineada con sus necesidades.',
    col1list: lang === 'en'
      ? [
        <><span className="text-yellow-400 font-semibold">Product conceptualization</span> of the digital product.</>,
        'User research and needs definition.',
        'Idea generation and validation.'
      ]
      : [
        <><span className="text-yellow-400 font-semibold">Conceptualización</span> del producto digital.</>,
        'Estudio de usuarios y definición de necesidades.',
        'Generación y validación de ideas.'
      ],
    col1extra: lang === 'en' ? 'The result: a clear, intuitive, and useful app.' : 'El resultado: una app clara, intuitiva y útil.',
    col2title: lang === 'en' ? 'UX/UI & ' : 'UX/UI & ',
    col2subtitle: lang === 'en' ? 'PROTOTYPING' : 'PROTOTIPADO',
    col2desc: lang === 'en'
      ? 'UX/UI design for an accessible and intuitive app.\nInteractive prototyping, testing, and final validation.'
      : 'Diseño UX/UI para una app accesible e intuitiva.\nPrototipado interactivo, testeo y validación final.',
    col2list: lang === 'en'
      ? [
        'User experience design.',
        'Interactive prototyping.',
        'Testing and final validation.'
      ]
      : [
        'Diseño de experiencia de usuario.',
        'Prototipado interactivo.',
        'Testeo y validación final.'
      ],
    col2extra: lang === 'en' ? 'Aligned to the needs of the user and the hospital.' : 'Alineado a las necesidades del usuario y del hospital.',
    col3title: lang === 'en' ? 'VISUAL IDENTITY & ' : 'IDENTIDAD VISUAL & ',
    col3subtitle: lang === 'en' ? 'COMMUNICATION' : 'COMUNICACIÓN',
    col3desc: lang === 'en'
      ? 'Visual development and graphic communication adapted to the hospital’s corporate visual line.'
      : 'Desarrollo visual y comunicación gráfica adaptada a la línea visual corporativa del hospital.',
    col3list: lang === 'en'
      ? [
        'Creation of logo and visual identity.',
        'Definition of color palette and typography.',
        'Design of support materials (posters, brochures, signage).'
      ]
      : [
        'Creación de logotipo e identidad visual.',
        'Definición de paleta cromática y tipografías.',
        'Diseño de materiales de apoyo (cartelería, panfletos, señalética).'
      ],
    col3extra: lang === 'en' ? 'We combine design, functionality, and purpose.' : 'Unimos diseño, funcionalidad y propósito.',
    closing: lang === 'en'
      ? 'At Horizon we don’t just design digital products, we design experiences. This project reflects our ability to combine design, functionality, and purpose. If you are looking to develop an app from scratch, with a team that understands your audience and takes care of every detail, we are ready to help you build the solution you need.'
      : 'En Horizon no solo diseñamos productos digitales, diseñamos experiencias. Este proyecto refleja nuestra capacidad para unir diseño, funcionalidad y propósito. Si estás buscando desarrollar una app desde cero, con un equipo que entiende a tu audiencia y cuida cada detalle, estamos listos para ayudarte a construir la solución que necesitas.',
    ctaLine: lang === 'en' ? 'DO YOU NEED AN APP FOR YOUR HOSPITAL OR INSTITUTION?' : '¿NECESITAS UNA APP PARA TU HOSPITAL O INSTITUCIÓN?',
    ctaDesc: lang === 'en'
      ? 'We make sure your digital solution is useful, accessible, and memorable.\nDiscover how Horizon can help you stand out.'
      : 'Nosotros nos encargamos de que tu solución digital sea útil, accesible y memorable.\nDescubre cómo Horizon puede ayudarte a destacar.',
    contact: lang === 'en' ? 'Contact us!' : '¡Contáctanos!',
    gallery: [
      { src: "/assets/hosp.jpeg", alt: lang === 'en' ? 'Hospital Virgen de la Victoria 1' : 'Hospital Virgen de la Victoria 1' },
      { src: "/assets/hosp2.jpeg", alt: lang === 'en' ? 'Hospital Virgen de la Victoria 2' : 'Hospital Virgen de la Victoria 2' },
      { src: "/assets/hosp3.jpeg", alt: lang === 'en' ? 'Hospital Virgen de la Victoria 3' : 'Hospital Virgen de la Victoria 3' },
    ],
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 sm:pt-16">
      <h1 className="text-4xl sm:text-5xl font-black mb-8 text-white text-center mt-2">
        {t.title}<span className="text-yellow-400">{t.subtitle}</span>{t.xhorizon}
      </h1>
      <div className="w-full max-w-3xl flex flex-col items-center">
        <Image
          src="/assets/hospital1.png"
          alt={t.mainAlt}
          width={900}
          height={500}
          className="rounded-3xl shadow-2xl object-contain w-full mb-8"
          priority
        />
        <p className="text-lg text-gray-200 text-center mb-6">
          {t.intro}
        </p>
      </div>
      {/* Línea amarilla SVG */}
      <div className="w-full flex justify-center relative mb-10">
        <svg className="w-[90%] h-20" width="90%" height="80" viewBox="0 0 900 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
          <path d="M 80 70 Q 180 20 300 20 Q 450 20 450 20 Q 600 20 600 20 Q 720 20 820 70" stroke="#facc15" strokeWidth="7" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      {/* Tres columnas */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-0 mb-16">
        {/* Columna 1 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
            {t.col1title}<span className="text-white">{t.col1subtitle}</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            {t.col1desc.split('\n').map((str, i) => <span key={i}>{str}<br /></span>)}
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            {t.col1list.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p className="text-base text-gray-200 text-center">
            {t.col1extra}
          </p>
        </div>
        {/* Columna 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
            {t.col2title}<span className="text-white">{t.col2subtitle}</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            {t.col2desc.split('\n').map((str, i) => <span key={i}>{str}<br /></span>)}
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            {t.col2list.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p className="text-base text-gray-200 text-center">
            {t.col2extra}
          </p>
        </div>
        {/* Columna 3 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
            {t.col3title}<span className="text-white">{t.col3subtitle}</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            {t.col3desc.split('\n').map((str, i) => <span key={i}>{str}<br /></span>)}
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            {t.col3list.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p className="text-base text-gray-200 text-center">
            {t.col3extra}
          </p>
        </div>
      </div>
      {/* Cierre inspiracional */}
      <div className="w-full max-w-3xl flex flex-col items-center mb-10">
        <p className="text-lg text-gray-200 text-center mb-4">
          {t.closing}
        </p>
        <div className="w-full flex justify-center">
          <svg className="w-[60%] h-10" width="60%" height="40" viewBox="0 0 600 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
            <path d="M 50 35 Q 150 10 300 10 Q 450 10 550 35" stroke="#facc15" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <h2 className="text-2xl font-black mt-6 mb-2 text-yellow-400 text-center">
          {t.ctaLine}
        </h2>
        <p className="text-lg text-gray-200 text-center">
          {t.ctaDesc.split('\n').map((str, i) => <span key={i}>{str}<br /></span>)}
        </p>
        <span className="inline-block mt-2 text-base font-bold text-yellow-400">{t.contact}</span>
      </div>
      {/* Galería de imágenes */}
      <div className="w-full max-w-5xl mx-auto px-2 mb-16">
        <CarouselGallery
          images={t.gallery}
        />
      </div>
    </div>
  );
}
