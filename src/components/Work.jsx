import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Fintech Mobile App',
    desc: 'A human-centered money app with bold typography and playful micro‑interactions.',
    tags: ['UX', 'UI', 'Prototype'],
    img: 'https://images.unsplash.com/photo-1551281044-8c5f6c4d0d98?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'AI Dashboard',
    desc: 'Data‑dense interface for monitoring models with real‑time insights and alerts.',
    tags: ['Design System', 'Interaction'],
    img: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'E‑commerce Revamp',
    desc: 'Conversion‑focused storefront with accessible components and clear flows.',
    tags: ['Research', 'UI', 'A/B'],
    img: 'https://images.unsplash.com/photo-1522071901873-3b1a1cd1a0f4?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_70%_20%,rgba(56,189,248,0.12),transparent),radial-gradient(400px_140px_at_20%_60%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected work</h2>
          <a href="#" className="text-slate-300 hover:text-white text-sm">View all →</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-slate-300/80 text-sm mt-1">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md bg-white/10 text-slate-200 text-xs px-2 py-1 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
