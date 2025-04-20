"use client";
import Image from "next/image";

export default function EnbocaGastrobar() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 sm:pt-16">
      <h1 className="text-4xl sm:text-5xl font-black mb-8 text-white text-center mt-2">
        PROYECTO <span className="text-yellow-400">ENBOCA GASTROBAR</span> X HORIZON
      </h1>
      <div className="w-full max-w-3xl flex flex-col items-center">
        <Image
          src="/assets/pr1.png"
          alt="Enboca Gastrobar principal"
          width={900}
          height={500}
          className="rounded-3xl shadow-2xl object-contain w-full mb-8"
          priority
        />
        <p className="text-lg text-gray-200 text-center mb-6">
          En Horizon, transformamos ideas en experiencias visuales que conectan. En nuestro trabajo con Enboca Gastrobar, demostramos cómo una marca gastronómica puede evolucionar con estrategia, creatividad y una identidad visual potente.
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
            IDENTIDAD VISUAL & <span className="text-white">REDES SOCIALES</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            Enboca es más que un restaurante: es una experiencia.<br />Diseñamos una línea visual sólida y coherente.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li><span className="text-yellow-400 font-semibold">Estética moderna</span> y atractiva.</li>
            <li>Contenido con propósito.</li>
            <li><span className="text-yellow-400 font-semibold">Historias</span> que invitan a vivir Enboca.</li>
          </ul>
          <p className="text-base text-gray-200 text-center">
            Generamos comunidad y reflejamos su esencia.
          </p>
        </div>
        {/* Columna 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
            PRODUCCIÓN DE <span className="text-white">CONTENIDO PROFESIONAL</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            Reflejamos la calidad de Enboca.<br />Producción visual a la altura.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li><span className="text-yellow-400 font-semibold">Fotografía</span> de platos y espacios.</li>
            <li>Videos creativos y promocionales.</li>
            <li><span className="text-yellow-400 font-semibold">Contenido</span> pensado para destacar.</li>
          </ul>
          <p className="text-base text-gray-200 text-center">
            Engancha, comparte y eleva la marca.
          </p>
        </div>
        {/* Columna 3 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
            ESTRATEGIA DE <span className="text-white">MARKETING</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            No solo imagen: comunicación con impacto.<br />Estrategia digital centrada en resultados.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li><span className="text-yellow-400 font-semibold">Posicionamiento</span> de marca.</li>
            <li>Atracción de nuevos clientes.</li>
            <li><span className="text-yellow-400 font-semibold">Fidelización</span> de la comunidad.</li>
          </ul>
          <p className="text-base text-gray-200 text-center">
            Presencia, conexión y conversión.
          </p>
        </div>
      </div>
      {/* Cierre inspiracional */}
      <div className="w-full max-w-3xl flex flex-col items-center mb-10">
        <p className="text-lg text-gray-200 text-center mb-4">
          Con Enboca Gastrobar demostramos que en Horizon no solo creamos contenido, sino que impulsamos marcas gastronómicas hacia el reconocimiento y el éxito, cuidando cada detalle y potenciando su esencia para alcanzar resultados reales.
        </p>
        <div className="w-full flex justify-center">
          <svg className="w-[60%] h-10" width="60%" height="40" viewBox="0 0 600 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
            <path d="M 50 35 Q 150 10 300 10 Q 450 10 550 35" stroke="#facc15" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <h2 className="text-2xl font-black mt-6 mb-2 text-yellow-400 text-center">
          ¿TIENES UN RESTAURANTE CON ALMA?
        </h2>
        <p className="text-lg text-gray-200 text-center">
          Nosotros lo convertimos en una marca que deja huella.<br />Descubre lo que Horizon puede hacer por tu proyecto.
        </p>
      </div>

      {/* Collage de imágenes */}
      <div className="w-full max-w-5xl mx-auto px-2 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((n) => (
            <div key={n} className="flex items-center justify-center">
              <Image
                src={`/assets/enboca${n}.jpg`}
                alt={`Enboca Gastrobar ${n}`}
                width={400}
                height={260}
                className="rounded-2xl shadow-xl object-cover w-full h-56 sm:h-60 md:h-52 lg:h-56 bg-black"
                style={{objectPosition:'center'}}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
