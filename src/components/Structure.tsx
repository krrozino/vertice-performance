import SectionHeading from './SectionHeading'

const images = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1637666218229-1fe0a9419267?auto=format&fit=crop&w=1000&q=85',
]

export default function Structure() {
  return (
    <section id="estrutura" className="border-y border-white/5 bg-[#0d1013] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Estrutura" title="Uma estrutura feita para performance." />
        <div className="grid h-[560px] gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <img src={images[0]} alt="Área de musculação" className="h-full w-full object-cover sm:col-span-2 lg:row-span-2" />
          {images.slice(1).map((src, index) => (
            <img key={src} src={src} alt={`Estrutura da academia ${index + 2}`} className="h-full min-h-0 w-full object-cover" />
          ))}
        </div>
      </div>
    </section>
  )
}
