import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Agencia de Branding en Málaga | Identidad Corporativa",
  description: "Creamos marcas memorables en Málaga. Diseño de logotipos, identidad corporativa y estrategia de marca para destacar en tu sector.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
