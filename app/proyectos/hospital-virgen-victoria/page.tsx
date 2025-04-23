"use client";
import Image from "next/image";
import { useState } from "react";
import CarouselGallery from "../../components/CarouselGallery";

export default function HospitalVirgenVictoria() {
  const [modalImg, setModalImg] = useState<string|null>(null);
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 sm:pt-16">
      <h1 className="text-4xl sm:text-5xl font-black mb-8 text-white text-center mt-2">
        PROYECTO <span className="text-yellow-400">UAC – Hospital Virgen de la Victoria</span> X HORIZON
      </h1>
      <div className="w-full max-w-3xl flex flex-col items-center">
        <Image
          src="/assets/hospital1.png"
          alt="UAC App principal"
          width={900}
          height={500}
          className="rounded-3xl shadow-2xl object-contain w-full mb-8"
          priority
        />
        <p className="text-lg text-gray-200 text-center mb-6">
          En Horizon tuvimos el placer de desarrollar UAC (Unidad de Atención al Cuidador), una app diseñada para el Hospital Virgen de la Victoria (Málaga) con el objetivo de ofrecer apoyo real, accesible y cercano a quienes cuidan de los demás.
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
            DESIGN THINKING & <span className="text-white">USUARIO</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            El proyecto se construyó desde una base sólida de Design Thinking.<br />Entendimos a fondo al usuario final, validamos ideas clave y creamos una experiencia digital alineada con sus necesidades.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li><span className="text-yellow-400 font-semibold">Conceptualización</span> del producto digital.</li>
            <li>Estudio de usuarios y definición de necesidades.</li>
            <li>Generación y validación de ideas.</li>
          </ul>
          <p className="text-base text-gray-200 text-center">
            El resultado: una app clara, intuitiva y útil.
          </p>
        </div>
        {/* Columna 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
            UX/UI & <span className="text-white">PROTOTIPADO</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            Diseño UX/UI para una app accesible e intuitiva.<br />Prototipado interactivo, testeo y validación final.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li>Diseño de experiencia de usuario.</li>
            <li>Prototipado interactivo.</li>
            <li>Testeo y validación final.</li>
          </ul>
          <p className="text-base text-gray-200 text-center">
            Alineado a las necesidades del usuario y del hospital.
          </p>
        </div>
        {/* Columna 3 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
            IDENTIDAD VISUAL & <span className="text-white">COMUNICACIÓN</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            Desarrollo visual y comunicación gráfica adaptada a la línea visual corporativa del hospital.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li>Creación de logotipo e identidad visual.</li>
            <li>Definición de paleta cromática y tipografías.</li>
            <li>Diseño de materiales de apoyo (cartelería, panfletos, señalética).</li>
          </ul>
          <p className="text-base text-gray-200 text-center">
            Unimos diseño, funcionalidad y propósito.
          </p>
        </div>
      </div>
      {/* Cierre inspiracional */}
      <div className="w-full max-w-3xl flex flex-col items-center mb-10">
        <p className="text-lg text-gray-200 text-center mb-4">
          En Horizon no solo diseñamos productos digitales, diseñamos experiencias. Este proyecto refleja nuestra capacidad para unir diseño, funcionalidad y propósito. Si estás buscando desarrollar una app desde cero, con un equipo que entiende a tu audiencia y cuida cada detalle, estamos listos para ayudarte a construir la solución que necesitas.
        </p>
        <div className="w-full flex justify-center">
          <svg className="w-[60%] h-10" width="60%" height="40" viewBox="0 0 600 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
            <path d="M 50 35 Q 150 10 300 10 Q 450 10 550 35" stroke="#facc15" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <h2 className="text-2xl font-black mt-6 mb-2 text-yellow-400 text-center">
          ¿NECESITAS UNA APP PARA TU HOSPITAL O INSTITUCIÓN?
        </h2>
        <p className="text-lg text-gray-200 text-center">
          Nosotros nos encargamos de que tu solución digital sea útil, accesible y memorable.<br />Descubre cómo Horizon puede ayudarte a destacar.
        </p>
        <span className="inline-block mt-2 text-base font-bold text-yellow-400">¡Contáctanos!</span>
      </div>
      {/* Galería de imágenes */}
      <div className="w-full max-w-5xl mx-auto px-2 mb-16">
        <CarouselGallery
          images={[
            { src: "/assets/hosp.jpeg", alt: "Hospital Virgen de la Victoria 1" },
            { src: "/assets/hosp2.jpeg", alt: "Hospital Virgen de la Victoria 2" },
            { src: "/assets/hosp3.jpeg", alt: "Hospital Virgen de la Victoria 3" },
          ]}
        />
      </div>
    </div>
  );
}
