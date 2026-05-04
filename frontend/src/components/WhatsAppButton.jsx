import { useState } from 'react'

const WA_CONTATO = '5547999999999' // número da Geyse — atualizar
const WA_MSG = 'Olá! Gostaria de saber mais sobre os quartos da Casa da Geyse.'

/* Logo oficial WhatsApp — outline verde */
function WaLogo({ size = 32, color = '#25D366' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd" clipRule="evenodd"
        fill={color}
        d="M16 2C8.268 2 2 8.268 2 16c0 2.57.687 4.978 1.886 7.047L2 30l7.18-1.867A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.6a11.52 11.52 0 0 1-5.882-1.608l-.421-.252-4.366 1.135 1.164-4.245-.275-.435A11.47 11.47 0 0 1 4.4 16C4.4 9.594 9.594 4.4 16 4.4S27.6 9.594 27.6 16 22.406 27.6 16 27.6Z"
      />
      <path
        fill={color}
        d="M22.29 19.12c-.33-.165-1.96-.965-2.263-1.075-.302-.11-.522-.165-.741.165-.22.33-.852 1.075-1.044 1.295-.192.22-.385.247-.715.082-1.985-.992-3.286-1.77-4.591-4.016-.347-.6.347-.557.99-1.853.11-.22.055-.412-.027-.55-.083-.138-.742-1.786-1.016-2.446-.274-.66-.55-.57-.741-.58l-.632-.012c-.22 0-.578.083-.88.412-.303.33-1.155 1.128-1.155 2.75 0 1.622 1.182 3.19 1.347 3.41.165.22 2.33 3.558 5.647 4.992 2.097.906 2.916.982 3.966.826.638-.096 1.958-.8 2.234-1.572.275-.77.275-1.43.192-1.568-.08-.137-.3-.22-.632-.385Z"
      />
    </svg>
  )
}

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  const href = `https://wa.me/${WA_CONTATO}?text=${encodeURIComponent(WA_MSG)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Popup */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl w-72 overflow-hidden border border-gray-100 animate-fade-in">

          {/* Header */}
          <div className="bg-[#25D366] px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img src="/logo.png" alt="Casa da Geyse" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-white font-bold text-sm leading-tight">Casa da Geyse</div>
              <div className="text-white/80 text-xs flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80 inline-block" />
                Online agora
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto text-white/70 hover:text-white">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>

          {/* Balão */}
          <div className="bg-[#ECE5DD] px-4 py-5">
            <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow-sm max-w-[90%] relative">
              <div className="absolute -top-2 left-0 w-3 h-3 bg-white" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }} />
              <p className="text-gray-700 text-sm leading-relaxed">
                Olá! 👋 Fale com a <strong>Geyse</strong> agora para reservar seu quarto ou tirar dúvidas.
              </p>
              <span className="text-[10px] text-gray-400 float-right mt-1">agora</span>
            </div>
          </div>

          {/* Botão */}
          <div className="bg-white px-4 py-3">
            <a href={href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bc5a] text-white font-bold py-3 rounded-xl text-sm transition-colors">
              <WaLogo size={20} color="#fff" />
              Iniciar conversa
            </a>
          </div>
        </div>
      )}

      {/* Botão flutuante */}
      <button
        onClick={() => setOpen(o => !o)}
        className="relative w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20bc5a] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Falar no WhatsApp"
      >
        <WaLogo size={36} color="#fff" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
      </button>
    </div>
  )
}
