import { Briefcase, FileText, Timer, DollarSign, ShieldCheck, Users } from 'lucide-react'

const services = [
  { icon: Briefcase, title: 'Matter Management', desc: 'Organize cases, tasks, and deadlines with powerful workflows.' },
  { icon: FileText, title: 'Document Automation', desc: 'Generate contracts and filings with reusable templates.' },
  { icon: Timer, title: 'Time Tracking', desc: 'Track billable hours across matters and teams.' },
  { icon: DollarSign, title: 'Billing & Invoicing', desc: 'Get paid faster with automated invoices and reminders.' },
  { icon: Users, title: 'Client Portal', desc: 'Secure sharing with clients for updates and document exchange.' },
  { icon: ShieldCheck, title: 'Security', desc: 'Encryption, SSO, audit logs, and granular access controls.' },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Everything your practice needs</h2>
          <p className="mt-3 text-blue-100/80">Streamline intake to invoice. Reduce busywork and focus on client outcomes.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-blue-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
