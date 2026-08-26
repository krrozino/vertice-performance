const benefits = [
  ['01', 'Equipamentos modernos'],
  ['02', 'Profissionais qualificados'],
  ['03', 'Treino personalizado'],
  ['04', 'Ambiente climatizado'],
  ['05', 'Avaliação física'],
  ['06', 'Acompanhamento de evolução'],
]

export default function Benefits() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-6">
        {benefits.map(([num, text]) => (
          <div key={text} className="bg-ink px-5 py-7 text-center">
            <span className="font-display text-3xl text-accent">{num}</span>
            <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-wide text-zinc-300">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
