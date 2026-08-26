import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-500">Mais que uma academia, um ambiente para transformar sua disciplina em resultados.</p>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-widest">Endereço</h3>
          <p className="mt-4 text-sm leading-6 text-zinc-500">Rua das Acácias, 123<br />Centro — São Paulo/SP<br />CEP 01234-567</p>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-widest">Horário</h3>
          <p className="mt-4 text-sm leading-6 text-zinc-500">Segunda a Sexta<br />06h às 22h<br />Sábado<br />08h às 16h</p>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-widest">Contato</h3>
          <p className="mt-4 text-sm leading-7 text-zinc-500">(11) 99999-9999<br />@vertice.performance<br />contato@vertice.fit</p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-[11px] text-zinc-600 sm:flex-row sm:justify-between">
        <span>© 2026 Vértice Performance. Projeto conceitual.</span>
        <span>Projeto demonstrativo desenvolvido por <strong className="text-accent">cerjo.dev</strong></span>
      </div>
    </footer>
  )
}
