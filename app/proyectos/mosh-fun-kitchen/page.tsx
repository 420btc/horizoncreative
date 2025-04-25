"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import CarouselGallery from "../../components/CarouselGallery";

export default function MoshFunKitchen() {
  const [lang, setLang] = useState<'es'|'en'>(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
  useEffect(() => {
    function syncLang() {
      setLang(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
    }
    window.addEventListener('click', syncLang);
    return () => window.removeEventListener('click', syncLang);
  }, []);

  const t = {
    title: lang === 'en' ? 'MOSH FUN KITCHEN' : 'MOSH FUN KITCHEN',
    xhorizon: lang === 'en' ? 'X HORIZON' : 'X HORIZON',
    intro: lang === 'en'
      ? (<>
        Mosh Fun Kitchen: where <span className="text-yellow-400 font-bold">flavor</span> meets <span className="text-yellow-400 font-bold">style</span>.<br /><br />
        Elegance, attitude, and gastronomy at their best.<br /><br />
        We did a <span className="text-yellow-400 font-bold">creative session</span>, original and carefully planned, capturing not only the essence of the place but also the best of its dishes — because every bite is also a feast for the eyes.<br /><br />
        Everything was possible thanks to <span className="text-yellow-400 font-bold">joint work</span> between our creative team and the amazing <span className="text-yellow-400 font-bold">Mosh team</span>, where every idea contributed to building an image that truly conveys the experience in their space.<br /><br />
        Let us tell your story with <span className="text-yellow-400 font-bold">images</span> that whet the appetite and create <span className="text-yellow-400 font-bold">connection</span>.
      </>)
      : (<>
        Mosh Fun Kitchen: donde el <span className="text-yellow-400 font-bold">sabor</span> se encuentra con el <span className="text-yellow-400 font-bold">estilo</span>.<br /><br />
        Elegancia, actitud y gastronomía en su máxima expresión.<br /><br />
        Hicimos una <span className="text-yellow-400 font-bold">sesión creativa</span>, original y pensada al detalle, capturando no solo la esencia del lugar, sino también lo mejor de sus platos — porque cada bocado también entra por los ojos.<br /><br />
        Todo fue posible gracias a un <span className="text-yellow-400 font-bold">trabajo conjunto</span> entre nuestro equipo creativo y el increíble <span className="text-yellow-400 font-bold">equipo de Mosh</span>, donde cada idea sumó para construir una imagen que transmite lo que realmente se vive en su espacio.<br /><br />
        Déjanos contar tu historia con <span className="text-yellow-400 font-bold">imágenes</span> que abran el apetito y generen <span className="text-yellow-400 font-bold">conexión</span>.
      </>),
    col1title: lang === 'en' ? 'CREATIVE SESSION & ' : 'SESIÓN CREATIVA & ',
    col1subtitle: lang === 'en' ? 'PHOTOGRAPHY' : 'FOTOGRAFÍA',
    col1desc: lang === 'en'
      ? 'Creativity and detail to capture the essence of the space and each dish.'
      : 'Creatividad y detalle para captar la esencia del espacio y de cada plato.',
    col1list: lang === 'en'
      ? [
        'Art direction and visual concept.',
        <><span className="text-yellow-400 font-semibold">Professional food photography</span>.</>,
        'Ambience, dishes, and team in action.'
      ]
      : [
        'Dirección de arte y concepto visual.',
        <><span className="text-yellow-400 font-semibold">Fotografía gastronómica</span> profesional.</>,
        'Ambiente, platos y equipo en acción.'
      ],
    col1extra: lang === 'en' ? 'Each image whets the appetite and creates connection.' : 'Cada imagen abre el apetito y genera conexión.',
    col2title: lang === 'en' ? 'STYLE & ' : 'ESTILO & ',
    col2subtitle: lang === 'en' ? 'ATTITUDE' : 'ACTITUD',
    col2desc: lang === 'en'
      ? 'Elegance, attitude, and originality reflected in every shot.'
      : 'Elegancia, actitud y originalidad reflejados en cada toma.',
    col2list: lang === 'en'
      ? [
        'Unique and modern environments.',
        'Brand attitude and personality.',
        'Details that make a difference.'
      ]
      : [
        'Ambientes únicos y modernos.',
        'Actitud y personalidad de marca.',
        'Detalles que marcan la diferencia.'
      ],
    col2extra: lang === 'en' ? 'We convey the Mosh Fun Kitchen experience.' : 'Transmitimos la experiencia Mosh Fun Kitchen.',
    col3title: lang === 'en' ? 'TEAMWORK & ' : 'TRABAJO EN EQUIPO & ',
    col3subtitle: lang === 'en' ? 'RESULT' : 'RESULTADO',
    col3desc: lang === 'en'
      ? 'Collaboration between teams to achieve the best brand image.'
      : 'Colaboración entre equipos para lograr la mejor imagen de marca.',
    col3list: lang === 'en'
      ? [
        'Joint work with the Mosh team.',
        'Creative ideas adding value.',
        'Project/session map and roadmap.'
      ]
      : [
        'Trabajo conjunto con el equipo de Mosh.',
        'Ideas creativas sumando valor.',
        'Mapa y hoja de ruta del proyecto o sesión.'
      ],
    col3extra: '',
    galleryTop: [
      { src: '/assets/mosh5.jpg', alt: lang === 'en' ? 'Mosh Fun Kitchen 5' : 'Mosh Fun Kitchen 5' },
      { src: '/assets/mosh6.jpg', alt: lang === 'en' ? 'Mosh Fun Kitchen 6' : 'Mosh Fun Kitchen 6' },
    ],
    galleryBottom: [
      { src: '/assets/mosh1.jpg', alt: lang === 'en' ? 'Mosh Fun Kitchen 1' : 'Mosh Fun Kitchen 1' },
      { src: '/assets/mosh2.jpg', alt: lang === 'en' ? 'Mosh Fun Kitchen 2' : 'Mosh Fun Kitchen 2' },
      { src: '/assets/mosh3.jpg', alt: lang === 'en' ? 'Mosh Fun Kitchen 3' : 'Mosh Fun Kitchen 3' },
    ],
    videoAlt: lang === 'en' ? 'Mosh Fun Kitchen video' : 'Video Mosh Fun Kitchen',
    closing: lang === 'en'
      ? 'Do you have a restaurant, lounge, or gastronomic space? Let us tell your story with images that whet the appetite and create connection.'
      : '¿Tienes un restaurante, lounge o espacio gastronómico? Déjanos contar tu historia con imágenes que abran el apetito y generen conexión.',
    ctaLine: lang === 'en' ? 'Let’s boost your brand together.' : 'Potenciemos juntos tu marca.',
    ctaDesc: lang === 'en' ? 'Write to us and let’s take your business to the next level.' : 'Escríbenos y llevemos tu negocio al siguiente nivel.',
    contact: lang === 'en' ? 'Contact us!' : '¡Contáctanos!',
    restAlt: lang === 'en' ? 'Mosh Fun Kitchen restaurant' : 'Restaurante Mosh Fun Kitchen',
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 sm:pt-16">
      <h1 className="text-4xl sm:text-5xl font-black mb-8 text-white text-center mt-2">
        {t.title} <span className="text-yellow-400">{t.xhorizon}</span>
      </h1>
      <div className="w-full max-w-3xl flex flex-col items-center">
        <p className="text-lg text-gray-200 text-center mb-6">
          {t.intro}
        </p>
      </div>
      {/* Galería especial de 3 elementos */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-0 mb-12">
        <Image src={t.galleryTop[0].src} alt={t.galleryTop[0].alt} width={400} height={300} className="rounded-2xl shadow-xl object-cover w-full h-[300px]" />
        <div className="rounded-2xl shadow-xl w-full h-[300px] overflow-hidden flex items-center justify-center bg-black">
          <video autoPlay loop muted playsInline className="object-cover w-full h-full">
            <source src="/assets/mosh4.mp4" type="video/mp4" />
            {lang === 'en' ? 'Your browser does not support video playback.' : 'Tu navegador no soporta la reproducción de video.'}
          </video>
        </div>
        <Image src={t.galleryTop[1].src} alt={t.galleryTop[1].alt} width={400} height={300} className="rounded-2xl shadow-xl object-cover w-full h-[300px]" />
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
            {t.col1desc}
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
            {t.col2desc}
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
            {t.col3desc}
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            {t.col3list.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
      {/* Galería de 3 imágenes debajo de las columnas */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-0 mb-16">
        {t.galleryBottom.map((img, i) => (
          <Image key={i} src={img.src} alt={img.alt} width={400} height={300} className="rounded-2xl shadow-xl object-cover w-full" />
        ))}
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
          {t.ctaDesc}
        </p>
        <span className="inline-block mt-2 text-base font-bold text-yellow-400">{t.contact}</span>
      </div>

      {/* Imagen restaurante (rest.png) */}
      <div className="w-full flex justify-center">
        <Image
          src="/assets/rest.png"
          alt={t.restAlt}
          width={600}
          height={400}
          className="rounded-2xl shadow-xl object-cover w-full max-w-xl h-auto"
          priority={false}
        />
      </div>

    </div>
  );
}
