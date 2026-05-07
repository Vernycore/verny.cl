'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'VernyBot', href: '#vernybot' },
  { label: 'VernyCalendar', href: '#vernycalendar' },
  { label: 'Conectividad Pro', href: '#conectividad' },
  { label: 'Ecosistema Digital', href: '#ecosistema' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/88 backdrop-blur-md shadow-sm border-b border-sky-100'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/logo.png"
              alt="Verny"
              width={120}
              height={40}
              className="object-contain transition-all duration-300"
              priority
            />
          </Link>

          {/* Nav links desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  scrolled
                    ? 'text-navy/70 hover:text-navy focus-visible:text-navy'
                    : 'text-navy/65 hover:text-navy focus-visible:text-navy'
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent rounded-sm`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAs desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://app.verny.cl/appusuarios"
              className={`text-sm py-2 px-4 font-semibold rounded-lg border inline-flex items-center gap-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent ${
                scrolled
                  ? 'border-sky-200 text-navy hover:bg-sky-50'
                  : 'border-sky-200 text-navy hover:bg-white'
              }`}
            >
              Acceso Clientes
            </a>
            <a href="#contacto" className="btn-primary text-sm py-2 px-4">
              Hablemos
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
              scrolled || mobileOpen
                ? 'text-navy hover:bg-sky-50'
                : 'text-navy hover:bg-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 pb-4 shadow-lg"
          >
            <nav className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-navy/70 hover:text-navy focus-visible:text-navy py-2.5 border-b border-gray-50 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-3">
                <a href="https://app.verny.cl/appusuarios" className="btn-outline text-sm justify-center">
                  Acceso Clientes
                </a>
                <a href="#contacto" onClick={() => setMobileOpen(false)} className="btn-primary text-sm justify-center">
                  Hablemos
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
