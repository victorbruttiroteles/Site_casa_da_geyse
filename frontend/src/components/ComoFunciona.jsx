import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WA_CONTATO = '5547999999999'

const PASSOS = [
  { num: '01', titulo: 'Escolha sua unidade',   desc: 'Penha Armação, Penha Centro ou Barra Velha — veja as fotos e escolha onde quer se encontrar.' },
  { num: '02', titulo: 'Reserve pelo WhatsApp', desc: 'Fale direto com a Geyse, combine a data e o período. Simples e sem burocracia.' },
  { num: '03', titulo: 'Chegue e aproveite',    desc: 'Quarto pronto, limpo e estruturado. Só chegar e aproveitar com conforto e tranquilidade.' },
]

export default function ComoFunciona() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cf-heading',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.cf-heading', start: 'top 85%' } }
      )
      gsap.fromTo('.cf-step',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: '.cf-step', start: 'top 80%' } }
      )
      gsap.fromTo('.cf-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.cf-cta', start: 'top 90%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="como-funciona" className="py-24 bg-[#080822] relative overflow-hidden">

      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full opacity-[0.04] blur-[120px]"
             style={{ background: '#e91e8c' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="cf-heading opacity-0 text-center mb-20">
          <p className="text-[11px] font-bold text-primary uppercase tracking-[0.22em] mb-4
                        flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-primary" />
            Simples assim
            <span className="w-8 h-px bg-primary" />
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Como Funciona</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+2.5rem)] right-[calc(16.66%+2.5rem)] h-px
                          bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

          {PASSOS.map(({ num, titulo, desc }) => (
            <div key={num} className="cf-step opacity-0 text-center relative">
              <div className="relative inline-flex items-center justify-center mb-7">
                <div className="w-20 h-20 rounded-full border border-primary/30 bg-primary/[0.07]
                                flex items-center justify-center text-primary font-black text-2xl
                                shadow-[0_0_30px_rgba(233,30,140,0.12)]">
                  {num}
                </div>
              </div>
              <h3 className="text-white font-black text-xl mb-3">{titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
            </div>
          ))}
        </div>

        <div className="cf-cta opacity-0 text-center">
          <a
            href={`https://wa.me/${WA_CONTATO}?text=Ol%C3%A1%20Geyse%2C%20quero%20saber%20mais%20sobre%20os%20quartos!`}
            target="_blank" rel="noreferrer"
            className="btn-primary px-10 py-5 rounded-xl font-black text-sm tracking-wide inline-block
                       shadow-[0_0_40px_rgba(233,30,140,0.3)] hover:shadow-[0_0_60px_rgba(233,30,140,0.45)]
                       transition-shadow duration-300"
          >
            FALAR COM A GEYSE AGORA
          </a>
        </div>
      </div>
    </section>
  )
}
