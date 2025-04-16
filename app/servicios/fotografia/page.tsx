"use client";

import Image from "next/image";

export default function FotografiaGaleria() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">Fotografía - Galería</h1>
      <div className="grid gap-8">
        <div className="w-full flex flex-col items-center">
          <Image src="/galeria/foto1.jpg" alt="Foto 1" width={900} height={600} className="rounded-2xl shadow-2xl mb-4 object-cover w-full max-w-2xl" />
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">Descripción detallada de la foto 1, proceso creativo, resultado y valor para el cliente.</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <Image src="/galeria/foto2.jpg" alt="Foto 2" width={900} height={600} className="rounded-2xl shadow-2xl mb-4 object-cover w-full max-w-2xl" />
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">Descripción de la foto 2, contexto y explicación visual.</p>
        </div>
        {/* Puedes agregar más fotos y descripciones aquí */}
      </div>
    </section>
  );
}
