import { useEffect, useState } from 'react'
import { fetchEscorts } from '../api/escorts'
import EscortCard from './EscortCard'

function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <div className="aspect-[3/4] skeleton" />
      <div className="p-3 space-y-2">
        <div className="h-3.5 skeleton rounded w-3/4" />
        <div className="h-3 skeleton rounded w-1/2" />
        <div className="h-3 skeleton rounded w-full" />
        <div className="h-8 skeleton rounded mt-2" />
      </div>
    </div>
  )
}

export default function EscortListing({ params = {}, title, showTitle = true }) {
  const [escorts, setEscorts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)
  const [total, setTotal]     = useState(0)

  const key = JSON.stringify(params)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    fetchEscorts(params)
      .then((d) => {
        if (cancelled) return
        setEscorts(d.escorts ?? [])
        setTotal(d.total ?? 0)
      })
      .catch((e) => { if (!cancelled) setError(e.message) })
      .finally(() => { if (!cancelled) setLoading(false) })

    return () => { cancelled = true }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="section-tag mb-1">Perfis</p>
              <h2 className="section-title">
                {title ?? 'Acompanhantes em destaque'}
              </h2>
            </div>
            {!loading && (
              <span className="text-sm text-gray-400">{total} perfil{total !== 1 ? 's' : ''}</span>
            )}
          </div>
        )}

        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-3">⚠️</p>
            <p className="text-sm">Não foi possível carregar os perfis.</p>
            <p className="text-xs mt-1 text-gray-300">Verifique se o servidor PHP está rodando em localhost:8000</p>
          </div>
        )}

        {!loading && !error && escorts.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm">Nenhum perfil encontrado para esta busca.</p>
          </div>
        )}

        {!loading && !error && escorts.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {escorts.map((e) => <EscortCard key={e.id} escort={e} />)}
          </div>
        )}
      </div>
    </section>
  )
}
