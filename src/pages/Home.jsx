import { Hero } from '../components/Hero'
import {
  AboutSection,
  ContactSection,
  IndustriesSection,
  PackagingSection,
  TestimonialsSection,
  WhySection,
  WorkflowSection,
} from '../components/Sections'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <PackagingSection />
      <IndustriesSection />
      <WorkflowSection />
      <WhySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
