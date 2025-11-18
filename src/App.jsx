import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0b1220] to-slate-950 text-emerald-50">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_circle_at_0%_0%,rgba(16,185,129,0.10),transparent_60%),radial-gradient(700px_circle_at_100%_100%,rgba(245,158,11,0.06),transparent_60%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
