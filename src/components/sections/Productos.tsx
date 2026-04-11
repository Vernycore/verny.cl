'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Calendar, Plug, Globe } from 'lucide-react'

const tabs = [
  { id: 'vernybot', label: 'VernyBot', icon: Bot },
  { id: 'calendar', label: 'VernyCalendar', icon: Calendar },
  { id: 'conectividad', label: 'Conectividad Pro', icon: Plug },
]

const integrations = [
  'Salesforce', 'Zendesk', 'SAP', 'HubSpot', 'Slack', 'WhatsApp API',
  'Google Workspace', 'Shopify', 'Notion', 'Stripe', 'Zapier', 'Make',
]

function VernybotTab() {
  const messages = [
    { from: 'user', text: '¿Cuánto cuesta el plan básico?' },
    { from: 'bot', text: 'El plan básico parte desde $29.990/mes e incluye hasta 500 conversaciones. ¿Te interesa una demo gratuita? 🚀' },
    { from: 'user', text: 'Sí, ¿cómo la agendo?' },
    { from: 'bot', text: 'Perfecto! Tengo disponibilidad mañana a las 10:00 o 15:00. ¿Cuál te acomoda? Te confirmo por este mismo canal ✅' },
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Multi-agente · Pyme a Corporativo
        </div>
        <h3 className="text-3xl font-bold text-navy mb-4">
          Un agente que trabaja por ti,{' '}
          <span className="text-cyan-500">las 24 horas</span>
        </h3>
        <p className="text-gray-500 leading-relaxed mb-6">
          VernyBot atiende, agenda, responde preguntas frecuentes y escala casos complejos —
          todo en WhatsApp y tu sitio web. Sin pausas. Sin errores de digitación.
        </p>
        <ul className="space-y-3 text-sm text-gray-600">
          {['Respuesta instantánea a consultas', 'Agendamiento automático integrado', 'Escalada inteligente a agente humano', 'Panel de auditoría en tiempo real'].map(f => (
            <li key={f} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
        <div className="bg-[#075E54] rounded-xl px-4 py-3 flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-white font-bold text-xs">V</div>
          <div>
            <p className="text-white text-xs font-semibold">VernyBot</p>
            <p className="text-green-300 text-[10px]">en línea</p>
          </div>
        </div>
        <div className="space-y-3">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-xs leading-relaxed shadow-sm ${
                msg.from === 'user'
                  ? 'bg-[#DCF8C6] text-gray-800 rounded-tr-sm'
                  : 'bg-white text-gray-800 rounded-tl-sm'
              }`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CalendarTab() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Omnicanal · Web + WhatsApp
        </div>
        <h3 className="text-3xl font-bold text-navy mb-4">
          Agenda online que{' '}
          <span className="text-cyan-500">confirma al instante</span>
        </h3>
        <p className="text-gray-500 leading-relaxed mb-6">
          Tus clientes reservan hora desde tu web y reciben confirmación inmediata por WhatsApp.
          Sin llamadas, sin esperas, sin cruces de agenda.
        </p>
        <ul className="space-y-3 text-sm text-gray-600">
          {['Reservas 24/7 desde web o WhatsApp', 'Recordatorios automáticos por WhatsApp', 'Sincronización con Google Calendar', 'Gestión de cancelaciones y reprogramaciones'].map(f => (
            <li key={f} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* Calendario */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
          <p className="text-xs font-semibold text-navy mb-3">Abril 2025</p>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-gray-400 mb-2">
            {['L','M','M','J','V','S','D'].map(d => <span key={d}>{d}</span>)}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
            {Array.from({ length: 30 }, (_, i) => i + 1).map(d => (
              <span key={d} className={`py-1 rounded-full ${
                d === 14 ? 'bg-cyan-500 text-white font-bold' :
                [11,12,16,18].includes(d) ? 'bg-cyan-50 text-cyan-700' :
                'text-gray-600'
              }`}>{d}</span>
            ))}
          </div>
        </div>
        {/* Confirmación WhatsApp */}
        <div className="bg-[#ECE5DD] rounded-2xl p-4 flex flex-col gap-2">
          <p className="text-[10px] font-semibold text-gray-500 mb-1">Confirmación enviada</p>
          <div className="bg-white rounded-xl px-3 py-2 shadow-sm">
            <p className="text-[10px] text-gray-700 leading-relaxed">
              ✅ <strong>Cita confirmada</strong><br/>
              Martes 14 Abril · 15:00<br/>
              Clínica Verny<br/>
              <span className="text-cyan-600">Ver en Google Maps →</span>
            </p>
          </div>
          <div className="bg-[#DCF8C6] rounded-xl px-3 py-2 shadow-sm self-end">
            <p className="text-[10px] text-gray-700">Gracias! Ahí estaré 🙌</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ConectividadTab() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
        Integraciones Enterprise
      </div>
      <h3 className="text-3xl font-bold text-navy mb-4">
        Conectado con{' '}
        <span className="text-cyan-500">tu stack tecnológico</span>
      </h3>
      <p className="text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto">
        Integramos VernyBot con las plataformas que ya usas. CRM, ERP, ecommerce y más —
        todo comunicado en tiempo real.
      </p>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {[...integrations, ...integrations].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-gray-50 border border-gray-100 rounded-xl px-6 py-3 text-sm font-semibold text-gray-400 hover:text-cyan-500 hover:border-cyan-200 hover:bg-cyan-50 transition-all duration-200 cursor-default"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </div>
  )
}

export default function Productos() {
  const [active, setActive] = useState('vernybot')

  return (
    <section id="productos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Soluciones que se adaptan{' '}
            <span className="text-cyan-500">a tu negocio</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Desde la pyme hasta la empresa corporativa, tenemos el producto exacto para tu etapa.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-50 rounded-xl p-1 border border-gray-100 gap-1">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === id
                    ? 'bg-white text-navy shadow-sm border border-gray-100'
                    : 'text-gray-500 hover:text-navy'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {active === 'vernybot' && <VernybotTab />}
            {active === 'calendar' && <CalendarTab />}
            {active === 'conectividad' && <ConectividadTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
