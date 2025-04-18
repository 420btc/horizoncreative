import Image from "next/image";

export default function VacationBenalmadena() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 sm:pt-16">
      <h1 className="text-5xl font-black mb-8 text-white text-center mt-2">
        Vacation Benalmádena
      </h1>
      <div className="w-full max-w-2xl flex flex-col items-center mt-2">
        <Image
          src="/assets/marketing-1.jpg"
          alt="Vacation Benalmádena Social Media y Web"
          width={660}
          height={440}
          className="rounded-xl shadow-lg mb-8 object-cover"
          priority
        />
        <p className="text-lg text-gray-700 dark:text-gray-200 text-center max-w-xl mt-4">
          Gestión integral de la red social y desarrollo web para Vacation Benalmádena. Estrategia digital, branding visual y crecimiento de comunidad.
        </p>
      </div>
    </div>
  );
}
