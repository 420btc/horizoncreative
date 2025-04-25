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
    <div className="relative w-full">
      <div className="flex items-center justify-center mb-2">
        {/* Solo muestra navegación si hay más de una página */}
        {totalPages > 1 && (
          <button
            className="p-2 rounded-full bg-black/60 hover:bg-yellow-400 hover:text-black text-yellow-400 mr-2 transition"
            onClick={goPrev}
            aria-label="Anterior"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <div className="flex-1" />
        {totalPages > 1 && (
          <button
            className="p-2 rounded-full bg-black/60 hover:bg-yellow-400 hover:text-black text-yellow-400 ml-2 transition"
            onClick={goNext}
            aria-label="Siguiente"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
      {/* Grid 2x3 o 1x3 */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center` }
      >
        {pageImages.map((img, idx) => (
          <div
            key={img.src}
            className="group relative cursor-zoom-in w-full max-w-xs"
            onClick={() => setModalImg(img.src)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={260}
              className="rounded-2xl shadow-xl object-cover w-full h-60 sm:h-64 md:h-72 lg:h-80 bg-black group-hover:brightness-75 transition-all duration-300"
              style={{ objectPosition: "center" }}
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
