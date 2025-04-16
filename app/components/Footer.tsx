import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {["Inicio", "Sobre Nosotros", "Nuestros Servicios", "Contacto", "Privacidad", "Términos"].map((item) => (
            <div key={item} className="pb-6">
              <Link
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm leading-6 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm leading-5 text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Horizon Creative. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
