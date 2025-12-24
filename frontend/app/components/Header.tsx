'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Navbar - Desktop & Mobile - FULL WIDTH */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md'
      }`}>
        <div className="px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Far Left */}
            <a href="/" className="flex items-center gap-4 flex-shrink-0">
              <div className="relative">
                <img src="/logo.png" alt="Shikshami Logo" className="w-15 h-15 object-contain" />
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-gray-900">Shikshami</div>
                <div className="text-xs text-gray-600 tracking-wider">CBSE Board Excellence</div>
              </div>
            </a>
            
            {/* Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              <a href="/" className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">Home</a>
              <a href="/#curriculum" className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">Curriculum</a>
              <a href="/success" className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">Success Stories</a>
              <a href="/faculty" className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">Our Mentors</a>
            </div>

            {/* CTA - Far Right */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <a href="/contact" className="hidden md:block text-sm font-semibold text-gray-700 hover:text-amber-700 transition-colors">
                Contact
              </a>
              <button className="px-6 py-2.5 bg-amber-600 text-white text-sm font-semibold rounded hover:bg-amber-700 transition-all shadow-md hover:shadow-lg">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white border-t-2 border-stone-200 shadow-2xl">
        <div className="grid grid-cols-5 h-16">
          {/* Home */}
          <a 
            href="/" 
            className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-amber-600 active:text-amber-600 transition-colors touch-manipulation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-xs font-medium">Home</span>
          </a>

          {/* Curriculum */}
          <a 
            href="/#curriculum" 
            className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-amber-600 active:text-amber-600 transition-colors touch-manipulation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-xs font-medium">Courses</span>
          </a>

          {/* Success Stories */}
          <a 
            href="/success" 
            className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-amber-600 active:text-amber-600 transition-colors touch-manipulation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="text-xs font-medium">Success</span>
          </a>

          {/* Mentors */}
          <a 
            href="/faculty" 
            className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-amber-600 active:text-amber-600 transition-colors touch-manipulation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-xs font-medium">Mentors</span>
          </a>

          {/* Contact */}
          <a 
            href="/contact" 
            className="flex flex-col items-center justify-center gap-1 text-gray-600 hover:text-amber-600 active:text-amber-600 transition-colors touch-manipulation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-medium">Contact</span>
          </a>
        </div>
      </nav>
    </>
  )
}