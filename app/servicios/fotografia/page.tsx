"use client";

import Image from "next/image";

export default function FotografiaGaleria() {
  return (
    <section className="w-full min-h-screen bg-black">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-white pt-10">Fotografía y Video</h1>
      {/* Primera foto */}
      <div className="w-full max-w-7xl mx-auto px-0 md:px-8">
        <div className="overflow-hidden rounded-none md:rounded-3xl shadow-2xl">
          <Image src="/assets/pagfoto.jpg" alt="Fotografía profesional" width={1920} height={900} className="object-cover w-full h-[260px] md:h-[430px] lg:h-[520px] transition-all duration-500" priority />
        </div>
      </div>
      {/* Banner informativo */}
      <div className="w-full bg-black py-10 md:py-14 px-4 md:px-0 flex flex-col items-center border-y border-gray-800">
        <div className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FFD600] mb-2">Especialistas en Fotografía y Video</h2>
          <p className="text-base md:text-lg text-gray-900 dark:text-gray-200">Capturamos la esencia de tu marca y tus proyectos con imágenes y videos de alto impacto. Nuestro equipo combina creatividad, técnica y tecnología para crear contenido visual que conecta y emociona. Desde fotografía de producto, eventos y lifestyle hasta video corporativo y promocional, nos adaptamos a tus necesidades para contar tu historia de forma única.</p>
        </div>
      </div>
      {/* Banner divisor con línea y metodología */}
      <div className="w-full flex flex-col items-center py-10 bg-neutral-900 mb-8 md:mb-14">
        <div className="max-w-2xl w-full flex flex-col items-center">
          {/* Línea conectora con puntos y frases */}
          <div className="relative w-full flex flex-col gap-8 md:gap-12">
            {/* Línea amarilla conectando los puntos SOLO en desktop, perfectamente alineada */}
            <div className="hidden md:block absolute z-0" style={{top: '8px', left: '12.5%', right: '12.5%', height: '2px'}}>
              <div className="h-1 w-full bg-[#FFD600]" style={{height:2}} />
            </div>
            {/* Puntos y frases */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full relative z-10">
              <div className="flex flex-col items-center md:w-1/4 w-full">
                <div className="w-5 h-5 rounded-full bg-[#FFD600] border-4 border-black mb-2" />
                <span className="text-gray-900 dark:text-gray-200 text-xs md:text-sm text-center break-words leading-tight max-w-[9.5rem] md:max-w-[11rem]">Briefing y concepto visual</span>
              </div>
              <div className="flex flex-col items-center md:w-1/4 w-full">
                <div className="w-5 h-5 rounded-full bg-[#FFD600] border-4 border-black mb-2" />
                <span className="text-gray-900 dark:text-gray-200 text-xs md:text-sm text-center break-words leading-tight max-w-[9.5rem] md:max-w-[11rem]">Planificación y pre-producción</span>
              </div>
              <div className="flex flex-col items-center md:w-1/4 w-full">
                <div className="w-5 h-5 rounded-full bg-[#FFD600] border-4 border-black mb-2" />
                <span className="text-gray-900 dark:text-gray-200 text-xs md:text-sm text-center break-words leading-tight max-w-[9.5rem] md:max-w-[11rem]">Sesión de fotos/video profesional</span>
              </div>
              <div className="flex flex-col items-center md:w-1/4 w-full">
                <div className="w-5 h-5 rounded-full bg-[#FFD600] border-4 border-black mb-2" />
                <span className="text-gray-900 dark:text-gray-200 text-xs md:text-sm text-center break-words leading-tight max-w-[9.5rem] md:max-w-[11rem]">Edición, entrega y optimización</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Segunda foto */}
      <div className="w-full max-w-7xl mx-auto px-0 md:px-8 mt-8 md:mt-14">
        <div className="overflow-hidden rounded-none md:rounded-3xl shadow-2xl">
          <Image src="/assets/pagfoto2.jpg" alt="Video profesional" width={1920} height={900} className="object-cover w-full h-[260px] md:h-[430px] lg:h-[520px] transition-all duration-500" />
        </div>
      </div>
      {/* Sección final: Foto full display y texto a la izquierda */}
      <div className="w-full mt-8 md:mt-14 flex flex-col md:flex-row items-stretch rounded-xl md:rounded-3xl overflow-hidden shadow-2xl">
        {/* Bloque de texto sobre fondo blanco */}
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-6 md:p-12 rounded-t-xl md:rounded-l-3xl md:rounded-tr-none">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Fotografía Profesional</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-md">
              Nuestro trabajo de fotografía se basa en capturar la esencia y personalidad de cada proyecto, cuidando cada detalle de la composición, la luz y la edición. Nos adaptamos a las necesidades de cada cliente para ofrecer imágenes que transmitan emociones y potencien la imagen de marca.
            </p>
          </div>
        </div>
        {/* Imagen full display */}
        <div className="w-full md:w-1/2 rounded-b-xl md:rounded-r-3xl md:rounded-bl-none overflow-hidden">
          <Image src="/assets/pagfoto3.jpg" alt="Fotografía adicional 3" width={1920} height={900} className="object-cover w-full h-[260px] md:h-full lg:h-[520px] transition-all duration-500" />
        </div>
      </div>

    </section>
  );
}
