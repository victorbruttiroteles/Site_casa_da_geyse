import Header from '../components/Header'
import LocationGrid from '../components/LocationGrid'
import Footer from '../components/Footer'

export default function StatesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-navy-800 py-8 border-b border-navy-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-tag mb-1">Explorar</p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Estados</h1>
          </div>
        </div>
        <div className="bg-white">
          <LocationGrid />
        </div>
      </main>
      <Footer />
    </>
  )
}
