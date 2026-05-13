import Header from '../components/Header'
import MarqueeBanner from '../components/MarqueeBanner'
import HeroCasa from '../components/HeroCasa'
import SobreCasa from '../components/SobreCasa'
import CasasSection from '../components/CasasSection'
import DiferenciaisSection from '../components/DiferenciaisSection'
import ComoFunciona from '../components/ComoFunciona'
import ClassificadosPreview from '../components/ClassificadosPreview'
import Footer from '../components/Footer'
import PromoPopup from '../components/PromoPopup'

export default function Home() {
  return (
    <>
      <Header />
      <MarqueeBanner />
      <main>
        <HeroCasa />
        <SobreCasa />
        <CasasSection />
        <DiferenciaisSection />
        <ComoFunciona />
        <ClassificadosPreview />
      </main>
      <Footer />
      <PromoPopup />
    </>
  )
}
