'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Calendar } from 'lucide-react'

type SlotMsg = {
  from: 'bot'
  type: 'slots'
  intro: string
  slots: string[]
  icon?: string
  suffix?: string
  status?: string
}
type TextMsg = { from: 'user' | 'bot'; type?: 'text'; text: string }
type Msg = TextMsg | SlotMsg

const rubros: { negocio: string; result: string; resultDetail: string; msgs: Msg[] }[] = [
  {
    negocio: 'Clínica Vet. PatitasFelices',
    result: '¡CITA AGENDADA!',
    resultDetail: 'CALENDARIO ACTUALIZADO',
    msgs: [
      { from: 'user', text: 'Hola, mi perro tiene fiebre 🐕 ¿Tienen hora hoy?' },
      { from: 'bot', type: 'slots', intro: '¡Hola! 🎉 Claro, estas son mis horas disponibles:', slots: ['15:00', '17:30', '19:00'] },
      { from: 'user', text: '15:00 por favor' },
      { from: 'bot', text: '✅ ¡Cita confirmada!\n📅 Hoy · 15:00 hrs\n🏥 Urgencias — PatitasFelices\n¿Cómo se llama tu mascota?' },
    ],
  },
  {
    negocio: 'Pizzería Forno Vivo',
    result: '¡PEDIDO TOMADO!',
    resultDetail: 'COCINA NOTIFICADA',
    msgs: [
      { from: 'user', text: 'Hola! Quiero pedir una pizza familiar para retirar 🍕' },
      { from: 'bot', type: 'slots', intro: '¡Claro! Estas son las más pedidas hoy:', slots: ['Pepperoni familiar', 'Vegetariana familiar', 'Napolitana familiar'], icon: '🍕', suffix: '', status: 'POPULAR' },
      { from: 'user', text: 'Pepperoni familiar, pago al retirar' },
      { from: 'bot', text: '✅ Pedido confirmado\n🍕 Pepperoni familiar\n⏱️ Retiro estimado: 25 min\nTe avisamos cuando esté lista.' },
    ],
  },
  {
    negocio: 'Tienda Casa Norte',
    result: 'CATÁLOGO ENVIADO',
    resultDetail: 'LEAD CLASIFICADO',
    msgs: [
      { from: 'user', text: 'Hola, ¿me puedes mandar el catálogo de productos?' },
      { from: 'bot', type: 'slots', intro: '¡Por supuesto! ¿Qué categoría quieres revisar?', slots: ['Muebles de terraza', 'Iluminación', 'Decoración'], icon: '🛋️', suffix: '', status: 'VER' },
      { from: 'user', text: 'Muebles de terraza' },
      { from: 'bot', text: '✅ Te envié el catálogo de terraza.\nTambién puedo filtrar por presupuesto, medidas o disponibilidad para entrega.' },
    ],
  },
  {
    negocio: 'Salón de Belleza Luna',
    result: 'RESERVA CONFIRMADA',
    resultDetail: 'AGENDA ACTUALIZADA',
    msgs: [
      { from: 'user', text: 'Quiero agendar un tinte y corte para el viernes 💇‍♀️' },
      { from: 'bot', type: 'slots', intro: '¡Hola! 😊 Para el viernes tengo disponible:', slots: ['10:00', '14:30', '17:00'] },
      { from: 'user', text: '14:30 me queda perfecto 👌' },
      { from: 'bot', text: '✅ ¡Reserva confirmada!\n📅 Viernes · 14:30 hrs\n💇‍♀️ Tinte + Corte\n¡Te esperamos!' },
    ],
  },
  {
    negocio: 'Gimnasio PulsoFit',
    result: 'CLASE RESERVADA',
    resultDetail: 'CUPO DESCONTADO',
    msgs: [
      { from: 'user', text: 'Hola, ¿hay cupos para clase de funcional hoy? 🏋️' },
      { from: 'bot', type: 'slots', intro: 'Sí, estos horarios aún tienen cupos:', slots: ['18:00', '19:00', '20:00'], status: 'CUPO' },
      { from: 'user', text: '19:00 por favor' },
      { from: 'bot', text: '✅ Cupo reservado\n🏋️ Funcional · 19:00 hrs\nRecuerda llegar 10 minutos antes.' },
    ],
  },
  {
    negocio: 'Taller Mecánico Pérez',
    result: 'SERVICIO AGENDADO',
    resultDetail: 'TALLER NOTIFICADO',
    msgs: [
      { from: 'user', text: 'Necesito revisar los frenos, están fallando 🚗' },
      { from: 'bot', type: 'slots', intro: '¡Hola! 🔧 Tenemos disponibilidad mañana:', slots: ['09:00', '10:30', '14:00'] },
      { from: 'user', text: '09:00, mañana temprano perfecto' },
      { from: 'bot', text: '✅ ¡Reservado!\n📅 Mañana · 09:00 hrs\n🔧 Revisión de frenos\nTe mandamos recordatorio esta noche 👍' },
    ],
  },
  {
    negocio: 'Dental Sonrisa Premium',
    result: 'URGENCIA TOMADA',
    resultDetail: 'EQUIPO ALERTADO',
    msgs: [
      { from: 'user', text: 'Tengo un dolor de muela muy fuerte 😣 ¿Me pueden ver hoy?' },
      { from: 'bot', type: 'slots', intro: '¡Hola! 🦷 Tenemos urgencias hoy con el Dr. Ramírez:', slots: ['14:00', '16:00', '17:30'] },
      { from: 'user', text: '14:00 por favor, es urgente' },
      { from: 'bot', text: '✅ ¡Listo!\n📅 Hoy · 14:00 hrs\n🦷 Urgencia — Dr. Ramírez\n¡Pronto te veremos! Cuídate 💙' },
    ],
  },
]

const MSG_STEPS = [1, 3, 4, 6]
const TYPING_STEPS = new Set([2, 5])
const STEP_TIMINGS = [700, 1500, 2900, 4600, 5400, 6900]
const CYCLE_MS = 11000

const benefits = [
  'Responde consultas antes de que se enfríen',
  'Agenda y confirma sin perseguir horarios',
  'Escala los casos importantes con contexto',
]

function SlotMessage({ msg }: { msg: SlotMsg }) {
  return (
    <div className="bg-white rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-xl px-3 py-2 shadow-sm max-w-[88%]">
      <p className="text-[11px] text-gray-800 leading-relaxed mb-2">{msg.intro}</p>
      <div className="space-y-1.5">
        {msg.slots.map((slot) => (
          <div key={slot} className="flex items-center justify-between bg-gray-50 rounded-lg px-2.5 py-1.5">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-gray-500">{msg.icon || '🕐'}</span>
              <span className="text-[11px] font-semibold text-gray-800">{slot}{msg.suffix ?? ' hrs'}</span>
            </div>
            <span className="text-[9px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">{msg.status || 'DISPONIBLE'}</span>
          </div>
        ))}
      </div>
      <p className="text-[9px] text-gray-400 mt-1.5 text-left">VernyBot</p>
    </div>
  )
}

function IphoneMockup() {
  const [rubroIdx, setRubroIdx] = useState(0)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timers = STEP_TIMINGS.map((t, i) => setTimeout(() => setStep(i + 1), t))
    return () => timers.forEach(clearTimeout)
  }, [rubroIdx])

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(0)
      setRubroIdx(i => (i + 1) % rubros.length)
    }, CYCLE_MS)
    return () => clearInterval(interval)
  }, [])

  const rubro = rubros[rubroIdx]
  const isConfirmed = step >= 6

  return (
    <div className="relative flex justify-center items-center py-8">
      {/* Glow */}
      <div className="absolute w-[320px] h-[320px] bg-cyan-400/8 rounded-full blur-3xl pointer-events-none" />

      {/* Card CITA AGENDADA — bottom left */}
      <AnimatePresence>
        {isConfirmed && (
          <motion.div
            initial={{ opacity: 0, y: 12, x: -12 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-4 -left-2 lg:left-0 bg-white rounded-2xl px-4 py-3 shadow-2xl z-20 flex items-center gap-3"
          >
            <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4.5 h-4.5 text-white" />
            </div>
            <div>
              <p className="text-gray-900 text-xs font-black tracking-tight leading-tight">{rubro.result}</p>
              <p className="text-gray-400 text-[10px] font-medium tracking-wide">{rubro.resultDetail}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* iPhone */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-[320px] bg-[#0a0a0f] rounded-[50px] p-[10px] shadow-xl border border-white/[0.08]"
      >
        {/* Notch */}
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0a0a0f] rounded-b-2xl z-10" />
        {/* Botones laterales */}
        <div className="absolute -left-[3px] top-24 w-[3px] h-7 bg-white/15 rounded-l-sm" />
        <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-white/15 rounded-l-sm" />
        <div className="absolute -left-[3px] top-52 w-[3px] h-12 bg-white/15 rounded-l-sm" />
        <div className="absolute -right-[3px] top-40 w-[3px] h-16 bg-white/15 rounded-r-sm" />

        {/* Pantalla */}
        <div className="bg-gray-100 rounded-[42px] overflow-hidden h-[560px] flex flex-col">
          {/* Header WhatsApp */}
          <div className="bg-[#075E54] px-4 pt-8 pb-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">V</div>
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.p
                  key={rubroIdx}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="text-white text-xs font-semibold leading-tight truncate"
                >
                  {rubro.negocio}
                </motion.p>
              </AnimatePresence>
              <p className="text-green-300 text-[10px]">VernyBot • en línea</p>
            </div>
          </div>

          {/* Chat */}
          <div className="flex-1 bg-[#ECE5DD] px-3 py-3 flex flex-col gap-2 overflow-hidden">
            {rubro.msgs.map((msg, i) => (
              <AnimatePresence key={`${rubroIdx}-${i}`}>
                {step >= MSG_STEPS[i] && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, x: msg.from === 'user' ? 8 : -8 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.from === 'user' ? (
                      <div className="bg-[#DCF8C6] rounded-tl-xl rounded-tr-sm rounded-bl-xl rounded-br-xl px-3 py-2 shadow-sm max-w-[84%]">
                        <p className="text-[11px] text-gray-800 leading-relaxed">{(msg as TextMsg).text}</p>
                        <p className="text-[9px] text-gray-400 text-right mt-0.5">✓✓</p>
                      </div>
                    ) : msg.type === 'slots' ? (
                      <SlotMessage msg={msg as SlotMsg} />
                    ) : (
                      <div className="bg-white rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-xl px-3 py-2 shadow-sm max-w-[84%]">
                        <p className="text-[11px] text-gray-800 leading-relaxed whitespace-pre-line">{(msg as TextMsg).text}</p>
                        <p className="text-[9px] text-gray-400 mt-0.5">VernyBot</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            ))}

            {/* Typing */}
            <AnimatePresence>
              {TYPING_STEPS.has(step) && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="self-start"
                >
                  <div className="bg-white rounded-tl-sm rounded-tr-xl rounded-bl-xl rounded-br-xl px-3.5 py-2.5 shadow-sm flex gap-1 items-center">
                    {[0, 1, 2].map(i => (
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
          </div>

          {/* Input */}
          <div className="bg-[#F0F0F0] px-3 py-2.5 flex items-center gap-2">
            <div className="flex-1 bg-white rounded-full px-4 py-1.5 text-[10px] text-gray-400">
              Escribe un mensaje...
            </div>
            <div className="w-8 h-8 rounded-full bg-[#075E54] flex items-center justify-center flex-shrink-0">
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
    <section className="relative min-h-screen overflow-hidden flex items-center pt-20">
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#FBFEFF] via-[#FBFEFF]/90 to-transparent lg:w-[68%] pointer-events-none" />
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-[#FBFEFF]/40 via-transparent to-[#FBFEFF]/55 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#EAF7FF] to-transparent pointer-events-none" />
      <div className="absolute left-8 top-32 hidden h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -inset-x-4 -inset-y-5 -z-10 rounded-[2rem] bg-white/58 blur-2xl sm:-inset-x-8 lg:bg-white/36" />
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-1.5 mb-5 shadow-sm">
              <Zap className="w-3 h-3 text-cyan-600" />
              <span className="text-navy text-xs font-semibold tracking-wide uppercase">Automatización con IA para empresas chilenas</span>
            </div>

            {/* Headline grande */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-navy leading-[0.98] lg:leading-[0.95] mb-6">
              Si tus clientes<br />
              esperan,<br />
              <span className="text-cyan-600">tu negocio</span><br />
              <span className="text-sky-700">pierde ritmo.</span>
            </h1>

            <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-6 max-w-md">
              Cuando responder, agendar y derivar depende de una persona, las oportunidades se enfrían. Verny instala agentes de IA que atienden, ordenan y conectan tu operación en tiempo real.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-navy/80 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#004D8C] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-[0_12px_28px_rgba(0,77,140,0.24)] transition-colors duration-200 hover:bg-[#003A68] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Automatizar ahora
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#productos"
                className="inline-flex items-center border-b-2 border-cyan-500 pb-1 text-sm font-bold uppercase tracking-wide text-[#004D8C] transition-colors duration-200 hover:border-[#004D8C] hover:text-[#00213D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Ver soluciones
              </a>
            </div>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative lg:block max-sm:scale-[0.88] max-sm:origin-top"
          >
            <IphoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
