'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

type CurriculumSubject = 'Mathematics' | 'Science' | 'Social Science' | 'English'

type CurriculumData = {
  [K in CurriculumSubject]: string[]
}

export default function ShikshamiLanding() {
  const [activeTab, setActiveTab] = useState<CurriculumSubject>('Mathematics')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentBgSlide, setCurrentBgSlide] = useState(0)
  const [currentScreenshot, setCurrentScreenshot] = useState(0)

  // Auto-advance testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Auto-advance background carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgSlide((prev) => (prev + 1) % backgroundImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // Auto-advance screenshots
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % appScreenshots.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const subjects: CurriculumSubject[] = ['Mathematics', 'Science', 'Social Science', 'English']

  const backgroundImages = [
    {
      title: 'Interactive Learning',
      description: 'Engaging classroom sessions',
      gradient: 'from-amber-900/80 via-orange-900/70 to-transparent',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop'
    },
    {
      title: 'Expert Guidance',
      description: 'Experienced mentors',
      gradient: 'from-orange-900/80 via-amber-900/70 to-transparent',
      image: '/3ff.png'
    },
    {
      title: 'Success Stories',
      description: 'Proven track record',
      gradient: 'from-amber-800/80 via-orange-800/70 to-transparent',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=800&fit=crop'
    }
  ]

  const appScreenshots = [
    {
      title: 'Organized Library',
      description: 'All subjects and chapters in one place',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop'
    },
    {
      title: 'Live Class Interface',
      description: 'Raise hand & unmute to ask doubts',
      image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&h=800&fit=crop'
    },
    {
      title: 'PDF Resources',
      description: 'High-quality notes, one-click download',
      image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=400&h=800&fit=crop'
    }
  ]

  const curriculumData: CurriculumData = {
    Mathematics: [
      'Real Numbers',
      'Polynomials',
      'Pair of Linear Equations in Two Variables',
      'Quadratic Equations',
      'Arithmetic Progressions',
      'Triangles',
      'Coordinate Geometry',
      'Introduction to Trigonometry',
      'Some Applications of Trigonometry',
      'Circles',
      'Areas Related to Circles',
      'Surface Areas and Volumes',
      'Statistics',
      'Probability'
    ],
    Science: [
      'Chemical Reactions & Equations',
      'Acids Bases & Salts',
      'Metals & Non-Metals',
      'Carbon & its Compounds',
      'Life Processes',
      'Control & Coordination',
      'How do Organisms Reproduce?',
      'Heredity',
      'Light – Reflection & Refraction',
      'The Human Eye & Colourful World',
      'Electricity',
      'Magnetic Effects of Electric Current',
      'Our Environment'
    ],
    'Social Science': [
      'The Rise of Nationalism in Europe',
      'Nationalism in India',
      'The Making of a Global World',
      'The Age of Industrialization',
      'Print Culture',
      'Resources and Development',
      'Forest and Wildlife',
      'Water Resources',
      'Agriculture',
      'Power Sharing',
      'Federalism',
      'Development',
      'Money and Credit'
    ],
    English: [
      'Prose (First Flight)',
      'Poetry & Poetic Devices',
      'Footprints Without Feet',
      'Grammar & Writing Skills',
      'Letter Writing',
      'Analytical Paragraph',
      'Character Sketches',
      'Poetic Devices Analysis'
    ]
  }

  const testimonials = [
    {
      name: 'Priya Sharma',
      score: '96.8%',
      quote: 'The structured approach and daily practice helped me secure 96.8%. The mentors were always available for doubt clearing.',
      school: 'Delhi Public School',
      stars: 5
    },
    {
      name: 'Rahul Verma',
      score: '94.2%',
      quote: 'I was struggling with Mathematics, but the one-shot lectures and PYQs made everything clear. Highly recommended!',
      school: 'Kendriya Vidyalaya',
      stars: 5
    },
    {
      name: 'Ananya Gupta',
      score: '97.4%',
      quote: 'Best investment for board exam preparation. The live classes and study material were top-notch.',
      school: 'St. Xavier\'s School',
      stars: 4.5
    },
    {
      name: 'Arjun Patel',
      score: '92.6%',
      quote: 'Great content and helpful teachers. The recorded sessions were useful for revision. Would have liked more interactive doubt sessions.',
      school: 'Ryan International School',
      stars: 4
    },
    {
      name: 'Sneha Reddy',
      score: '95.8%',
      quote: 'The test series and detailed solutions really boosted my confidence. Chemistry became my strongest subject thanks to the faculty here!',
      school: 'Modern School',
      stars: 4.5
    }
  ]

  const stats = [
    { value: '12,500+', label: 'Students Enrolled' },
    { value: '94.3%', label: 'Average Score' },
    { value: '500+', label: 'Live Classes' },
    { value: '4.9/5', label: 'Student Rating' }
  ]

  const highlights = [
    {
      title: 'Comprehensive Study Material',
      description: 'Curated resources covering entire CBSE syllabus',
      emoji: '📚'
    },
    {
      title: 'Targeted Practice',
      description: '10 years of solved previous year questions',
      emoji: '🎯'
    },
    {
      title: 'Expert Faculty',
      description: 'Learn from teachers with 15+ years experience',
      emoji: '👨‍🏫'
    },
    {
      title: 'Progress Tracking',
      description: 'Regular assessments and personalized feedback',
      emoji: '📈'
    }
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Hero Section with Background Carousel */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {backgroundImages.map((bg, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${currentBgSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={bg.image}
                alt={bg.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${bg.gradient}`}></div>
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-stone-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              {/* Animated Tagline */}
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-amber-200">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-gray-800">Batch 2025 Enrollment Open</span>
                </div>
                <div className="w-px h-4 bg-stone-300"></div>
                <span className="text-sm text-gray-700 font-medium">Limited Seats Available</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] text-white drop-shadow-2xl">
                  Skyrocket Your
                  <span className="block mt-2 text-amber-400">Board Exam Results</span>
                  <span className="block mt-2 text-white">In Just 50 Days</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 leading-relaxed max-w-2xl drop-shadow-lg font-medium">
                  Join India&apos;s most trusted CBSE crash course. Proven methodology.
                  Expert mentors. 12,500+ students scoring 90+ marks.
                </p>
              </div>

              {/* Value Propositions */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: '100% Syllabus Coverage', desc: 'All subjects, all chapters' },
                  { title: 'Daily Live Classes', desc: 'Interactive sessions' },
                  { title: 'Personal Mentorship', desc: 'One-on-one guidance' },
                  { title: '10 Years PYQs', desc: 'Solved with video explanations' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-md">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a href='/signin' className="px-10 py-5 bg-amber-600 text-white font-bold text-lg rounded shadow-2xl hover:bg-amber-700 hover:shadow-amber-600/50 transition-all transform hover:scale-105">
                  Start Free Trial →
                </a>
                <button className="px-10 py-5 bg-white/95 backdrop-blur-sm text-gray-900 font-bold text-lg rounded shadow-xl hover:shadow-2xl border-2 border-amber-200 hover:border-amber-600 transition-all">
                  Download Brochure
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                  <span className="font-bold text-gray-900">2,847 students</span>
                  <span className="text-gray-600"> enrolled this month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Background Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBgSlide(index)}
                className={`h-1.5 rounded-full transition-all ${currentBgSlide === index ? 'bg-white w-12' : 'bg-white/50 w-6'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-amber-700 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-3">Why Students Choose Us</div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Everything You Need to Excel
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-2 border-stone-200 hover:border-amber-600 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-4xl">{item.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - FULL DETAILED VERSION */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-3">Investment Plans</div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Choose Your Learning Package
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent pricing with lifetime access. No hidden charges.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1: PYQ Mastery - Basic */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-stone-200 p-8 hover:border-amber-600 hover:shadow-xl transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">PYQ Mastery</h3>
                <p className="text-gray-600">Basic Package</p>
                <div className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                  ✓ LIFETIME ACCESS
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-amber-600">₹199</span>
                  <span className="text-gray-500 text-sm">one-time payment</span>
                </div>
              </div>
              <button className="w-full py-4 bg-stone-100 text-gray-900 font-semibold rounded hover:bg-amber-600 hover:text-white transition-all mb-8">
                Enroll for ₹199
              </button>

              <div className="space-y-4">
                <div className="font-bold text-gray-900 mb-3">Core Features:</div>

                <div className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="text-gray-900 font-semibold">10 Years Previous Year Questions (PYQs)</span>
                    <p className="text-gray-600 text-xs mt-1">Complete coverage of the last decade</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="text-gray-900 font-semibold">All Question Typologies</span>
                    <p className="text-gray-600 text-xs mt-1">MCQs, Short/Long Answer, Case Study, Assertion-Reason</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="text-gray-900 font-semibold">Dual Format Access</span>
                    <p className="text-gray-600 text-xs mt-1">Downloadable PDFs + Video Solutions for every question</p>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-4 mt-4">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Bonus (Limited Time):</div>
                  <div className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    <div>
                      <span className="text-gray-900">Doubt Sessions</span>
                      <div className="text-xs mt-1">
                        <span className="text-red-600 line-through">₹149</span>
                        <span className="text-green-600 font-bold ml-2">FREE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 2: Concept Capsule - Standard */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-stone-200 p-8 hover:border-amber-600 hover:shadow-xl transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Concept Capsule</h3>
                <p className="text-gray-600">Standard Package</p>
                <div className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                  ✓ LIFETIME ACCESS
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-amber-600">₹399</span>
                  <span className="text-gray-500 text-sm">one-time payment</span>
                </div>
              </div>
              <button className="w-full py-4 bg-stone-100 text-gray-900 font-semibold rounded hover:bg-amber-600 hover:text-white transition-all mb-8">
                Enroll for ₹399
              </button>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm bg-amber-50 p-3 rounded-lg border border-amber-200">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-900 font-semibold">✓ Includes Everything in Package 1</span>
                </div>

                <div className="font-bold text-gray-900 mb-3 mt-4">Plus Additional Features:</div>

                <div className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="text-gray-900 font-semibold">One-Shot &quot;Capsule&quot; Lectures</span>
                    <p className="text-gray-600 text-xs mt-1">Every chapter explained in just 1 hour</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="text-gray-900 font-semibold">High-Quality Recorded Videos</span>
                    <p className="text-gray-600 text-xs mt-1">HD format with crystal clear audio</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="text-gray-900 font-semibold">Quick Concept Clearance</span>
                    <p className="text-gray-600 text-xs mt-1">Ideal for strong foundation building</p>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-4 mt-4">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Bonus (Limited Time):</div>
                  <div className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                    <div>
                      <span className="text-gray-900">Doubt Sessions</span>
                      <div className="text-xs mt-1">
                        <span className="text-red-600 line-through">₹149</span>
                        <span className="text-green-600 font-bold ml-2">FREE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 3: Live Ultimate - Premium (RECOMMENDED) */}
            <div className="relative bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl shadow-2xl p-8 text-white transform lg:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gray-900 rounded-full shadow-lg">
                <span className="text-xs font-bold text-white uppercase tracking-wider">⭐ BEST VALUE</span>
              </div>
              <div className="mb-6 mt-2">
                <h3 className="text-2xl font-bold mb-2">Live Ultimate</h3>
                <p className="text-amber-100">Premium Experience</p>
                <div className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                  ✓ LIFETIME ACCESS
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">₹699</span>
                  <span className="text-amber-100 text-sm">one-time payment</span>
                </div>
              </div>
              <button className="w-full py-4 bg-white text-amber-700 font-semibold rounded hover:bg-amber-50 transition-all mb-8 shadow-lg">
                Get Full Access for ₹699
              </button>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold">✓ Includes Everything in Package 1 & 2</span>
                </div>

                <div className="font-bold mb-3 mt-4">Plus Exclusive Premium Features:</div>

                <div className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">Daily Live Classes</span>
                    <p className="text-amber-100 text-xs mt-1">Interactive live learning with subject experts</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold">2-Way Audio Interaction</span>
                    <p className="text-amber-100 text-xs mt-1">Unmute to ask doubts via Voice Mode during class</p>
                  </div>
                </div>

                <div className="border-t border-white/30 pt-4 mt-4">
                  <div className="text-sm font-bold mb-3">🎁 EXCLUSIVE PREMIUM BONUSES:</div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                      <div>
                        <span className="font-semibold">The &quot;Mega Material&quot; Bundle</span>
                        <div className="text-xs mt-1">
                          <span className="text-white line-through">Worth ₹1499</span>
                          <span className="font-bold ml-2">FREE</span>
                        </div>
                        <p className="text-amber-100 text-xs mt-1">Notes, Flow Charts, Formula Books, Sample Papers, Premium E-Books</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-sm">
                      <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold">Rapid Revision Series</span>
                        <p className="text-amber-100 text-xs mt-1">Free intensive exam-prep before boards</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-sm">
                      <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold">Doubt Sessions</span>
                        <div className="text-xs mt-1">
                          <span className="line-through">₹149</span>
                          <span className="font-bold ml-2">FREE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Money Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-medium">No Hidden Charges</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. Recorded Lecture Trailer (The "Sizzle Reel") */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-3">See How We Teach</div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Experience Our Teaching Quality
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch a sample lecture and see why 12,500+ students trust Shikshami for their board exam preparation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-600">
              <div className="aspect-video bg-gray-900">
                <iframe
                  src="https://drive.google.com/file/d/1Sd746q_9Fhymqd_FdzcvRHd_iGhAiOmP/preview"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                ⏱️ 2-minute demo | 📚 See our complete teaching methodology | 🎯 Clear, concise, and exam-focused
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dashboard & App Screenshots (The "UX Trust" Factor) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-3">Platform Overview</div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Clean Interface. No Ads. Easy Access.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform is designed for students. Simple, fast, and distraction-free learning experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {appScreenshots.map((screenshot, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto" style={{ maxWidth: '280px' }}>
                  {/* Phone Frame */}
                  <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
                    <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">{screenshot.title}</h3>
                <p className="text-gray-600">{screenshot.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-stone-50 rounded-full border-2 border-stone-200">
              <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 20h-5V10h5v10zm0-18H7C5.9 2 5 2.9 5 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              <span className="text-sm font-semibold text-gray-900">Available on Android & Web • One-Click Downloads • Offline Mode</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Teacher Intro Video (The "Vibe Check") */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-3">Meet Your Mentors</div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Learn from Passionate Educators
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our teachers don&apos;t just teach—they inspire. Get to know the faces behind your success.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-stone-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Our Students Love Us</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Friendly & Approachable:</strong> No question is too small</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Simple Hinglish:</strong> Concepts explained in language you understand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Exam-Focused:</strong> Teaching what actually matters for boards</span>
                  </li>
                </ul>
              </div>
              <a href="/faculty" className="block w-full px-8 py-4 bg-amber-600 text-white text-center font-bold text-lg rounded-lg shadow-lg hover:bg-amber-700 transition-all">
                Meet All Our Teachers →
              </a>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-600">
                <div className="aspect-video bg-gray-900">
                  <iframe
                    src="https://drive.google.com/file/d/1uvSnfj7JqSKnBLsQe2IV1AHy1Jm3lpdK/preview"
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Classroom & Teaching Photos (Authenticity) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-3">Life at Shikshami</div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Real Classes. Real Students. Real Results.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re not just a website—we&apos;re a community of learners achieving excellence together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: '/a.jpeg', caption: 'Interactive Live Sessions' },
              { image: '/e.jpeg', caption: 'Doubt Clearing Sessions' },
              { image: '/c.jpeg', caption: 'Focused Learning Environment' },
              { image: '/d.jpeg', caption: 'Modern Teaching Tools' },
              { image: '/b.jpeg', caption: 'Collaborative Learning' },
              { image: '/f.jpeg', caption: 'Success Celebrations' }
            ].map((photo, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <img
                  src={photo.image}
                  alt={photo.caption}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Enhanced Testimonials with Video Section */}
      <section id="testimonials" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-3">Success Stories</div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Real Results from Real Students
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from students who achieved their dream scores with our program
            </p>
          </div>



          {/* Text Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-xl p-8 lg:p-12 border-2 border-stone-200 shadow-lg">
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">{testimonial.name}</h3>
                            <div className="px-3 py-1 bg-amber-600 text-white text-sm font-bold rounded-full">
                              {testimonial.score}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 font-medium">{testimonial.school}</p>
                        </div>
                      </div>
                      <blockquote className="text-xl text-gray-700 leading-relaxed italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="flex gap-1 mt-6">
  {[1, 2, 3, 4, 5].map((star) => (
    <svg 
      key={star} 
      className={`w-5 h-5 ${star <= Math.floor(testimonial.stars) ? 'text-amber-500' : star === Math.ceil(testimonial.stars) && testimonial.stars % 1 !== 0 ? 'text-amber-500' : 'text-gray-300'}`}
      fill="currentColor" 
      viewBox="0 0 20 20"
    >
      {star === Math.ceil(testimonial.stars) && testimonial.stars % 1 !== 0 ? (
        <defs>
          <linearGradient id={`half-${index}-${star}`}>
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="#D1D5DB" />
          </linearGradient>
        </defs>
      ) : null}
      <path 
        fill={star === Math.ceil(testimonial.stars) && testimonial.stars % 1 !== 0 ? `url(#half-${index}-${star})` : 'currentColor'}
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
      />
    </svg>
  ))}
</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-stone-50 transition-colors border-2 border-stone-200"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-stone-50 transition-colors border-2 border-stone-200"
            >
              <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === index ? 'bg-amber-600 w-8' : 'bg-stone-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-3">Complete Coverage</div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              CBSE Class 10 Curriculum 2024-25
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive subject-wise breakdown with structured learning paths
            </p>
          </div>

          {/* Subject Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => setActiveTab(subject)}
                className={`px-6 py-3 font-semibold rounded transition-all ${activeTab === subject
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-stone-100 border-2 border-stone-200'
                  }`}
              >
                {subject}
              </button>
            ))}
          </div>

          {/* Curriculum Grid */}
          <div className="bg-stone-50 rounded-xl shadow-lg border-2 border-stone-200 p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{activeTab} - Chapter Coverage</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {curriculumData[activeTab].map((topic, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white hover:bg-amber-50 rounded-lg transition-all border border-stone-200 hover:border-amber-300 shadow-sm"
                >
                  <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{topic}</div>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Video lectures
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Practice tests
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Begin Your Journey to Excellence
          </h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            Join over 12,500 successful students. Limited seats available for the 2025 batch.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/signin" className="px-10 py-5 bg-white text-amber-700 rounded font-bold text-lg shadow-2xl hover:bg-amber-50 transition-all">
              Enroll Now
            </a>
            <a href="/contact" className="px-10 py-5 bg-transparent text-white rounded font-bold text-lg border-2 border-white hover:bg-white/10 transition-all">
              Schedule Call Back
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');
        
        .font-serif {
          font-family: 'Crimson Pro', serif;
        }
        
        * {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  )
}