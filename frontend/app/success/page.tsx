'use client'

import { useState, useEffect } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
export default function SuccessStories() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null)
  const [counts, setCounts] = useState({
    students: 0,
    doubts: 0,
    toppers: 0
  })

  // Animate counting numbers
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounts({
        students: Math.floor((5000 / steps) * step),
        doubts: Math.floor((10000 / steps) * step),
        toppers: Math.floor((500 / steps) * step)
      })

      if (step >= steps) {
        setCounts({ students: 5000, doubts: 10000, toppers: 500 })
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  // Auto-advance testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % videoTestimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const toppers = [
    {
      name: 'Aditi Verma',
      score: '98.2%',
      achievement: 'District Topper',
      quote: 'Maths was my nightmare. Nazish Sir made it my favorite subject. The 199/- package is a steal!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      subject: 'Mathematics'
    },
    {
      name: 'Rohan Singh',
      score: '96.5%',
      achievement: 'School Topper',
      quote: 'I only studied from the "Concept Capsules" in the last 2 months. Best revision material ever.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      subject: 'All Subjects'
    },
    {
      name: 'Sneha Gupta',
      score: '95%',
      achievement: 'Science Topper',
      quote: 'The animated videos in Biology helped me memorize diagrams easily. Thank you Shikshami!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      subject: 'Science'
    },
    {
      name: 'Arjun Sharma',
      score: '97.1%',
      achievement: 'State Rank 45',
      quote: 'Daily live classes kept me consistent. The teachers are super friendly and helpful!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      subject: 'All Subjects'
    }
  ]

  const videoTestimonials = [
    {
      title: 'Student Success Story 1',
      videoId: 'YOUR_VIDEO_ID_1',
      thumbnail: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=450&fit=crop'
    },
    {
      title: 'Student Success Story 2',
      videoId: 'YOUR_VIDEO_ID_2',
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=450&fit=crop'
    },
    {
      title: 'Student Success Story 3',
      videoId: 'YOUR_VIDEO_ID_3',
      thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=450&fit=crop'
    }
  ]

  const galleryImages = [
    { url: '/Single-01.png', alt: 'Student Review 1' },
    { url: '/Single-11.png', alt: 'Student Review 11' },
    { url: '/Single-05.png', alt: 'Student Review 5' },
    { url: '/Single-04.png', alt: 'Student Review 4' }
  ]

  const whatsappMessages = [
    { image: '/cha.jpeg' },
    { image: '/cha2.jpeg' },
    { image: '/cha1.jpeg' }
  ]

  return (
    <div className="min-h-screen bg-stone-50">
              <Header />
        
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-amber-600 to-orange-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-bold text-white tracking-wide">The Hall of Fame</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              They Trusted Shikshami.<br />
              <span className="text-amber-200">They Scored 95%+.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
              Join the league of toppers. Your photo could be here next year.
            </p>

            <div className="mt-12 flex flex-wrap gap-4 justify-center">
              <a href="/signin" className="px-10 py-5 bg-white text-amber-700 font-bold text-lg rounded-lg shadow-2xl hover:bg-amber-50 transition-all transform hover:scale-105">
                Start Your Success Story →
              </a>
              <a href="/#pricing" className="px-10 py-5 bg-transparent text-white font-bold text-lg rounded-lg border-2 border-white hover:bg-white/10 transition-all">
                View Packages
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </section>

      {/* Part 1: The Topper's Gallery */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
              <svg className="w-5 h-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-bold text-amber-900 uppercase tracking-wider">Our Champions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              The Topper&apos;s Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real students. Real scores. Real transformations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {toppers.map((topper, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-stone-200 hover:border-amber-600 hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={topper.image} 
                    alt={topper.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 px-4 py-2 bg-white rounded-full shadow-lg">
                    <span className="text-l font-bold text-orange-600">{topper.score}</span>
                  </div>

                 

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{topper.name}</h3>
                    <p className="text-amber-300 text-sm font-semibold">{topper.subject}</p>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-sm leading-relaxed">
                    &ldquo;{topper.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: Reviews Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
              <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-bold text-blue-900 uppercase tracking-wider">Visual Proof</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Reviews Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thousands of happy students and parents sharing their success stories
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl border-2 border-stone-200 hover:border-amber-600 transition-all shadow-md hover:shadow-2xl"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="max-w-5xl max-h-[90vh] overflow-auto">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </section>

      {/* Part 3: The "Unfiltered" WhatsApp Wall */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-4">
              <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="text-sm font-bold text-green-900 uppercase tracking-wider">Real Conversations</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              The &quot;Unfiltered&quot; WhatsApp Wall
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
              Real Chats. Real Results. Zero Filters.
            </p>
            <p className="text-sm text-gray-500">
              Screenshots from actual student and parent conversations
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {whatsappMessages.map((message, index) => (
              <div 
                key={index}
                className="break-inside-avoid bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200 hover:border-green-500 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-stone-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">Shikshami Student</div>
                    <div className="text-xs text-gray-500">WhatsApp Message</div>
                  </div>
                </div>

                <div className="mt-4 rounded-lg overflow-hidden border-2 border-stone-200">
                  <img src={message.image} alt="WhatsApp Screenshot" className="w-full" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border-2 border-green-200 shadow-lg">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold text-gray-900">Verified Real Messages • No Fake Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Part 4: The "Impact Numbers" */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-3">
              Our Impact in Numbers
            </h2>
            <p className="text-amber-100 text-lg">Real results that speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                {counts.students.toLocaleString()}+
              </div>
              <div className="text-amber-100 font-medium text-lg">Students Enrolled</div>
            </div>

           <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                {counts.doubts.toLocaleString()}+
              </div>
              <div className="text-amber-100 font-medium text-lg">Doubts Solved</div>
            </div>

            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                {counts.toppers.toLocaleString()}+
              </div>
              <div className="text-amber-100 font-medium text-lg">90% Scorers</div>
            </div>

            <div className="text-center">
              <div className="text-5xl lg:text-6xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                4.8
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className={`w-8 h-8 ${star === 5 ? 'text-amber-300' : 'text-white'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-amber-100 font-medium text-lg">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 5,000+ students who transformed their board exam results with Shikshami
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/#pricing" className="px-10 py-5 bg-amber-600 text-white rounded-lg font-bold text-lg shadow-2xl hover:bg-amber-700 transition-all transform hover:scale-105">
              View Packages & Enroll
            </a>
            <a href="/contact" className="px-10 py-5 bg-stone-100 text-gray-900 rounded-lg font-bold text-lg border-2 border-stone-200 hover:border-amber-600 transition-all">
              Book Free Demo Class
            </a>
          </div>
        </div>
      </section>
<Footer
        />
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