import Image from "next/image";

export default function VacationBenalmadena() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 sm:pt-16">
      <h1 className="text-5xl font-black mb-8 text-white text-center mt-2">
        Vacation Benalmádena
      </h1>
      <div className="w-full max-w-2xl flex flex-col items-center mt-2 bg-black">
        <Image
          src="/assets/pr2.png"
          alt="Vacation Benalmádena Proyecto Horizon"
          width={660}
          height={440}
          className="rounded-xl shadow-lg mb-8 object-cover object-center"
          priority
        />
      </div>
      <div className="w-full max-w-5xl flex flex-col gap-0 px-2 md:px-0 mt-4 relative">

        {/* TARJETAS ESTILO METRO */}
        {/* Desktop: tarjeta principal destacada y línea amarilla SVG interconectando */}
        <div className="hidden md:grid grid-cols-3 gap-x-8 items-stretch gap-y-16 w-full pt-8 pb-28 relative z-10">
          {/* Tarjeta principal destacada */}
          <div className="col-span-3 flex flex-col items-center mb-8">
            <div className="bg-zinc-900/90 rounded-3xl shadow-xl p-8 w-full max-w-2xl">
              <h2 className="text-4xl font-black tracking-widest text-yellow-400 text-center font-title mb-4">
                PROYECTO VACATION BENALMÁDENA X <span className="text-white">HORIZON</span>
              </h2>
              <p className="text-lg text-gray-200 text-center font-title font-semibold">
                En <span className="text-yellow-400 font-bold">Horizon</span>, entendemos que cada apartamento es más que un alojamiento: es una experiencia. Con <span className="text-yellow-400 font-bold">Vacation Benalmádena</span>, llevamos a cabo un proyecto integral para realzar su propuesta como agencia de alquiler vacacional y posicionarla como referente en la Costa del Sol.
              </p>
            </div>
          </div>

          {/* Línea amarilla SVG que conecta todas las tarjetas secundarias */}
          <div className="absolute left-0 right-0 top-[320px] z-0">
            <svg className="w-full h-28" width="100%" height="112" viewBox="0 0 1200 112" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
              <path d="M 160 100 Q 240 56 320 56 Q 480 56 480 56 Q 640 56 640 56 Q 800 56 800 56 Q 960 56 1040 100" stroke="#facc15" strokeWidth="8" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          {/* Tarjetas secundarias en la segunda fila */}
          <div className="col-span-3 grid grid-cols-3 gap-x-8 items-stretch">
            <div className="flex flex-col items-center">
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
  IDENTIDAD VISUAL & <span className="text-white">REDES SOCIALES</span>
</h3>
<p className="text-base text-gray-200 text-center mb-2">
  Imagen profesional y coherente.<br />Confianza y calidad en redes.
</p>
<ul className="list-disc list-inside text-gray-200 mb-2 text-left">
  <li><span className="text-yellow-400 font-semibold">Imagen clara</span> en canales.</li>
  <li>Recursos visuales únicos.</li>
  <li><span className="text-yellow-400 font-semibold">Engagement</span> y comunidad.</li>
</ul>
<p className="text-base text-gray-200 text-center">
  Marca referente vacacional.
</p>
                
                
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
  FOTOGRAFÍA & <span className="text-white">VIDEO PROFESIONAL</span>
</h3>
<p className="text-base text-gray-200 text-center mb-2">
  Fotos y videos de detalle.<br />Experiencia y estilo visual.
</p>
<ul className="list-disc list-inside text-gray-200 mb-2 text-left">
  <li><span className="text-yellow-400 font-semibold">Alta calidad</span> en imagen.</li>
  <li>Videos promocionales breves.</li>
  <li><span className="text-yellow-400 font-semibold">Edición</span> profesional.</li>
</ul>
<p className="text-base text-gray-200 text-center">
  Reservas con impacto visual.
</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
  ESTRATEGIA DE <span className="text-white">MARKETING DIGITAL</span>
</h3>
<p className="text-base text-gray-200 text-center mb-2">
  Más visibilidad digital.<br />Crecimiento con creatividad.
</p>
<ul className="list-disc list-inside text-gray-200 mb-2 text-left">
  <li><span className="text-yellow-400 font-semibold">SEO</span> y posicionamiento.</li>
  <li>Publicidad en redes sociales.</li>
  <li><span className="text-yellow-400 font-semibold">Optimización</span> continua.</li>
</ul>
<p className="text-base text-gray-200 text-center">
  Conecta con tu público ideal.
</p>
              </div>
            </div>
          </div>
        </div>
        {/* Móvil: columna vertical (como antes) */}
        <div className="md:hidden flex flex-col gap-8 w-full pt-8 pb-8">
          <div className="bg-zinc-900/90 rounded-3xl shadow-xl p-7 w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3 tracking-widest text-center">
              <span className="text-white">PROYECTO VACATION BENALMÁDENA X </span>HORIZON
            </h2>
            <p className="text-base text-gray-200 text-center">
              En <span className="text-yellow-400 font-semibold">Horizon</span>, entendemos que cada apartamento es más que un alojamiento: es una experiencia. Con <span className="text-yellow-400 font-semibold">Vacation Benalmádena</span>, llevamos a cabo un proyecto integral para realzar su propuesta como agencia de alquiler vacacional y posicionarla como referente en la Costa del Sol.
            </p>
          </div>
          <div className="bg-zinc-900/90 rounded-3xl shadow-xl p-7 w-full max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
              IDENTIDAD VISUAL & <span className="text-white">REDES SOCIALES</span>
            </h3>
            <p className="text-base text-gray-200 text-center">
              Creamos una imagen <span className="text-yellow-400 font-semibold">fresca</span>, profesional y coherente con el estilo de vida mediterráneo. En redes sociales, aplicamos una estrategia de contenido que transmite <span className="text-yellow-400 font-semibold">confianza</span>, <span className="text-yellow-400 font-semibold">calidad</span> y ganas de viajar.<br/><br/>
              Mostramos lo mejor de cada propiedad con un enfoque visual cuidado, generando un feed atractivo que conecta con viajeros de todo el mundo.
            </p>
          </div>
          <div className="bg-zinc-900/90 rounded-3xl shadow-xl p-7 w-full max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
              FOTOGRAFÍA & <span className="text-white">VIDEO PROFESIONAL</span>
            </h3>
            <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
              <li><span className="text-yellow-400 font-semibold">Fotografías de alta calidad</span> que capturan cada detalle, desde las vistas hasta la decoración.</li>
              <li><span className="text-yellow-400 font-semibold">Videos promocionales</span> que muestran la experiencia completa, desde la llegada al apartamento hasta los alrededores.</li>
              <li>Contenido ideal para plataformas de reservas, redes sociales y campañas de marketing.</li>
            </ul>
            <p className="text-base text-gray-200 text-center">
              Sabemos que las primeras impresiones lo son todo.
            </p>
          </div>
          <div className="bg-zinc-900/90 rounded-3xl shadow-xl p-7 w-full max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
              ESTRATEGIA DE <span className="text-white">MARKETING DIGITAL</span>
            </h3>
            <ul className="list-disc list-inside text-gray-200 mb-2 text-left">
              <li><span className="text-yellow-400 font-semibold">Aumento de reservas directas.</span></li>
              <li><span className="text-yellow-400 font-semibold">Mejora del posicionamiento</span> en buscadores y redes.</li>
              <li>Generación de confianza en nuevos clientes.</li>
            </ul>
            <p className="text-base text-gray-200 text-center">
              Conectamos con el tipo de viajero ideal y destacamos lo que hace única a cada propiedad de <span className="text-yellow-400 font-semibold">Vacation Benalmádena</span>.
            </p>
          </div>
          <div className="bg-zinc-900/90 rounded-3xl shadow-xl p-7 w-full max-w-lg mx-auto">
            <h3 className="text-xl font-bold text-yellow-400 mb-2 tracking-wide text-center">
              EN HORIZON, HACEMOS QUE <span className="text-white">TUS PROPIEDADES HABLEN POR TI</span>
            </h3>
            <p className="text-base text-gray-200 text-center">
              Este proyecto refleja cómo en <span className="text-yellow-400 font-semibold">Horizon</span> llevamos la comunicación visual y estratégica al siguiente nivel, convirtiendo cada propiedad en una experiencia deseable y memorable.
            </p>
          </div>
          <div className="bg-zinc-900/90 rounded-3xl shadow-xl p-7 w-full max-w-lg mx-auto">
            <h3 className="text-lg font-bold text-yellow-400 mb-2 tracking-wide text-center">
              ¿TIENES UNA AGENCIA VACACIONAL?
            </h3>
            <p className="text-base text-gray-200 text-center">
              Nosotros nos encargamos de que el mundo la vea como merece.<br/>Descubre cómo <span className="text-yellow-400 font-semibold">Horizon</span> puede ayudarte a destacar.
            </p>
            <span className="inline-block mt-2 text-base font-bold text-yellow-400">¡Contáctanos!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
