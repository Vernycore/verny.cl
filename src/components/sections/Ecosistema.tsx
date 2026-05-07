'use client'

import { motion } from 'framer-motion'
import { Search, BarChart2, Users, Monitor } from 'lucide-react'
import Image from 'next/image'

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
    <section id="ecosistema" className="py-28 bg-[#EAF7FF]/84 backdrop-blur-[1px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn()} className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-navy mb-4">
            Optimización{' '}
            <span className="text-gradient">Ecosistema Digital</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Una automatización funciona mejor cuando tu presencia digital, datos y operación hablan el mismo idioma.
          </p>
        </motion.div>

        {/* Row 1: SEO Local (grande) + Dashboards */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">

          {/* SEO Local — 3 columnas */}
          <motion.div
            {...fadeIn(0.1)}
            className="bg-white/75 lg:col-span-3 rounded-2xl border border-sky-200 overflow-hidden flex flex-col group hover:border-cyan-300 transition-colors duration-300 shadow-sm"
          >
            {/* Header */}
            <div className="p-6 pb-4 flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Search className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-cyan-300 bg-cyan-500/8 px-2.5 py-0.5 rounded-full">SEO Local</span>
                </div>
                <h3 className="text-xl font-bold text-navy">Que te encuentren en Google</h3>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Optimizamos tu perfil de Google Business y posicionamiento local para aparecer primero cuando tus clientes buscan.
                </p>
              </div>
            </div>

            {/* SEO image */}
            <div className="relative mx-4 mb-4 rounded-xl overflow-hidden h-[280px] bg-white">
              <Image
                src="/seo-google-ecosystem.jpg"
                alt="Google ecosystem SEO local"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Dashboards — 2 columnas */}
          <motion.div
            {...fadeIn(0.2)}
            className="bg-white/75 lg:col-span-2 rounded-2xl border border-sky-200 overflow-hidden flex flex-col group hover:border-cyan-300 transition-colors duration-300 shadow-sm"
          >
            {/* Header */}
            <div className="p-6 pb-4 flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <BarChart2 className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy">Toma decisiones con datos</h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">Dashboards en tiempo real sobre conversaciones y ventas.</p>
              </div>
            </div>

            {/* Dashboard image */}
            <div className="relative mx-4 mb-4 rounded-xl overflow-hidden h-[280px] bg-white">
              <Image
                src="/dashboard-analytics.jpg"
                alt="Dashboard analytics en tiempo real"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Row 2: Gestión Centralizada + Tu cara al mundo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Gestión Centralizada */}
          <motion.div
            {...fadeIn(0.3)}
            className="bg-white/75 rounded-2xl border border-sky-200 p-6 flex flex-col group hover:border-cyan-300 transition-colors duration-300 shadow-sm"
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-1">Gestión Centralizada</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Portal interno para tu equipo: clientes, tareas y documentos en un solo lugar.</p>
              </div>
            </div>
            <div className="mt-auto space-y-2">
              {[
                { label: 'Clientes', count: '324', color: 'bg-cyan-500/20 text-cyan-300' },
                { label: 'Tareas pendientes', count: '12', color: 'bg-yellow-500/20 text-yellow-300' },
                { label: 'Documentos', count: '89', color: 'bg-sky-100 text-navy' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between bg-white border border-sky-100 rounded-xl px-4 py-2.5">
                  <span className="text-sm text-slate-600">{item.label}</span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${item.color}`}>{item.count}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tu cara al mundo */}
          <motion.div
            {...fadeIn(0.4)}
            className="bg-white/75 rounded-2xl border border-sky-200 p-6 flex flex-col group hover:border-cyan-300 transition-colors duration-300 shadow-sm"
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 bg-cyan-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Monitor className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy mb-1">Tu cara al mundo</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Sitios web modernos, rápidos y optimizados para convertir visitas en clientes.</p>
              </div>
            </div>
            <div className="mt-auto bg-white rounded-xl p-4 border border-sky-100">
              <div className="flex gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="flex-1 bg-sky-50 rounded ml-2 h-2.5 flex items-center px-2">
                  <span className="text-[8px] text-navy/40">verny.cl</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-cyan-400/70 rounded-full w-3/4" />
                <div className="h-1.5 bg-sky-100 rounded-full w-full" />
                <div className="h-1.5 bg-sky-100 rounded-full w-5/6" />
                <div className="grid grid-cols-3 gap-1.5 mt-3">
                  {['bg-cyan-100', 'bg-sky-50', 'bg-sky-50'].map((c, i) => (
                    <div key={i} className={`h-8 rounded-lg ${c}`} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
