'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatisticsSectionProps {
  lang: 'es' | 'en';
}

export default function StatisticsSection({ lang }: StatisticsSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setAnimateSkills(true), 500);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-4">
            {lang === 'en' ? 'Success Stories' : 'Casos de Éxito'}
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            {lang === 'en' 
              ? 'Quality results that speak for themselves. Our focused approach delivers exceptional outcomes for every client.'
              : 'Resultados de calidad que hablan por sí solos. Nuestro enfoque especializado entrega resultados excepcionales para cada cliente.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Gráfico radial - Satisfacción del cliente */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black rounded-3xl p-8 shadow-xl border border-yellow-400 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                {lang === 'en' ? 'Client Satisfaction' : 'Satisfacción del Cliente'}
              </h3>
              <p className="text-white">
                {lang === 'en' ? 'Quality over quantity approach' : 'Enfoque de calidad sobre cantidad'}
              </p>
            </div>
            
            <div className="relative flex items-center justify-center mb-6">
              <svg className="w-56 h-56 transform -rotate-90" viewBox="0 0 200 200">
                {/* Círculo de fondo */}
                <circle
                  cx="100"
                  cy="100"
                  r="75"
                  stroke="#000000"
                  strokeWidth="15"
                  fill="none"
                />
                {/* Círculo de progreso */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="75"
                  stroke="#FACC15"
                  strokeWidth="15"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 75}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 75 }}
                  animate={animateSkills ? { strokeDashoffset: 2 * Math.PI * 75 * (1 - 0.96) } : {}}
                  transition={{ duration: 2.5, delay: 0.8, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.span
                    className="text-5xl font-black text-yellow-400"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={animateSkills ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.5 }}
                  >
                    96%
                  </motion.span>
                  <p className="text-xs text-white mt-1 font-medium">
                    {lang === 'en' ? 'Happy Clients' : 'Clientes Satisfechos'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Gráficos lineales - Métricas de crecimiento */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black rounded-3xl p-8 shadow-xl border border-yellow-400 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                {lang === 'en' ? 'Growth Metrics' : 'Métricas de Crecimiento'}
              </h3>
              <p className="text-white">
                {lang === 'en' ? 'Results from our recent projects' : 'Resultados de nuestros proyectos recientes'}
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Métrica 1 */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-white">
                    {lang === 'en' ? 'Organic Traffic' : 'Tráfico Orgánico'}
                  </span>
                  <span className="text-lg font-bold text-yellow-400">+85%</span>
                </div>
                <div className="w-full bg-black rounded-full h-4 overflow-hidden">
                  <motion.div
                    className="bg-yellow-400 h-4 rounded-full shadow-sm"
                    initial={{ width: 0 }}
                    animate={animateSkills ? { width: "65%" } : {}}
                    transition={{ duration: 1.8, delay: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
              
              {/* Métrica 2 */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-white">
                    {lang === 'en' ? 'Conversion Rate' : 'Tasa de Conversión'}
                  </span>
                  <span className="text-lg font-bold text-yellow-400">+65%</span>
                </div>
                <div className="w-full bg-black rounded-full h-4 overflow-hidden">
                  <motion.div
                    className="bg-yellow-400 h-4 rounded-full shadow-sm"
                    initial={{ width: 0 }}
                    animate={animateSkills ? { width: "55%" } : {}}
                    transition={{ duration: 1.8, delay: 1.2, ease: "easeOut" }}
                  />
                </div>
              </div>
              
              {/* Métrica 3 */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-white">
                    {lang === 'en' ? 'Brand Recognition' : 'Reconocimiento de Marca'}
                  </span>
                  <span className="text-lg font-bold text-yellow-400">+120%</span>
                </div>
                <div className="w-full bg-black rounded-full h-4 overflow-hidden">
                  <motion.div
                    className="bg-yellow-400 h-4 rounded-full shadow-sm"
                    initial={{ width: 0 }}
                    animate={animateSkills ? { width: "75%" } : {}}
                    transition={{ duration: 1.8, delay: 1.4, ease: "easeOut" }}
                  />
                </div>
              </div>
              
              {/* Métrica 4 */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-semibold text-white">
                    {lang === 'en' ? 'Social Engagement' : 'Engagement Social'}
                  </span>
                  <span className="text-lg font-bold text-yellow-400">+95%</span>
                </div>
                <div className="w-full bg-black rounded-full h-4 overflow-hidden">
                  <motion.div
                    className="bg-yellow-400 h-4 rounded-full shadow-sm"
                    initial={{ width: 0 }}
                    animate={animateSkills ? { width: "68%" } : {}}
                    transition={{ duration: 1.8, delay: 1.6, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Estadísticas adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 bg-black rounded-2xl shadow-lg border border-yellow-400">
            <motion.div
              className="text-3xl font-black text-yellow-400 mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={animateSkills ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              100%
            </motion.div>
            <p className="text-sm text-white font-medium">
              {lang === 'en' ? 'Quality Focus' : 'Enfoque en Calidad'}
            </p>
          </div>
          
          <div className="text-center p-6 bg-black rounded-2xl shadow-lg border border-yellow-400">
            <motion.div
              className="text-3xl font-black text-yellow-400 mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={animateSkills ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 2 }}
            >
              15+
            </motion.div>
            <p className="text-sm text-white font-medium">
              {lang === 'en' ? 'Happy Clients' : 'Clientes Satisfechos'}
            </p>
          </div>
          
          <div className="text-center p-6 bg-black rounded-2xl shadow-lg border border-yellow-400">
            <motion.div
              className="text-3xl font-black text-yellow-400 mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={animateSkills ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              3+
            </motion.div>
            <p className="text-sm text-white font-medium">
              {lang === 'en' ? 'Years Experience' : 'Años de Experiencia'}
            </p>
          </div>
          
          <div className="text-center p-6 bg-black rounded-2xl shadow-lg border border-yellow-400">
            <motion.div
              className="text-3xl font-black text-yellow-400 mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={animateSkills ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              24/7
            </motion.div>
            <p className="text-sm text-white font-medium">
              {lang === 'en' ? 'Support Available' : 'Soporte Disponible'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}