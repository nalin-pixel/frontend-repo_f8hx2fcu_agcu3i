import { ArrowRight, CheckCircle2, Shield, Clock, Scale, Gavel, BookText, FileSignature } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24">
      {/* Animated background accents in lawyer tones (emerald + gold) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl"/>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"/>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-100/90"
            >
              <Shield className="h-3.5 w-3.5" /> GDPR-ready • SOC2-conscious
            </motion.div>
            <motion.h1
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
              className="mt-5 text-4xl/tight md:text-6xl/tight font-extrabold tracking-tight text-white"
            >
              Run your law firm with clarity and speed.
            </motion.h1>
            <motion.p
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
              className="mt-5 text-emerald-100/90 text-lg"
            >
              Lexify.cloud centralizes matters, documents, time tracking, and billing in one secure workspace designed for modern legal teams.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 text-white font-semibold shadow-lg shadow-emerald-600/25">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90">
                Book a demo
              </a>
            </motion.div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
              className="mt-6 grid grid-cols-3 gap-4 text-emerald-100/90 text-sm"
            >
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Matter management</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Document automation</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Time & billing</div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
              className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-emerald-600/15 to-amber-500/10 blur-2xl"
            />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
              className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur p-6"
            >
              {/* Animated icon header for legal theme */}
              <div className="mb-4 flex items-center gap-3 text-emerald-200/90">
                <motion.span initial={{ rotate: -8, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 180, damping: 14 }} className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 border border-emerald-300/20 text-emerald-300">
                  <Scale className="h-5 w-5" />
                </motion.span>
                <motion.span initial={{ rotate: 8, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.05 }} className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400/15 border border-amber-300/20 text-amber-300">
                  <Gavel className="h-5 w-5" />
                </motion.span>
                <motion.span initial={{ rotate: -6, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.1 }} className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 border border-emerald-300/20 text-emerald-300">
                  <BookText className="h-5 w-5" />
                </motion.span>
                <motion.span initial={{ rotate: 6, scale: 0.9 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.15 }} className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400/15 border border-amber-300/20 text-amber-300">
                  <FileSignature className="h-5 w-5" />
                </motion.span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-emerald-100/80">Matters</div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-2 h-24 rounded-lg bg-slate-800/80" />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-emerald-100/80">Documents</div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-2 h-24 rounded-lg bg-slate-800/80" />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-emerald-100/80">Time</div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }} className="mt-2 h-24 rounded-lg bg-slate-800/80" />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-emerald-100/80">Billing</div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-2 h-24 rounded-lg bg-slate-800/80" />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
                className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-sm text-white/90">Next hearing in 3 days</div>
                <Clock className="h-4 w-4 text-emerald-300" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
