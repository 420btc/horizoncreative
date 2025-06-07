"use client";
import { useEffect, useRef, useState } from "react";

const PHRASES = [
  "La creatividad es el motor del cambio.",
  "Tu marca, nuestra inspiración.",
  "Transformamos ideas en resultados."
];

export default function InspirationTag() {
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const phraseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Solo mostrar si no ha sido visto antes
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('inspirationTagDismissed')) {
      setVisible(false);
      setShow(false);
      return;
    }
    // Detectar si el footer está en viewport
    const onScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setVisible(true);
        setTimeout(() => setShow(true), 100); // animación de entrada
        window.removeEventListener('scroll', onScroll);
        // Ocultar tras 10s y marcar como visto
        hideTimerRef.current = setTimeout(() => {
          setShow(false);
          setTimeout(() => {
            setVisible(false);
            localStorage.setItem('inspirationTagDismissed', '1');
          }, 600); // coincide con animación salida
        }, 10000);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  // Cambiar frase cada 3min
  useEffect(() => {
    if (!visible) return;
    phraseTimerRef.current = setInterval(() => {
      setPhraseIdx(idx => (idx + 1) % PHRASES.length);
    }, 180000);
    return () => { if (phraseTimerRef.current) clearInterval(phraseTimerRef.current); };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`inspiration-tag-horizontal${show ? ' show' : ''}`}>
      <span>{PHRASES[phraseIdx]}</span>
      <style jsx>{`
        .inspiration-tag-horizontal.show {
          opacity: 0.98;
          pointer-events: auto;
          transform: translateY(0);
        }
        .inspiration-tag-horizontal {
  position: fixed;
  right: 8px;
  bottom: 48px;
  z-index: 1000;
  background: #FFD600;
  color: #111;
  font-weight: 700;
  font-size: 1.08rem;
  letter-spacing: 0.03em;
  padding: 0.38rem 0.7rem 0.38rem 0.6rem;
  border-radius: 0.38rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.10);
  border: 1.5px solid #FFD600;
  transition: opacity 0.6s, transform 0.6s;
  opacity: 0;
  pointer-events: none;
  transform: translateY(30px);
  min-width: 90px;
  max-width: calc(100vw - 24px);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2rem;
  gap: 0.7rem;
  transform: none;
}

        .inspiration-tag-horizontal span {
          text-align: center;
          line-height: 1.3;
          font-size: 1.08rem;
        }
        @media (max-width: 640px) {
  .inspiration-tag-horizontal {
    font-size: 0.95rem;
    min-width: 120px;
    padding: 0.32rem 0.7rem 0.32rem 0.5rem;
    height: 1.7rem;
    bottom: 12px;
    right: 8px;
    border-radius: 0.32rem;
    max-width: calc(100vw - 16px);
  }
}
      `}</style>
    </div>
  );
}
