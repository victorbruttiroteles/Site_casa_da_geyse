import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CIDADES = [
  {
    nome: 'Penha',
    linhas: ['Penha'],
    foto: '/2-1-scaled.jpeg',
    descricao: 'No coração do litoral norte, com bairros Armação e Centro a poucos metros do mar.',
    detalhes: ['100m da praia', '2 unidades', 'Armação e Centro'],
  },
  {
    nome: 'Barra Velha',
    linhas: ['Barra', 'Velha'],
    foto: '/o-que-fazer-em-barra-velha-sc-clube-candeias-festival-lagoa.jpeg',
    descricao: 'Na Praia do Tabuleiro, entre o mar e a marginal da BR — ponto de passagem estratégico.',
    detalhes: ['50m da praia', '1 unidade', 'Praia do Tabuleiro'],
  },
]

function CidadeCard({ cidade, index }) {
  const cardRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: cardRef.current, start: 'top 82%' },
          delay: index * 0.18,
        }
      )
    }, cardRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={cardRef} className="relative overflow-hidden rounded-3xl opacity-0 group"
         style={{ minHeight: '580px' }}>

      {/* Foto real */}
      <img
        src={cidade.foto}
        alt={cidade.nome}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Gradientes sobrepostos */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />

      {/* Texto "framework" — outline gigante */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-8 lg:px-12 pointer-events-none select-none">
        {cidade.linhas.map((linha, i) => (
          <span
            key={i}
            className="block font-black leading-[0.88]"
            style={{
              fontSize: 'clamp(80px, 13vw, 150px)',
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255,255,255,0.14)',
              letterSpacing: '-0.025em',
            }}
          >
            {linha}
          </span>
        ))}
      </div>

      {/* Conteúdo inferior */}
      <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">

        <p className="text-[11px] font-bold text-primary uppercase tracking-[0.25em] mb-3 flex items-center gap-2">
          <span className="w-6 h-px bg-primary inline-block" />
          Santa Catarina
        </p>

        <h3
          className="font-black text-white leading-none mb-4"
          style={{ fontSize: 'clamp(38px, 5.5vw, 68px)', letterSpacing: '-0.025em' }}
        >
          {cidade.nome}
        </h3>

        <div className="w-10 h-px bg-primary/50 mb-4" />

        <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-sm">
          {cidade.descricao}
        </p>

        <div className="flex flex-wrap gap-2">
          {cidade.detalhes.map(d => (
            <span
              key={d}
              className="text-[11px] font-semibold text-white/65 bg-white/[0.08] border border-white/[0.12]
                         px-3 py-1 rounded-full backdrop-blur-sm"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function LocalizacoesSection() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.loc-heading',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.loc-heading', start: 'top 85%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-[#06061a] relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px]
                      rounded-full opacity-[0.035] blur-[130px] pointer-events-none"
           style={{ background: '#e91e8c' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="loc-heading opacity-0 text-center mb-14">
          <p className="text-[11px] font-bold text-primary uppercase tracking-[0.25em] mb-4
                        flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Onde estamos
            <span className="w-8 h-px bg-primary" />
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Dois destinos,<br />
            <span className="text-primary">uma só experiência</span>
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Unidades no litoral norte de Santa Catarina — perto do mar, longe de preocupações.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {CIDADES.map((cidade, i) => (
            <CidadeCard key={cidade.nome} cidade={cidade} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
