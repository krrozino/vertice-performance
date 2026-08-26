type Props = { eyebrow: string; title: string; description?: string }

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mt-2 font-display text-5xl tracking-wide sm:text-6xl">{title}</h2>
      {description && <p className="mt-3 text-sm leading-6 text-zinc-400">{description}</p>}
    </div>
  )
}
