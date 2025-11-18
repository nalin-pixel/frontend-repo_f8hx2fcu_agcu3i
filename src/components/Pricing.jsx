export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-blue-100/80">Choose a plan that scales with your firm. Cancel anytime.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
            <div className="text-sm text-blue-200/80">Solo</div>
            <div className="mt-2 text-4xl font-extrabold text-white">$19<span className="text-base font-semibold text-blue-200/80">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-blue-100/80">
              <li>1 user</li>
              <li>Matters & documents</li>
              <li>Email support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-center text-white">Start</a>
          </div>

          {/* Growth */}
          <div className="rounded-2xl border-2 border-blue-400/40 bg-gradient-to-b from-white/5 to-transparent p-6 shadow-lg shadow-blue-500/10">
            <div className="text-sm text-blue-200/80">Team</div>
            <div className="mt-2 text-4xl font-extrabold text-white">$49<span className="text-base font-semibold text-blue-200/80">/user</span></div>
            <ul className="mt-4 space-y-2 text-sm text-blue-100/80">
              <li>Up to 10 users</li>
              <li>Document automation</li>
              <li>Client portal</li>
              <li>Priority support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-center font-semibold text-white">Start free trial</a>
          </div>

          {/* Enterprise */}
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
            <div className="text-sm text-blue-200/80">Enterprise</div>
            <div className="mt-2 text-4xl font-extrabold text-white">Custom</div>
            <ul className="mt-4 space-y-2 text-sm text-blue-100/80">
              <li>Unlimited users</li>
              <li>SSO & advanced security</li>
              <li>Dedicated CSM</li>
              <li>Data migration</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-center text-white">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
