"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import CarouselGallery from "../../components/CarouselGallery";


export default function EnbocaGastrobar() {
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
    subtitle: lang === 'en' ? 'ENBOCA GASTROBAR' : 'ENBOCA GASTROBAR',
    xhorizon: ' X HORIZON',
    mainAlt: lang === 'en' ? 'Enboca Gastrobar main' : 'Enboca Gastrobar principal',
    intro: lang === 'en'
      ? 'At Horizon, we turn ideas into visual experiences that connect. In our work with Enboca Gastrobar, we show how a gastronomic brand can evolve with strategy, creativity, and a powerful visual identity.'
      : 'En Horizon, transformamos ideas en experiencias visuales que conectan. En nuestro trabajo con Enboca Gastrobar, demostramos cómo una marca gastronómica puede evolucionar con estrategia, creatividad y una identidad visual potente.',
    col1title: lang === 'en' ? 'VISUAL IDENTITY & ' : 'IDENTIDAD VISUAL & ',
    col1subtitle: lang === 'en' ? 'SOCIAL MEDIA' : 'REDES SOCIALES',
    col1desc: lang === 'en'
      ? 'Enboca is more than a restaurant: it is an experience.\nWe designed a strong and consistent visual line.'
      : 'Enboca es más que un restaurante: es una experiencia.\nDiseñamos una línea visual sólida y coherente.',
    col1list: lang === 'en'
      ? [
        <><span className="text-yellow-400 font-semibold">Modern aesthetic</span> and attractive.</>,
        'Purposeful content.',
        <><span className="text-yellow-400 font-semibold">Stories</span> that invite you to experience Enboca.</>
      ]
      : [
        <><span className="text-yellow-400 font-semibold">Estética moderna</span> y atractiva.</>,
        'Contenido con propósito.',
        <><span className="text-yellow-400 font-semibold">Historias</span> que invitan a vivir Enboca.</>
      ],
    col1extra: lang === 'en' ? 'We build community and reflect its essence.' : 'Generamos comunidad y reflejamos su esencia.',
    col2title: lang === 'en' ? 'PROFESSIONAL CONTENT ' : 'PRODUCCIÓN DE ',
    col2subtitle: lang === 'en' ? 'PRODUCTION' : 'CONTENIDO PROFESIONAL',
    col2desc: lang === 'en'
      ? 'We reflect Enboca’s quality.\nVisual production at its best.'
      : 'Reflejamos la calidad de Enboca.\nProducción visual a la altura.',
    col2list: lang === 'en'
      ? [
        <><span className="text-yellow-400 font-semibold">Photography</span> of dishes and spaces.</>,
        'Creative and promotional videos.',
        <><span className="text-yellow-400 font-semibold">Content</span> designed to stand out.</>
      ]
      : [
        <><span className="text-yellow-400 font-semibold">Fotografía</span> de platos y espacios.</>,
        'Videos creativos y promocionales.',
        <><span className="text-yellow-400 font-semibold">Contenido</span> pensado para destacar.</>
      ],
    col2extra: lang === 'en' ? 'Engage, share, and elevate the brand.' : 'Engancha, comparte y eleva la marca.',
    col3title: lang === 'en' ? 'MARKETING ' : 'ESTRATEGIA DE ',
    col3subtitle: lang === 'en' ? 'STRATEGY' : 'MARKETING',
    col3desc: lang === 'en'
      ? 'Not just image: communication with impact.\nDigital strategy focused on results.'
      : 'No solo imagen: comunicación con impacto.\nEstrategia digital centrada en resultados.',
    col3list: lang === 'en'
      ? [
        <><span className="text-yellow-400 font-semibold">Brand positioning</span>.</>,
        'Attracting new customers.',
        <><span className="text-yellow-400 font-semibold">Community loyalty</span>.</>
      ]
      : [
        <><span className="text-yellow-400 font-semibold">Posicionamiento</span> de marca.</>,
        'Atracción de nuevos clientes.',
        <><span className="text-yellow-400 font-semibold">Fidelización</span> de la comunidad.</>
      ],
    col3extra: lang === 'en' ? 'Presence, connection, and conversion.' : 'Presencia, conexión y conversión.',
    closing: lang === 'en'
      ? 'With Enboca Gastrobar, we prove that at Horizon we not only create content, but also drive gastronomic brands toward recognition and success, taking care of every detail and enhancing their essence to achieve real results.'
      : 'Con Enboca Gastrobar demostramos que en Horizon no solo creamos contenido, sino que impulsamos marcas gastronómicas hacia el reconocimiento y el éxito, cuidando cada detalle y potenciando su esencia para alcanzar resultados reales.',
    ctaLine: lang === 'en' ? 'DO YOU HAVE A RESTAURANT WITH SOUL?' : '¿TIENES UN RESTAURANTE CON ALMA?',
    ctaDesc: lang === 'en'
      ? 'We turn it into a brand that leaves a mark.\nDiscover what Horizon can do for your project.'
      : 'Nosotros lo convertimos en una marca que deja huella.\nDescubre lo que Horizon puede hacer por tu proyecto.',
    gallery: [
      { src: "/assets/enboca1.jpg", alt: lang === 'en' ? 'Enboca Gastrobar 1' : 'Enboca Gastrobar 1' },
      { src: "/assets/enboca2.jpg", alt: lang === 'en' ? 'Enboca Gastrobar 2' : 'Enboca Gastrobar 2' },
      { src: "/assets/enboca3.jpg", alt: lang === 'en' ? 'Enboca Gastrobar 3' : 'Enboca Gastrobar 3' },
      { src: "/assets/enboca4.jpg", alt: lang === 'en' ? 'Enboca Gastrobar 4' : 'Enboca Gastrobar 4' },
      { src: "/assets/enboca5.jpg", alt: lang === 'en' ? 'Enboca Gastrobar 5' : 'Enboca Gastrobar 5' },
      { src: "/assets/enboca6.jpg", alt: lang === 'en' ? 'Enboca Gastrobar 6' : 'Enboca Gastrobar 6' },
    ],
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 sm:pt-16">
      <h1 className="text-4xl sm:text-5xl font-black mb-8 text-white text-center mt-2">
        {t.title}<span className="text-yellow-400">{t.subtitle}</span>{t.xhorizon}
      </h1>
      <div className="w-full max-w-3xl flex flex-col items-center">
        <Image
          src="/assets/pr1.png"
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
      </div>

      {/* Collage de imágenes */}
      <div className="w-full max-w-5xl mx-auto px-2 mb-16">
        <CarouselGallery
          images={t.gallery}
        />
      </div>
    </div>
  );
}
