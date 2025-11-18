import { Scale } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="pt-12 pb-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              <Scale className="h-5 w-5" />
            </span>
            <div className="leading-tight">
              <div className="font-semibold text-white">lexify.cloud</div>
              <div className="text-xs text-blue-200/70">© {new Date().getFullYear()} All rights reserved</div>
            </div>
          </div>
          <div className="text-sm text-blue-200/70">Made for modern law firms</div>
        </div>
      </div>
    </footer>
  )
}
