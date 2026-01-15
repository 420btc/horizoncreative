import "./globals.css"
import "../styles/footer-override.css"
import "./forced-light.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ChatBot from "./components/ChatBot"
import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.horizoncreative.es"),
  title: {
    default: "Horizon Creative | Agencia de Marketing y Fotografía en Málaga",
    template: "%s | Horizon Creative"
  },
  description: "Agencia digital en Málaga y Costa del Sol. Expertos en marketing online, fotografía, diseño web y branding. Impulsa tu negocio con Horizon Creative.",
  keywords: ["Agencia de Marketing Málaga", "Fotografía Costa del Sol", "Diseño Web Benalmádena", "Branding", "Redes Sociales", "Horizon Creative", "Marketing para Restaurantes", "Marketing Inmobiliario", "Grabación con Drones Málaga", "Gestión de Redes Sociales", "Creación de Contenido", "Video Marketing", "Marketing Gastronómico"],
  authors: [{ name: "Horizon Creative" }],
  creator: "Horizon Creative",
  openGraph: {
    title: "Horizon Creative | Agencia de Marketing y Contenido Digital",
    description: "Impulsa tu negocio con estrategias de contenido, redes sociales, fotografía y video con drones. Especialistas en restaurantes e inmobiliarias en Málaga.",
    url: "https://www.horizoncreative.es",
    siteName: "Horizon Creative",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/assets/logohorizon.png",
        width: 800,
        height: 600,
        alt: "Horizon Creative Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logohorizon.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Horizon Creative",
    "image": "https://www.horizoncreative.es/assets/logohorizon.png",
    "@id": "https://www.horizoncreative.es",
    "url": "https://www.horizoncreative.es",
    "telephone": "656314757",
    "email": "info.horizoncreative@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Benalmádena",
      "addressLocality": "Málaga",
      "addressRegion": "Málaga",
      "addressCountry": "ES"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/horizoncreative.agency/"
    ],
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Marketing y Contenido",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gestión de Redes Sociales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Grabación con Drones y Fotografía"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing para Restaurantes e Inmobiliarias"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diseño y Desarrollo Web"
          }
        }
      ]
    }
  }

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <ChatBot />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
import './globals.css'