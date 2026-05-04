import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const WA_CONTATO = '5547999999999'

export default function HeroCasa() {
  const heroRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('.hero-badge',  { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo('.hero-title',  { opacity: 0, y: 60  }, { opacity: 1, y: 0, duration: 1.0 }, '-=0.3')
        .fromTo('.hero-sub',    { opacity: 0, y: 30  }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
        .fromTo('.hero-check',  { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.06 }, '-=0.5')
        .fromTo('.hero-cta',    { opacity: 0, y: 20  }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
        .fromTo('.hero-logo',   { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 1.2 }, '<-0.8')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[92vh] flex items-center bg-[#06061a] overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-1/4 -left-56 w-[700px] h-[700px] rounded-full opacity-[0.12] blur-[130px] pointer-events-none"
           style={{ background: '#e91e8c' }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[100px] pointer-events-none"
           style={{ background: '#e91e8c' }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.022] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#e91e8c 1px, transparent 1px), linear-gradient(90deg, #e91e8c 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

          {/* Text */}
          <div className="flex-1 max-w-2xl">
            <div className="hero-badge opacity-0 inline-flex items-center gap-2.5 text-[11px] font-bold text-primary
                            uppercase tracking-[0.2em] mb-8 border border-primary/20 bg-primary/[0.06]
                            px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Penha &amp; Barra Velha — Santa Catarina
            </div>

            <h1 className="hero-title opacity-0 text-5xl sm:text-6xl lg:text-7xl font-black text-white
                           leading-[0.92] tracking-tight mb-7">
              Conforto e<br />
              discrição para<br />
              <span className="text-primary">o seu encontro</span>
            </h1>

            <p className="hero-sub opacity-0 text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              A <span className="text-white font-semibold">Casa da Geyse</span> oferece quartos mobiliados
              com toda a estrutura para quem busca segurança, privacidade e um ambiente tranquilo.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 mb-10">
              {['Quartos equipados', 'Wi-Fi incluso', 'Localização privilegiada',
                'Segurança 24h', 'Ambiente discreto', 'Sem taxa de entrada'].map(item => (
                <div key={item} className="hero-check opacity-0 flex items-center gap-2.5 text-sm text-gray-300">
                  <span className="text-primary font-black flex-shrink-0 text-base leading-none">✓</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="hero-cta opacity-0 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${WA_CONTATO}?text=Ol%C3%A1%2C%20gostaria%20de%20reservar%20um%20quarto%20na%20Casa%20da%20Geyse!`}
                target="_blank" rel="noreferrer"
                className="btn-primary px-8 py-4 rounded-xl font-black text-sm tracking-wide text-center
                           shadow-[0_0_40px_rgba(233,30,140,0.25)] hover:shadow-[0_0_60px_rgba(233,30,140,0.4)]
                           transition-shadow duration-300"
              >
                RESERVAR VIA WHATSAPP
              </a>
              <Link
                to="/classificados"
                className="px-8 py-4 rounded-xl border border-white/[0.12] hover:border-white/25
                           text-gray-300 hover:text-white font-bold text-sm text-center transition-all duration-200"
              >
                VER CLASSIFICADOS
              </Link>
            </div>
          </div>

          {/* Logo */}
          <div className="hero-logo opacity-0 flex-shrink-0 relative px-8 lg:px-12">
            <div className="absolute inset-0 rounded-full blur-[80px] opacity-35 scale-75"
                 style={{ background: 'radial-gradient(circle, #e91e8c, transparent 70%)' }} />
            <img src="/logo.png" alt="Casa da Geyse"
                 className="relative w-[200px] lg:w-[380px] object-contain drop-shadow-2xl select-none"
                 draggable={false} />
          </div>
        </div>
      </div>
    </section>
  )
}
