import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image src="/logos/logo.png" alt="Verny" width={100} height={32} className="object-contain opacity-70" />
        <p className="text-white/30 text-xs text-center">
          &copy; {new Date().getFullYear()} Verny.ia — Automatización con IA para empresas chilenas.
        </p>
        <div className="flex gap-5 text-xs text-white/30">
          <a href="mailto:contacto@verny.cl" className="hover:text-white/60 transition-colors">contacto@verny.cl</a>
          <a href="https://app.verny.cl/appusuarios" className="hover:text-white/60 transition-colors">Acceso Clientes</a>
        </div>
      </div>
    </footer>
  )
}
