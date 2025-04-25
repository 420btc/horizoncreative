"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import CarouselGallery from "../../components/CarouselGallery";

export default function TennisClubMarbella() {
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
    subtitle: lang === 'en' ? 'TENNIS CLUB MARBELLA' : 'TENNIS CLUB MARBELLA',
    xhorizon: ' X HORIZON',
    mainAlt: lang === 'en' ? 'Tennis Club Marbella main' : 'Tennis Club Marbella principal',
    intro: lang === 'en'
      ? 'At Horizon, we transformed the image of Tennis Club Marbella into a modern and desirable brand. From visual identity to digital communication, we enhanced its presence and exclusivity on the Costa del Sol.'
      : 'En Horizon, transformamos la imagen del Tennis Club Marbella en una marca moderna y deseada. Desde la identidad visual hasta la comunicación digital, potenciamos su presencia y exclusividad en la Costa del Sol.',
    col1title: lang === 'en' ? 'VISUAL IDENTITY & ' : 'IDENTIDAD VISUAL & ',
    col1subtitle: lang === 'en' ? 'BRANDING' : 'BRANDING',
    col1desc: lang === 'en'
      ? 'Elegant and sporty image.\nReflects exclusivity and tennis tradition.'
      : 'Imagen elegante y deportiva.\nReflejo de exclusividad y tradición tenística.',
    col1list: lang === 'en'
      ? [
        <><span className="text-yellow-400 font-semibold">Renewed logo</span> and sporty color palette.</>,
        'Brand manual and applications on club materials.',
        <><span className="text-yellow-400 font-semibold">Stationery and signage</span> personalized.</>
      ]
      : [
        <><span className="text-yellow-400 font-semibold">Logotipo renovado</span> y paleta cromática deportiva.</>,
        'Manual de marca y aplicaciones en materiales del club.',
        <><span className="text-yellow-400 font-semibold">Papelería y señalética</span> personalizada.</>
      ],
    col2title: lang === 'en' ? 'SOCIAL MEDIA & ' : 'REDES SOCIALES & ',
    col2subtitle: lang === 'en' ? 'DIGITAL COMMUNICATION' : 'COMUNICACIÓN DIGITAL',
    col2desc: lang === 'en'
      ? 'Digital strategy to connect with members and new audiences.\nVisual content that inspires community and belonging.'
      : 'Estrategia digital para conectar con socios y nuevos públicos.\nContenido visual que inspira comunidad y pertenencia.',
    col2list: lang === 'en'
      ? [
        <><span className="text-yellow-400 font-semibold">Full management</span> of Instagram and Facebook.</>,
        'Content calendar and thematic campaigns.',
        <><span className="text-yellow-400 font-semibold">Professional photography and video</span> of events and activities.</>
      ]
      : [
        <><span className="text-yellow-400 font-semibold">Gestión integral</span> de Instagram y Facebook.</>,
        'Calendario de publicaciones y campañas temáticas.',
        <><span className="text-yellow-400 font-semibold">Fotografía y video</span> profesional de eventos y actividades.</>
      ],
    col3title: lang === 'en' ? 'CLUB EXPERIENCE & ' : 'EXPERIENCIA DE CLUB & ',
    col3subtitle: lang === 'en' ? 'EVENTS' : 'EVENTOS',
    col3desc: lang === 'en'
      ? 'We enhanced the experience for members and visitors with clear and attractive communication.'
      : 'Potenciamos la experiencia de los socios y visitantes con una comunicación clara y atractiva.',
    col3list: lang === 'en'
      ? [
        'Exclusive events and tournaments with their own identity.',
        <><span className="text-yellow-400 font-semibold">Promotional materials</span> and merchandising.</>,
        'Newsletter and effective internal communication.'
      ]
      : [
        'Eventos exclusivos y torneos con identidad propia.',
        <><span className="text-yellow-400 font-semibold">Material promocional</span> y merchandising.</>,
        'Newsletter y comunicación interna efectiva.'
      ],
    closing: lang === 'en'
      ? 'Tennis Club Marbella now conveys a modern and exclusive image, attracting new members and retaining existing ones. Our comprehensive approach has elevated the club’s perception and reach both on and off the court.'
      : 'El Tennis Club Marbella ahora transmite una imagen moderna y exclusiva, atrayendo a nuevos socios y fidelizando a los existentes. Nuestro enfoque integral ha elevado la percepción y el alcance del club dentro y fuera de la pista.',
    ctaLine: lang === 'en' ? 'DO YOU WANT YOUR CLUB TO TAKE THE NEXT STEP?' : '¿QUIERES QUE TU CLUB DÉ EL SIGUIENTE PASO?',
    ctaDesc: lang === 'en'
      ? 'At Horizon, we turn your club into a memorable brand.\nDiscover how we can help you stand out.'
      : 'En Horizon convertimos tu club en una marca memorable.\nDescubre cómo podemos ayudarte a destacar.',
    contact: lang === 'en' ? 'Contact us!' : '¡Contáctanos!',
    gallery: [
      { src: "/assets/golfclub-1.jpg", alt: lang === 'en' ? 'Golf Club Branding Example 1' : 'Golf Club 1' },
      { src: "/assets/tennisnueva.jpeg", alt: lang === 'en' ? 'Tennis Club Marbella New' : 'Tennis Nueva' },
      { src: "/assets/tennis3.jpeg", alt: lang === 'en' ? 'Tennis Club Marbella 3' : 'Tennis 3' },
    ],
    galleryAlt: lang === 'en' ? 'Tennis Club Marbella gallery image' : 'Imagen galería Tennis Club Marbella',
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 sm:pt-16">
      <h1 className="text-4xl sm:text-5xl font-black mb-8 text-white text-center mt-2">
        {t.title}<span className="text-yellow-400">{t.subtitle}</span>{t.xhorizon}
      </h1>
      <div className="w-full max-w-3xl flex flex-col items-center">
        <Image
          src="/assets/golfmovil.png"
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
      <div className="w-full max-w-3xl mx-auto px-2 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {t.gallery.map((img, i) => (
            <Image
              key={i}
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="rounded-xl shadow-xl object-cover w-full h-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
