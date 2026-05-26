import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#f7faf7]"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <div className="relative h-28 w-28">
            <motion.div
              className="absolute inset-0 rounded-[2rem] border border-emerald-700/30"
              animate={{ rotate: 360, borderRadius: ['28px', '44px', '28px'] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-5 rounded-2xl bg-gradient-to-br from-white to-emerald-100 shadow-xl shadow-slate-950/10"
              animate={{ scale: [0.82, 1, 0.82] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            />
          </div>
          <span className="mt-8 text-xs uppercase tracking-[0.42em] text-slate-500">
            Packing precision
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
