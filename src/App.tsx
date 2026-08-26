import Benefits from './components/Benefits'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Modalities from './components/Modalities'
import Navbar from './components/Navbar'
import Plans from './components/Plans'
import Stats from './components/Stats'
import Structure from './components/Structure'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink font-body text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Modalities />
        <Structure />
        <Benefits />
        <Plans />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <a
        href="https://wa.me/5511999999999?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20Vértice%20Performance."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-accent text-lg font-black text-black shadow-2xl transition hover:scale-105"
      >
        W
      </a>
    </div>
  )
}
