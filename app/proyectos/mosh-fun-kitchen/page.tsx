"use client";
import Image from "next/image";
import CarouselGallery from "../../components/CarouselGallery";

export default function MoshFunKitchen() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 sm:pt-16">
      <h1 className="text-4xl sm:text-5xl font-black mb-8 text-white text-center mt-2">
        MOSH FUN KITCHEN <span className="text-yellow-400">X HORIZON</span>
      </h1>
      <div className="w-full max-w-3xl flex flex-col items-center">
        <p className="text-lg text-gray-200 text-center mb-6">
          Mosh Fun Kitchen: donde el <span className="text-yellow-400 font-bold">sabor</span> se encuentra con el <span className="text-yellow-400 font-bold">estilo</span>.<br /><br />
          Elegancia, actitud y gastronomía en su máxima expresión.<br /><br />
          Hicimos una <span className="text-yellow-400 font-bold">sesión creativa</span>, original y pensada al detalle, capturando no solo la esencia del lugar, sino también lo mejor de sus platos — porque cada bocado también entra por los ojos.<br /><br />
          Todo fue posible gracias a un <span className="text-yellow-400 font-bold">trabajo conjunto</span> entre nuestro equipo creativo y el increíble <span className="text-yellow-400 font-bold">equipo de Mosh</span>, donde cada idea sumó para construir una imagen que transmite lo que realmente se vive en su espacio.<br /><br />
          Déjanos contar tu historia con <span className="text-yellow-400 font-bold">imágenes</span> que abran el apetito y generen <span className="text-yellow-400 font-bold">conexión</span>.
        </p>
      </div>
      {/* Galería especial de 3 elementos */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-0 mb-12">
        <Image src="/assets/mosh5.jpg" alt="Mosh Fun Kitchen 5" width={400} height={300} className="rounded-2xl shadow-xl object-cover w-full h-[300px]" />
        <div className="rounded-2xl shadow-xl w-full h-[300px] overflow-hidden flex items-center justify-center bg-black">
          <video autoPlay loop muted playsInline className="object-cover w-full h-full">
            <source src="/assets/mosh4.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
        <Image src="/assets/mosh6.jpg" alt="Mosh Fun Kitchen 6" width={400} height={300} className="rounded-2xl shadow-xl object-cover w-full h-[300px]" />
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
            SESIÓN CREATIVA & <span className="text-white">FOTOGRAFÍA</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            Creatividad y detalle para captar la esencia del espacio y de cada plato.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li>Dirección de arte y concepto visual.</li>
            <li><span className="text-yellow-400 font-semibold">Fotografía gastronómica</span> profesional.</li>
            <li>Ambiente, platos y equipo en acción.</li>
          </ul>
          <p className="text-base text-gray-200 text-center">
            Cada imagen abre el apetito y genera conexión.
          </p>
        </div>
        {/* Columna 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
            ESTILO & <span className="text-white">ACTITUD</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            Elegancia, actitud y originalidad reflejados en cada toma.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li>Ambientes únicos y modernos.</li>
            <li>Actitud y personalidad de marca.</li>
            <li>Detalles que marcan la diferencia.</li>
          </ul>
          <p className="text-base text-gray-200 text-center">
            Transmitimos la experiencia Mosh Fun Kitchen.
          </p>
        </div>
        {/* Columna 3 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
            TRABAJO EN EQUIPO & <span className="text-white">RESULTADO</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            Colaboración entre equipos para lograr la mejor imagen de marca.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li>Trabajo conjunto con el equipo de Mosh.</li>
            <li>Ideas creativas sumando valor.</li>
            <li>Mapa y hoja de ruta del proyecto o sesión.</li>
            
          </ul>
          <p className="text-base text-gray-200 text-center">
          </p>
        </div>
      </div>
      {/* Galería de 3 imágenes debajo de las columnas */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-0 mb-16">
        <Image src="/assets/mosh1.jpg" alt="Mosh Fun Kitchen 1" width={400} height={300} className="rounded-2xl shadow-xl object-cover w-full" />
        <Image src="/assets/mosh2.jpg" alt="Mosh Fun Kitchen 2" width={400} height={300} className="rounded-2xl shadow-xl object-cover w-full" />
        <Image src="/assets/mosh3.jpg" alt="Mosh Fun Kitchen 3" width={400} height={300} className="rounded-2xl shadow-xl object-cover w-full" />
      </div>
      {/* Cierre inspiracional */}
      <div className="w-full max-w-3xl flex flex-col items-center mb-10">
        <p className="text-lg text-gray-200 text-center mb-4">
          ¿Tienes un restaurante, lounge o espacio gastronómico? Déjanos contar tu historia con imágenes que abran el apetito y generen conexión.
        </p>
        <div className="w-full flex justify-center">
          <svg className="w-[60%] h-10" width="60%" height="40" viewBox="0 0 600 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
            <path d="M 50 35 Q 150 10 300 10 Q 450 10 550 35" stroke="#facc15" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <h2 className="text-2xl font-black mt-6 mb-2 text-yellow-400 text-center">
          Potenciemos juntos tu marca.
        </h2>
        <p className="text-lg text-gray-200 text-center">
          Escríbenos y llevemos tu negocio al siguiente nivel.
        </p>
        <span className="inline-block mt-2 text-base font-bold text-yellow-400">¡Contáctanos!</span>
      </div>

    </div>
  );
}
