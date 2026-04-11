import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Productos from '@/components/sections/Productos'
import Ecosistema from '@/components/sections/Ecosistema'
import Proceso from '@/components/sections/Proceso'
import Garantia from '@/components/sections/Garantia'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Productos />
      <Ecosistema />
      <Proceso />
      <Garantia />
      <Footer />
    </>
  )
}
