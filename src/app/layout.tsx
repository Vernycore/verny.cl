import type { Metadata } from 'next'
import { Inter, Geist } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Verny — Automatización con IA y Soluciones Digitales para Empresas en Chile',
  description: 'Verny - Automatización con IA y Soluciones Digitales para Empresas en Chile. Agentes IA para WhatsApp, agendamiento automático y ecosistema digital completo.',
  keywords: 'automatización IA Chile, agente WhatsApp, chatbot empresas, VernyBot, agendar citas WhatsApp',
  openGraph: {
    title: 'Verny — Automatización con IA para Empresas en Chile',
    description: 'Automatiza tareas repetitivas con agentes de IA. Respuesta 24/7, agendamiento automático y más.',
    locale: 'es_CL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={cn("h-full", "antialiased", inter.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col bg-[#FBFEFF]">
        <div
          aria-hidden="true"
          className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        >
          <div
            className="absolute left-1/2 top-[8vh] h-[62vh] w-[140vw] -translate-x-1/2 bg-contain bg-center bg-no-repeat opacity-45 sm:top-[4vh] sm:h-[70vh] lg:top-0 lg:h-[78vh]"
            style={{ backgroundImage: "url('/wave-glass-fixed.png')" }}
          />
          <div className="absolute inset-0 bg-white/55" />
        </div>
        <div className="relative z-10 flex min-h-full flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
