import React from "react";

export default function BrushButton({ onClick, active }: { onClick: () => void; active: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-7 right-4 z-50 w-16 h-16 rounded-full bg-yellow-400 shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110 border-4 border-white ${active ? 'ring-4 ring-yellow-300' : ''}`}
      style={{ boxShadow: '0 4px 32px #FFD60077' }}
      aria-label="Activar pincel"
    >
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22s2-2 6-2 6 2 6 2" />
        <path d="M7.5 18.5c-1.5-2.5-1.5-6.5 2.5-10.5 4-4 8-4 10.5-2.5" />
        <path d="M19.5 4.5c2.5 2.5 2.5 6.5-2.5 10.5-4 4-8 4-10.5 2.5" />
      </svg>
    </button>
  );
}
