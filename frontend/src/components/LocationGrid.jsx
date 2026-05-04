import { useNavigate } from 'react-router-dom'

const LOCATIONS = [
  {
    label: 'Penha — Armação',
    city: 'Penha', neighborhood: 'Armação',
    img: '/penha-armacao/marina.jpg',
    count: 4,
  },
  {
    label: 'Penha — Centro',
    city: 'Penha', neighborhood: 'Centro',
    img: '/penha-centro/veneza.jpg',
    count: 4,
  },
  {
    label: 'Barra Velha — Centro',
    city: 'Barra Velha', neighborhood: 'Centro',
    img: '/barra-velha-centro/gabriela.jpg',
    count: 4,
  },
]

export default function LocationGrid() {
  const navigate = useNavigate()

  function go(city, neighborhood) {
    navigate(`/acompanhantes?city=${encodeURIComponent(city)}&neighborhood=${encodeURIComponent(neighborhood)}`)
  }

  return (
    <section id="estados" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="section-tag mb-1">Santa Catarina</p>
          <h2 className="section-title">Navegue por Cidade e Bairro</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {LOCATIONS.map(({ label, city, neighborhood, img, count }) => (
            <button
              key={label}
              onClick={() => go(city, neighborhood)}
              className="relative overflow-hidden rounded-xl group focus:outline-none"
              style={{ minHeight: 220 }}
            >
              <img
                src={img}
                alt={label}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <div className="text-white font-bold text-lg">{label}</div>
                <div className="text-white/70 text-xs mt-0.5">{count} acompanhantes</div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="bg-primary/90 text-white text-sm font-bold px-5 py-2 rounded-full">
                  Ver perfis
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
