const CARDS = [
  {
    color: '#e91e8c',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
    title: 'Profissionalismo e Segurança',
    text: 'Perfis verificados e ambiente seguro para sua tranquilidade.',
  },
  {
    color: '#9c27b0',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
      </svg>
    ),
    title: 'Privacidade Total',
    text: 'Seus dados são protegidos — navegue com discrição absoluta.',
  },
  {
    color: '#e91e8c',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'Visibilidade e Qualidade',
    text: 'Perfis premium com fotos reais e alcance em todo o Brasil.',
  },
]

export default function FeatureCards() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-tag mb-2">Por que escolher a Casa da Geyse</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 max-w-xl mx-auto leading-snug">
            Descubra os motivos pelos quais somos a escolha ideal para acompanhantes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map(({ icon, title, text, color }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200 bg-white"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 flex-shrink-0"
                style={{ backgroundColor: color }}
              >
                {icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
