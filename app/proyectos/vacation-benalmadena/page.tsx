"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import CarouselGallery from "../../components/CarouselGallery";


export default function VacationBenalmadena() {
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
    subtitle: lang === 'en' ? 'VACATION BENALMÁDENA' : 'VACATION BENALMÁDENA',
    xhorizon: ' X HORIZON',
    mainAlt: lang === 'en' ? 'Vacation Benalmádena Project Horizon' : 'Vacation Benalmádena Proyecto Horizon',
    intro: lang === 'en'
      ? 'At Horizon, we understand that every apartment is more than just accommodation: it is an experience. With Vacation Benalmádena, we carried out a comprehensive project to enhance their offering as a vacation rental agency and position them as a benchmark on the Costa del Sol.'
      : 'En Horizon, entendemos que cada apartamento es más que un alojamiento: es una experiencia. Con Vacation Benalmádena, llevamos a cabo un proyecto integral para realzar su propuesta como agencia de alquiler vacacional y posicionarla como referente en la Costa del Sol.',
    col1title: lang === 'en' ? 'VISUAL IDENTITY & ' : 'IDENTIDAD VISUAL & ',
    col1subtitle: lang === 'en' ? 'SOCIAL MEDIA' : 'REDES SOCIALES',
    col1desc: lang === 'en'
      ? 'Fresh, professional, and consistent image.\nTrust and travel inspiration.'
      : 'Imagen fresca, profesional y coherente.\nConfianza y ganas de viajar.',
    col1list: lang === 'en'
      ? [
        <><span className="text-yellow-400 font-semibold">Mediterranean style</span> in the image.</>,
        'Attractive and professional content.',
        <><span className="text-yellow-400 font-semibold">Feed</span> that connects with travelers.</>
      ]
      : [
        <><span className="text-yellow-400 font-semibold">Estilo mediterráneo</span> en la imagen.</>,
        'Contenido atractivo y profesional.',
        <><span className="text-yellow-400 font-semibold">Feed</span> que conecta con viajeros.</>
      ],
    col1extra: lang === 'en' ? 'We showcase the best of each property.' : 'Mostramos lo mejor de cada propiedad.',
    col2title: lang === 'en' ? 'PHOTOGRAPHY & ' : 'FOTOGRAFÍA & ',
    col2subtitle: lang === 'en' ? 'PROFESSIONAL VIDEO' : 'VIDEO PROFESIONAL',
    col2desc: lang === 'en'
      ? 'Images that inspire bookings.\nVideos that showcase the experience.'
      : 'Imágenes que inspiran a reservar.\nVideos que muestran la experiencia.',
    col2list: lang === 'en'
      ? [
        <><span className="text-yellow-400 font-semibold">High-quality photography</span>.</>,
        'Full promotional videos.',
        <><span className="text-yellow-400 font-semibold">Content</span> for campaigns and social media.</>
      ]
      : [
        <><span className="text-yellow-400 font-semibold">Fotografía</span> de alta calidad.</>,
        'Videos promocionales completos.',
        <><span className="text-yellow-400 font-semibold">Contenido</span> para campañas y RRSS.</>
      ],
    col2extra: lang === 'en' ? 'Every detail counts to stand out.' : 'Cada detalle suma para destacar.',
    col3title: lang === 'en' ? 'DIGITAL MARKETING ' : 'ESTRATEGIA DE ',
    col3subtitle: lang === 'en' ? 'STRATEGY' : 'MARKETING DIGITAL',
    col3desc: lang === 'en'
      ? 'Results-oriented strategy.\nConnection with the ideal traveler.'
      : 'Estrategia orientada a resultados.\nConexión con el viajero ideal.',
    col3list: lang === 'en'
      ? [
        <><span className="text-yellow-400 font-semibold">Increase in direct bookings</span>.</>,
        'Improved online positioning.',
        <><span className="text-yellow-400 font-semibold">Trust</span> from new customers.</>
      ]
      : [
        <><span className="text-yellow-400 font-semibold">Aumento de reservas</span> directas.</>,
        'Mejora del posicionamiento online.',
        <><span className="text-yellow-400 font-semibold">Confianza</span> en nuevos clientes.</>
      ],
    col3extra: lang === 'en' ? 'We highlight what makes each property unique.' : 'Destacamos lo que hace única cada propiedad.',
    closing: lang === 'en'
      ? 'This project reflects how at Horizon we take visual and strategic communication to the next level, turning every property into a desirable and memorable experience.'
      : 'Este proyecto refleja cómo en Horizon llevamos la comunicación visual y estratégica al siguiente nivel, convirtiendo cada propiedad en una experiencia deseable y memorable.',
    ctaLine: lang === 'en' ? 'DO YOU HAVE A VACATION AGENCY?' : '¿TIENES UNA AGENCIA VACACIONAL?',
    ctaDesc: lang === 'en'
      ? 'We make sure the world sees it as it deserves.\nDiscover how Horizon can help you stand out.'
      : 'Nosotros nos encargamos de que el mundo la vea como merece.\nDescubre cómo Horizon puede ayudarte a destacar.',
    contact: lang === 'en' ? 'Contact us!' : '¡Contáctanos!',
    gallery: [
      { src: "/assets/vacation1.jpg", alt: lang === 'en' ? 'Vacation Benalmádena 1' : 'Vacation Benalmádena 1' },
      { src: "/assets/vacation2.jpg", alt: lang === 'en' ? 'Vacation Benalmádena 2' : 'Vacation Benalmádena 2' },
      { src: "/assets/vacation3.jpg", alt: lang === 'en' ? 'Vacation Benalmádena 3' : 'Vacation Benalmádena 3' },
      { src: "/assets/vacation4.jpg", alt: lang === 'en' ? 'Vacation Benalmádena 4' : 'Vacation Benalmádena 4' },
      { src: "/assets/vacation5.jpg", alt: lang === 'en' ? 'Vacation Benalmádena 5' : 'Vacation Benalmádena 5' },
      { src: "/assets/vacation6.jpg", alt: lang === 'en' ? 'Vacation Benalmádena 6' : 'Vacation Benalmádena 6' },
    ],
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 sm:pt-16">
      <h1 className="text-4xl sm:text-5xl font-black mb-8 text-white text-center mt-2">
        {t.title}<span className="text-yellow-400">{t.subtitle}</span>{t.xhorizon}
      </h1>
      <div className="w-full max-w-3xl flex flex-col items-center">
        <Image
          src="/assets/pr2.png"
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
