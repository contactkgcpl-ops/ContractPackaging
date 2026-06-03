import { useEffect, useState } from 'react'
import { initScrollAnimations } from './animations'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import {
  AboutSection,
  ContactSection,
  Footer,
  IndustriesSection,
  MachinerySection,
  PackagingSection,
  ProjectsSection,
  TestimonialsSection,
  WhySection,
  WorkflowSection,
} from './components/Sections'
import { useLenis } from './hooks/useLenis'

const App = () => {
  const [loading, setLoading] = useState(true)
  useLenis()

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1150)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (loading) return undefined
    return initScrollAnimations()
  }, [loading])

  return (
    <>
      <LoadingScreen loading={loading} />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <PackagingSection />
        <IndustriesSection />
        <ProjectsSection />
        <WorkflowSection />
        <WhySection />
        <MachinerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
