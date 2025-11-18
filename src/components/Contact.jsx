import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form)

    try {
      // For now we just simulate a success
      await new Promise(r => setTimeout(r, 800))
      setStatus('success')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Talk to our team</h2>
            <p className="mt-3 text-blue-100/80">Tell us about your firm and we'll tailor a walkthrough of lexify.cloud for your workflow.</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <dl className="grid sm:grid-cols-2 gap-4 text-sm text-blue-100/80">
                <div>
                  <dt className="font-medium text-white/90">Response time</dt>
                  <dd>Under 24 hours</dd>
                </div>
                <div>
                  <dt className="font-medium text-white/90">Support</dt>
                  <dd>Mon–Fri, 8am–6pm</dd>
                </div>
                <div>
                  <dt className="font-medium text-white/90">Data residency</dt>
                  <dd>US & EU options</dd>
                </div>
                <div>
                  <dt className="font-medium text-white/90">Security</dt>
                  <dd>Encryption at rest & in transit</dd>
                </div>
              </dl>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">First name</label>
                <input required name="firstName" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Jane" />
              </div>
              <div>
                <label className="block text-sm text-blue-100/80 mb-1">Last name</label>
                <input required name="lastName" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Doe" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-blue-100/80 mb-1">Work email</label>
                <input required type="email" name="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="jane@firm.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-blue-100/80 mb-1">Firm size</label>
                <select name="size" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40">
                  <option value="1-5">1–5</option>
                  <option value="6-25">6–25</option>
                  <option value="26-100">26–100</option>
                  <option value=">100">100+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-blue-100/80 mb-1">How can we help?</label>
                <textarea name="message" rows={4} className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Share a few details about your needs" />
              </div>
            </div>
            <button disabled={status==='loading'} className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 font-semibold text-white">
              {status === 'loading' ? 'Sending...' : status === 'success' ? 'Thanks—We will be in touch!' : 'Send message'}
            </button>
            {status === 'error' && <p className="mt-2 text-sm text-red-300">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
