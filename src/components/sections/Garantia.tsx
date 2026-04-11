'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ShieldCheck, MessageCircle, Mail, ArrowRight, X } from 'lucide-react'

const faqs = [
  {
    pregunta: '¿Cómo sé si mi empresa necesita un agente de IA?',
    respuesta: 'Si tu equipo responde las mismas preguntas repetidamente, si pierdes consultas fuera del horario laboral, o si el proceso de agendar horas te consume tiempo —  tu empresa ya necesita un agente. La regla simple: si una tarea se repite más de 10 veces al día, la IA la puede automatizar.',
  },
  {
    pregunta: '¿Puedo agendar citas por WhatsApp con VernyCalendar?',
    respuesta: 'Sí. VernyCalendar integra directamente con WhatsApp Business API. Tus clientes escriben al número de tu empresa, el agente consulta tu disponibilidad en tiempo real y confirma la cita — todo sin intervención humana.',
  },
  {
    pregunta: '¿Cuánto tiempo tarda la implementación?',
    respuesta: 'Para la mayoría de los negocios, entre 5 y 15 días hábiles desde el diagnóstico hasta la activación. Trabajamos en paralelo a tu operación, sin interrupciones. Los primeros resultados se ven en la primera semana.',
  },
  {
    pregunta: '¿El agente puede escalar a un humano cuando no sabe responder?',
    respuesta: 'Absolutamente. Cuando el agente detecta una consulta compleja o fuera de su conocimiento, transfiere la conversación a tu equipo con el contexto completo. Tú defines los criterios de escalada.',
  },
  {
    pregunta: '¿Funciona con mis sistemas actuales (CRM, ERP, etc.)?',
    respuesta: 'Sí, a través de Conectividad Pro integramos con Salesforce, HubSpot, SAP, Shopify y más de 50 plataformas via API. Si usas un sistema a medida, evaluamos la integración en el diagnóstico.',
  },
]

function WhatsAppModal({ onClose, onSubmit }: { onClose: () => void; onSubmit: (email: string) => void }) {
  const [email, setEmail] = useState('')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-5">
          <MessageCircle className="w-6 h-6 text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Un paso antes de WhatsApp</h3>
        <p className="text-gray-500 text-sm mb-6">
          Para enviarte el link de conversación y validar tu sesión, necesitamos tu correo electrónico.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@empresa.cl"
            className="input"
          />
          <button
            onClick={() => email && onSubmit(email)}
            disabled={!email}
            className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar a WhatsApp
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Garantia() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ nombre: '', email: '', empresa: '', mensaje: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formData.nombre || !formData.email) return
    setSending(true)
    try {
      const webhook = process.env.NEXT_PUBLIC_WEBHOOK_URL
      if (webhook) {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, source: 'verny.cl', tipo: 'contacto' }),
        })
      }
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setSending(false)
    }
  }

  function handleWhatsAppEmail(email: string) {
    setShowModal(false)
    const msg = encodeURIComponent(`Hola Verny! Mi email es ${email}. Me gustaría saber más sobre sus soluciones de IA.`)
    window.open(`https://wa.me/56912345678?text=${msg}`, '_blank')
  }

  return (
    <>
      <AnimatePresence>
        {showModal && (
          <WhatsAppModal onClose={() => setShowModal(false)} onSubmit={handleWhatsAppEmail} />
        )}
      </AnimatePresence>

      {/* Garantía de valor */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border-l-4 border-cyan-500 shadow-sm flex gap-5"
          >
            <ShieldCheck className="w-10 h-10 text-cyan-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">Nuestra garantía de valor</h3>
              <p className="text-gray-600 leading-relaxed">
                En Verny, <strong>si no vemos un beneficio operativo claro o un retorno de inversión para tu empresa, te lo decimos.</strong> No vendemos tecnología por vender. Primero hacemos el diagnóstico honesto — si no hay valor real, no hay propuesta.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">Preguntas frecuentes</h2>
            <p className="text-gray-500">Todo lo que necesitas saber antes de dar el primer paso.</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border border-gray-100 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-navy text-sm pr-4">{faq.pregunta}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
                        {faq.respuesta}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section id="contacto" className="py-24 bg-navy">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              ¿Listo para{' '}
              <span className="text-cyan-400">automatizar</span>?
            </h2>
            <p className="text-white/60">
              Cuéntanos sobre tu negocio y te respondemos en menos de 24 horas.
            </p>
          </motion.div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center"
            >
              <div className="w-14 h-14 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">¡Mensaje recibido!</h3>
              <p className="text-white/50 text-sm">Te contactaremos en menos de 24 horas.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs font-medium mb-1.5">Nombre *</label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-medium mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@empresa.cl"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/60 text-xs font-medium mb-1.5">Empresa</label>
                <input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  placeholder="Nombre de tu empresa"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-white/60 text-xs font-medium mb-1.5">¿En qué podemos ayudarte?</label>
                <textarea
                  rows={3}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder="Cuéntanos brevemente sobre tu negocio y qué quieres automatizar..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary flex-1 justify-center py-3 disabled:opacity-50"
                >
                  <Mail className="w-4 h-4" />
                  {sending ? 'Enviando...' : 'Enviar mensaje'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="flex items-center justify-center gap-2 flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contactar por WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
