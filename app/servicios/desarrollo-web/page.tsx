"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export default function DesarrolloWebGaleria() {
  const { theme } = useTheme();
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Desarrollo Web - Galería</h1>
      <div className="grid grid-cols-2 gap-8">
        <div className="w-full flex flex-col items-center min-h-[180px]">
          <Image src="/galeria/dev1.jpg" alt="Desarrollo web 1" width={900} height={600} className="rounded-2xl shadow-2xl mb-4 object-cover w-full max-w-2xl" />
          <p className="text-lg text-gray-300 text-center">Desarrollo de plataforma a medida con integración de sistemas.</p>
        </div>
        <div className="w-full flex flex-col items-center min-h-[180px]">
          <Image src="/galeria/dev2.jpg" alt="Desarrollo web 2" width={900} height={600} className="rounded-2xl shadow-2xl mb-4 object-cover w-full max-w-2xl" />
          <p className="text-lg text-gray-300 text-center">E-commerce robusto y escalable para comercio electrónico.</p>
        </div>
      </div>
    </section>
  );
}
