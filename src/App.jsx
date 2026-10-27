import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Topbar from './components/Topbar'
import Header from './components/Header'
import { HeroSection } from './components/HeroSection'
import ProofSection from './components/ProofSection'
import About from './components/About'
import ServicesSection from './components/ServicesSection'
import ListingsSection from './components/ListingsSection'
import CTASection from './components/CTASection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topbar />
      <Header />
      <main>
        <HeroSection />
        <ProofSection />
        <About />
        <ServicesSection />
        <ListingsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
