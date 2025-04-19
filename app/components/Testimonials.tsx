"use client"

// Si no tienes los iconos Heroicons, instala con: npm install @heroicons/react

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { XMarkIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid"

// Testimonios de ejemplo (no se pueden borrar)
function randomDate() {
  const start = new Date();
  start.setFullYear(start.getFullYear() - 2);
  const end = new Date();
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().slice(0, 10); // "YYYY-MM-DD"
}

// Componente para mostrar la fecha formateada solo en cliente
function FechaTestimonio({ dateStr }: { dateStr: string }) {
  const [formatted, setFormatted] = useState(dateStr);
  useEffect(() => {
    try {
      const d = new Date(dateStr);
      setFormatted(d.toLocaleDateString('es-ES'));
    } catch {
      setFormatted(dateStr);
    }
  }, [dateStr]);
  return <span className="absolute right-4 bottom-4 text-xs text-gray-400">{formatted}</span>;
}

const defaultTestimonials = [
  {
    id: "default-1",
    name: "Laura Fernández",
    text:
      "La agencia creó un sitio web increíble y contenido para redes sociales que conectó con nuestra audiencia. Superaron nuestras expectativas con gran profesionalismo.",
    canDelete: false,
    date: randomDate(),
  },
  {
    id: "default-2",
    name: "Carlos Ramírez",
    text:
      "Desarrollaron una app funcional y gestionaron nuestras redes con creatividad, aumentando nuestro alcance. Un trabajo excelente y puntual.",
    canDelete: false,
    date: randomDate(),
  },
]

function getUserToken() {
  let token = localStorage.getItem("testimonials_user_token")
  if (!token) {
    token = Math.random().toString(36).substring(2) + Date.now().toString(36)
    localStorage.setItem("testimonials_user_token", token)
  }
  return token
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("testimonials")
      if (saved) return [...defaultTestimonials, ...JSON.parse(saved)]
    }
    return [...defaultTestimonials]
  })
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [charCount, setCharCount] = useState(0);
  const userToken = useRef<string>("")

  useEffect(() => {
    userToken.current = getUserToken()
  }, [])

  // Guardar en localStorage solo los testimonios de usuario
  useEffect(() => {
    const userTestimonials = testimonials.filter(t => t.canDelete !== false)
    localStorage.setItem("testimonials", JSON.stringify(userTestimonials))
  }, [testimonials])

  const handleAdd = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!name.trim() || !text.trim()) return
    if (text.length > 333) {
      setErrorMsg("El testimonio no puede superar los 333 caracteres.");
      setShowError(true);
      return;
    }
    // Filtrar testimonios del usuario actual
    const userTestimonials = testimonials.filter(t => t.canDelete === userToken.current);
    // Ordenar por fecha (más reciente primero)
    const userTestimonialsSorted = userTestimonials
      .map(t => ({...t, _ts: parseDate(t.date)}))
      .sort((a, b) => b._ts - a._ts);
    const now = new Date();
    // Restricción 24h
    if (userTestimonialsSorted.length > 0) {
      const last = userTestimonialsSorted[0];
      if (now.getTime() - last._ts < 24 * 60 * 60 * 1000) {
        setErrorMsg("Solo puedes publicar un testimonio cada 24 horas.");
        setShowError(true);
        return;
      }
    }
    // Restricción 4 en total o 3 muy seguidos
    if (userTestimonialsSorted.length >= 4) {
      const last = userTestimonialsSorted[0];
      if (now.getTime() - last._ts < 48 * 60 * 60 * 1000) {
        setErrorMsg("Has alcanzado el límite de 4 testimonios. Espera 48h desde el último para publicar otro.");
        setShowError(true);
        return;
      }
    }
    if (userTestimonialsSorted.length >= 3) {
      // Si los 3 últimos han sido muy seguidos (<10min entre sí)
      let tooFast = true;
      for (let i = 0; i < 2; i++) {
        if (userTestimonialsSorted[i]._ts - userTestimonialsSorted[i+1]._ts > 10 * 60 * 1000) {
          tooFast = false;
          break;
        }
      }
      if (tooFast) {
        const last = userTestimonialsSorted[0];
        if (now.getTime() - last._ts < 48 * 60 * 60 * 1000) {
          setErrorMsg("Has publicado 3 testimonios muy seguidos. Espera 48h para publicar otro.");
          setShowError(true);
          return;
        }
      }
    }
    setTestimonials([
      ...testimonials,
      {
        id: Math.random().toString(36).substring(2) + Date.now().toString(36),
        name: name.trim(),
        text: text.trim(),
        canDelete: userToken.current,
        date: new Date().toLocaleDateString('es-ES'),
      },
    ])
    setName("")
    setText("")
    setCharCount(0)
  }

// Utilidad para parsear fecha DD/MM/YYYY a timestamp
function parseDate(dateStr: string) {
  const [d, m, y] = dateStr.split("/").map(Number);
  return new Date(y, m - 1, d).getTime();
}

  const [showError, setShowError] = useState(false);
const [errorMsg, setErrorMsg] = useState("");

const handleDelete = (id: string) => {
    const t = testimonials.find(t => t.id === id);
    if (!t) return;
    if (t.canDelete !== userToken.current) {
      setErrorMsg("Solo puedes borrar tus propios testimonios");
      setShowError(true);
      return;
    }
    setTestimonials(testimonials.filter(t => t.id !== id));
  }

  return (
    <section className="relative w-full bg-black py-20 px-4 md:px-0 overflow-hidden">
      <div className="max-w-4xl md:max-w-5xl mx-auto flex flex-col items-center gap-8">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-2 text-center drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, type: 'spring', bounce: 0.38 }}
        >
          Testimonios
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-4 text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Descubre lo que opinan nuestros clientes sobre trabajar con Horizon Creative.
        </motion.p>
        <motion.div
          className="w-full flex flex-col gap-6 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <form
            className="flex flex-col md:flex-row gap-3 w-full items-stretch mb-4"
            onSubmit={handleAdd}
          >
            <input
              type="text"
              className="rounded-full px-4 py-2 bg-[#222] text-white placeholder-white border border-primary/60 focus:ring-2 focus:ring-primary outline-none flex-1 min-w-0"
              placeholder="Tu nombre"
              value={name}
              onChange={e => setName((e.target as HTMLInputElement).value)}
              maxLength={32}
            />
            <textarea
              className="rounded-2xl px-4 py-2 bg-[#222] text-white placeholder-white border border-primary/60 focus:ring-2 focus:ring-primary outline-none flex-[2] min-w-0 resize-none"
              placeholder="¡Escribe tu opinión aquí!"
              value={text}
              onChange={e => {
                const value = (e.target as HTMLTextAreaElement).value;
                setText(value);
                setCharCount(value.length);
              }}
              maxLength={333}
              rows={1}
            />
            <span className="text-xs text-gray-400 mt-1 ml-1">{charCount}/333</span>
            <button
              type="submit"
              className="flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-black w-12 h-12 transition-colors shadow-md mx-auto md:mx-0"
              title="Publicar opinión"
            >
              <PaperAirplaneIcon className="w-6 h-6" />
            </button>
          </form>
        <div className="flex flex-col gap-4 w-full md:grid md:grid-cols-2 md:gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="relative rounded-xl p-4 pr-10 pb-8 flex flex-col w-full min-h-[120px] md:min-w-0 border border-primary bg-black/60 shadow-2xl transition-transform hover:scale-[1.03] hover:shadow-yellow-400/40"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: 'spring', bounce: 0.2, duration: 0.7 }}
            >
              <span className="font-bold text-primary text-lg mb-1">{t.name}</span>
              <div className="flex-1 flex flex-col">
                <span className="text-base leading-snug flex-1">
                  <span className="text-primary">“</span>
                  <span className="text-white">{t.text}</span>
                  <span className="text-primary">”</span>
                </span>
              </div>
              <FechaTestimonio dateStr={t.date} />
              {t.canDelete === false ? (
                <span
                  className="absolute top-2 right-2 rounded-full p-1 w-7 h-7 flex items-center justify-center bg-neutral-700 text-neutral-400 cursor-not-allowed"
                  title="No se puede borrar"
                  tabIndex={-1}
                >
                  <XMarkIcon className="w-4 h-4" />
                </span>
              ) : (
                <button
                  className={`absolute top-2 right-2 rounded-full p-1 w-7 h-7 flex items-center justify-center bg-primary text-black hover:bg-primary/90`}
                  title="Borrar opinión"
                  onClick={() => {
                    if (t.canDelete === userToken.current) {
                      handleDelete(t.id)
                    } else {
                      setErrorMsg("Solo puedes borrar tus propios testimonios")
                      setShowError(true)
                    }
                  }}
                  tabIndex={0}
                >
                  <XMarkIcon className="w-4 h-4" />
                </button>
              )}
            </motion.div>
          ))}
          {showError && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-black bg-opacity-60 fixed inset-0" onClick={() => setShowError(false)} />
              <div className="relative bg-red-700 text-white rounded-xl px-8 py-6 shadow-2xl flex flex-col items-center z-10">
                <span className="font-bold text-lg mb-2">{errorMsg}</span>
                <button onClick={() => setShowError(false)} className="mt-2 px-4 py-1 rounded bg-white text-red-700 font-semibold">Cerrar</button>
              </div>
            </div>
          )}
        </div>
        </motion.div>
      </div>
    </section>
  )
}
