import Image from "next/image";

export default function Proyectos() {
  return (
    <div className="min-h-screen py-12 px-4 flex flex-col items-center justify-center bg-white dark:bg-black">
      <h1 className="text-5xl font-black mb-6 text-black dark:text-white">Nuestros <span className="text-yellow-400">Proyectos</span></h1>
      <div className="w-full max-w-2xl flex flex-col items-center">
        <Image
          src="/assets/prod1.png"
          alt="Proyecto destacado"
          width={600}
          height={400}
          className="rounded-xl shadow-lg mb-8 object-cover"
          priority
        />
        {/* Aquí puedes agregar una lista de proyectos o más contenido */}
      </div>
    </div>
  );
}
