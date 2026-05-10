import { Link } from 'react-router-dom'

const ITEMS = [
  'Acompanhantes disponíveis',
  'Perfis verificados',
  'Novos perfis cadastrados',
  'Encontre sua acompanhante',
  'Perfis exclusivos',
  'Acesse os classificados',
]

function MarqueeTrack() {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS]
  return (
    <div className="flex items-center gap-0 animate-marquee whitespace-nowrap">
      {repeated.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-white/80 px-6">
            {item}
          </span>
          <span className="text-primary text-base select-none">✦</span>
        </span>
      ))}
    </div>
  )
}

export default function MarqueeBanner() {
  return (
    <div className="w-full bg-[#0d0d2b] border-y border-primary/20 overflow-hidden">
      {/* Tarja rotativa */}
      <div className="relative py-3 flex overflow-hidden">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
             style={{ background: 'linear-gradient(to right, #0d0d2b, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
             style={{ background: 'linear-gradient(to left, #0d0d2b, transparent)' }} />
        <MarqueeTrack />
      </div>

      {/* CTA bar */}
      <div className="flex items-center justify-center gap-4 py-3 px-4 border-t border-primary/10
                      bg-gradient-to-r from-transparent via-primary/[0.04] to-transparent">
        <span className="text-gray-400 text-xs sm:text-sm font-medium tracking-wide">
          Veja os perfis das acompanhantes disponíveis
        </span>
        <Link
          to="/classificados"
          className="flex-shrink-0 btn-primary px-5 py-2 rounded-lg text-xs font-black tracking-widest
                     shadow-[0_0_20px_rgba(233,30,140,0.3)] hover:shadow-[0_0_35px_rgba(233,30,140,0.5)]
                     transition-shadow duration-300"
        >
          VER AGORA
        </Link>
      </div>
    </div>
  )
}
