'use client'

import { motion } from 'framer-motion'
import { Stethoscope, PenTool, Zap, TrendingUp } from 'lucide-react'

const pasos = [
  {
    numero: '01',
    icon: Stethoscope,
    titulo: 'Diagnóstico',
    descripcion: 'Escuchamos tus dolores. Analizamos tus procesos actuales e identificamos dónde la IA genera el mayor impacto para tu negocio.',
  },
  {
    numero: '02',
    icon: PenTool,
    titulo: 'Diseño a Medida',
    descripcion: 'Adaptamos la IA a tu flujo de trabajo real. Nada genérico: cada automatización se diseña para tu rubro, tus clientes y tu equipo.',
  },
  {
    numero: '03',
    icon: Zap,
    titulo: 'Implementación Ágil',
    descripcion: 'Activación sin pausas. Tu negocio no se detiene. Desplegamos en paralelo y con soporte constante hasta que todo funcione perfecto.',
  },
  {
    numero: '04',
    icon: TrendingUp,
    titulo: 'Optimización',
    descripcion: 'Evolución basada en datos. Monitoreamos métricas reales y ajustamos el agente para que cada mes sea mejor que el anterior.',
  },
]

export default function Proceso() {
  return (
    <section className="py-28 bg-white/84 backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-navy mb-4">
            Cómo trabajamos{' '}
            <span className="text-gradient">contigo</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            La solución se diseña desde la necesidad real, no desde la tecnología disponible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Línea conectora desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-sky-200 z-0" />

          {pasos.map((paso, i) => {
            const Icon = paso.icon
            return (
              <motion.div
                key={paso.numero}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center mb-5 shadow-sm group-hover:bg-cyan-50 group-hover:border-cyan-300 transition-all duration-300">
                  <Icon className="w-8 h-8 text-cyan-600" />
                </div>
                <span className="text-xs font-bold text-cyan-700 mb-2 tracking-wider">{paso.numero}</span>
                <h3 className="text-lg font-bold text-navy mb-3">{paso.titulo}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{paso.descripcion}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
