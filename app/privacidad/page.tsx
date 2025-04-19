"use client"

import Link from "next/link"

export default function Privacidad() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="container mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold">Política de Privacidad</h1>
        <p>
          La presente Política de Privacidad establece los términos en que Horizon Creative usa y protege
          la información proporcionada por sus usuarios al utilizar su sitio web. Estamos comprometidos con
          la seguridad de los datos de nuestros usuarios. Cuando solicitamos información personal, como su
          nombre o correo electrónico, garantizamos que solo se utilizará conforme a esta política. Esta
          Política de Privacidad puede actualizarse con el tiempo, por lo que recomendamos revisarla
          periódicamente para asegurarse de estar de acuerdo con los cambios.
        </p>

        <h2 className="text-2xl font-semibold">Información que recopilamos</h2>
        <p>
          Nuestro sitio web puede recoger datos personales, como nombre, correo electrónico e información
          demográfica.
        </p>

        <h2 className="text-2xl font-semibold">Uso de la información recopilada</h2>
        <p>
          Utilizamos la información para ofrecer el mejor servicio posible, mantener un registro de
          usuarios, mejorar nuestros productos y servicios, y enviar correos electrónicos con ofertas,
          nuevos servicios o información relevante. Estos correos se enviarán a la dirección
          proporcionada y pueden cancelarse en cualquier momento.
        </p>
        <p>
          Horizon Creative está comprometido con mantener su información segura, utilizando sistemas
          avanzados y actualizados para prevenir accesos no autorizados.
        </p>

        <h2 className="text-2xl font-semibold">Cookies</h2>
        <p>
          Nuestro sitio web usa cookies, pequeños archivos que se almacenan en su dispositivo con su
          permiso para analizar el tráfico web y mejorar su experiencia. Las cookies nos permiten
          personalizar el servicio y recopilar datos estadísticos, que se eliminan tras el análisis. Puede
          aceptar, rechazar o eliminar cookies desde su navegador, aunque desactivarlas podría limitar
          algunas funcionalidades del sitio.
        </p>

        <h2 className="text-2xl font-semibold">Enlaces a terceros</h2>
        <p>
          Nuestro sitio web puede incluir enlaces a sitios externos. Una vez que abandone nuestra página,
          no tenemos control sobre esos sitios ni somos responsables de su contenido o políticas de
          privacidad. Recomendamos revisar las políticas de esos sitios.
        </p>

        <h2 className="text-2xl font-semibold">Control de su información personal</h2>
        <p>
          Horizon Creative no venderá, cederá ni distribuirá su información personal sin su consentimiento,
          salvo que lo exija una orden judicial.
        </p>
        <p>
          Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento.
        </p>

        <p className="text-sm text-gray-400">
          Horizon Creative © {new Date().getFullYear()}. Todos los derechos reservados.
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
            <a href="mailto:Polaris.agenciacreativa@gmail.com" className="text-primary">
              Polaris.agenciacreativa@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">LLÁMANOS</h2>
          <p>65631475</p>
        </div>
      </div>
    </section>
  )
}
