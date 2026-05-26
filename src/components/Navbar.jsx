import { useEffect, useState } from 'react'
import { Menu, PackageCheck, X } from 'lucide-react'
import { navItems } from '../data/siteData'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`fixed left-1/2 top-3 z-50 w-[min(1120px,calc(100%-24px))] -translate-x-1/2 rounded-[28px] transition-all duration-500 md:top-4 md:rounded-full ${
        scrolled
          ? 'border border-slate-950/10 bg-white/85 shadow-2xl shadow-slate-950/10 backdrop-blur-2xl'
          : 'border border-slate-950/10 bg-white/65 shadow-lg shadow-slate-950/5 backdrop-blur-sm'
      }`}
    >
      <nav className="flex items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white">
            <PackageCheck size={20} />
          </span>
          <span className="truncate text-sm font-bold tracking-wide text-slate-950">Salvin Contract Packaging</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} className="nav-link text-sm text-slate-600 hover:text-slate-950" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 md:inline-flex"
        >
          Start project
        </a>
        <button
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-950/10 bg-white/60 text-slate-950 md:hidden"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <div
        id="mobile-menu"
        className={`grid overflow-hidden px-4 transition-[grid-template-rows,opacity,padding] duration-300 md:hidden ${
          open ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] pb-0 opacity-0'
        }`}
      >
        <div className="min-h-0">
          <div className="grid gap-2 border-t border-slate-950/10 pt-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="rounded-[8px] px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-950/5 hover:text-slate-950"
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              onClick={() => setOpen(false)}
            >
              Start project
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
