import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { DragonCatalog } from '@/widgets/dragon-catalog'
import { Benefits } from '@/widgets/benefits'
import { HowItWorks } from '@/widgets/how-it-works'
import { Testimonials } from '@/widgets/testimonials'
import { Pricing } from '@/widgets/pricing'
import { Waitlist } from '@/widgets/waitlist'
import { Faq } from '@/widgets/faq'
import { Footer } from '@/widgets/footer'

export function HomePage() {
  return (
    <>
      <a className="skipLink" href="#conteudo-principal">Pular para o conteúdo principal</a>
      <Header />
      <main id="conteudo-principal" tabIndex={-1}>
        <Hero />
        <DragonCatalog />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Waitlist />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
