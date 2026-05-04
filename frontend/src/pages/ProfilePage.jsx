import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchEscort } from '../api/escorts'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Skeleton() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="aspect-[3/4] skeleton rounded-xl" />
        <div className="space-y-4 pt-2">
          <div className="h-8 skeleton rounded w-3/4" />
          <div className="h-4 skeleton rounded w-1/3" />
          <div className="h-4 skeleton rounded w-full" />
          <div className="h-4 skeleton rounded w-5/6" />
          <div className="h-12 skeleton rounded-lg mt-8" />
        </div>
      </div>
    </div>
  )
}

export default function ProfilePage() {
  const { id } = useParams()
  const [escort, setEscort]   = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    setLoading(true)
    setActiveImg(0)
    fetchEscort(id)
      .then(setEscort)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  const waLink = escort?.whatsapp
    ? `https://wa.me/${escort.whatsapp}?text=Olá%20${encodeURIComponent(escort?.name ?? '')},%20vi%20seu%20perfil%20na%20Casa%20da%20Geyse!`
    : '#'

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">

        {loading && <Skeleton />}

        {!loading && error && (
          <div className="text-center py-32 text-gray-400">
            <p className="text-4xl mb-4">😕</p>
            <p className="text-sm mb-4">Perfil não encontrado.</p>
            <Link to="/acompanhantes" className="btn-primary">Ver todos os perfis</Link>
          </div>
        )}

        {!loading && !error && escort && (
          <>
            {/* Dark breadcrumb bar */}
            <div className="bg-navy-800 border-b border-navy-700">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-gray-500">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link to="/acompanhantes" className="hover:text-primary transition-colors">Acompanhantes</Link>
                <span>/</span>
                <span className="text-gray-300">{escort.name}</span>
              </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-10 items-start">

                {/* Gallery */}
                <div className="space-y-3">
                  <div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-[3/4]">
                    <img
                      src={escort.images?.[activeImg] ?? `https://picsum.photos/seed/escort${id}/480/600`}
                      alt={escort.name}
                      className="w-full h-full object-cover"
                    />
                    {escort.images?.length > 1 && (
                      <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full">
                        {activeImg + 1} / {escort.images.length}
                      </div>
                    )}
                  </div>

                  {escort.images?.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {escort.images.map((src, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImg(i)}
                          className={`flex-shrink-0 w-20 h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                            activeImg === i ? 'border-primary' : 'border-transparent hover:border-gray-300'
                          }`}
                        >
                          <img src={src} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Info panel */}
                <div className="md:sticky md:top-[76px] bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  {/* Top accent bar */}
                  <div className="h-1 bg-primary w-full" />

                  <div className="p-6">
                    {/* Online badge */}
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Online agora
                    </span>

                    <h1 className="text-2xl font-extrabold text-gray-900 mb-1">{escort.name}</h1>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                      <span className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-primary">
                          <path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c5.523 0 10 2.239 10 5v2H2v-2c0-2.761 4.477-5 10-5z"/>
                        </svg>
                        {escort.age} anos
                      </span>
                      <span className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-primary">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        {escort.city}, {escort.state}
                      </span>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Sobre mim</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{escort.description}</p>
                    </div>

                    {/* WhatsApp CTA — main action */}
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full bg-[#25d366] hover:bg-[#20b958] text-white font-bold py-4 rounded-lg text-base transition-colors duration-150 mb-3"
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.5 0C5.149 0 0 5.149 0 11.5c0 2.013.525 3.897 1.438 5.535L0 23l6.13-1.413A11.46 11.46 0 0 0 11.5 23C17.851 23 23 17.851 23 11.5S17.851 0 11.5 0zm0 21c-1.88 0-3.63-.502-5.143-1.374l-.367-.217-3.634.836.836-3.532-.24-.384A9.46 9.46 0 0 1 2 11.5C2 6.253 6.253 2 11.5 2S21 6.253 21 11.5 16.747 21 11.5 21z"/>
                      </svg>
                      Chamar no WhatsApp
                    </a>

                    <p className="text-center text-gray-400 text-xs mb-4">
                      Contato direto e seguro
                    </p>

                    <div className="flex items-center gap-1.5 text-gray-300 text-xs justify-center border-t border-gray-100 pt-4">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-gray-300">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                      {escort.views?.toLocaleString('pt-BR')} visualizações
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-8">
                <Link
                  to="/acompanhantes"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2">
                    <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Voltar para todos os perfis
                </Link>
              </div>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
