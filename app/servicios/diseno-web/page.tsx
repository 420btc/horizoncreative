"use client";

import Image from "next/image";

export default function DisenoWebGaleria() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Diseño Web - Galería</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="w-full flex flex-col items-center">
          <Image src="/galeria/diseno1.jpg" alt="Diseño web 1" width={900} height={600} className="rounded-2xl shadow-2xl mb-4 object-cover w-full max-w-2xl" />
          <p className="text-lg text-gray-300 text-center">Ejemplo de diseño web creativo y adaptativo para cliente destacado.</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <Image src="/galeria/diseno2.jpg" alt="Diseño web 2" width={900} height={600} className="rounded-2xl shadow-2xl mb-4 object-cover w-full max-w-2xl" />
          <p className="text-lg text-gray-300 text-center">Web corporativa con enfoque visual y experiencia de usuario optimizada.</p>
        </div>
      </div>
    </section>
  );
}
