import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PromoPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
         onClick={() => setVisible(false)}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(233,30,140,0.35)]
                      border border-primary/30 bg-[#0d0d2b]"
           onClick={e => e.stopPropagation()}>

        {/* Top glow strip */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Close */}
        <button onClick={() => setVisible(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/10
                           flex items-center justify-center text-white/50 hover:text-white transition-all duration-200">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
               strokeLinecap="round" className="w-4 h-4">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div className="px-8 py-8 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-[10px] font-bold text-primary uppercase
                          tracking-[0.2em] border border-primary/25 bg-primary/[0.07] px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Perfis disponíveis agora
          </div>

          {/* Logo */}
          <img src="/logo.png" alt="Casa da Geyse"
               className="w-24 object-contain mb-5 drop-shadow-2xl" />

          {/* Title */}
          <h2 className="text-white font-black text-2xl leading-tight mb-3"
              style={{ letterSpacing: '-0.02em' }}>
            Veja os perfis das<br />
            <span className="text-primary">acompanhantes</span>
          </h2>

          {/* Desc */}
          <p className="text-gray-400 text-sm leading-relaxed mb-7 max-w-xs">
            Perfis disponíveis em Penha e Barra Velha. Acesse os classificados e encontre a acompanhante ideal.
          </p>

          {/* CTA */}
          <Link
            to="/classificados"
            onClick={() => setVisible(false)}
            className="w-full btn-primary py-3.5 rounded-xl font-black text-sm tracking-widest text-center
                       shadow-[0_0_40px_rgba(233,30,140,0.3)] hover:shadow-[0_0_60px_rgba(233,30,140,0.5)]
                       transition-shadow duration-300"
          >
            VER CLASSIFICADOS
          </Link>

          <button onClick={() => setVisible(false)}
                  className="mt-4 text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200">
            Agora não
          </button>
        </div>
      </div>
    </div>
  )
}
