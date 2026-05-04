import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WA_CONTATO = '5547999999999'

const CASAS = [
  {
    id: 'penha-centro',
    nome: 'Penha (Centro)',
    subtitulo: 'Rua Porto Alegre, 363',
    referencia: 'Referência: The Best Açaí',
    tag: '100m da praia',
    badge: 'Centro',
    fotos: ['/casa-penha-centro/pc-01.jpg'],
    videos: ['/casa-penha-centro/pc-01.mp4', '/casa-penha-centro/pc-02.mp4'],
    maps: 'https://maps.google.com/?q=Rua+Porto+Alegre+363,Penha,SC',
    cidades: ['Penha', 'Balneário Piçarras'],
    quartos: { total: 4, suites: 1, standard: 3 },
    praia: '100 metros',
    precos: [
      { tipo: 'Quarto (com TV)',           valor: 'R$ 140' },
      { tipo: 'Suíte (com TV e banheiro)', valor: 'R$ 160' },
    ],
    estrutura: [
      'TV em todos os quartos',
      'Lavanderia completa',
      'Cozinha completa',
      'Área de ventilação',
      'Portões eletrônicos',
      'Estacionamento',
      'Monitoramento por câmeras',
    ],
    incluso: [
      'Materiais de limpeza',
      'Preservativos e lubrificante',
      'Produtos básicos de cozinha',
      'Manta para frio',
      '4 enxovais de cama',
      '10 toalhas',
      'Faxina profissional a cada 15 dias',
    ],
    arredores: ['Farmácia', 'Academia', 'Restaurante', 'Pizzaria'],
    destaque: '+700 hóspedes femininas atendidas',
  },
  {
    id: 'penha-armacao',
    nome: 'Penha (Armação)',
    subtitulo: 'Rua João Luiz Justino, 133',
    referencia: 'Referência: Próximo à Academia D4',
    tag: '50m da praia',
    badge: 'Armação',
    fotos: ['/casa-penha-armacao/pa-01.jpg'],
    videos: ['/casa-penha-armacao/pa-01.mp4'],
    maps: 'https://maps.google.com/?q=Rua+João+Luiz+Justino+133,Penha,SC',
    cidades: ['Penha', 'Piçarras', 'Navegantes'],
    quartos: { total: 5, suites: 1, standard: 4 },
    praia: '50 metros',
    precos: [
      { tipo: 'Quarto (com TV)',           valor: 'Consultar' },
      { tipo: 'Suíte (com TV e banheiro)', valor: 'Consultar' },
    ],
    estrutura: [
      'TV em todos os quartos',
      'Lavanderia completa',
      'Cozinha completa',
      'Área gourmet',
      'Portões eletrônicos',
      'Estacionamento',
      'Monitoramento por câmeras',
    ],
    incluso: [
      'Materiais de limpeza',
      'Preservativos e lubrificante',
      'Produtos básicos de cozinha',
      'Manta para frio',
      '4 enxovais de cama',
      '10 toalhas',
      'Faxina profissional a cada 15 dias',
    ],
    arredores: ['Farmácia', 'Academia', 'Restaurante', 'Pizzaria', 'Salão', 'Padaria', 'Petiscaria'],
    destaque: '+700 hóspedes femininas atendidas',
  },
  {
    id: 'barra-velha',
    nome: 'Barra Velha (Praia do Tabuleiro)',
    subtitulo: 'Rua Ludgero F. Gonçalves, 32 — Casa Verde',
    referencia: 'Referência: Condomínio Vila Açoriana, 3ª rua à direita',
    tag: '50m da praia',
    badge: 'Barra Velha',
    fotos: ['/casa-barra-velha/bv-01.jpg', '/casa-barra-velha/bv-02.jpg', '/casa-barra-velha/bv-03.jpg'],
    videos: ['/casa-barra-velha/bv-01.mp4', '/casa-barra-velha/bv-02.mp4', '/casa-barra-velha/bv-03.mp4'],
    maps: 'https://maps.google.com/?q=Rua+Ludgero+F+Gonçalves+32,Barra+Velha,SC',
    cidades: ['Barra Velha', 'Piçarras', 'Passagem pela BR (Sul↔Norte)'],
    quartos: { total: 6, suites: 1, standard: 5 },
    praia: '50 metros',
    precos: [
      { tipo: 'Quarto (com TV)',            valor: 'R$ 140' },
      { tipo: 'Quarto com sacada',          valor: 'R$ 150' },
      { tipo: 'Suíte (com TV e banheiro)',  valor: 'R$ 160' },
    ],
    estrutura: [
      'TV em todos os quartos',
      'Lavanderia completa',
      'Cozinha completa',
      'Piscina com hidro',
      'Área de ventilação',
      'Garagem',
      'Portões eletrônicos',
      'Monitoramento por câmeras',
    ],
    incluso: [
      'Produtos de higiene',
      'Preservativos e lubrificantes',
      '4 enxovais de cama',
      '10 toalhas',
    ],
    arredores: ['Comércio local', 'Salão', 'Cafeteria', 'Lojas', 'Pizzaria'],
    destaque: 'Na marginal da BR — Sul e Norte',
  },
]

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-1 bg-white/[0.06] text-gray-400 text-[11px] font-medium px-2.5 py-1 rounded-full border border-white/[0.06]">
      {children}
    </span>
  )
}

function CasaCard({ casa }) {
  const [imgIdx,  setImgIdx]  = useState(0)
  const [playing, setPlaying] = useState(null)
  const [tab,     setTab]     = useState('estrutura')

  return (
    <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden flex flex-col
                    hover:border-primary/25 hover:shadow-[0_0_50px_rgba(233,30,140,0.08)]
                    transition-all duration-300">

      {/* Media */}
      <div className="relative bg-[#0a0a28] aspect-[16/10] overflow-hidden flex-shrink-0">
        {playing !== null ? (
          <video key={playing} src={casa.videos[playing]}
            className="w-full h-full object-cover" controls autoPlay
            onEnded={() => setPlaying(null)} />
        ) : (
          <img src={casa.fotos[imgIdx] ?? casa.fotos[0]} alt={casa.nome}
            className="w-full h-full object-cover" />
        )}

        <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-[0_0_15px_rgba(233,30,140,0.4)]">
          {casa.tag}
        </span>

        {casa.fotos.length > 1 && playing === null && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {casa.fotos.map((_, i) => (
              <button key={i} onClick={() => setImgIdx(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === imgIdx ? 'bg-white scale-125' : 'bg-white/40'}`} />
            ))}
          </div>
        )}

        {playing === null && casa.videos.length > 0 && (
          <div className="absolute bottom-3 right-3 flex gap-1.5">
            {casa.videos.map((_, i) => (
              <button key={i} onClick={() => setPlaying(i)}
                className="bg-black/60 hover:bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                title={`Vídeo ${i + 1}`}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current ml-0.5"><path d="M8 5v14l11-7z"/></svg>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5 gap-4">

        <div>
          <h3 className="font-black text-white text-xl mb-0.5">{casa.nome}</h3>
          <p className="text-gray-400 text-sm">{casa.subtitulo}</p>
          <p className="text-gray-600 text-xs">{casa.referencia}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { val: casa.quartos.total, lbl: 'quartos'  },
            { val: casa.quartos.suites, lbl: 'suíte(s)' },
            { val: casa.praia,          lbl: 'da praia' },
          ].map(({ val, lbl }) => (
            <div key={lbl} className="bg-primary/[0.06] border border-primary/20 rounded-xl p-2.5">
              <div className="text-primary font-black text-lg leading-none">{val}</div>
              <div className="text-[10px] text-gray-500 leading-tight mt-0.5">{lbl}</div>
            </div>
          ))}
        </div>

        <div className="border border-white/[0.07] rounded-xl overflow-hidden">
          {casa.precos.map(({ tipo, valor }) => (
            <div key={tipo} className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05] last:border-0">
              <span className="text-gray-400 text-sm">{tipo}</span>
              <span className="text-primary font-black text-sm">{valor}</span>
            </div>
          ))}
        </div>

        <div>
          <div className="flex gap-1 bg-white/[0.05] p-1 rounded-xl mb-3">
            {[
              { key: 'estrutura', label: 'Estrutura' },
              { key: 'incluso',   label: 'Incluso'   },
              { key: 'arredores', label: 'Arredores' },
            ].map(({ key, label }) => (
              <button key={key} onClick={() => setTab(key)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  tab === key
                    ? 'bg-primary/20 text-primary shadow-sm'
                    : 'text-gray-500 hover:text-gray-300'
                }`}>
                {label}
              </button>
            ))}
          </div>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {(tab === 'estrutura' ? casa.estrutura
              : tab === 'incluso'  ? casa.incluso
              : casa.arredores
            ).map(item => (
              <li key={item} className="flex items-start gap-1.5 text-[12px] text-gray-400">
                <span className="text-primary font-bold mt-0.5 flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] text-gray-600 uppercase tracking-wide font-semibold mb-1.5">Cidades atendidas</p>
          <div className="flex flex-wrap gap-1.5">
            {casa.cidades.map(c => <Pill key={c}>{c}</Pill>)}
          </div>
        </div>

        <div className="bg-primary/[0.06] border border-primary/20 rounded-xl px-4 py-2.5 text-center">
          <span className="text-primary font-black text-sm">{casa.destaque}</span>
        </div>

        <div className="flex gap-2 mt-auto">
          <a
            href={`https://wa.me/${WA_CONTATO}?text=Ol%C3%A1%2C%20quero%20reservar%20na%20unidade%20${encodeURIComponent(casa.nome)}!`}
            target="_blank" rel="noreferrer"
            className="flex-1 btn-primary py-3 rounded-xl text-xs font-black text-center"
          >
            RESERVAR VIA WHATSAPP
          </a>
          <a href={casa.maps} target="_blank" rel="noreferrer"
            className="border border-white/[0.1] hover:border-primary/40 text-gray-400 hover:text-primary
                       px-3 py-3 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            Mapa
          </a>
        </div>
      </div>
    </div>
  )
}

function CasasSection() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.casas-heading',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.casas-heading', start: 'top 85%' } }
      )
      gsap.fromTo('.casa-card-anim',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: '.casa-card-anim', start: 'top 80%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="casas" className="py-24 bg-[#080822]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="casas-heading opacity-0 mb-14">
          <p className="text-[11px] font-bold text-primary uppercase tracking-[0.22em] mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Santa Catarina
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">Nossas Unidades</h2>
          <p className="text-gray-500 max-w-xl text-[15px]">
            Três localizações no litoral norte de SC — estrutura completa, discrição total.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {CASAS.map(casa => (
            <div key={casa.id} className="casa-card-anim opacity-0">
              <CasaCard casa={casa} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CasasSection
