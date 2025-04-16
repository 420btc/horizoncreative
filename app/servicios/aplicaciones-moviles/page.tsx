"use client";

import Image from "next/image";

export default function AplicacionesMovilesGaleria() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">Aplicaciones Móviles - Galería</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="w-full flex flex-col items-center">
          <Image src="/galeria/app1.jpg" alt="Aplicación móvil 1" width={900} height={600} className="rounded-2xl shadow-2xl mb-4 object-cover w-full max-w-2xl" />
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">Aplicación móvil multiplataforma para gestión de usuarios.</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <Image src="/galeria/app2.jpg" alt="Aplicación móvil 2" width={900} height={600} className="rounded-2xl shadow-2xl mb-4 object-cover w-full max-w-2xl" />
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center">App para reservas y notificaciones en tiempo real.</p>
        </div>
      </div>
    </section>
  );
}
