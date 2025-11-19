import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center">
        <motion.div
          className="lg:col-span-7 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Available for freelance • 2025
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Designing intuitive interfaces with playful precision
          </h1>
          <p className="mt-6 text-slate-300/90 max-w-xl">
            I’m Jordan, a product designer crafting delightful digital experiences for startups and forward‑thinking brands.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#work" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-200 transition">View selected work</a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white px-5 py-3 text-sm hover:bg-white/20 transition">Get in touch</a>
          </div>
        </motion.div>

        <motion.ul
          className="lg:col-span-5 grid grid-cols-2 gap-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {[
            'UX Strategy',
            'Product Design',
            'Design Systems',
            'Prototyping',
            'User Research',
            'Motion',
          ].map((chip) => (
            <motion.li
              key={chip}
              className="pointer-events-auto rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 backdrop-blur"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {chip}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
