'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Bot, Calendar, Plug, CheckCircle, ArrowRight, Code2 } from 'lucide-react'

function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay },
  }
}

/* ── WhatsApp mockup ── */
function WhatsAppMockup() {
  const messages = [
    { from: 'user', text: 'Hola! Quiero agendar una hora para mañana' },
    { from: 'bot', text: 'Claro! Tengo disponible las 10:00 y las 15:30. ¿Cuál te acomoda? 📅' },
    { from: 'user', text: '10:00 perfecto' },
    { from: 'bot', text: '✅ Listo, te confirmé la cita para mañana a las 10:00. ¡Hasta entonces!' },
  ]

  return (
    <div className="w-full max-w-[320px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
      {/* Header */}
      <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-cyan-400 flex items-center justify-center text-white font-bold text-sm">V</div>
        <div>
          <p className="text-white text-sm font-semibold leading-none">VernyBot</p>
          <p className="text-green-300 text-xs mt-0.5">en línea</p>
        </div>
      </div>
      {/* Chat */}
      <div className="bg-[#ECE5DD] px-3 py-4 space-y-2.5">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.2 }}
            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] px-3 py-2 rounded-xl text-xs leading-snug shadow-sm ${
              msg.from === 'user'
                ? 'bg-[#DCF8C6] text-gray-800 rounded-tr-sm'
                : 'bg-white text-gray-800 rounded-tl-sm'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Input */}
      <div className="bg-[#F0F0F0] px-3 py-2 flex items-center gap-2">
        <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[11px] text-gray-400">Escribe un mensaje...</div>
        <div className="w-7 h-7 rounded-full bg-[#075E54] flex items-center justify-center">
          <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </div>
      </div>
    </div>
  )
}

/* ── Calendar mockup ── */
function CalendarMockup() {
  const slots = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00']
  return (
    <div className="w-full max-w-[320px] mx-auto bg-[#004D8C] border border-sky-100 rounded-2xl overflow-hidden shadow-2xl">
      {/* Month */}
      <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
        <span className="text-white font-semibold text-sm">Abril 2026</span>
        <span className="text-cyan-400 text-xs font-medium bg-cyan-500/10 px-2.5 py-1 rounded-full">14 disponibles</span>
      </div>
      {/* Days strip */}
      <div className="grid grid-cols-7 text-center text-[10px] text-white/40 px-4 pt-3 pb-1">
        {['L','M','M','J','V','S','D'].map((d, i) => <span key={i}>{d}</span>)}
      </div>
      <div className="grid grid-cols-7 text-center text-[11px] px-4 pb-3 gap-y-0.5">
        {Array.from({ length: 30 }, (_, i) => i + 1).map(d => (
          <span key={d} className={`py-1 rounded-full transition-colors ${
            d === 14 ? 'bg-cyan-500 text-white font-bold' :
            [9,11,16,18,22].includes(d) ? 'bg-cyan-500/15 text-cyan-400' :
            'text-white/40'
          }`}>{d}</span>
        ))}
      </div>
      {/* Time slots */}
      <div className="px-4 pb-4 border-t border-white/10 pt-3">
        <p className="text-white/50 text-[10px] mb-2 font-medium uppercase tracking-wide">Horarios · Miércoles 14</p>
        <div className="grid grid-cols-3 gap-1.5">
          {slots.map((s, i) => (
            <div key={s} className={`text-center py-1.5 rounded-lg text-xs font-medium transition-colors ${
              i === 1 ? 'bg-cyan-500 text-white' : 'bg-white/5 text-white/60 border border-white/10'
            }`}>{s}</div>
          ))}
        </div>
      </div>
      {/* Confirmation */}
      <div className="mx-4 mb-4 bg-green-500/10 border border-green-500/20 rounded-xl px-3 py-2.5 flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
        <div>
          <p className="text-white text-xs font-semibold">Confirmación enviada por WhatsApp</p>
          <p className="text-white/40 text-[10px]">Mié 14 · 10:30 — Clínica Verny</p>
        </div>
      </div>
    </div>
  )
}

/* ── Integrations grid ── */
const integrations = [
  { name: 'Salesforce', slug: 'salesforce' },
  { name: 'HubSpot', slug: 'hubspot' },
  { name: 'WhatsApp', slug: 'whatsapp' },
  { name: 'SAP', slug: 'sap' },
  { name: 'Shopify', slug: 'shopify' },
  { name: 'Slack', slug: 'slack' },
  { name: 'Google', slug: 'google' },
  { name: 'Zapier', slug: 'zapier' },
  { name: 'Notion', slug: 'notion' },
  { name: 'Stripe', slug: 'stripe' },
  { name: 'Make', slug: 'make' },
  { name: 'API propia', slug: null },
]

function IntegrationsGrid() {
  return (
    <div className="w-full max-w-[380px] mx-auto">
      <div className="grid grid-cols-3 gap-3">
        {integrations.map((int, i) => (
          <motion.div
            key={int.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="bg-white/70 border border-sky-100 rounded-xl px-3 py-3 flex flex-col items-center gap-1.5 hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-200"
          >
            {int.slug ? (
              <Image
                src={`https://cdn.simpleicons.org/${int.slug}`}
                alt=""
                width={20}
                height={20}
                className="object-contain"
                loading="lazy"
                unoptimized
              />
            ) : (
              <Code2 className="h-5 w-5 text-cyan-600" />
            )}
            <span className="text-navy/70 text-[10px] font-medium text-center leading-tight">{int.name}</span>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-slate-500 text-xs mt-4">+ 40 integraciones más disponibles</p>
    </div>
  )
}

/* ── Main section ── */
export default function Productos() {
  return (
    <section id="productos" className="relative overflow-hidden py-28 bg-white/82 backdrop-blur-[1px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div {...fadeIn()} className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-navy mb-4">
            Primero detectamos el cuello de botella.{' '}
            <span className="text-gradient">Luego automatizamos.</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Cada producto nace de una fricción concreta: mensajes sin responder, agendas desordenadas o sistemas que no conversan entre sí.
          </p>
        </motion.div>

        {/* ── Quote 01 ── */}
        <motion.p {...fadeIn(0.06)} className="text-navy/70 text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug mb-4">
          <span className="text-sky-300 text-4xl font-black mr-1 align-top leading-none">&ldquo;</span>
          ... Necesitamos{' '}
          <span className="text-cyan-600 font-bold">Automatizar</span>
          {' '}el WhatsApp de mi empresa
          <span className="text-sky-300 text-4xl font-black ml-1 align-top leading-none">&rdquo;</span>
        </motion.p>

        {/* ── Producto 01: VernyBot ── */}
        <motion.div id="vernybot" {...fadeIn(0.1)} className="frosted-panel corner-frame relative scroll-mt-28 rounded-2xl p-6 sm:p-8 lg:p-12 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-14 overflow-hidden">
          {/* Glow fondo */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-cyan-400/4 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            {/* Número decorativo grande */}
            <span className="absolute -top-6 -left-2 text-[120px] font-black text-sky-100 leading-none select-none pointer-events-none">01</span>

            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-11 h-11 bg-cyan-500/10 border border-cyan-500/15 rounded-xl flex items-center justify-center">
                  <Bot className="w-5 h-5 text-cyan-300" />
                </div>
                <div>
                  <p className="text-cyan-300/60 text-[10px] font-bold tracking-widest uppercase">Producto 01</p>
                  <h3 className="text-3xl font-bold text-navy leading-tight">VernyBot</h3>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed mb-6">
                El problema no es recibir muchos mensajes: es no saber cuáles requieren venta, soporte o agenda. VernyBot responde, clasifica y deriva conversaciones desde WhatsApp o web antes de que el cliente busque otra opción.
              </p>

              <ul className="space-y-2.5 mb-8">
                {[
                  'Responde el 100% de las consultas al instante',
                  'Agenda citas sin intervención humana',
                  'Escala a agente humano cuando es necesario',
                  'Panel de auditoría de conversaciones en tiempo real',
                ].map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contacto" className="inline-flex items-center gap-2 bg-cyan-500/8 border border-cyan-500/15 text-cyan-300 text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-cyan-500/14 hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                Quiero probar VernyBot <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <WhatsAppMockup />
          </div>
        </motion.div>

        {/* ── Quote 02 ── */}
        <motion.p {...fadeIn(0.06)} className="text-navy/70 text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug mb-4 mt-12">
          <span className="text-sky-300 text-4xl font-black mr-1 align-top leading-none">&ldquo;</span>
          ... Necesitamos{' '}
          <span className="text-cyan-600 font-bold">Agilizar</span>
          {' '}las citas de servicio...
          <span className="text-sky-300 text-4xl font-black ml-1 align-top leading-none">&rdquo;</span>
        </motion.p>

        {/* ── Producto 02: VernyCalendar ── */}
        <motion.div id="vernycalendar" {...fadeIn(0.1)} className="frosted-panel corner-frame relative scroll-mt-28 rounded-2xl p-6 sm:p-8 lg:p-12 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-14 overflow-hidden">
          {/* Glow fondo */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="order-2 lg:order-1 relative">
            <CalendarMockup />
          </div>

          <div className="order-1 lg:order-2 relative">
            <span className="absolute -top-6 -right-2 text-[120px] font-black text-sky-100 leading-none select-none pointer-events-none">02</span>

            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-11 h-11 bg-cyan-500/10 border border-cyan-500/15 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-cyan-700/60 text-[10px] font-bold tracking-widest uppercase">Producto 02</p>
                  <h3 className="text-3xl font-bold text-navy leading-tight">VernyCalendar</h3>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Si cada cita requiere revisar disponibilidad, responder mensajes y confirmar manualmente, tu equipo pierde foco. VernyCalendar permite que el cliente elija, confirme y reciba recordatorios sin cruces de agenda.
              </p>

              <ul className="space-y-2.5 mb-8">
                {[
                  'Reservas 24/7 desde web o WhatsApp',
                  'Confirmación y recordatorio automático',
                  'Sincronización con Google Calendar',
                  'Gestión de cancelaciones y reprogramaciones',
                ].map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contacto" className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-navy text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-cyan-50 hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                Quiero VernyCalendar <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Quote 03 ── */}
        <motion.p {...fadeIn(0.06)} className="text-navy/70 text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug mb-4 mt-12">
          <span className="text-sky-300 text-4xl font-black mr-1 align-top leading-none">&ldquo;</span>
          ... Necesitamos{' '}
          <span className="text-cyan-600 font-bold">Integrarle IA</span>
          {' '}a nuestro Módulo de...
          <span className="text-sky-300 text-4xl font-black ml-1 align-top leading-none">&rdquo;</span>
        </motion.p>

        {/* ── Producto 03: Conectividad Pro ── */}
        <motion.div id="conectividad" {...fadeIn(0.1)} className="frosted-panel corner-frame relative scroll-mt-28 rounded-2xl p-6 sm:p-8 lg:p-12 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center overflow-hidden">
          {/* Glow fondo */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <span className="absolute -top-6 -left-2 text-[120px] font-black text-sky-100 leading-none select-none pointer-events-none">03</span>

            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-11 h-11 bg-cyan-500/10 border border-cyan-500/15 rounded-xl flex items-center justify-center">
                  <Plug className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-cyan-700/60 text-[10px] font-bold tracking-widest uppercase">Producto 03</p>
                  <h3 className="text-3xl font-bold text-navy leading-tight">Conectividad Pro</h3>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed mb-6">
                La IA pierde valor si queda aislada. Conectividad Pro une VernyBot con tu CRM, ERP, ecommerce o API interna para que cada conversación alimente la operación, no otra planilla.
              </p>

              <ul className="space-y-2.5 mb-8">
                {[
                  'Integración con Salesforce, HubSpot, SAP y más',
                  'Conexión con Shopify, Stripe y plataformas de pago',
                  'API personalizada para sistemas a medida',
                  'Más de 50 conectores disponibles',
                ].map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contacto" className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-navy text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-cyan-50 hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
                Quiero Conectividad Pro <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <IntegrationsGrid />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
