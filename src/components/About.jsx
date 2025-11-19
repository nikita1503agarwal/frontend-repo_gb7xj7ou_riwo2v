import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">Designing with clarity and character</h2>
            <p className="mt-4 text-slate-300/90">
              I blend research, systems thinking, and playful motion to make complex products feel simple. I’ve collaborated with startups and enterprises across fintech, AI, and commerce.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300/90">
              <li>• 6+ years in product design</li>
              <li>• Obsessed with micro‑interactions</li>
              <li>• Comfortable from discovery to dev handoff</li>
            </ul>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-400/10 to-cyan-300/10 p-1">
              <div className="h-full w-full rounded-[22px] bg-slate-900/60 grid place-items-center">
                <div className="h-40 w-40 rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#a78bfa33_0deg,#22d3ee33_120deg,#60a5fa33_240deg,#a78bfa33_360deg)] border border-white/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
