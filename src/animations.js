import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initScrollAnimations() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) return () => {}
  const isMobile = window.matchMedia('(max-width: 767px)').matches

  const ctx = gsap.context(() => {
    gsap.to('.hero-title', {
      scale: 1.18,
      opacity: 0.2,
      filter: 'blur(6px)',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to('.floating-pack', {
      yPercent: -40,
      rotate: '+=18',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to('.marquee-track', {
      xPercent: -45,
      ease: 'none',
      scrollTrigger: {
        trigger: '#industries',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })

    gsap.utils.toArray('.section-bg-img').forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -8, scale: 1.08 },
        {
          yPercent: 8,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: img.closest('section'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    })

    const steps = gsap.utils.toArray('.workflow-step')
    if (steps.length && !isMobile) {
      gsap.set(steps[0], { opacity: 1, y: 0 })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.workflow-wrap',
          start: 'top top',
          end: `+=${steps.length * 520}`,
          scrub: true,
          pin: '.workflow-pin',
        },
      })
      steps.forEach((step, index) => {
        if (index === 0) return
        tl.to(steps[index - 1], { opacity: 0, y: -80, scale: 0.96, duration: 0.45 })
          .fromTo(step, { opacity: 0, y: 90, scale: 1.04 }, { opacity: 1, y: 0, scale: 1, duration: 0.55 }, '<')
      })
    }

    gsap.utils.toArray('.count-up').forEach((el) => {
      const value = Number(el.dataset.value)
      const suffix = el.dataset.suffix || ''
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: value,
          duration: 1.6,
          snap: { innerText: 1 },
          ease: 'power2.out',
          onUpdate: () => {
            el.innerText = `${Math.round(Number(el.innerText))}${suffix}`
          },
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            once: true,
          },
        },
      )
    })

    gsap.utils.toArray('.parallax-img').forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: img.closest('.machine-panel'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    })

    gsap.to('.testimonial-track', {
      xPercent: -50,
      duration: 28,
      ease: 'none',
      repeat: -1,
    })
  })

  ScrollTrigger.refresh()
  return () => ctx.revert()
}
