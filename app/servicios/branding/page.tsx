"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function BrandingServicio() {
  const { theme } = useTheme();
  const [lang, setLang] = useState<'es'|'en'>(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
  React.useEffect(() => {
    function syncLang() {
      setLang(typeof window !== 'undefined' && (window as any).__contactLang === 'en' ? 'en' : 'es');
    }
    window.addEventListener('click', syncLang);
    return () => window.removeEventListener('click', syncLang);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center pt-10 sm:pt-16">
      <div className="w-full max-w-3xl flex flex-col items-center mb-10">
        <h1 className="text-[2.5rem] sm:text-[3.5rem] font-black mb-4 text-foreground text-center">
          Branding <span className="text-yellow-400">Horizon</span>
        </h1>
        <div className="w-full flex flex-col items-center mb-8">
          <motion.div
            className="w-full flex justify-center mb-6"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
          >
            <svg className="w-[90%] h-8" width="90%" height="32" viewBox="0 0 900 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
              <path d="M 80 28 Q 180 8 300 8 Q 450 8 450 8 Q 600 8 600 8 Q 720 8 820 28" stroke="#facc15" strokeWidth="6" fill="none" strokeLinecap="round" />
            </svg>
          </motion.div>
          {/* Imagen branding debajo de la línea amarilla */}
          <div className="relative w-full max-w-6xl mb-8">
            <Image
              src="/assets/brandingo2.png"
              alt="Branding Horizon"
              width={1200}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          <p className="text-lg text-foreground text-center mb-6">
            <span className="text-yellow-400 font-semibold">En Horizon</span>, no solo diseñamos marcas, <span className="text-yellow-400 font-semibold">las construimos para destacar</span>.<br /><br />
            Creemos que una marca poderosa va más allá de un <span className="text-yellow-400 font-semibold">logo bonito</span>: es una historia coherente, una experiencia memorable y una identidad visual que conecta.<br /><br />
            A través de nuestro <span className="text-yellow-400 font-semibold">enfoque estratégico y creativo</span>, ayudamos a empresas a:
          </p>
          <ul className="mb-6 text-foreground text-base list-disc list-inside text-left max-w-xl mx-auto">
            <li><span className="text-yellow-400 font-semibold">Definir su esencia</span>, encontrando aquello que las hace únicas en su mercado.</li>
            <li><span className="text-yellow-400 font-semibold">Comunicar con claridad y emoción</span>, para que sus audiencias no solo las recuerden, sino que las elijan.</li>
            <li><span className="text-yellow-400 font-semibold">Diferenciarse en un mar de ruido</span>, creando una imagen sólida y coherente que se destaca a primera vista.</li>
          </ul>
          <p className="text-lg text-foreground text-center">
            Desde <span className="text-yellow-400 font-semibold">startups</span> hasta marcas consolidadas, en <span className="text-yellow-400 font-semibold">Horizon</span> desarrollamos branding con visión, propósito y estética impecable.<br />
            Porque cuando <span className="text-yellow-400 font-semibold">tu marca habla claro</span>, tu negocio crece.
          </p>
        </div>
        <motion.div
          className="w-full flex justify-center mb-6"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
        >
          <svg className="w-[60%] h-6" width="60%" height="24" viewBox="0 0 600 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: 'none' }}>
            <path d="M 50 20 Q 150 4 300 4 Q 450 4 550 20" stroke="#facc15" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
