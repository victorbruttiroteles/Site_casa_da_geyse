import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const SLIDES = [
  { foto: '/penha-armacao/marina.jpg'       },
  { foto: '/penha-centro/veneza.jpg'        },
  { foto: '/barra-velha-centro/lauren.jpg'  },
  { foto: '/penha-armacao/bruna-loira.jpg'  },
  { foto: '/penha-centro/beatriz.jpg'       },
  { foto: '/barra-velha-centro/gabriela.jpg'},
  { foto: '/penha-armacao/jessica.jpg'      },
  { foto: '/barra-velha-centro/mirella.jpg' },
]

function ArrowIcon({ dir }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      {dir === 'left' ? <path d="M15 18l-6-6 6-6"/> : <path d="M9 18l6-6-6-6"/>}
    </svg>
  )
}

export default function HeroSlider() {
  const [current, setCurrent]     = useState(0)
  const [animating, setAnimating] = useState(false)
  const slidesRef  = useRef([])
  const contentRef = useRef()
  const intervalRef = useRef()

  const goTo = useCallback((idx) => {
    if (animating) return
    const next = (idx + SLIDES.length) % SLIDES.length
    if (next === current) return

    setAnimating(true)
    gsap.to(slidesRef.current[current], { opacity: 0, duration: 0.7, ease: 'power2.inOut' })
    gsap.fromTo(slidesRef.current[next],
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: 'power2.inOut',
        onComplete: () => { setCurrent(next); setAnimating(false) }
      }
    )
  }, [current, animating])

  const resetInterval = useCallback(() => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => goTo(current + 1), 5000)
  }, [current, goTo])

  useEffect(() => { resetInterval(); return () => clearInterval(intervalRef.current) }, [current])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('.slider-logo',    { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo('.slider-title',   { opacity: 0, y: 40  }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.4')
        .fromTo('.slider-sub',     { opacity: 0, y: 20  }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .fromTo('.slider-cta',     { opacity: 0, y: 20  }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
    }, contentRef)
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '600px' }}>

      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div key={i} ref={el => slidesRef.current[i] = el}
             className="absolute inset-0" style={{ opacity: i === 0 ? 1 : 0 }}>
          <img src={s.foto} alt="" className="w-full h-full object-cover object-top" />
        </div>
      ))}

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-10" />
      <div className="absolute inset-0 z-10"
           style={{ background: 'radial-gradient(ellipse at center, rgba(233,30,140,0.08) 0%, transparent 70%)' }} />

      {/* Conteúdo central */}
      <div ref={contentRef}
           className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">

        {/* Logo */}
        <img
          src="/logo.png"
          alt="Casa da Geyse"
          className="slider-logo opacity-0 w-28 sm:w-36 lg:w-44 object-contain mb-6 drop-shadow-2xl"
        />

        {/* Título */}
        <h2 className="slider-title opacity-0 font-black text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 60px)', letterSpacing: '-0.02em', maxWidth: '800px' }}>
          As melhores acompanhantes do<br />
          <span className="text-primary">litoral norte de Santa Catarina</span>
        </h2>

        {/* Subtítulo */}
        <p className="slider-sub opacity-0 text-gray-300 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
          Perfis verificados em Penha e Barra Velha — discrição e qualidade garantidas.
        </p>

        {/* CTA */}
        <div className="slider-cta opacity-0">
          <Link
            to="/classificados"
            className="btn-primary px-10 py-4 rounded-xl font-black text-sm tracking-widest
                       shadow-[0_0_40px_rgba(233,30,140,0.4)] hover:shadow-[0_0_60px_rgba(233,30,140,0.6)]
                       transition-shadow duration-300"
          >
            VER CLASSIFICADOS
          </Link>
        </div>
      </div>

      {/* Setas */}
      <button onClick={() => { goTo(current - 1); resetInterval() }}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30
                         w-11 h-11 rounded-full bg-black/40 hover:bg-primary/70 border border-white/10
                         flex items-center justify-center text-white transition-all duration-200
                         backdrop-blur-sm hover:scale-110 active:scale-95"
              aria-label="Anterior">
        <ArrowIcon dir="left" />
      </button>
      <button onClick={() => { goTo(current + 1); resetInterval() }}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30
                         w-11 h-11 rounded-full bg-black/40 hover:bg-primary/70 border border-white/10
                         flex items-center justify-center text-white transition-all duration-200
                         backdrop-blur-sm hover:scale-110 active:scale-95"
              aria-label="Próximo">
        <ArrowIcon dir="right" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => { goTo(i); resetInterval() }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-6 h-2 bg-primary shadow-[0_0_8px_rgba(233,30,140,0.9)]'
                      : 'w-2 h-2 bg-white/25 hover:bg-white/50'
                  }`}
                  aria-label={`Slide ${i + 1}`} />
        ))}
      </div>

      {/* Contador */}
      <div className="absolute top-6 right-6 z-30 text-white/30 text-xs font-bold tracking-widest select-none">
        {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
      </div>
    </section>
  )
}
