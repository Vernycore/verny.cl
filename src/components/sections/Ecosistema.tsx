'use client'

import { motion } from 'framer-motion'
import { Search, BarChart2, Users, Monitor } from 'lucide-react'

function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  }
}

export default function Ecosistema() {
  return (
    <section id="ecosistema" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn()} className="text-center mb-14">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Optimización{' '}
            <span className="text-cyan-500">Ecosistema Digital</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Más allá del bot: construimos la presencia digital completa que tu empresa necesita para crecer.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px]">

          {/* SEO Local — Grande (2 columnas) */}
          <motion.div {...fadeIn(0.1)} className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center">
                  <Search className="w-5 h-5 text-cyan-500" />
                </div>
                <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-full">SEO Local</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Que te encuentren en Google</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Optimizamos tu presencia local para que aparezcas primero cuando tus clientes te buscan.
              </p>
            </div>
            {/* Ilustración resultados búsqueda */}
            <div className="relative z-10 mt-4 space-y-2">
              {['Tu Empresa · Abierto ahora', 'Reseñas ⭐⭐⭐⭐⭐ · 128 opiniones', 'verny.cl · Ver en Google Maps →'].map((r, i) => (
                <div key={r} className={`flex items-center gap-2 text-xs ${i === 0 ? 'text-navy font-semibold' : 'text-gray-400'}`}>
                  {i === 0 && <span className="w-1.5 h-1.5 rounded-full bg-green-500" />}
                  {i === 1 && <span className="text-yellow-500">★</span>}
                  {i === 2 && <span className="text-cyan-500">↗</span>}
                  {r}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dashboards */}
          <motion.div {...fadeIn(0.2)} className="bg-navy rounded-2xl p-6 flex flex-col justify-between overflow-hidden relative group">
            <div>
              <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart2 className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Toma decisiones con datos</h3>
              <p className="text-white/50 text-xs leading-relaxed">Dashboards en tiempo real sobre tus conversaciones y ventas.</p>
            </div>
            {/* Mini gráfico */}
            <div className="flex items-end gap-1.5 h-16 mt-4">
              {[30, 50, 40, 70, 55, 85, 75, 95].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-cyan-500 rounded-sm opacity-80"
                  style={{ height: `${h}%` }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Intranet */}
          <motion.div {...fadeIn(0.3)} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between group hover:border-cyan-200 transition-colors">
            <div>
              <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-cyan-500" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-1">Gestión Centralizada</h3>
              <p className="text-gray-500 text-xs leading-relaxed">Portal interno para tu equipo: clientes, tareas y documentos en un solo lugar.</p>
            </div>
            <div className="flex gap-2 mt-4">
              {['Clientes', 'Tareas', 'Docs'].map(t => (
                <span key={t} className="text-[10px] bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1 text-gray-500 font-medium">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Rediseño Web */}
          <motion.div {...fadeIn(0.4)} className="bg-gradient-to-br from-navy to-navy-700 rounded-2xl p-6 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <Monitor className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Tu cara al mundo</h3>
              <p className="text-white/50 text-xs leading-relaxed">Sitios web modernos, rápidos y optimizados para convertir visitas en clientes.</p>
            </div>
            <div className="mt-4 bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="flex gap-1 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <div className="space-y-1.5">
                <div className="h-1.5 bg-cyan-500/40 rounded w-3/4" />
                <div className="h-1.5 bg-white/20 rounded w-full" />
                <div className="h-1.5 bg-white/10 rounded w-2/3" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
