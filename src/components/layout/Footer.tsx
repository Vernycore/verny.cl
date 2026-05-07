import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-sky-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image src="/logos/logo.png" alt="Verny" width={100} height={32} className="object-contain opacity-80" />
        <p className="text-navy/45 text-xs text-center">
          &copy; {new Date().getFullYear()} Verny.ia — Automatización con IA para empresas chilenas.
        </p>
        <div className="flex gap-5 text-xs text-navy/45">
          <a href="mailto:contacto@verny.cl" className="hover:text-navy transition-colors">contacto@verny.cl</a>
          <a href="https://app.verny.cl/appusuarios" className="hover:text-navy transition-colors">Acceso Clientes</a>
        </div>
      </div>
    </footer>
  )
}
