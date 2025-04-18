import Image from "next/image";

export default function TennisClubMarbella() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-10 sm:pt-16">
      <h1 className="text-5xl font-black mb-8 text-white text-center mt-2">
        Tennis Club Marbella
      </h1>
      <div className="w-full max-w-2xl flex flex-col items-center mt-2 bg-black">
        <Image
          src="/assets/golfclub-2.jpg"
          alt="Tennis Club Marbella Branding"
          width={660}
          height={440}
          className="rounded-xl shadow-lg mb-8 object-cover"
          priority
        />
        <p className="text-lg text-gray-200 text-center max-w-xl mt-4">
          Branding y publicidad de Club de Tennis, Marbella. Estrategia visual, diseño de campañas y posicionamiento local.
        </p>
      </div>
    </div>
  );
}
