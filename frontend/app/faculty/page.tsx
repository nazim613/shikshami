'use client'

import { useState, useEffect } from 'react'

export default function OurMentors() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const facultyData = [
    {
      id: 1,
      name: 'Nazish Sir',
      subject: 'Mathematics',
      experience: '12+ Years',
      vibe: "The final boss of Maths. Nazish Sir has been crushing board phobias for over a decade. He doesn't just teach formulas; he gives you the cheat codes to unlock 95+ without the stress.",
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=faces',
      gradient: 'from-blue-500 to-cyan-500',
      accentColor: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Azhar Sir',
      subject: 'Physics',
      experience: '8+ Years',
      vibe: "Forget dry theory dumps. Azhar sir connects Physics to real life (fr fr). He makes sure your concepts are stronger than your WiFi connection. Numericals? Too easy.",
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces',
      gradient: 'from-purple-500 to-pink-500',
      accentColor: 'bg-purple-500'
    },
    {
      id: 3,
      name: 'Salman Sir',
      subject: 'Chemistry',
      experience: '6+ Years',
      vibe: "The reaction king. He knows balancing equations gives you a headache, so he drops the simplest tricks to fix it. 6 years of making sure you don't blow up your boards score.",
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
      gradient: 'from-green-500 to-emerald-500',
      accentColor: 'bg-green-500'
    },
    {
      id: 4,
      name: 'Kuldeep Sir',
      subject: 'Biology',
      experience: '9+ Years',
      vibe: "Your Bio hack for the boards. Kuldeep sir turns confusing NCERT text into crystal clear visuals. He makes sure 'Life Processes' doesn't drain the life out of you.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
      gradient: 'from-teal-500 to-cyan-500',
      accentColor: 'bg-teal-500'
    },
    {
      id: 5,
      name: 'Shagun Sir',
      subject: 'History & Political Science',
      experience: '6+ Years',
      vibe: "No snooze-fests allowed. Shagun sir teaches History like a gripping Netflix series and Pol Sci like a rap battle. SST is actually interesting now. No cap.",
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces',
      gradient: 'from-orange-500 to-red-500',
      accentColor: 'bg-orange-500'
    },
    {
      id: 6,
      name: 'Huzaifa Sir',
      subject: 'Economics & Geography',
      experience: '4+ Years',
      vibe: "The map master and money-mindset guy. He brings fresh energy to boring Geo chapters and makes Economics actually make sense for the real world. Get ready to score big.",
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces',
      gradient: 'from-amber-500 to-yellow-500',
      accentColor: 'bg-amber-500'
    }
    
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Sophisticated Navbar - Same as Home */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="relative">
               <img src="/logo.png" alt="Shikshami Logo" className="w-15 h-15 object-contain" />
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-gray-900">Shikshami</div>
                <div className="text-xs text-gray-600 tracking-wider">CBSE Board Excellence</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="/" className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">Home</a>
              <a href="/#about" className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">About</a>
              <a href="/#curriculum" className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">Curriculum</a>
              <a href="/#testimonials" className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">Success Stories</a>
              <a href="/faculty" className="text-sm font-medium text-gray-700 hover:text-amber-700 transition-colors">Our Mentors</a>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a href="/contact" className="hidden md:block text-sm font-semibold text-gray-700 hover:text-amber-700 transition-colors">
                Contact
              </a>
              <button className="px-6 py-2.5 bg-amber-600 text-white text-sm font-semibold rounded hover:bg-amber-700 transition-all shadow-md hover:shadow-lg">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-amber-600 to-orange-700 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6 border-2 border-white/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-white">ELITE TEACHING SQUAD</span>
              </div>
              <div className="w-px h-5 bg-white/50"></div>
              <span className="text-sm text-white font-medium">50+ Years Combined Experience</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
              Meet Your
              <span className="block mt-2 text-amber-200">Power-Up Mentors</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Not your average teachers. These are board exam legends who've unlocked the secret formula to make learning actually fun and scoring 90+ look easy.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">8</div>
                <div className="text-sm text-amber-100 font-medium">Expert Mentors</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-amber-100 font-medium">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">12K+</div>
                <div className="text-sm text-amber-100 font-medium">Students Taught</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">94%+</div>
                <div className="text-sm text-amber-100 font-medium">Average Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </section>

      {/* Faculty Grid Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-100 rounded-full mb-4">
              <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <span className="text-sm font-bold text-amber-700 uppercase tracking-wider">The Dream Team</span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Your Secret Weapons for Board Domination
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each mentor brings their own superpower to the classroom. Find your vibe and level up! 🚀
            </p>
          </div>

          {/* Gaming Card Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyData.map((faculty, index) => (
              <div
                key={faculty.id}
                onMouseEnter={() => setHoveredCard(faculty.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 transition-all duration-500 cursor-pointer ${
                  hoveredCard === faculty.id ? 'border-amber-500 shadow-2xl transform scale-105 z-10' : 'border-stone-200'
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Card Header with Gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${faculty.gradient} overflow-hidden`}>
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)',
                    }}></div>
                  </div>

                                    {/* Profile Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <img 
                          src={faculty.image || ''} 
                          alt={faculty.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                    </div>
                  </div>

                  
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Name & Title */}
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
                      {faculty.name}
                    </h3>
                    <div className={`inline-block px-3 py-1  bg-opacity-10 rounded-full mb-2`}>
                      <span className={`text-sm font-bold text-black`}>
                        {faculty.experience}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700">
                      {faculty.subject}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className={`h-1 bg-gradient-to-r ${faculty.gradient} rounded-full mb-4 group-hover:scale-105 transition-transform`}></div>

                  {/* The Vibe */}
                  <div className="text-sm text-gray-600 leading-relaxed">
                    <p className="italic">&ldquo;{faculty.vibe}&rdquo;</p>
                  </div>

                  {/* Stats Bar */}
                  <div className="mt-6 pt-4 border-t border-stone-200">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="font-bold text-gray-700">4.9/5 Rating</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                        <span className="font-semibold"> Students</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${faculty.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-amber-50 rounded-xl border-2 border-amber-200">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span className="text-sm font-bold text-gray-900">
                Ready to learn from the best? 
                <a href="/#pricing" className="text-amber-600 hover:text-amber-700 ml-2 underline">View Our Packages →</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Mentors Rock Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Why Our Mentors Are Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              It's not just about teaching—it's about transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-World Connect</h3>
              <p className="text-gray-600">
                They don't just teach from textbooks. Every concept is linked to real life, making it stick in your brain like WiFi passwords.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vibe & Energy</h3>
              <p className="text-gray-600">
                No boring lectures. Classes are interactive, fun, and actually keep you awake. Think TikTok energy but with education gains.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200">
              <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                12,500+ students scoring 90+. These mentors have the receipts. Your success is their flex.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Ready to Learn from the Best?
          </h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            These mentors are waiting to unlock your potential. Don't miss out on the squad that's changing the game.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/#pricing" className="px-10 py-5 bg-white text-amber-700 rounded-lg font-bold text-lg shadow-2xl hover:bg-amber-50 transition-all transform hover:scale-105">
              View Our Packages
            </a>
            <a href="/contact" className="px-10 py-5 bg-transparent text-white rounded-lg font-bold text-lg border-2 border-white hover:bg-white/10 transition-all">
              Book a Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Same as Home */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-start">
                <img src="/2.png" alt="Shikshami Logo" className="w-48 h-auto object-contain" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/mentors" className="text-gray-400 hover:text-white transition-colors">Our Mentors</a></li>
                <li><a href="/#testimonials" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h4 className="font-bold mb-4">Courses</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#pricing" className="text-gray-400 hover:text-white transition-colors">Class 10 CBSE</a></li>
                <li><a href="/#curriculum" className="text-gray-400 hover:text-white transition-colors">Mathematics</a></li>
                <li><a href="/#curriculum" className="text-gray-400 hover:text-white transition-colors">Science</a></li>
                <li><a href="/#curriculum" className="text-gray-400 hover:text-white transition-colors">Social Science</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="text-gray-400">
                  Aligarh, Uttar Pradesh
                </li>
                <li className="text-gray-400">
                  hello@shikshami.in
                </li>
                <li className="text-gray-400">
                  18008899565 / 8923309560
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Shikshami Educational Services. All rights reserved. | Crafted by IT Solutions Experts</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');
        
        .font-serif {
          font-family: 'Crimson Pro', serif;
        }
        
        * {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}