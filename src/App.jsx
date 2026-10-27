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
import PropertySearchSeaction from './components/PropertySearchSection'

function App() {

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
        <PropertySearchSeaction />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
