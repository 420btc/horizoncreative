"use client"

import { motion } from "framer-motion"
import AnimatedSection from "../components/AnimatedSection"
import "./white-line-fix.css"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function SobreNosotros() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const [lang, setLang] = useState<'es'|'en'>(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');

  useEffect(() => setMounted(true), [])
  useEffect(() => {
    function syncLang() {
      setLang(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
    }
    window.addEventListener('click', syncLang);
    return () => window.removeEventListener('click', syncLang);
  }, []);

  const t = {
    title: lang === 'en' ? (<><span>About </span><span className="text-yellow-400">Us</span></>) : (<><span>Sobre </span><span className="text-yellow-400">Nosotros</span></>),
    subtitle: lang === 'en' ? 'The story behind Horizon' : 'La historia detrás de Horizon',
    p1: lang === 'en'
      ? 'We have worked with diverse companies, from small startups to established brands, adapting our strategies to their unique needs and boosting their growth in the digital market.'
      : 'Hemos trabajado con diversas empresas, desde startups pequeñas hasta marcas consolidadas, adaptando nuestras estrategias a sus necesidades particulares y potenciando su crecimiento en el mercado digital.',
    p2: lang === 'en'
      ? 'The idea for Horizon was born from the friendship and energy we share. Together, we decided to combine our skills to help other brands connect with their audience effectively.'
      : 'La idea de Horizon nació de la amistad y la energía que compartimos. Juntos decidimos combinar nuestras habilidades para ayudar a otras marcas a conectarse con su audiencia de manera efectiva.',
    teamTitle: lang === 'en' ? (<>Our <span className="text-yellow-400">Creative</span> Team</>) : (<>Nuestro <span className="text-yellow-400">Equipo</span> Creativo</>),
    teamDesc: lang === 'en'
      ? 'We are a team of professionals passionate about design and digital marketing, committed to excellence and innovation.'
      : 'Somos un equipo de profesionales apasionados por el diseño y el marketing digital, comprometidos con la excelencia y la innovación.',
    creativity: lang === 'en' ? 'Creativity' : 'Creatividad',
    creativityDesc: lang === 'en'
      ? 'We foster an environment where innovation and originality thrive, providing unique solutions that make each client stand out in their market.'
      : 'Fomentamos un ambiente donde la innovación y la originalidad prosperan, brindando soluciones únicas que destacan a cada cliente en su mercado.',
    collaboration: lang === 'en' ? 'Collaboration' : 'Colaboración',
    collaborationDesc: lang === 'en'
      ? 'We work as a cohesive team, valuing communication and everyone’s participation, resulting in optimal performance in our projects.'
      : 'Trabajamos como un equipo cohesionado, valorando la comunicación y la participación de todos, lo que resulta en un rendimiento óptimo en nuestros proyectos.',
    authenticity: lang === 'en' ? 'Authenticity' : 'Autenticidad',
    authenticityDesc: lang === 'en'
      ? 'We believe in transparency and honesty in every interaction, building strong and trustworthy relationships with our clients and collaborators.'
      : 'Creemos en la transparencia y la honestidad en cada interacción, construyendo relaciones sólidas y de confianza con nuestros clientes y colaboradores.',
    innovation: lang === 'en' ? 'Innovation' : 'Innovación',
    innovationDesc: lang === 'en'
      ? 'We are constantly exploring new trends and technologies to offer cutting-edge solutions that drive our clients’ growth.'
      : 'Estamos constantemente explorando nuevas tendencias y tecnologías para ofrecer soluciones de vanguardia que impulsen el crecimiento de nuestros clientes.',
    horizonDesc: lang === 'en'
      ? (<><span className="text-yellow-400 font-bold">Horizon Creative</span>, born from friendship, connects brands with audiences through creativity, collaboration, authenticity, and innovation, driving their <span className="text-yellow-400 font-bold">digital growth</span>.</>)
      : (<><span className="text-yellow-400 font-bold">Horizon Creative</span>, surgida de la amistad, conecta marcas con audiencias mediante creatividad, colaboración, autenticidad e innovación, impulsando su <span className="text-yellow-400 font-bold">crecimiento digital</span>.</>),
  };

  return (
    <div className="bg-black min-h-screen white-line-debug">
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-7xl md:text-8xl font-black mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t.title}
        </motion.h1>

        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {t.subtitle}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-lg text-gray-300 mb-6">
              {t.p1}
            </p>
            <p className="text-lg text-gray-300">
              {t.p2}
            </p>
          </motion.div>
          <motion.div
            className="relative h-80 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/488365731_17866198536358800_8381085028217055403_n.jpg-qRq9xoBMvNqbFIpXXRDUmI0eWDWQn3.jpeg"
              alt="Equipo de Horizon Creative"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t.teamTitle}
        </motion.h2>

        <motion.p
          className="text-lg text-center text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t.teamDesc}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="relative h-80 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/487998197_17866198554358800_5624454380913110215_n.jpg-76zFZEPjxtei5NauowWpqjm6yTgJI1.jpeg"
              alt="Miembro del equipo trabajando en diseños"
              fill
              className="object-cover object-center"
            />
          </motion.div>
          <motion.div
            className="order-first md:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="mb-8">
              <h4 className="text-3xl font-bold mb-2 text-white">{t.creativity}</h4>
              <p className="text-lg text-gray-300">
                {t.creativityDesc}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-3xl font-bold mb-2 text-white">{t.collaboration}</h4>
              <p className="text-lg text-gray-300">
                {t.collaborationDesc}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div>
              <h4 className="text-3xl font-bold mb-2 text-white">{t.authenticity}</h4>
              <p className="text-lg text-gray-300 mb-6">
                {t.authenticityDesc}
              </p>
              <h4 className="text-3xl font-bold mb-2 text-white">{t.innovation}</h4>
              <p className="text-lg text-gray-300">
                {t.innovationDesc}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative h-80 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/488404776_17866198545358800_1740268853361836082_n.jpg-69VdKQwOVG6bFFXkjjsfUeXII5kCTq.jpeg"
              alt="Equipo colaborando en proyectos"
              fill
              className="object-cover object-left-top"
            />
          </motion.div>
        </div>
        {/* Galería de fotos grandes al final */}
        <div className="mt-20 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/studio1.jpg"
                alt="Eric en el estudio"
                fill
                className="object-cover object-left-top"
                priority
              />
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/studio2.jpg"
                alt="Ivan en el estudio"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div id="white-line-fix" className="w-full mt-8 mb-4 bg-black border-none shadow-none">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-1 border-none">
          <div className="flex justify-center items-center border-none">
            <img src="/assets/telescopio.png" alt="Telescopio" className="w-[400px] max-w-full h-auto" />
          </div>
          <div className="flex flex-col justify-center items-center md:justify-end md:items-start gap-2 mt-[-20px] md:-ml-8 md:mt-[-40px] max-w-xl w-full md:pr-4">
            <p className="text-2xl md:text-3xl text-gray-300 text-center md:text-left w-full">
              {t.horizonDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
