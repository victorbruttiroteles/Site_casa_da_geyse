import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const REGIOES = [
  {
    id: 'todas',
    label: 'Todas',
  },
  {
    id: 'penha-centro',
    label: 'Penha Centro',
    acompanhantes: [
      { nome: 'Cibelle', foto: '/penha-centro/Cibelle.jpeg', whatsapp: '5541847181411' },
      { nome: 'Mirela',  foto: '/penha-centro/Mirela.jpeg',  whatsapp: '55519304749300' },
      { nome: 'Ana',     foto: '/penha-centro/ana.jpg',      whatsapp: '5548914723110' },
      { nome: 'Veneza',  foto: '/penha-centro/veneza.jpg',   whatsapp: '5548999664880' },
    ],
  },
  {
    id: 'penha-armacao',
    label: 'Penha Armação',
    acompanhantes: [
      { nome: 'Camila', foto: '/penha-armacao/Camila.jpeg', whatsapp: '5514991587065' },
      { nome: 'Naiara', foto: '/penha-armacao/Naiara.jpeg', whatsapp: '5549998912590' },
      { nome: 'Etiene', foto: '/penha-armacao/Etiene.jpeg', whatsapp: '5547913060290' },
    ],
  },
  {
    id: 'barra-velha-centro',
    label: 'Barra Velha Centro',
    acompanhantes: [
      { nome: 'Mari',  foto: '/barra-velha-centro/mari.jpg',   whatsapp: '5511983441355' },
      { nome: 'Bruna', foto: '/barra-velha-centro/Bruna.jpeg', whatsapp: '5547915490480' },
      { nome: 'Mhel',  foto: '/barra-velha-centro/Mhel.jpeg',  whatsapp: '5541853709090' },
    ],
  },
]

const ALL = REGIOES.filter(r => r.id !== 'todas').flatMap(r =>
  r.acompanhantes.map(a => ({ ...a, regiao: r.label }))
)

function Card({ nome, foto, whatsapp, regiao }) {
  const msg = encodeURIComponent(`Olá ${nome}, vi seu perfil na Casa da Geyse e gostaria de saber mais!`)
  return (
    <div className="group flex flex-col bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden
                    hover:border-primary/30 hover:shadow-[0_0_30px_rgba(233,30,140,0.12)] transition-all duration-300">
      <div className="relative overflow-hidden aspect-[3/4] bg-white/[0.02]">
        <img src={foto} alt={nome} loading="lazy"
             className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {regiao && (
          <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-wider
                           bg-black/50 text-white/80 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10">
            {regiao}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col gap-3">
        <span className="font-black text-white text-base tracking-tight">{nome}</span>
        <a href={`https://wa.me/${whatsapp}?text=${msg}`}
           target="_blank" rel="noreferrer"
           className="w-full btn-primary py-2.5 rounded-xl text-xs font-black tracking-widest text-center
                      shadow-[0_0_20px_rgba(233,30,140,0.2)] hover:shadow-[0_0_35px_rgba(233,30,140,0.4)]
                      transition-shadow duration-300 flex items-center justify-center gap-2">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.126 1.527 5.856L0 24l6.335-1.502A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.032-1.388l-.36-.214-3.762.893.952-3.671-.235-.376A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
          </svg>
          FALAR NO WHATSAPP
        </a>
      </div>
    </div>
  )
}

export default function ClassificadosPage() {
  const [ativa, setAtiva] = useState('todas')

  const regiaoAtiva = REGIOES.find(r => r.id === ativa)
  const lista = ativa === 'todas'
    ? ALL
    : regiaoAtiva.acompanhantes.map(a => ({ ...a, regiao: undefined }))

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#06061a]">

        {/* Hero */}
        <div className="bg-[#080822] border-b border-white/[0.06] py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2">Santa Catarina</p>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Classificados</h1>
            <p className="text-gray-400 text-sm mt-1">
              {lista.length} perfil{lista.length !== 1 ? 's' : ''} disponíve{lista.length !== 1 ? 'is' : 'l'}
            </p>
          </div>
        </div>

        {/* Filtros por região */}
        <div className="border-b border-white/[0.06] bg-[#080822] sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
              {REGIOES.map(r => (
                <button key={r.id} onClick={() => setAtiva(r.id)}
                        className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
                          ativa === r.id
                            ? 'bg-primary text-white shadow-[0_0_16px_rgba(233,30,140,0.4)]'
                            : 'bg-white/[0.05] text-gray-400 hover:bg-white/10 hover:text-white border border-white/[0.06]'
                        }`}>
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {ativa !== 'todas' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {lista.map((a, i) => <Card key={i} {...a} />)}
            </div>
          ) : (
            REGIOES.filter(r => r.id !== 'todas').map(r => (
              <div key={r.id} className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  <h2 className="text-white font-black text-lg tracking-tight">{r.label}</h2>
                  <span className="text-gray-600 text-sm">{r.acompanhantes.length} perfis</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {r.acompanhantes.map((a, i) => <Card key={i} {...a} />)}
                </div>
              </div>
            ))
          )}
        </div>

      </main>
      <Footer />
    </>
  )
}
