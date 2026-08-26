import { plans } from '../data/siteData'
import SectionHeading from './SectionHeading'

export default function Plans() {
  return (
    <section id="planos" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Planos" title="Escolha o plano ideal para você." />
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`relative flex flex-col border bg-panel p-7 ${plan.featured ? 'border-accent shadow-[0_0_35px_rgba(244,216,0,0.08)]' : 'border-white/10'}`}>
              {plan.featured && <span className="absolute right-4 top-0 -translate-y-1/2 bg-accent px-3 py-1 text-[9px] font-black uppercase tracking-wider text-black">Mais escolhido</span>}
              <h3 className="font-display text-4xl tracking-wide">{plan.name}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-400">{plan.description}</p>
              <div className="my-6"><span className="text-xs text-zinc-400">R$</span> <strong className="text-4xl">{plan.price}</strong><span className="text-sm text-zinc-500">/mês</span></div>
              <ul className="mb-8 space-y-3 text-sm text-zinc-300">
                {plan.features.map((feature) => <li key={feature}>+ &nbsp;{feature}</li>)}
              </ul>
              <a href="#contato" className={`mt-auto border px-5 py-4 text-center text-xs font-extrabold uppercase tracking-wide transition ${plan.featured ? 'border-accent bg-accent text-black hover:brightness-110' : 'border-white/25 hover:border-accent hover:text-accent'}`}>Escolher plano</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
