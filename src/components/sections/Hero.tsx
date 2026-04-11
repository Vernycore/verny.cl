'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const rubros = [
  { negocio: 'Pizzería Don Mario', usuario: 'Hola! Quiero pedir una pizza familiar de pepperoni 🍕', bot: 'Hola! Con gusto 😊 ¿La retiras en local o con despacho? Tenemos horario hasta las 23:00.' },
  { negocio: 'Taller Mecánico Pérez', usuario: 'Necesito agendar revisión de frenos para mañana', bot: 'Perfecto, tengo disponible mañana a las 10:00 o 14:30 ¿cuál te acomoda? Te confirmo por aquí mismo ✅' },
  { negocio: 'Veterinaria PatitasFelices', usuario: 'Mi perro tiene fiebre, ¿tienen hora hoy?', bot: 'Sí, tenemos urgencias disponibles hoy a las 15:00. Te reservo el cupo, ¿cómo se llama tu mascota? 🐾' },
  { negocio: 'Salón de Belleza Luna', usuario: 'Quiero hacer un tinte y corte para este viernes', bot: 'Hola! Tengo disponible el viernes a las 11:00 y 16:00. El servicio dura aprox 2 hrs. ¿Cuál prefieres? 💇‍♀️' },
]

const benefits = [
  'Responde el 100% de las consultas al instante',
  'Agenda citas sin intervención humana',
  'Integrado a WhatsApp y tu web',
]

function IphoneMockup() {
  const [rubroIdx, setRubroIdx] = useState(0)
  const [step, setStep] = useState(0) // 0: header, 1: user msg, 2: bot typing, 3: bot msg

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 600),
      setTimeout(() => setStep(2), 1800),
      setTimeout(() => setStep(3), 3200),
    ]
    return () => timers.forEach(clearTimeout)
  }, [rubroIdx])

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(0)
      setRubroIdx((i) => (i + 1) % rubros.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const rubro = rubros[rubroIdx]

  return (
    <div className="relative flex justify-center items-center">
      {/* Glow de fondo */}
      <div className="absolute w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />

      {/* iPhone frame */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-[280px] bg-navy-900 rounded-[44px] p-3 shadow-2xl border border-white/10"
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-navy-900 rounded-b-2xl z-10" />

        {/* Pantalla */}
        <div className="bg-gray-100 rounded-[36px] overflow-hidden h-[560px] flex flex-col">
          {/* Header WhatsApp */}
          <div className="bg-[#075E54] px-4 pt-8 pb-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-cyan-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">V</div>
            <div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={rubroIdx}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-white text-xs font-semibold leading-tight"
                >
                  {rubro.negocio}
                </motion.p>
              </AnimatePresence>
              <p className="text-green-300 text-[10px]">VernyBot • en línea</p>
            </div>
          </div>

          {/* Chat */}
          <div className="flex-1 bg-[#ECE5DD] px-3 py-4 flex flex-col gap-3 overflow-hidden">
            {/* Mensaje usuario */}
            <AnimatePresence>
              {step >= 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="self-end max-w-[80%]"
                >
                  <div className="bg-[#DCF8C6] rounded-tl-xl rounded-tr-sm rounded-bl-xl rounded-br-xl px-3 py-2 shadow-sm">
                    <p className="text-[11px] text-gray-800 leading-relaxed">{rubro.usuario}</p>
                    <p className="text-[9px] text-gray-400 text-right mt-1">✓✓</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Typing indicator */}
            <AnimatePresence>
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="self-start"
                >
                  <div className="bg-white rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-xl px-4 py-3 shadow-sm flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Respuesta bot */}
            <AnimatePresence>
              {step >= 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="self-start max-w-[80%]"
                >
                  <div className="bg-white rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-xl px-3 py-2 shadow-sm">
                    <p className="text-[11px] text-gray-800 leading-relaxed">{rubro.bot}</p>
                    <p className="text-[9px] text-gray-400 text-right mt-1">VernyBot</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input bar */}
          <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
            <div className="flex-1 bg-white rounded-full px-4 py-1.5 text-[10px] text-gray-400">
              Escribe un mensaje...
            </div>
            <div className="w-7 h-7 rounded-full bg-[#075E54] flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex items-center pt-20">
      {/* Blobs decorativos */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Columna texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-xs font-medium">Automatización con IA para empresas chilenas</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Tu negocio no para.{' '}
              <span className="text-cyan-400">Tu atención</span>{' '}
              tampoco.
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              Automatizamos las tareas repetitivas de tu empresa con agentes de IA —
              respuesta inmediata, agendamiento automático y atención 24/7.
              A precios justos para la pyme chilena.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-white/70 text-sm">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contacto" className="btn-primary text-base px-6 py-3">
                Quiero automatizar mi negocio
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#productos" className="btn-outline text-base px-6 py-3">
                Ver productos
              </a>
            </div>
          </motion.div>

          {/* Columna mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <IphoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
