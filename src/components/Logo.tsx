type LogoProps = { compact?: boolean }

export default function Logo({ compact = false }: LogoProps) {
  return (
    <a href="#inicio" className="inline-flex items-center gap-3" aria-label="Vértice Performance">
      <span className="grid h-9 w-9 place-items-center border-2 border-accent text-lg font-black text-accent [clip-path:polygon(50%_0,100%_100%,50%_78%,0_100%)]">V</span>
      {!compact && (
        <span className="leading-none">
          <strong className="block text-lg tracking-[0.08em]">VÉRTICE</strong>
          <small className="mt-1 block text-[9px] font-semibold tracking-[0.3em] text-zinc-400">PERFORMANCE</small>
        </span>
      )}
    </a>
  )
}
