"use client"

import Link from "next/link"

export default function Cookies() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="container mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-bold">Política de Cookies</h1>
        <p>
          El acceso a este sitio web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.
        </p>
        <p>
          Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.
        </p>
        <p>
          La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.
        </p>
        <p>
          Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.
        </p>
        <h2 className="text-2xl font-semibold">Cookies propias</h2>
        <p>
          Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por Horizon Creative para el mejor funcionamiento del Sitio Web. La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias.
        </p>
        <h2 className="text-2xl font-semibold">Cookies de terceros</h2>
        <p>
          Son cookies utilizadas y gestionadas por entidades externas que proporcionan a Horizon Creative servicios solicitados por este mismo para mejorar el Sitio Web y la experiencia del usuario al navegar en el Sitio Web. Los principales objetivos para los que se utilizan cookies de terceros son la obtención de estadísticas de accesos y analizar la información de la navegación, es decir, cómo interactúa el Usuario con el Sitio Web.
        </p>
        <p>
          La información que se obtiene se refiere, por ejemplo, al número de páginas visitadas, el idioma, el lugar a la que la dirección IP desde el que accede el Usuario, el número de Usuarios que acceden, la frecuencia y reincidencia de las visitas, el tiempo de visita, el navegador que usan, el operador o tipo de dispositivo desde el que se realiza la visita. Esta información se utiliza para mejorar el Sitio Web, y detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o servicio de óptima calidad. En todo caso, la información se recopila de forma anónima y se elaboran informes de tendencias del Sitio Web sin identificar a usuarios individuales.
        </p>
        <p>
          Puede obtener más información sobre las cookies, la información sobre la privacidad, o consultar la descripción del tipo de cookies que se utiliza, sus principales características, periodo de expiración, etc. en el siguiente enlace:<br/>
          <a href="https://developers.google.com/analytics" className="text-primary underline" target="_blank" rel="noopener noreferrer">https://developers.google.com/analytics</a>
        </p>
        <p>
          La(s) entidad(es) encargada(s) del suministro de cookies podrá(n) ceder esta información a terceros, siempre y cuando lo exija la ley o sea un tercero el que procese esta información para dichas entidades.
        </p>
        <h2 className="text-2xl font-semibold">Cookies de redes sociales</h2>
        <p>
          Horizon Creative incorpora enlaces de redes sociales, que permiten acceder a las mismas a partir del Sitio Web. Por esta razón, las cookies de redes sociales pueden almacenarse en el navegador del Usuario. Los titulares de dichas redes sociales disponen de sus propias políticas de protección de datos y de cookies, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad. El Usuario debe referirse a las mismas para informarse acerca de dichas cookies y, en su caso, del tratamiento de sus datos personales. Únicamente a título informativo se indica a continuación el enlace en el que se pueden consultar dichas políticas de privacidad y/o de cookies:<br/>
          Instagram: <a href="https://www.instagram.com/horizoncreative.agency/" className="text-primary underline" target="_blank" rel="noopener noreferrer">https://www.instagram.com/horizoncreative.agency/</a>
        </p>
        <h2 className="text-2xl font-semibold">Deshabilitar, rechazar y eliminar cookies</h2>
        <p>
          El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.
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
            <a href="mailto:info.horizoncreative@gmail.com" className="text-primary">
              Polaris.agenciacreativa@gmail.com
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
