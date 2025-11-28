import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agencia de Marketing Digital en Málaga | SEO, SEM, Redes Sociales",
  description: "Impulsa tu negocio con estrategias de marketing digital efectivas en Málaga. SEO, SEM, gestión de redes sociales y campañas publicitarias a medida.",
  openGraph: {
    title: "Agencia de Marketing Digital en Málaga | Horizon Creative",
    description: "Estrategias de marketing digital que generan resultados reales.",
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
