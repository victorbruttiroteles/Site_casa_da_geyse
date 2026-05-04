import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LOCATIONS = [
  { city: 'Penha',       neighborhood: 'Armação', label: 'Penha — Armação'      },
  { city: 'Penha',       neighborhood: 'Centro',  label: 'Penha — Centro'        },
  { city: 'Barra Velha', neighborhood: 'Centro',  label: 'Barra Velha — Centro'  },
]

const FILTERS = [
  { value: '',        label: 'Mulheres'    },
  { value: 'novatas', label: 'Novatas'     },
  { value: 'views',   label: 'Mais vistas' },
]

export default function Hero() {
  const [location, setLocation] = useState('')
  const [filter,   setFilter]   = useState('')
  const navigate                = useNavigate()

  function handleSearch(e) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (location) {
      const loc = LOCATIONS.find(l => `${l.city}|${l.neighborhood}` === location)
      if (loc) {
        params.set('city', loc.city)
        params.set('neighborhood', loc.neighborhood)
      }
    }
    if (filter === 'novatas') params.set('category', 'novatas')
    if (filter === 'views')   params.set('sort', 'views')
    navigate(`/acompanhantes?${params.toString()}`)
  }

  return (
    <section className="relative bg-navy-900 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #e91e8c, transparent 70%)' }} />
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full opacity-5 pointer-events-none"
           style={{ background: 'radial-gradient(circle, #e91e8c, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left — text + search */}
          <div className="flex-1 max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Santa Catarina — Perfis ativos agora
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              O site mais quente<br />
              <span className="text-primary">da internet</span>
            </h1>
            <p className="text-gray-400 text-base mb-10">
              Acompanhantes em Penha e Barra Velha — discrição e segurança garantidos.
            </p>

            <form onSubmit={handleSearch}>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <select
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  className="flex-1 bg-navy-700 border border-navy-600 text-gray-200 text-sm px-4 py-3.5 rounded focus:outline-none focus:border-primary"
                >
                  <option value="">Selecione cidade / bairro</option>
                  {LOCATIONS.map(l => (
                    <option key={`${l.city}|${l.neighborhood}`} value={`${l.city}|${l.neighborhood}`}>
                      {l.label}
                    </option>
                  ))}
                </select>
                <button type="submit" className="btn-primary px-8 py-3.5 rounded font-bold text-sm">
                  BUSCAR
                </button>
              </div>

              <div className="flex items-center gap-2">
                {FILTERS.map(({ value, label }) => (
                  <button key={value} type="button" onClick={() => setFilter(value)}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all duration-150 ${
                      filter === value
                        ? 'bg-primary border-primary text-white'
                        : 'border-gray-600 text-gray-400 hover:border-gray-400 hover:text-gray-200'
                    }`}>
                    {label}
                  </button>
                ))}
              </div>
            </form>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Casa da Geyse" width={400} height={400}
              className="w-[220px] h-[220px] lg:w-[380px] lg:h-[380px] object-contain drop-shadow-2xl select-none"
              draggable={false} />
          </div>
        </div>
      </div>
    </section>
  )
}
