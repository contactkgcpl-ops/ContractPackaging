import {
  BadgeCheck,
  Boxes,
  Factory,
  Gauge,
  PackageCheck,
  Pill,
  ShieldCheck,
  Timer,
  Truck,
} from 'lucide-react'
import jar from '../assets/packing/jar.jpg'
import pouch from '../assets/packing/pouch.jpg'
import bottle from '../assets/packing/bottle.jpg'
import sachet from '../assets/packing/sachet.jpg'
import carton from '../assets/packing/carton.jpg'
import stick from '../assets/packing/stick.jpg'
import blister from '../assets/packing/blist.jpg'
import vacuum from '../assets/packing/vacuum.jpg'

export const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Packaging', href: '/#packaging' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Workflow', href: '/#workflow' },
  { label: 'Projects', href: '/projects', route: true },
  { label: 'Contact', href: '/#contact' },
]

export const packagingTypes = [
  {
    title: 'Jar Packaging',
    copy: 'Filling, capping, labeling and batch coding for powders, granules, gummies, spices and supplements.',
    image: jar,
  },
  {
    title: 'Pouch Packaging',
    copy: 'Stand-up and flat pouch runs with sealing, date coding, retail labels and carton-ready finish.',
    image: pouch,
  },
  {
    title: 'Bottle Packaging',
    copy: 'Bottle filling, capping, shrink sleeving and labeling for food, beverage, nutraceutical and OTC-style SKUs.',
    image: bottle,
  },
  {
    title: 'Sachet Packaging',
    copy: 'Single-serve sachets and trial packs for powders, liquids, condiments, samples and wellness products.',
    image: sachet,
  },
  {
    title: 'Blister Packaging',
    copy: 'Blister and carded formats for tablets, capsules, kits and pharma-style retail presentation.',
    image: blister,
  },
  {
    title: 'Carton Packaging',
    copy: 'Cartoning, inserts, sleeves, bundling, relabeling and display packing for shelf-ready dispatch.',
    image: carton,
  },
  {
    title: 'Stick Pack Packaging',
    copy: 'Slim stick packs for drink mixes, coffee, nutraceutical powders and portable single-dose products.',
    image: stick,
  },
  {
    title: 'Vacuum Packaging',
    copy: 'Freshness-focused vacuum packs for food products that need clean handling and stronger transit protection.',
    image: vacuum,
  },
]

export const industries = [
  'Food Brands',
  'Beverages',
  'Spices & Dry Blends',
  'Nutraceuticals',
  'OTC / Pharma',
  'Cosmetics',
  'FMCG',
  'Private Label',
  'Export Packs',
]

export const workflowSteps = [
  {
    eyebrow: '01 / Intake',
    title: 'Share your brief',
    copy: 'Send product type, pack format, volume, label needs and launch date. We map the cleanest packaging route.',
    metric: '48h',
    label: 'planning window',
  },
  {
    eyebrow: '02 / Source',
    title: 'Prepare materials',
    copy: 'Bulk product, jars, bottles, pouches, cartons, labels and inserts are aligned before production starts.',
    metric: '1',
    label: 'clear checklist',
  },
  {
    eyebrow: '03 / Fill',
    title: 'Fill and seal',
    copy: 'Powders, liquids, granules, capsules and pastes move through the right filling and sealing process.',
    metric: '100%',
    label: 'format matched',
  },
  {
    eyebrow: '04 / Brand',
    title: 'Label and code',
    copy: 'Labels, sleeves, batch codes, cartons and inserts are applied so every pack looks retail-ready.',
    metric: '8+',
    label: 'pack formats',
  },
  {
    eyebrow: '05 / Verify',
    title: 'Check every run',
    copy: 'Weight, count, seal, code, label placement and final finish are checked before release.',
    metric: '12x',
    label: 'QC touchpoints',
  },
  {
    eyebrow: '06 / Move',
    title: 'Dispatch',
    copy: 'Finished goods are cartonized, bundled, packed for transport and released for market movement.',
    metric: '6',
    label: 'steps to shelf',
  },
]

export const features = [
  { title: 'Quality-Led Process', value: 100, suffix: '%', icon: ShieldCheck },
  { title: 'Fast Project Mapping', value: 48, suffix: 'h', icon: Timer },
  { title: 'Packaging Formats', value: 8, suffix: '+', icon: Boxes },
  { title: 'Pilot to Scale Runs', value: 250, suffix: 'K', icon: Gauge },
  { title: 'Production Checkpoints', value: 12, suffix: 'x', icon: BadgeCheck },
  { title: 'Line Support Options', value: 18, suffix: '+', icon: Factory },
]

export const machinery = [
  {
    title: 'Filling and Sealing Lines',
    copy: 'Format-matched filling, sealing, capping and check-weighing for jars, bottles, sachets and pouches.',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=85',
    icon: PackageCheck,
  },
  {
    title: 'Pharma-Style Pack Handling',
    copy: 'Blister, counting, coding, cartoning and kitting support for OTC, wellness and pharma-style products.',
    image:
      'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1400&q=85',
    icon: Pill,
  },
  {
    title: 'Secondary Pack and Dispatch',
    copy: 'Cartons, inserts, relabeling, bundling and outbound checks help finished goods leave clean and predictable.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85',
    icon: Truck,
  },
]

export const testimonials = [
  {
    quote:
      'Salvin helped us turn loose product and labels into clean retail packs without slowing our launch.',
    name: 'Founder, Food Brand',
  },
  {
    quote:
      'Their team understood our bottle, label and carton flow quickly. Sampling to dispatch felt organized.',
    name: 'Operations Lead, Wellness Brand',
  },
  {
    quote:
      'Good fit for growing SKU counts. We could discuss pouches, jars and cartons with one team.',
    name: 'Supply Chain Head, Beverage Company',
  },
  {
    quote:
      'The final packs looked market-ready, with batch coding, labels and cartons handled in one flow.',
    name: 'Brand Manager, Nutraceuticals',
  },
]

export const strategyNotes = [
  'Folder structure: `src/components`, `src/data`, `src/hooks`, global Tailwind CSS in `src/index.css`.',
  'Packages: React + Vite, Tailwind CSS Vite plugin, Framer Motion, GSAP ScrollTrigger, Lenis, lucide-react.',
  'GSAP owns scroll-linked timelines, sticky workflow pinning, parallax, counters and horizontal marquee motion.',
  'Framer Motion owns mount reveals, hover tilt, loading screen, magnetic buttons and viewport entry transitions.',
  'SEO uses semantic sections, one H1, descriptive title/meta tags, readable CTA copy and image alt text.',
  'Performance: GPU transforms, lazy images, reduced-motion handling, small data arrays and cleanup for timelines.',
]
