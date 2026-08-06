import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ReplaceErp from './components/ReplaceErp'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-svh overflow-x-hidden bg-background font-sans text-text">
      <Navbar />
      <main>
        <Hero />
        <ReplaceErp />
        <Services />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
