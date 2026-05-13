import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { num: 3,   suffix: '',  label: 'Unidades'  },
  { num: 700, suffix: '+', label: 'Hóspedes'  },
  { num: 100, suffix: '%', label: 'Discrição' },
]

export default function SobreCasa() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.sobre-text',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.sobre-text', start: 'top 80%' } }
      )
      document.querySelectorAll('.stat-num').forEach(el => {
        const target = +el.dataset.target
        ScrollTrigger.create({
          trigger: el, start: 'top 90%', once: true,
          onEnter: () => {
            const obj = { val: 0 }
            gsap.to(obj, {
              val: target, duration: 1.6, ease: 'power2.out',
              onUpdate() { el.textContent = Math.round(obj.val) },
            })
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-[#080822]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 items-center max-w-2xl">

          <div className="sobre-text opacity-0">
            <p className="text-[11px] font-bold text-primary uppercase tracking-[0.22em] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-primary inline-block" />
              Nossa História
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-8 leading-[1.05]">
              Quem é a<br />Casa da Geyse?
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-10 text-[15px]">
              <p>
                A <strong className="text-white">Casa da Geyse</strong> nasceu da vontade de oferecer um espaço
                seguro, organizado e discreto para quem busca um encontro com acompanhante em Santa Catarina.
                Com unidades em <strong className="text-white">Penha</strong> (nos bairros Armação e Centro) e
                em <strong className="text-white">Barra Velha</strong>, a casa tem toda a infraestrutura para
                momentos confortáveis e sem preocupações.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {STATS.map(({ num, suffix, label }) => (
                <div key={label} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 text-center
                                            hover:border-primary/30 transition-colors duration-300">
                  <div className="text-4xl font-black text-primary leading-none mb-1.5">
                    <span className="stat-num" data-target={num}>0</span>{suffix}
                  </div>
                  <div className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
