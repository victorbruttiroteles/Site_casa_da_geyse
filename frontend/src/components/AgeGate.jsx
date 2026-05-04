import { useState, useEffect } from 'react'

const STORAGE_KEY = 'cdg_age_verified'

export default function AgeGate() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const verified = sessionStorage.getItem(STORAGE_KEY)
    if (!verified) setVisible(true)
  }, [])

  function handleConfirm() {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  function handleDeny() {
    window.location.replace('https://www.google.com')
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4"
         style={{ background: 'rgba(7,10,20,0.97)', backdropFilter: 'blur(6px)' }}>

      {/* Card */}
      <div className="relative bg-navy-800 border border-navy-600 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">

        {/* Faixa topo */}
        <div className="bg-primary h-1.5 w-full" />

        {/* Conteúdo */}
        <div className="px-8 py-10 flex flex-col items-center text-center gap-6">

          {/* Ícone */}
          <div className="w-20 h-20 rounded-full border-4 border-primary/40 flex items-center justify-center bg-primary/10">
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-primary">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4c1.4 0 2.5 1.1 2.5 2.5S13.4 10 12 10 9.5 8.9 9.5 7.5 10.6 5 12 5zm0 10c-2.09 0-3.93-1.07-5-2.69C7.03 10.58 9.85 9.5 12 9.5s4.97 1.08 5 2.81A6.006 6.006 0 0112 15z"/>
            </svg>
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-white font-extrabold text-2xl mb-1">Verificação de Idade</h2>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Conteúdo restrito para maiores de 18 anos
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Este site contém conteúdo adulto destinado exclusivamente a pessoas com{' '}
              <strong className="text-white">18 anos ou mais</strong>.
              Ao continuar, você declara ser maior de idade e concorda com os termos de uso.
            </p>
          </div>

          {/* Aviso legal */}
          <div className="w-full bg-navy-900 border border-navy-600 rounded-xl px-4 py-3 flex items-start gap-3 text-left">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-yellow-400 flex-shrink-0 mt-0.5">
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
            </svg>
            <p className="text-gray-400 text-xs leading-relaxed">
              O acesso por menores de 18 anos é <strong className="text-yellow-400">expressamente proibido</strong> e
              sujeito às penalidades previstas no <strong className="text-white">ECA — Lei nº 8.069/90</strong>.
            </p>
          </div>

          {/* Botões */}
          <div className="w-full flex flex-col gap-3">
            <button
              onClick={handleConfirm}
              className="w-full btn-primary py-4 rounded-xl font-extrabold text-base tracking-wide"
            >
              Tenho 18 anos
            </button>
          </div>

          {/* Rodapé */}
          <p className="text-gray-600 text-[11px] leading-relaxed">
            Ao clicar em "Tenho 18 anos" você confirma ter lido e concordado com os termos de uso e políticas de privacidade da Casa da Geyse.
          </p>
        </div>
      </div>
    </div>
  )
}
