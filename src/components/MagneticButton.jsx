import { ArrowUpRight } from 'lucide-react'
import { useMagnetic } from '../hooks/useMagnetic'

export function MagneticButton({ children, variant = 'primary', href = '#contact' }) {
  const { ref: magnetRef, onMouseMove, onMouseLeave } = useMagnetic(0.22)
  const styles =
    variant === 'primary'
      ? 'bg-slate-950 text-white shadow-[0_18px_42px_rgba(15,23,42,.18)] hover:bg-emerald-700'
      : 'border border-slate-950/15 bg-white/70 text-slate-950 shadow-lg shadow-slate-950/5 backdrop-blur-xl hover:border-emerald-700/45'

  return (
    <a
      ref={magnetRef}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`magnetic inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${styles}`}
    >
      {children}
      <ArrowUpRight size={17} />
    </a>
  )
}
