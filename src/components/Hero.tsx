export default function Hero() {
  return (
    <section id="inicio" className="hero min-h-[760px] pt-28 lg:min-h-[820px]">
      <div className="mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.16em] text-accent">Seu treino. Seu próximo nível.</p>
          <h1 className="font-display text-[4.3rem] leading-[0.88] tracking-wide sm:text-[6rem] lg:text-[8.2rem]">
            Treine mais forte.<br />Evolua todos os dias.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            Estrutura completa, acompanhamento profissional e um ambiente criado para quem leva a evolução a sério.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contato" className="bg-accent px-6 py-4 text-center text-xs font-extrabold uppercase tracking-wide text-black transition hover:-translate-y-1">
              Agendar aula experimental ↗
            </a>
            <a href="#estrutura" className="border border-white/40 px-6 py-4 text-center text-xs font-extrabold uppercase tracking-wide transition hover:border-accent hover:text-accent">
              Conhecer a estrutura ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
