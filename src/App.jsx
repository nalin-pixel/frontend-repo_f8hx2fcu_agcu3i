import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(37,99,235,0.08),transparent_60%),radial-gradient(600px_circle_at_100%_100%,rgba(99,102,241,0.08),transparent_60%)] pointer-events-none" />
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
