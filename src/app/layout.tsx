import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Verny — Agentes IA para tu empresa',
  description: 'Soluciones de inteligencia artificial para empresas chilenas. Automatiza, audita y potencia tus procesos con agentes IA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
