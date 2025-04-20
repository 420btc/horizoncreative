"use client";
import Image from "next/image";
import { useState } from "react";
import CarouselGallery from "../../components/CarouselGallery";

export default function BrandingClubGolf() {
  const [modalImg, setModalImg] = useState<string|null>(null);
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 sm:pt-16">
      <h1 className="text-4xl sm:text-5xl font-black mb-8 text-white text-center mt-2">
        PROYECTO <span className="text-yellow-400">BRANDING CLUB DE GOLF</span> X HORIZON
      </h1>
      <div className="w-full max-w-3xl flex flex-col items-center">
        <Image
          src="/assets/tenismovil.png"
          alt="Branding Club de Golf principal"
          width={900}
          height={500}
          className="rounded-3xl shadow-2xl object-contain w-full mb-8"
          priority
        />
        <p className="text-lg text-gray-200 text-center mb-6">
          En Horizon, nos encargamos de transformar la imagen del Club de Golf en una marca reconocida y deseada. Nuestro trabajo abarcó desde la creación de una identidad visual sólida hasta la gestión integral de sus redes sociales, posicionando al club como un referente de exclusividad y estilo de vida.
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
            BRANDING & <span className="text-white">IDENTIDAD VISUAL</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            Creamos una imagen elegante, moderna y coherente con los valores del club.<br />Reflejo de exclusividad y tradición.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li><span className="text-yellow-400 font-semibold">Logotipo renovado</span> y paleta cromática exclusiva.</li>
            <li>Manual de marca y aplicaciones en materiales del club.</li>
            <li><span className="text-yellow-400 font-semibold">Papelería y señalética</span> personalizada.</li>
          </ul>
        </div>
        {/* Columna 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
            REDES SOCIALES & <span className="text-white">CONTENIDO DIGITAL</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            Estrategia digital para conectar con socios y nuevos públicos.<br />Contenido visual que inspira comunidad y pertenencia.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li><span className="text-yellow-400 font-semibold">Gestión integral</span> de Instagram y Facebook.</li>
            <li>Calendario de publicaciones y campañas temáticas.</li>
            <li><span className="text-yellow-400 font-semibold">Fotografía y video</span> profesional de eventos y actividades.</li>
          </ul>
        </div>
        {/* Columna 3 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
            EXPERIENCIA DE MARCA & <span className="text-white">COMUNICACIÓN</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            Potenciamos la experiencia de los socios y visitantes con una comunicación clara y atractiva.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li>Eventos exclusivos y torneos con identidad propia.</li>
            <li><span className="text-yellow-400 font-semibold">Material promocional</span> y merchandising.</li>
            <li>Newsletter y comunicación interna efectiva.</li>
          </ul>
        </div>
      </div>
      {/* Cierre inspiracional */}
      <div className="w-full max-w-3xl flex flex-col items-center mb-10">
        <p className="text-lg text-gray-200 text-center mb-4">
          El Club de Golf ahora transmite una imagen moderna y exclusiva, atrayendo a nuevos socios y fidelizando a los existentes. Nuestro enfoque integral ha elevado la percepción y el alcance del club dentro y fuera del campo.
        </p>
        <div className="w-full flex justify-center">
          <svg className="w-[60%] h-10" width="60%" height="40" viewBox="0 0 600 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
            <path d="M 50 35 Q 150 10 300 10 Q 450 10 550 35" stroke="#facc15" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <h2 className="text-2xl font-black mt-6 mb-2 text-yellow-400 text-center">
          ¿QUIERES QUE TU CLUB DÉ EL SIGUIENTE PASO?
        </h2>
        <p className="text-lg text-gray-200 text-center">
          En Horizon convertimos tu club en una marca memorable.<br />Descubre cómo podemos ayudarte a destacar.
        </p>
        <span className="inline-block mt-2 text-base font-bold text-yellow-400">¡Contáctanos!</span>
      </div>
      {/* Galería de imágenes */}
      <div className="w-full max-w-3xl mx-auto px-2 mb-16">
        <CarouselGallery
          images={[
            { src: "/assets/golfclub-1.jpg", alt: "Golf Club 1" },
            { src: "/assets/golfclub-2.jpg", alt: "Golf Club 2" },
            { src: "/assets/golfclub-3.jpg", alt: "Golf Club 3" }
          ]}
        />
      </div>
    </div>
  );
}
