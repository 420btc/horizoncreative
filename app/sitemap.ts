import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.horizoncreative.es'

  // Rutas estáticas principales
  const routes = [
    '',
    '/sobre-nosotros',
    '/servicios',
    '/proyectos',
    '/contacto',
    '/privacidad',
    '/aviso-legal',
    '/cookies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Servicios específicos
  const services = [
    '/servicios/marketing-digital',
    '/servicios/fotografia',
    '/servicios/diseno-web',
    '/servicios/branding',
    '/servicios/gestion-redes-sociales',
    '/servicios/desarrollo-web',
    '/servicios/aplicaciones-moviles',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Proyectos específicos (basado en la estructura de carpetas vista)
  const projects = [
    '/proyectos/enboca-gastrobar',
    '/proyectos/golf-club-branding',
    '/proyectos/hospital-virgen-victoria',
    '/proyectos/mosh-fun-kitchen',
    '/proyectos/tennis-club-marbella',
    '/proyectos/vacation-benalmadena',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Sectores específicos (Landing Pages para SEO)
  const sectors = [
    '/sectores/restaurantes',
    '/sectores/inmobiliarias',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }))

  return [...routes, ...services, ...projects, ...sectors]
}
