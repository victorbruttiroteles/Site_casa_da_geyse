import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ClassificadosPage from './pages/ClassificadosPage'
import ProfilePage from './pages/ProfilePage'
import RegrasPage from './pages/RegrasPage'
import WhatsAppButton from './components/WhatsAppButton'
import AgeGate from './components/AgeGate'

export default function App() {
  return (
    <BrowserRouter>
      <AgeGate />
      <Routes>
        <Route path="/"                 element={<Home />} />
        <Route path="/classificados"    element={<ClassificadosPage />} />
        <Route path="/acompanhante/:id" element={<ProfilePage />} />
        <Route path="/acompanhantes"    element={<ClassificadosPage />} />
        <Route path="/regras"           element={<RegrasPage />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  )
}
