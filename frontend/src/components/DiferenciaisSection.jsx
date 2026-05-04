import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function IconCama() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M2 20V10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10"/>
      <path d="M2 14h20"/>
      <path d="M7 8V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2"/>
      <circle cx="8.5" cy="11.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconWifi() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
      <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconEscudo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  )
}

function IconLimpeza() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/>
      <path d="M19 15l1 3-3-1-1 3-1-3-3 1 1-3-3-1 3-1 1-3 1 3 3-1z"/>
    </svg>
  )
}

function IconLocalizacao() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      <path d="M8 10h.01M12 10h.01M16 10h.01"/>
    </svg>
  )
}

const ITENS = [
  { Icon: IconCama,       titulo: 'Quartos Mobiliados',      desc: 'Cama de casal, armário, espelho e todo o conforto que você precisa.' },
  { Icon: IconWifi,       titulo: 'Wi-Fi',                    desc: 'Internet incluída no valor do aluguel.' },
  { Icon: IconEscudo,     titulo: 'Segurança e Discrição',    desc: 'Sem identificação em fachada, entrada discreta e privativa.' },
  { Icon: IconLimpeza,    titulo: 'Limpeza Profissional',     desc: 'Quartos e áreas comuns higienizados periodicamente.' },
  { Icon: IconLocalizacao,titulo: 'Localização Estratégica',  desc: 'Próximos ao centro e pontos de movimento em Penha e Barra Velha.' },
  { Icon: IconChat,       titulo: 'Suporte Direto',           desc: 'Atendimento via WhatsApp com a Geyse para reservas e dúvidas.' },
]

export default function DiferenciaisSection() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.dif-heading',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.dif-heading', start: 'top 85%' } }
      )
      gsap.fromTo('.dif-card',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: '.dif-card', start: 'top 85%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="diferenciais" className="py-24 bg-[#06061a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="dif-heading opacity-0 text-center mb-16">
          <p className="text-[11px] font-bold text-primary uppercase tracking-[0.22em] mb-4
                        flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Por que a Casa da Geyse?
            <span className="w-8 h-px bg-primary" />
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">O que está incluído</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITENS.map(({ Icon, titulo, desc }) => (
            <div key={titulo}
                 className="dif-card opacity-0 group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7
                             hover:border-primary/25 hover:bg-white/[0.05]
                             hover:shadow-[0_0_40px_rgba(233,30,140,0.07)]
                             transition-all duration-300 cursor-default">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20
                              flex items-center justify-center mb-5 text-primary
                              group-hover:bg-primary/15 group-hover:border-primary/35
                              transition-all duration-300
                              shadow-[0_0_20px_rgba(233,30,140,0.08)]">
                <Icon />
              </div>
              <h3 className="text-white font-black text-base mb-2 group-hover:text-primary transition-colors duration-200">
                {titulo}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
