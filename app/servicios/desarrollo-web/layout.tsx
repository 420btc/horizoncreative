import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Desarrollo Web a Medida en Málaga | Aplicaciones Web",
  description: "Expertos en desarrollo web a medida en Málaga. Aplicaciones web robustas, escalables y seguras para optimizar los procesos de tu empresa.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
