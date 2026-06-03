import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { initScrollAnimations } from './animations'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Sections'
import { useLenis } from './hooks/useLenis'
import Home from './pages/Home'
import Projects from './pages/Projects'

const App = () => {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  useLenis()

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1150)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (loading) return undefined
    return initScrollAnimations()
  }, [loading, location.pathname])

  useEffect(() => {
    if (loading) return
    window.scrollTo(0, 0)
  }, [loading, location.pathname])

  return (
    <>
      <LoadingScreen loading={loading} />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
