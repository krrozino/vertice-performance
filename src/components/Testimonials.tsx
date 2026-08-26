import { testimonials } from '../data/siteData'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  return (
    <section className="border-y border-white/5 bg-[#0d1013] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Depoimentos" title="O que nossos alunos dizem" />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="border border-white/10 bg-panel p-6">
              <span className="font-display text-5xl leading-none text-accent">“</span>
              <p className="-mt-2 text-sm leading-6 text-zinc-300">{item.quote}</p>
              <div className="mt-5 flex items-center justify-between">
                <strong className="text-sm">— {item.name}</strong>
                <span className="text-xs tracking-[0.2em] text-accent">★★★★★</span>
              </div>
            </blockquote>
          ))}
        </div>
        <p className="mt-4 text-center text-[10px] uppercase tracking-widest text-zinc-600">Conteúdo demonstrativo para projeto conceitual.</p>
      </div>
    </section>
  )
}
