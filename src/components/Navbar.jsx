import { useState } from 'react'
import { Menu, X, Scale, ShieldCheck, User2, Gavel, BookText } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 px-4 py-3"
        >
          <a href="#" className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
              <Scale className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="font-semibold text-white tracking-tight">lexify.cloud</div>
              <div className="text-[11px] text-emerald-200/80">Law practice OS</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-emerald-100/80 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/5 transition-colors">
              <User2 className="h-4 w-4" />
              Book a demo
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20">
              <ShieldCheck className="h-4 w-4" />
              Start free trial
            </a>
          </div>

          <button className="md:hidden text-white/90" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </motion.div>

        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur px-4 py-3">
            <nav className="flex flex-col">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="px-2 py-2 text-emerald-100/90 hover:text-white" onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a href="#contact" className="rounded-lg border border-white/10 px-3 py-2 text-center text-sm text-white/90">Demo</a>
                <a href="#pricing" className="rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white">Free trial</a>
              </div>
              <div className="mt-3 flex items-center gap-2 text-emerald-300/80">
                <Gavel className="h-4 w-4" />
                <BookText className="h-4 w-4" />
                <span className="text-xs">Built for attorneys and legal ops</span>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}
