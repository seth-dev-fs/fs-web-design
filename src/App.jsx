import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Areas from './pages/Areas'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
