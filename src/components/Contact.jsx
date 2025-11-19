import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(500px_160px_at_15%_30%,rgba(14,165,233,0.12),transparent),radial-gradient(500px_200px_at_85%_70%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <h3 className="text-2xl font-semibold text-white">Let’s build something great</h3>
          <p className="text-slate-300/80 mt-2">Tell me about your project and timeline. I’ll reply within 24 hours.</p>
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input required className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Your name" />
              <input required type="email" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email" />
            </div>
            <input className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Company / Project" />
            <textarea required rows="5" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Project details" />
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs text-slate-400">By sending, you agree to be contacted.</div>
              <button className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-200 transition">
                {sent ? 'Sent ✅' : 'Send message'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
