import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Articles from './components/Articles'
import Gallery from './components/Gallery'
import UpcomingEvents from './components/UpcomingEvents'

import AdminDashboard from './components/AdminDashboard'
import AdminLogin from './components/AdminLogin'

import ArticleDetailPage from './pages/ArticleDetailPage'
import { Toaster } from 'react-hot-toast'

/* ================= HOME PAGE LAYOUT ================= */
const HomeLayout = ({ theme, onAdminClick }) => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Gallery />
      <UpcomingEvents />
      <Articles />
      <ContactUs />
      <Footer theme={theme} onAdminClick={onAdminClick} />
    </>
  )
}

/* ================= APP ================= */
const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  )

  const [isAdmin, setIsAdmin] = useState(false)
  const [showAdminLogin, setShowAdminLogin] = useState(false)

  /* Custom Cursor */
  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // This function opens admin login
  const handleAdminClick = () => setShowAdminLogin(true)

  return (
    <BrowserRouter>
      <div className="dark:bg-black relative">
        <Toaster />

        <Navbar
          theme={theme}
          setTheme={setTheme}
          onAdminClick={handleAdminClick}
        />

        {/* ================= ADMIN OR SITE ================= */}
        {showAdminLogin ? (
          isAdmin ? (
            <AdminDashboard
              onLogout={() => {
                setIsAdmin(false)
                setShowAdminLogin(false)
              }}
            />
          ) : (
            <AdminLogin onLogin={setIsAdmin} />
          )
        ) : (
          <Routes>
            <Route
              path="/"
              element={<HomeLayout theme={theme} onAdminClick={handleAdminClick} />}
            />
            <Route path="/articles/:slug" element={<ArticleDetailPage />} />
          </Routes>
        )}

        {/* ================= CUSTOM CURSOR ================= */}
        <div
          ref={outlineRef}
          className="fixed top-0 left-0 h-10 w-10 rounded-full
          border border-primary pointer-events-none z-[9999]"
          style={{ transition: 'transform 0.1s ease-out' }}
        />

        <div
          ref={dotRef}
          className="fixed top-0 left-0 h-3 w-3 rounded-full
          bg-primary pointer-events-none z-[9999]"
        />
      </div>
    </BrowserRouter>
  )
}

export default App
