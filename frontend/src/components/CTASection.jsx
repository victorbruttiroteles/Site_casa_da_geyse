export default function CTASection() {
  return (
    <>
      {/* Anunciar banner — light pink/white */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-xl px-8 sm:px-14 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: 'linear-gradient(135deg, #f8e6f3 0%, #fce4f0 100%)', border: '1px solid #f5c6e7' }}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                Para anunciantes
              </p>
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-1">
                Você é profissional do entretenimento adulto?
              </h2>
              <p className="text-gray-500 text-sm">
                Então venha anunciar gratuitamente — sem intermediários, sem taxas.
              </p>
            </div>
            <a
              href="https://wa.me/5511999990000?text=Quero%20anunciar%20meu%20perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3 flex-shrink-0 font-bold tracking-wide rounded"
            >
              QUERO ANUNCIAR
            </a>
          </div>
        </div>
      </section>

      {/* "Quem somos" — dark section */}
      <section className="bg-navy-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-tag mb-2">Quem somos</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
                O que é a Casa da Geyse?
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Somos uma plataforma premium de acompanhantes que une profissionais verificadas
                e clientes exigentes com segurança, discrição e qualidade garantidas.
              </p>
              <ul className="space-y-3 text-sm text-gray-300">
                {[
                  'Perfis com informações claras e fotos reais',
                  'Contato direto com a acompanhante sem intermediários',
                  'Mais visibilidade para você anunciar',
                  'Ambiente voltado para negócios e discrição',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg viewBox="0 0 20 20" className="w-4 h-4 fill-primary flex-shrink-0 mt-0.5">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Para clientes', items: ['Busca com filtro rápido', 'Perfil completo e detalhado', 'Contato direto'] },
                { label: 'Para anunciantes', items: ['Mais visibilidade para o perfil', 'Ferramentas para destacar anúncio', 'Controle dos seus dados'] },
              ].map(({ label, items }) => (
                <div key={label} className="bg-navy-700 rounded-xl p-5">
                  <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {label}
                  </h4>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-400 text-xs">
                        <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 fill-primary flex-shrink-0 mt-0.5">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
