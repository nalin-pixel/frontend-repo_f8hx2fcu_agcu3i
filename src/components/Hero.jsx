import { ArrowRight, CheckCircle2, Shield, Clock, Scale } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100/80">
              <Shield className="h-3.5 w-3.5" /> GDPR-ready • SOC2-conscious
            </div>
            <h1 className="mt-5 text-4xl/tight md:text-6xl/tight font-extrabold tracking-tight text-white">
              Run your law firm with clarity and speed.
            </h1>
            <p className="mt-5 text-blue-100/80 text-lg">
              Lexify.cloud centralizes matters, documents, time tracking, and billing in one secure workspace designed for modern legal teams.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-white font-semibold shadow-lg shadow-blue-600/25">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90">
                Book a demo
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-blue-100/80 text-sm">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Matter management</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Document automation</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400"/> Time & billing</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-blue-600/20 to-indigo-600/10 blur-2xl" />
            <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-blue-200/70">Matters</div>
                  <div className="mt-2 h-24 rounded-lg bg-slate-800/80" />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-blue-200/70">Documents</div>
                  <div className="mt-2 h-24 rounded-lg bg-slate-800/80" />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-blue-200/70">Time</div>
                  <div className="mt-2 h-24 rounded-lg bg-slate-800/80" />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-blue-200/70">Billing</div>
                  <div className="mt-2 h-24 rounded-lg bg-slate-800/80" />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-white/90">Next hearing in 3 days</div>
                <Clock className="h-4 w-4 text-blue-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
