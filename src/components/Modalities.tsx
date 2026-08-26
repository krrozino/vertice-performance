import { modalities } from '../data/siteData'
import SectionHeading from './SectionHeading'

export default function Modalities() {
  return (
    <section id="modalidades" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Modalidades" title="Treinos para todos os objetivos." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {modalities.map((item) => (
            <article key={item.title} className="group overflow-hidden border border-white/10 bg-panel">
              <div className="h-56 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover grayscale-[35%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-3xl tracking-wide">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
