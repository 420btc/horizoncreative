"use client";

import Image from "next/image";

export default function MarketingDigitalGaleria() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">Marketing Digital - Galería</h1>
      <div className="grid gap-8">
        <div className="w-full flex flex-col items-center">
          <Image src="/galeria/marketing1.jpg" alt="Campaña marketing 1" width={900} height={600} className="rounded-2xl shadow-2xl mb-4 object-cover w-full max-w-2xl" />
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">Campaña de marketing digital con resultados medibles y creativos.</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <Image src="/galeria/marketing2.jpg" alt="Campaña marketing 2" width={900} height={600} className="rounded-2xl shadow-2xl mb-4 object-cover w-full max-w-2xl" />
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">Estrategia de redes sociales para crecimiento de marca.</p>
        </div>
      </div>
    </section>
  );
}
