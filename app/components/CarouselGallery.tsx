"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

interface CarouselGalleryProps {
  images: { src: string; alt: string }[];
}

export default function CarouselGallery({ images }: CarouselGalleryProps) {
  // Si no hay imágenes, no renderizar nada
  if (!images || images.length === 0) return null;

  const [modalImg, setModalImg] = useState<string | null>(null);
  // currentPage es el índice de la "página" de 6 imágenes (0, 1, ...)
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Invertir el orden de las imágenes para que la segunda página aparezca primero
  const reversedImages = [...images].reverse();
  // Saca las imágenes de la página actual
  const pageImages = reversedImages.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

  const goPrev = () => setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  const goNext = () => setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Contenedor principal con espacio para los botones a los lados */}
      <div className="relative flex items-center">
        {/* Botón anterior - Izquierda */}
        {totalPages > 1 && (
          <button
            className="absolute left-0 -translate-x-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-yellow-400 hover:text-black text-yellow-400 transition z-10 flex-shrink-0"
            onClick={goPrev}
            aria-label="Anterior"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Contenido del carrusel */}
        <div className="w-full">
          {/* Grid 2x3 o 1x3 */}
          <div className={`grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center w-full`}>
            {pageImages.map((img, idx) => (
              <div
                key={img.src}
                className="group relative cursor-zoom-in w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl bg-black"
                onClick={() => setModalImg(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover group-hover:brightness-75 transition-all duration-300"
                />
                {/* Overlay lupa en hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/20 rounded-2xl">
                  <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
              </div>
            ))}
            {/* Si hay menos de 6 imágenes, rellena los huecos para mantener el grid */}
            {Array.from({ length: imagesPerPage - pageImages.length }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
          </div>
        </div>

        {/* Botón siguiente - Derecha */}
        {totalPages > 1 && (
          <button
            className="absolute right-0 translate-x-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-yellow-400 hover:text-black text-yellow-400 transition z-10 flex-shrink-0"
            onClick={goNext}
            aria-label="Siguiente"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Modal de imagen (lupa) */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setModalImg(null)}
        >
          <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/40 rounded-full px-3 py-0.5 hover:bg-yellow-400 hover:text-black transition"
              onClick={() => setModalImg(null)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <img
              src={modalImg}
              alt="Vista ampliada"
              className="max-h-[80vh] w-auto rounded-2xl shadow-2xl"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
