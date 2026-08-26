import { useState } from 'react'
import Logo from './Logo'

const links = [
  ['Início', '#inicio'],
  ['Sobre', '#sobre'],
  ['Modalidades', '#modalidades'],
  ['Estrutura', '#estrutura'],
  ['Planos', '#planos'],
  ['Contato', '#contato'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-xs font-bold uppercase tracking-[0.08em] text-zinc-300 transition hover:text-accent">
              {label}
            </a>
          ))}
          <a href="#contato" className="bg-accent px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-black transition hover:-translate-y-0.5 hover:brightness-110">
            Agendar aula
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center border border-white/15 lg:hidden" aria-label="Abrir menu">
          <span className="text-xl">{open ? '×' : '☰'}</span>
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-black/95 px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="py-2 text-sm font-bold uppercase tracking-wider text-zinc-300">
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
