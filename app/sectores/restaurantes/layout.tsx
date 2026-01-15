import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketing para Restaurantes en Málaga | Horizon Creative",
  description: "Impulsa tu restaurante con fotografía gastronómica, videos con drones y gestión de redes sociales. Expertos en marketing gastronómico en Málaga y Costa del Sol.",
  keywords: ["Marketing Restaurantes Málaga", "Fotografía Gastronómica", "Redes Sociales Restaurantes", "Videos para Restaurantes", "Marketing Gastronómico", "Carta Digital", "Horizon Creative"],
  openGraph: {
    title: "Marketing Digital para Restaurantes | Horizon Creative",
    description: "Atrae más comensales con contenido visual de alto impacto. Fotografía, video y estrategia digital para tu restaurante.",
    images: [
      {
        url: "/assets/comida1.jpg",
        width: 1200,
        height: 630,
        alt: "Marketing Gastronómico Horizon Creative",
      },
    ],
  },
}

export default function RestaurantesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
