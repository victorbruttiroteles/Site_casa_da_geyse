import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RegrasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#06061a]">

        <div className="bg-[#080822] border-b border-white/[0.06] py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2">Hóspedes</p>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Regras da Casa</h1>
            <p className="text-gray-400 text-sm mt-1">Leia com atenção antes de se hospedar.</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">

          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 space-y-4 text-gray-300 text-sm leading-relaxed">

            <p>
              A Casa da Geyse zela pelo conforto das nossas hóspedes e de seus clientes. Manter sempre a organização
              e a higiene do ambiente é fundamental para garantir um local agradável, cheiroso e harmonioso.
            </p>

            <div>
              <p className="text-white font-bold mb-2">Condutas proibidas:</p>
              <ul className="space-y-1.5 text-gray-400">
                <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">×</span> Uso de drogas</li>
                <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">×</span> Gritarias, falar ou colocar som em volume alto</li>
                <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">×</span> Fumar dentro do quarto</li>
                <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">×</span> Fofocas e divulgação de fotos falsas (fake)</li>
                <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">×</span> Cafetinagem e agenciamento (rufianismo)</li>
              </ul>
            </div>

            <p>
              As portas devem ser trancadas com chave. Respeite os vizinhos, a comunidade e os comerciantes
              da cidade. Evite confusões com clientes.
            </p>

            <div>
              <p className="text-white font-bold mb-2">Saída:</p>
              <ul className="space-y-1.5 text-gray-400">
                <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span> Avise com 24 horas de antecedência antes de entregar o quarto.</li>
                <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span> O descumprimento das regras está sujeito a multas.</li>
                <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span> Entregue toalhas, roupas de cama, chaves e utensílios do quarto e da cozinha. Itens em falta ou extraviados serão cobrados.</li>
              </ul>
            </div>

            <div className="border-t border-white/[0.08] pt-4">
              <p className="text-white font-bold uppercase tracking-wide text-xs mb-2">Diárias</p>
              <p className="text-red-400 font-bold">
                Não acumulamos diárias em hipótese alguma.
              </p>
              <p className="text-gray-400 mt-1">
                Atraso de duas diárias implica na desocupação do quarto até as 9h da manhã do terceiro dia.
              </p>
            </div>

            <div className="border-t border-white/[0.08] pt-4 space-y-2 text-gray-400 italic">
              <p>
                Foco, disponibilidade e objetivo trazem um ótimo rendimento à sua conta bancária.
                Quem faz o movimento é a garota — não a casa e nem a cidade.
              </p>
              <p className="text-white not-italic font-semibold">
                Agradecemos a compreensão. Sucesso! Acredite em si mesma e não no que os outros falam.
              </p>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
