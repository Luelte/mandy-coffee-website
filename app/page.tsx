import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { About } from '@/components/about'
import { Menu } from '@/components/menu'
import { Reviews } from '@/components/reviews'
import { Gallery } from '@/components/gallery'
import { Visit } from '@/components/visit'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Menu />
        <Reviews />
        <Gallery />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
