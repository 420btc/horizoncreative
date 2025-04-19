"use client"

import Link from "next/link"

export default function AvisoLegal() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="container mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold">Aviso Legal</h1>
        <h2 className="text-2xl font-semibold mt-6">I. INFORMACIÓN GENERAL</h2>
        <p>
          En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:<br/>
          La titularidad de este sitio web la ostenta: <b>Horizon Creative</b>, y cuyos datos de contacto son:<br/>
          <b>Dirección:</b> Málaga, Benalmádena<br/>
          <b>Teléfono de contacto:</b> 656314757<br/>
          <b>Email de contacto:</b> <a href="mailto:info.horizoncreative@gmail.com" className="text-primary">info.horizoncreative@gmail.com</a>
        </p>
        <h2 className="text-2xl font-semibold mt-6">II. TÉRMINOS Y CONDICIONES GENERALES DE USO</h2>
        <p>El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización del Sitio Web.</p>
        <p>Horizon Creative se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar incorporados.</p>
        <p>El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla general, es gratuito sin que el Usuario tenga que proporcionar una contraprestación para poder disfrutar de ello, salvo en lo relativo al coste de conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso que hubiere contratado el Usuario.</p>
        <p>El Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web. Esta responsabilidad se extenderá a: Un uso de la información, Contenidos y/o Servicios y datos ofrecidos por Horizon Creative sin que sea contrario a lo dispuesto por las presentes Condiciones, la Ley, la moral o el orden público, o que de cualquier otro modo puedan suponer lesión de los derechos de terceros o del mismo funcionamiento del Sitio Web.</p>
        <h2 className="text-2xl font-semibold mt-6">III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
        <p>Horizon Creative no garantiza la continuidad, disponibilidad y utilidad del Sitio Web, ni de los Contenidos o Servicios.</p>
        <h2 className="text-2xl font-semibold mt-6">IV. POLÍTICA DE ENLACES</h2>
        <p>Horizon Creative pone o puede poner a disposición de los Usuarios medios de enlace (como, entre otros, links, banners, botones), directorios y motores de búsqueda que permiten a los Usuarios acceder a sitios web pertenecientes y/o gestionados por terceros.</p>
        <h2 className="text-2xl font-semibold mt-6">V. PROPIEDAD INTELECTUAL E INDUSTRIAL</h2>
        <p>Horizon Creative por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en el mismo.</p>
        <h2 className="text-2xl font-semibold mt-6">VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
        <p>Horizon Creative se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del Sitio Web y Contenidos, o por el incumplimiento de las presentes Condiciones.</p>
        <p className="text-sm text-gray-400">
          Horizon Creative {new Date().getFullYear()}. Todos los derechos reservados.
        </p>
        <nav className="flex flex-wrap gap-4 text-primary">
          <Link href="/privacidad">Política de Privacidad</Link>
          <span>|</span>
          <Link href="/aviso-legal">Aviso Legal</Link>
          <span>|</span>
          <Link href="/cookies">Política de Cookies</Link>
        </nav>
        <div>
          <h2 className="text-xl font-semibold">DIRECCIÓN</h2>
          <p>Málaga, Benalmádena</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">EMAIL</h2>
          <p>
            <a href="mailto:info.horizoncreative@gmail.com" className="text-primary">
              info.horizoncreative@gmail.com
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">LLÁMANOS</h2>
          <p>656314757</p>
        </div>
      </div>
    </section>
  )
}
