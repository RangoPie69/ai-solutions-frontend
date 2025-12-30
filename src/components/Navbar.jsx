import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "motion/react"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ theme, setTheme, onAdminClick }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  // Scroll to section if exists
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handles navigation + scrolling
  const handleNavClick = (sectionId) => {
  setSidebarOpen(false)

  if (sectionId === 'top') {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (window.location.pathname !== '/') {
      navigate('/') // navigate home if not already
    }
    return
  }

  if (window.location.pathname !== '/') {
    navigate('/') // go home first
    setTimeout(() => scrollToSection(sectionId), 100) // scroll after render
  } else {
    scrollToSection(sectionId)
  }
}


  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>

      {/* Logo */}
      <Link to="/">
        <img
          src={theme === 'dark' ? assets.logo_dark : assets.logo}
          className='w-32 sm:w-40'
          alt='Logo'
        />
      </Link>

      {/* Sidebar & Links */}
      <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ?
        'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed 
        top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col
        max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 
        transition-all`}>

        <img
          src={assets.close_icon}
          alt="Close"
          className='w-5 absolute right-4 top-4 sm:hidden'
          onClick={() => setSidebarOpen(false)}
        />

        <button onClick={() => handleNavClick('top')} className='sm:hover:border-b'>Home</button>
        <button onClick={() => handleNavClick('services')} className='sm:hover:border-b'>Services</button>
        <button onClick={() => handleNavClick('our-work')} className='sm:hover:border-b'>Our Work</button>
        <button onClick={() => handleNavClick('events')} className='sm:hover:border-b'>Events</button>
        <button onClick={() => handleNavClick('articles')} className='sm:hover:border-b'>Articles</button>
        <button onClick={() => handleNavClick('contact-us')} className='sm:hover:border-b'>Contact Us</button>

      </div>

      {/* Right Controls */}
      <div className='flex items-center gap-2 sm:gap-4'>
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* Mobile Menu Icon */}
        <img
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
          alt="Menu"
          onClick={() => setSidebarOpen(true)}
          className='w-8 sm:hidden'
        />

        {/* Connect Button */}
        <button
          onClick={() => handleNavClick('contact-us')}
          className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'
        >
          Connect <img src={assets.arrow_icon} width={14} alt='' />
        </button>

      </div>
    </motion.div>
  )
}

export default Navbar
