import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 blur-lg bg-gradient-to-tr from-indigo-400 via-sky-400 to-cyan-300 opacity-40 group-hover:opacity-60 transition" />
            <div className="relative h-9 w-9 rounded-lg bg-slate-800/80 border border-white/10 grid place-items-center">
              <span className="text-white font-bold">J</span>
            </div>
          </div>
          <span className="text-white/90 font-medium tracking-wide">Jordan • UI/UX</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-white text-slate-900 hover:bg-slate-200 transition">
            Resume <ArrowUpRight size={16} />
          </a>
        </nav>

        <button className="md:hidden text-white/80" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block text-slate-200 py-2 border-b border-white/10">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-white text-slate-900">
            Resume <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  )
}
