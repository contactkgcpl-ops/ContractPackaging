import { motion } from 'framer-motion'
import { Factory, PackageCheck, Store } from 'lucide-react'
import { MagneticButton } from './MagneticButton'
import packaging2 from '../assets/packaging2.png'

const floatingImages = [
  [
    'Pouch packaging',
    'left-[50%] top-[14%] rotate-[-8deg]',
    'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=420&q=80',
  ],
  [
    'Bottle filling',
    'right-[7%] top-[18%] rotate-[7deg]',
    'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=420&q=80',
  ],
  [
    'Blister packs',
    'right-[16%] bottom-[25%] rotate-[-7deg]',
    'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=420&q=80',
  ],
]

const heroCards = [
  ['Private Label Ready', 'From bulk product to branded packs.', PackageCheck],
  ['Food + Pharma Formats', 'Pouches, bottles, jars, blisters and cartons.', Factory],
  ['Retail Dispatch', 'Labeled, coded, packed and ready to move.', Store],
]

export function Hero() {
  return (
    <section id="top" className="hero-section relative min-h-screen overflow-hidden bg-[#ffd520] text-slate-950">
      <img src="/packaging2.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-white/30" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,213,32,.95)_0%,rgba(255,213,32,.78)_44%,rgba(255,213,32,.2)_100%)]" />
      <div className="particles absolute inset-0 opacity-25" />
      <div className="absolute inset-x-0 bottom-0 h-[24%] rounded-t-[52%] bg-[#f7faf7]" />

      {floatingImages.map(([label, position, image], index) => (
        <motion.div
          key={label}
          className={`floating-pack absolute z-10 hidden h-36 w-28 overflow-hidden rounded-[8px] border border-white/70 bg-white/80 p-2 shadow-2xl shadow-slate-950/20 backdrop-blur md:block ${position}`}
          initial={{ opacity: 0, y: 55, scale: 0.78 }}
          animate={{ opacity: 1, y: [0, -18, 0], rotate: [0, index % 2 ? -5 : 5, 0] }}
          transition={{ delay: 0.55 + index * 0.16, duration: 5 + index, repeat: Infinity, repeatType: 'mirror' }}
        >
          <img src={image} alt={label} className="h-full w-full rounded-[6px] object-cover" />
        </motion.div>
      ))}

      <div className="hero-content relative z-10 mx-auto flex min-h-screen w-[min(1180px,calc(100%-24px))] flex-col justify-center gap-8 pb-12 pt-28 sm:w-[min(1180px,calc(100%-32px))] md:pb-36 md:pt-24">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-2xl">
            <motion.p
              className="mb-5 inline-flex max-w-full rounded-full border border-slate-950/10 bg-white/45 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-emerald-800 shadow-lg shadow-slate-950/5 backdrop-blur-xl sm:text-[0.68rem] sm:tracking-[0.28em]"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contract filling + retail-ready packaging
            </motion.p>
            <h5 className="hero-title text-[clamp(1.5rem,2.5vw,2.3rem)] font-black leading-[0.9] tracking-normal">
              <motion.span className="block" initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}>
                Your Contract Manufacturing Partner For Better-for-you 
              </motion.span>
              <motion.span className="block text-gradient" initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}>
                Food Products.
              </motion.span>
            </h5>
            <motion.p
              className="mt-5 max-w-xl text-base leading-7 text-slate-800 md:text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              Send bulk product, packaging components or launch brief. Salvin helps with filling, sealing, labeling, kitting, quality checks and dispatch.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <MagneticButton>Get packaging quote</MagneticButton>
              <MagneticButton variant="ghost" href="#packaging">See pack formats</MagneticButton>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden min-h-[430px] lg:block"
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <img src={packaging2} alt="Packaging machinery and products" className="absolute right-0 top-1/2 h-[390px] w-[620px] -translate-y-1/2 rounded-[8px] object-cover shadow-2xl shadow-slate-950/25" />
          </motion.div>
        </div>

        <motion.div
          className="mx-auto grid w-full gap-4 md:absolute md:inset-x-0 md:bottom-12 md:w-[min(1180px,calc(100%-32px))] md:grid-cols-3"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.65 }}
        >
          {heroCards.map(([title, copy, Icon]) => (
            <article key={title} className="flex items-center gap-4 rounded-[8px] border border-slate-950/10 bg-white/92 p-4 shadow-xl shadow-slate-950/12 backdrop-blur sm:p-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-[8px] bg-emerald-50 text-emerald-700">
                <Icon size={28} />
              </span>
              <div>
                <h2 className="text-base font-black text-slate-950">{title}</h2>
                <p className="mt-1 text-sm text-slate-600">{copy}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
