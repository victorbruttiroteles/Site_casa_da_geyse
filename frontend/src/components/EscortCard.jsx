import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function EscortCard({ escort }) {
  const { id, name, age, city, neighborhood, description, images, category } = escort
  const [imgErr, setImgErr] = useState(false)

  const src = !imgErr && images?.[0]
    ? images[0]
    : `https://picsum.photos/seed/escort${id}/400/500`

  return (
    <Link
      to={`/acompanhante/${id}`}
      className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
        <img
          src={src}
          alt={name}
          loading="lazy"
          onError={() => setImgErr(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {category === 'novatas' && (
          <div className="absolute top-2 left-2">
            <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
              Novata
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-1">
        <div className="flex items-center justify-between gap-1">
          <span className="font-bold text-gray-900 text-sm leading-tight truncate">{name}</span>
          <span className="text-primary font-semibold text-xs flex-shrink-0">{age} anos</span>
        </div>

        <div className="flex items-center gap-1 text-gray-400 text-[11px]">
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-primary flex-shrink-0">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          {city}{neighborhood ? ` — ${neighborhood}` : ''}, SC
        </div>

        <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-2 mt-0.5">{description}</p>

        <button className="mt-2 w-full btn-primary py-2 text-xs rounded font-bold tracking-wide">
          VER PERFIL
        </button>
      </div>
    </Link>
  )
}
