const stats = [
  ['+500', 'Alunos'],
  ['12', 'Profissionais'],
  ['800 m²', 'De estrutura'],
  ['Seg–Sáb', 'Horário de funcionamento'],
]

export default function Stats() {
  return (
    <section id="sobre" className="relative z-10 mx-auto -mt-10 max-w-6xl px-5 lg:px-8">
      <div className="grid border border-white/10 bg-[#111418]/95 shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="border-b border-white/10 px-6 py-7 text-center sm:border-r lg:border-b-0 last:border-r-0">
            <strong className="font-display text-4xl tracking-wide">{value}</strong>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
