import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fotografía y Video Profesional en Málaga | Horizon Creative",
  description: "Servicios de fotografía y video profesional en Málaga y Costa del Sol. Fotografía de producto, eventos, corporativa y más. Calidad visual que impulsa tu marca.",
  openGraph: {
    title: "Fotografía y Video Profesional | Horizon Creative",
    description: "Capturamos la esencia de tu marca con imágenes de alto impacto en Málaga.",
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
