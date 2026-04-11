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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
