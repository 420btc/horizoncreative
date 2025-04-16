"use client";

import Image from "next/image";

export default function MarketingDigitalGaleria() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">Marketing Digital</h1>
      <div className="grid grid-cols-2 gap-4 sm:gap-8 items-start">
        <div className="flex flex-col items-center">
          <div className="w-full aspect-[2/3] relative">
            <Image src="/assets/publi1.jpg" alt="Publicidad Marketing Digital 1" fill className="rounded-2xl shadow-2xl mb-2 object-cover" style={{objectPosition:'top'}} />
          </div>
          <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 text-center"></p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full aspect-[2/3] relative">
            <Image src="/assets/publi2.jpg" alt="Publicidad Marketing Digital 2" fill className="rounded-2xl shadow-2xl mb-2 object-cover" style={{objectPosition:'top'}} />
          </div>
          <p className="text-sm sm:text-lg text-gray-700 dark:text-gray-300 text-center"></p>
        </div>
      </div>
    </section>
  );
}
