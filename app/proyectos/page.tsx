"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

const proyectos = [
  {
    href: "/proyectos/golf-club-branding",
    image: "/assets/golfclub-5.jpg",
    alt: "Golf Club Marbella Branding",
    title: "Golf Club Branding",
    desc: "Branding y personaje de Club de Golf, Marbella.",
  },
  {
    href: "/proyectos/vacation-benalmadena",
    image: "/assets/marketing-1.jpg",
    alt: "Vacation Benalmádena Social Media y Web",
    title: "Vacation Benalmádena",
    desc: "Gestión de red social y web, Vacation Benalmádena.",
  },
  {
    href: "/proyectos/tennis-club-marbella",
    image: "/assets/golfclub-2.jpg",
    alt: "Tennis Club Marbella Branding",
    title: "Tennis Club Marbella",
    desc: "Branding y publicidad de Club de Tennis, Marbella.",
  },
];

export default function Proyectos() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center pt-10 sm:pt-16">
  <h1 className="text-5xl font-black mb-8 text-black dark:text-white text-center mt-2">
    Nuestros <span className="text-yellow-400">Proyectos</span>
  </h1>
  <div className="mt-2"></div>
  {/* Tarjetas de proyectos únicas para esta página */}
  <div className="w-full max-w-7xl flex flex-wrap lg:flex-nowrap justify-center gap-6 min-h-[350px]">
    {proyectos.map((proy, idx) => {
      const [animating, setAnimating] = useState(false);
      const router = useRouter();
      return (
        <motion.div
          key={proy.href}
          className="group relative bg-gradient-to-br from-yellow-100/80 via-white/90 to-yellow-200/60 dark:from-yellow-900/40 dark:via-black/90 dark:to-yellow-900/20 rounded-3xl shadow-2xl overflow-hidden w-[300px] lg:w-[350px] xl:w-[410px] transition-transform hover:scale-[1.035] hover:shadow-yellow-200/40 cursor-pointer"
          style={{ minHeight: 420 }}
          initial={false}
          animate={animating ? { scale: 0.92, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.33, ease: "easeInOut" }}
          onClick={() => {
            if (animating) return;
            setAnimating(true);
            setTimeout(() => {
              router.push(proy.href);
              setAnimating(false);
            }, 330);
          }}
        >
          <div className="absolute top-0 left-0 w-full h-56 bg-gradient-to-t from-black/60 to-transparent z-10 rounded-t-3xl" />
          <Image
            src={proy.image}
            alt={proy.alt}
            width={410}
            height={240}
            className="w-full h-56 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-300"
            priority
          />
          <div className="relative z-20 p-6 flex flex-col justify-between h-[160px]">
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-yellow-300 group-hover:text-yellow-600 transition-colors">
              {proy.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-200 text-base mb-1">
              {proy.desc}
            </p>
            <span className="inline-block mt-2 text-sm font-semibold text-yellow-600 dark:text-yellow-400 group-hover:underline">
              Ver proyecto →
            </span>
          </div>
          {/* Neon Glow Effect */}
          <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 w-[70%] h-7 rounded-full bg-[#FFD600] blur-2xl opacity-80 z-10 pointer-events-none" />
        </motion.div>
      );
    })}
  </div>

  {/* Imágenes decorativas al final, arriba del footer */}
  <div className="w-full flex flex-col items-center justify-center mt-12 sm:mt-[38rem] mb-2">
    <Image
      src="/assets/globito.png"
      alt="Globito decorativo"
      width={230}
      height={230}
      className="mb-6 scale-110 md:scale-150"
      priority
    />
    <Image
      src="/assets/prod1.png"
      alt="Proyecto destacado"
      width={900}
      height={600}
      className="rounded-xl shadow-lg object-cover w-[95vw] max-w-2xl sm:max-w-3xl h-auto mb-2"
      priority
    />
  </div>
</div>
  );
}
