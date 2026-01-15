import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketing Inmobiliario y Drones en Málaga | Horizon Creative",
  description: "Vende propiedades más rápido con videos de drones, tours virtuales y fotografía inmobiliaria profesional. Agencia de marketing para inmobiliarias en la Costa del Sol.",
  keywords: ["Marketing Inmobiliario Málaga", "Fotografía Inmobiliaria", "Videos con Drones Málaga", "Tours Virtuales", "Real Estate Marketing", "Horizon Creative", "Venta de Propiedades"],
  openGraph: {
    title: "Marketing Inmobiliario de Alto Nivel | Horizon Creative",
    description: "Destaca tus propiedades con contenido visual cinematográfico. Especialistas en Real Estate en la Costa del Sol.",
    images: [
      {
        url: "/assets/exterior1.jpg",
        width: 1200,
        height: 630,
        alt: "Marketing Inmobiliario Horizon Creative",
      },
    ],
  },
}

export default function InmobiliariasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
