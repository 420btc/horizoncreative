import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diseño Web en Málaga | Webs Modernas y Responsivas",
  description: "Diseño web profesional en Málaga. Creamos páginas web atractivas, rápidas y optimizadas para móviles y buscadores. Tu escaparate digital ideal.",
  openGraph: {
    title: "Diseño Web Profesional en Málaga | Horizon Creative",
    description: "Páginas web que convierten visitas en clientes. Diseño moderno y funcional.",
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
