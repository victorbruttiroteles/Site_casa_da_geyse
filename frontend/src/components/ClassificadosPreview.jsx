import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { fetchEscorts } from '../api/escorts'

gsap.registerPlugin(ScrollTrigger)

export default function ClassificadosPreview() {
  const [escorts, setEscorts] = useState([])
  const sectionRef = useRef()

  useEffect(() => {
    fetchEscorts({ sort: 'views', limit: 4 })
      .then(d => setEscorts(d.escorts ?? []))
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (escorts.length === 0) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.cls-heading',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.cls-heading', start: 'top 85%' } }
      )
      gsap.fromTo('.cls-card',
        { opacity: 0, y: 40, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: '.cls-card', start: 'top 85%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [escorts])

  if (escorts.length === 0) return null

  return (
    <section ref={sectionRef} id="classificados" className="py-24 bg-[#06061a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="cls-heading opacity-0 flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-[11px] font-bold text-primary uppercase tracking-[0.22em] mb-3 flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Classificados
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white">Acompanhantes em destaque</h2>
          </div>
          <Link to="/classificados" className="text-primary font-bold text-sm hover:text-primary-light transition-colors">
            Ver todos os perfis →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {escorts.map(e => (
            <Link
              key={e.id}
              to={`/acompanhante/${e.id}`}
              className="cls-card opacity-0 group relative overflow-hidden rounded-2xl aspect-[3/4]
                         bg-[#0a0a28] border border-white/[0.07]
                         hover:border-primary/30 hover:shadow-[0_0_30px_rgba(233,30,140,0.12)]
                         transition-all duration-300"
            >
              <img
                src={e.images?.[0] ?? `https://picsum.photos/seed/e${e.id}/300/400`}
                alt={e.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-white font-black text-sm truncate">{e.name}</div>
                <div className="text-gray-400 text-[11px]">
                  {e.city}{e.neighborhood ? ` — ${e.neighborhood}` : ''}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/classificados"
                className="btn-primary px-10 py-4 rounded-xl font-black text-sm inline-block
                           shadow-[0_0_30px_rgba(233,30,140,0.2)] hover:shadow-[0_0_50px_rgba(233,30,140,0.35)]
                           transition-shadow duration-300">
            VER TODOS OS CLASSIFICADOS
          </Link>
        </div>
      </div>
    </section>
  )
}
