import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'

const WA_CONTATO = '5547999999999'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef()
  const loc = useLocation()
  const isHome = loc.pathname === '/'

  useEffect(() => {
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 }
    )
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id) {
    setOpen(false)
    if (!isHome) { window.location.href = `/#${id}`; return }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06061a]/95 border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-[#06061a]/80 border-b border-white/[0.04]'
      }`}
      style={{ backdropFilter: 'blur(14px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Casa da Geyse" className="h-10 w-auto object-contain" />
            <span className="text-white font-black text-lg hidden sm:block tracking-tight">
              Casa da <span className="text-primary">Geyse</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Início</Link>
            <button onClick={() => scrollTo('casas')} className="text-gray-400 hover:text-white transition-colors duration-200">
              Nossas Casas
            </button>
            <button onClick={() => scrollTo('como-funciona')} className="text-gray-400 hover:text-white transition-colors duration-200">
              Como Funciona
            </button>
            <Link to="/classificados" className="text-gray-400 hover:text-white transition-colors duration-200">
              Classificados
            </Link>
            <a href={`https://wa.me/${WA_CONTATO}`} target="_blank" rel="noreferrer"
               className="btn-primary px-5 py-2.5 rounded-lg font-bold text-xs tracking-wide">
              RESERVE AGORA
            </a>
          </nav>

          <button onClick={() => setOpen(o => !o)} className="md:hidden text-gray-400 hover:text-white p-2 transition-colors">
            {open
              ? <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
              : <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
            }
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/[0.06] py-4 flex flex-col gap-1">
            <Link to="/" onClick={() => setOpen(false)} className="text-gray-400 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition-all">Início</Link>
            <button onClick={() => scrollTo('casas')} className="text-gray-400 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition-all text-left">Nossas Casas</button>
            <button onClick={() => scrollTo('como-funciona')} className="text-gray-400 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition-all text-left">Como Funciona</button>
            <Link to="/classificados" onClick={() => setOpen(false)} className="text-gray-400 hover:text-white px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition-all">Classificados</Link>
            <a href={`https://wa.me/${WA_CONTATO}`} target="_blank" rel="noreferrer"
               className="btn-primary px-5 py-3 rounded-lg font-bold text-xs text-center mt-2">
              RESERVE AGORA
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
