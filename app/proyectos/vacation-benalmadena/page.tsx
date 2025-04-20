import Image from "next/image";

export default function VacationBenalmadena() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 sm:pt-16">
      <h1 className="text-4xl sm:text-5xl font-black mb-8 text-white text-center mt-2">
        PROYECTO <span className="text-yellow-400">VACATION BENALMÁDENA</span> X HORIZON
      </h1>
      <div className="w-full max-w-3xl flex flex-col items-center">
        <Image
          src="/assets/pr2.png"
          alt="Vacation Benalmádena Proyecto Horizon"
          width={900}
          height={500}
          className="rounded-3xl shadow-2xl object-cover w-full max-h-[400px] mb-8"
          priority
        />
        <p className="text-lg text-gray-200 text-center mb-6">
          En Horizon, entendemos que cada apartamento es más que un alojamiento: es una experiencia. Con Vacation Benalmádena, llevamos a cabo un proyecto integral para realzar su propuesta como agencia de alquiler vacacional y posicionarla como referente en la Costa del Sol.
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
            Imagen fresca, profesional y coherente.<br />Confianza y ganas de viajar.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li><span className="text-yellow-400 font-semibold">Estilo mediterráneo</span> en la imagen.</li>
            <li>Contenido atractivo y profesional.</li>
            <li><span className="text-yellow-400 font-semibold">Feed</span> que conecta con viajeros.</li>
          </ul>
          <p className="text-base text-gray-200 text-center">
            Mostramos lo mejor de cada propiedad.
          </p>
        </div>
        {/* Columna 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
            FOTOGRAFÍA & <span className="text-white">VIDEO PROFESIONAL</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            Imágenes que inspiran a reservar.<br />Videos que muestran la experiencia.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li><span className="text-yellow-400 font-semibold">Fotografía</span> de alta calidad.</li>
            <li>Videos promocionales completos.</li>
            <li><span className="text-yellow-400 font-semibold">Contenido</span> para campañas y RRSS.</li>
          </ul>
          <p className="text-base text-gray-200 text-center">
            Cada detalle suma para destacar.
          </p>
        </div>
        {/* Columna 3 */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
            ESTRATEGIA DE <span className="text-white">MARKETING DIGITAL</span>
          </h3>
          <p className="text-base text-gray-200 text-center mb-2">
            Estrategia orientada a resultados.<br />Conexión con el viajero ideal.
          </p>
          <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
            <li><span className="text-yellow-400 font-semibold">Aumento de reservas</span> directas.</li>
            <li>Mejora del posicionamiento online.</li>
            <li><span className="text-yellow-400 font-semibold">Confianza</span> en nuevos clientes.</li>
          </ul>
          <p className="text-base text-gray-200 text-center">
            Destacamos lo que hace única cada propiedad.
          </p>
        </div>
      </div>
      {/* Cierre inspiracional */}
      <div className="w-full max-w-3xl flex flex-col items-center mb-10">
        <p className="text-lg text-gray-200 text-center mb-4">
          Este proyecto refleja cómo en Horizon llevamos la comunicación visual y estratégica al siguiente nivel, convirtiendo cada propiedad en una experiencia deseable y memorable.
        </p>
        <div className="w-full flex justify-center">
          <svg className="w-[60%] h-10" width="60%" height="40" viewBox="0 0 600 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
            <path d="M 50 35 Q 150 10 300 10 Q 450 10 550 35" stroke="#facc15" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <h2 className="text-2xl font-black mt-6 mb-2 text-yellow-400 text-center">
          ¿TIENES UNA AGENCIA VACACIONAL?
        </h2>
        <p className="text-lg text-gray-200 text-center">
          Nosotros nos encargamos de que el mundo la vea como merece.<br />Descubre cómo Horizon puede ayudarte a destacar.
        </p>
        <span className="inline-block mt-2 text-base font-bold text-yellow-400">¡Contáctanos!</span>
      </div>
    </div>
  );
}
