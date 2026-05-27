import { motion } from 'framer-motion'
import { Factory, Mail, MapPin, Phone, Sparkles } from 'lucide-react'
import {
  features,
  industries,
  machinery,
  packagingTypes,
  strategyNotes,
  testimonials,
  workflowSteps,
} from '../data/siteData'
import { MagneticButton } from './MagneticButton'
import pouchImg from '../assets/pack/pouch.png'
import stdPouchImg from '../assets/pack/stdpouch.png'
import bottleImg from '../assets/pack/bottle.png'
import jarImg from '../assets/pack/jar.png'
import boxImg from '../assets/pack/box.png'
import sachetImg from '../assets/pack/sachet.png'
import blisterImg from '../assets/pack/blist.png'
import tubeImg from '../assets/pack/tube.png'
import canisterImg from '../assets/pack/canister.png'
import trayImg from '../assets/pack/tray.png'
import shrinkWrapImg from '../assets/pack/minbottle.png'
import pack from '../assets/wedo/pack1.png'
import dispatch from '../assets/wedo/dispatch.jpg'

const reveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.75, ease: [0.2, 0.8, 0.2, 1] },
}

const packagingShowcase = [
  {
    title: 'Pouch',
    image: pouchImg,
  },
  {
    title: 'Stand-up Pouch',
    image: stdPouchImg,
  },
  {
    title: 'Bottle',
    image: bottleImg,
  },
  {
    title: 'Jar',
    image: jarImg,
  },
  {
    title: 'Box',
    image: boxImg,
  },
  {
    title: 'Sachet',
    image: sachetImg,
  },
  {
    title: 'Blister Pack',
    image: blisterImg,
  },
  {
    title: 'Tube',
    image: tubeImg,
  },
  {
    title: 'Canister',
    image: canisterImg,
  },
  {
    title: 'Tray',
    image: trayImg,
  },
  {
    title: 'Shrink Wrap',
    image: shrinkWrapImg,
  },
]

export function SectionHeader({ kicker, title, copy }) {
  return (
    <motion.div className="mx-auto max-w-3xl text-center" {...reveal}>
      <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-emerald-700">{kicker}</p>
      <h2 className="text-[clamp(1rem,2.5vw,3.5rem)] font-black leading-[0.98] text-slate-950">{title}</h2>
      {copy && <p className="mt-6 text-base leading-7 text-slate-600">{copy}</p>}
    </motion.div>
  )
}

function PackagingTypeScroller() {
  const row = [...packagingShowcase, ...packagingShowcase]

  return (
    <div className="mb-16 overflow-hidden rounded-[8px] border border-slate-950/10 bg-white px-3 py-10 shadow-xl shadow-slate-950/5 sm:px-0">
      <div className="text-center">
        <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-emerald-700">Manufacturing formats</p>
        <h2 className="inline-block border-b-2 border-emerald-700 pb-2 text-2xl font-black tracking-wide text-slate-950 sm:text-3xl">
          Packaging Types We Handle
        </h2>
      </div>
      <div className="packaging-type-track mt-9 flex w-max gap-5">
        {row.map((item, index) => (
          <article key={`${item.title}-${index}`} className="w-44 shrink-0 text-center">
            <div className="overflow-hidden rounded-[8px] border border-slate-950/10 bg-slate-50 p-2 shadow-lg shadow-slate-950/5">
              <img src={item.image} alt={item.title} loading="lazy" className="h-36 w-full rounded-[6px] object-contain" />
            </div>
            <h3 className="mt-4 text-base font-black leading-6 text-slate-950">{item.title}</h3>
          </article>
        ))}
      </div>
    </div>
  )
}

export function AboutSection() {
  const timeline = [
    {
      title: 'Scope',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Source',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Manufacture',
      image: '/packaging2.png',
    },
    {
      title: 'Pack',
      image: pack,
    },
    {
      title: 'Dispatch',
      image: dispatch,
    },
  ]
  return (
    <section id="about" className="relative overflow-hidden bg-[#eef4ef]">
      <img src="/packaging2.png" alt="" className="section-bg-img absolute inset-0 h-[120%] w-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-white/52" />
      <div className="section-shell relative z-10">
        <SectionHeader
          kicker="What we do"
          title="One packaging partner from product intake to market dispatch."
          copy="Salvin supports food, beverage, nutraceutical, OTC-style pharma, cosmetics and FMCG brands with filling, sealing, labeling, kitting, carton packing and dispatch support. Your team gets fewer vendors, cleaner coordination and packs customers can trust."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-5">
        {timeline.map((item, index) => (
          <motion.div
            key={item.title}
            className="timeline-card relative overflow-hidden rounded-[8px] border border-slate-950/10 bg-white p-3 shadow-xl shadow-slate-950/5 backdrop-blur-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <img src={item.image} alt={`${item.title} process`} loading="lazy" className="h-28 w-full rounded-[6px] object-cover" />
            <span className="mt-4 block text-sm text-emerald-700">0{index + 1}</span>
            <h3 className="mt-2 text-xl font-black text-slate-950">{item.title}</h3>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}

export function PackagingSection() {
  return (
    <section id="packaging" className="section-shell bg-[#f7faf7]">
      <PackagingTypeScroller />
      <SectionHeader
        kicker="Packaging formats"
        title="Choose the pack your customer already understands."
        copy="Launch in jars, pouches, bottles, sachets, stick packs, blisters, cartons or vacuum packs. We help match product type, serving size, label needs and retail channel to the right format."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {packagingTypes.map((item, index) => (
          <motion.article
            key={item.title}
            className="pack-card group"
            initial={{ opacity: 0, y: 45, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: index * 0.04 }}
          >
            <div className="overflow-hidden rounded-[8px]">
              <img src={item.image} alt={item.title} loading="lazy" className="h-56 w-full object-cover transition duration-700 group-hover:scale-110" />
            </div>
            <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export function IndustriesSection() {
  const row = [...industries, ...industries]
  return (
    <section id="industries" className="relative overflow-hidden bg-[#f4f7f5] py-16 text-slate-950 md:py-20">
      <img
        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85"
        alt=""
        className="section-bg-img absolute inset-0 h-[120%] w-full object-cover opacity-[0.18]"
      />
      <div className="absolute inset-0 bg-[#f4f7f5]/84" />
      <div className="relative z-10 mx-auto w-[min(1120px,calc(100%-32px))]">
        <motion.div {...reveal} className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-emerald-700">Industries served</p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.96]">
            Built for brands that need clean packs, clear timelines and fewer handoffs.
          </h2>
        </motion.div>
      </div>
      <div className="marquee-track relative z-10 mt-10 flex gap-4">
        {row.map((item, index) => (
          <div key={`${item}-${index}`} className="industry-pill min-w-[230px] rounded-[8px] border border-slate-950/10 bg-white px-6 py-6 text-xl font-black shadow-xl shadow-slate-950/5">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}

export function WorkflowSection() {
  return (
    <section id="workflow" className="workflow-wrap relative bg-[#eef4ef] text-slate-950">
      <div className="workflow-pin section-shell">
        <div className="grid items-center gap-8 md:min-h-[70vh] lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 hidden text-[0.68rem] font-bold uppercase tracking-[0.28em] text-emerald-700 md:block">Packaging workflow</p>
            <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-emerald-700 md:hidden">Simple workflow</p>
            <h2 className="text-[clamp(2rem,4.5vw,4.5rem)] font-black leading-[0.95]">From product brief to finished cartons.</h2>
            <p className="mt-5 hidden max-w-xl text-base leading-7 text-slate-600 md:block">
              A practical six-step flow keeps scope, materials, filling, branding, checks and dispatch visible from day one.
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:hidden">
              Six clear steps, shown one after one for easy mobile reading.
            </p>
          </div>
          <div className="workflow-mobile-list grid gap-3 md:hidden">
            {workflowSteps.map((step, index) => (
              <article key={step.title} className="rounded-[8px] border border-slate-950/10 bg-white p-4 shadow-lg shadow-slate-950/5">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{step.eyebrow}</p>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-sm font-black text-emerald-700">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-black leading-tight text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.copy}</p>
                <div className="mt-5 border-t border-slate-950/10 pt-4">
                  <span className="text-3xl font-black text-emerald-700">{step.metric}</span>
                  <span className="ml-3 align-middle text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{step.label}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="workflow-stage relative hidden overflow-hidden rounded-[8px] border border-slate-950/10 bg-white p-5 shadow-2xl shadow-slate-950/10 backdrop-blur-xl md:block md:min-h-[460px]">
            {workflowSteps.map((step, index) => (
              <article key={step.title} className="workflow-step absolute inset-0 flex flex-col justify-center p-8 opacity-0">
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-emerald-700">{step.eyebrow}</p>
                <h3 className="mt-5 text-[clamp(2rem,6vw,5.4rem)] font-black leading-none">{step.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">{step.copy}</p>
                <div className="mt-7 flex items-end gap-4">
                  <span className="counter text-6xl font-black text-gradient" data-target={step.metric}>{step.metric}</span>
                  <span className="pb-3 text-sm uppercase tracking-[0.22em] text-slate-500">{step.label}</span>
                </div>
                <div className="absolute right-8 top-8 grid h-24 w-24 place-items-center rounded-full border border-slate-950/10 bg-emerald-50 text-2xl font-black text-emerald-700">
                  {index + 1}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhySection() {
  return (
    <section className="section-shell bg-[#f7faf7]">
      <SectionHeader kicker="Why choose us" title="Less coordination work for your brand team." />
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <motion.article key={feature.title} className="feature-card" {...reveal}>
              <Icon className="text-emerald-700" size={30} />
              <strong className="count-up mt-8 block text-5xl font-black text-slate-950" data-value={feature.value} data-suffix={feature.suffix}>
                0{feature.suffix}
              </strong>
              <p className="mt-4 text-lg font-bold text-slate-700">{feature.title}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export function MachinerySection() {
  return (
    <section className="bg-[#eef4ef] py-16 md:py-20">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <SectionHeader kicker="Line capabilities" title="Primary and secondary packaging under one plan." />
        <div className="mt-12 space-y-6">
          {machinery.map((machine) => {
            const Icon = machine.icon
            return (
              <article key={machine.title} className="machine-panel relative min-h-[380px] overflow-hidden rounded-[8px] md:min-h-[460px]">
                <img src={machine.image} alt={machine.title} loading="lazy" className="parallax-img absolute inset-0 h-[120%] w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/35 to-transparent" />
                <div className="relative z-10 flex min-h-[380px] max-w-2xl flex-col justify-end p-5 md:min-h-[460px] md:p-10">
                  <span className="mb-8 grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl">
                    <Icon className="text-cyan-100" />
                  </span>
                  <h3 className="text-[clamp(1.95rem,5vw,4.6rem)] font-black leading-none text-white">{machine.title}</h3>
                  <p className="mt-6 text-base leading-7 text-slate-200 md:text-lg md:leading-8">{machine.copy}</p>
                </div>
                <div className="floating-label absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-xl md:right-6 md:top-6 md:px-5 md:py-3 md:text-sm">
                  Live line telemetry
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  return (
    <section className="overflow-hidden bg-[#f7faf7] py-16 text-slate-950 md:py-20">
      <SectionHeader kicker="Customer fit" title="Made for teams launching or scaling SKUs." />
      <div className="testimonial-track mt-10 flex gap-4">
        {[...testimonials, ...testimonials].map((item, index) => (
          <blockquote key={`${item.name}-${index}`} className="min-w-[280px] rounded-[8px] border border-slate-950/10 bg-white p-5 shadow-xl shadow-slate-950/5 backdrop-blur-xl sm:min-w-[340px] md:min-w-[460px] md:p-7">
            <Sparkles className="mb-8 text-emerald-700" />
            <p className="text-base leading-7 text-slate-700 md:text-lg md:leading-8">"{item.quote}"</p>
            <footer className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{item.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="section-shell bg-[#f4f7f5] text-slate-950">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-emerald-700">Contact</p>
          <h2 className="text-[clamp(2rem,5.5vw,5rem)] font-black leading-[0.95]">Tell us what you need packed.</h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            Share product type, expected volume, pack format and launch timing. Salvin maps material needs, line flow and dispatch plan.
          </p>
          <div className="mt-7 space-y-3 text-sm font-semibold">
            <p className="flex items-center gap-3"><Phone size={18} /> +91 9898727796</p>
            <p className="flex items-center gap-3 break-all"><Mail size={18} className="shrink-0" /> hello@salvinpackaging.com</p>
            <p className="flex items-center gap-3"><MapPin size={18} /> Food & Pharma Packaging Facility</p>
          </div>
        </div>
        <form className="rounded-[8px] border border-slate-950/10 bg-white p-5 shadow-2xl shadow-slate-950/10 md:p-8">
          {['Name', 'Email', 'Product type', 'Monthly volume'].map((field) => (
            <label key={field} className="floating-field">
              <input placeholder=" " />
              <span>{field}</span>
            </label>
          ))}
          <label className="floating-field">
            <textarea placeholder=" " rows="5" />
            <span>Pack format, label needs and timeline</span>
          </label>
          <button type="button" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-emerald-700">
            Request packaging plan
          </button>
        </form>
      </div>
      <div className="mt-10 overflow-hidden rounded-[8px] border border-slate-950/10 bg-white p-5 text-slate-950 shadow-xl shadow-slate-950/5">
        <div className="map-grid grid min-h-[280px] place-items-center rounded-[8px] border border-slate-950/10">
          <div className="text-center">
            <Factory className="mx-auto mb-4 text-emerald-700" size={42} />
            <p className="text-2xl font-black">Production flow map</p>
            <p className="mt-2 px-3 text-slate-500">Intake {'->'} filling {'->'} labeling {'->'} quality {'->'} dispatch</p>
          </div>
        </div>
      </div>
      <div className="mt-10 rounded-[8px] bg-slate-950 p-7 text-white md:flex md:items-center md:justify-between">
        <h3 className="max-w-2xl text-2xl font-black md:text-4xl">Need food, wellness or pharma-style packs ready for market?</h3>
        <div className="mt-8 md:mt-0"><MagneticButton>Plan my pack</MagneticButton></div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-grid-unified">
        <div className="footer-brand-col">
          <h3 className="footer-brand-title">SALVIN<br />INDUSTRIES</h3>
          <p className="footer-brand-desc">
            Contract filling, packaging, labeling, kitting and dispatch support for food, wellness, pharma-style and FMCG brands.
          </p>
          <ul className="footer-contact-list">
            <li>
              <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span> info.salvinindustries@gmail.com</span>
            </li>
            <li>

              <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>+91 9898727796</span>
            </li>
            <li>
              <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>210, Arved Transcube Mall,<br />Bandhu Nagar, Vijay Nagar,<br />Ranip, Ahmedabad, Gujarat 382480</span>
            </li>
          </ul>
          <div className="footer-socials">
            <span className="social-icon" >
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </span>
            <span className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </span>
            <span className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z" /></svg>
            </span>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>SERVICES</h4>
          <a href="#packaging">Contract Filling</a>
          <a href="#packaging">Pouch & Sachet Packing</a>
          <a href="#packaging">Bottle & Jar Filling</a>
          <a href="#packaging">Blister & Carton Packing</a>
          <a href="#workflow">Labeling & Batch Coding</a>
          <a href="#contact">Kitting & Dispatch</a>
        </div>

        <div className="footer-links-col">
          <h4>INDUSTRIES</h4>
          <a href="#industries">Food & Spices</a>
          <a href="#industries">Beverages</a>
          <a href="#industries">Nutraceuticals</a>
          <a href="#industries">OTC / Pharma</a>
          <a href="#industries">Cosmetics</a>
          <a href="#industries">Export Packs</a>
        </div>

        <div className="footer-links-col">
          <h4>COMPANY</h4>
          <a href="#about">About Us</a>
          <a href="#workflow">How It Works</a>
          <a href="#packaging">Pack Formats</a>
          <a href="#contact">Contact Us</a>
          <a href="#contact">Request Quote</a>
          <a href="#contact">Visit Facility</a>
        </div>
      </div>

      <div className="footer-bottom-unified">
        <p>© 2026 <span className="highlight-salvin">salvin</span> industries. all rights reserved. | ahmedabad, gujarat, india</p>
        <div className="footer-bottom-links">
          <a href="/contact">Privacy Policy</a>
          <a href="/contact">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

export function StrategySection() {
  return (
    <section className="bg-[#eef4ef] py-20 text-slate-950">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))] rounded-[8px] border border-slate-950/10 bg-white p-8 shadow-xl shadow-slate-950/5">
        <h2 className="text-3xl font-black">Build Notes</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {strategyNotes.map((note) => (
            <p key={note} className="rounded-[8px] bg-slate-100 p-4 text-sm leading-6 text-slate-600">{note}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
