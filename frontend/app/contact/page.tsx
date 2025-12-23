'use client'

import { useState, useEffect } from 'react'

export default function ContactUs() {
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for contacting us! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
              <a href="#contact" className="hidden md:block text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors">
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
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-amber-600 to-orange-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-white">We're Here to Help</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              We're here to help you take the next step in your child's academic journey. Whether you have questions about admissions, classes, demo sessions, or just want to know more about our teaching methodology — our team is always ready to support you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Address Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-stone-200 hover:border-amber-600 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Our Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                344, Masoodabad Chauraha<br />
                GT Road, Aligarh – 202001<br />
                Uttar Pradesh<br />
                <span className="text-amber-700 font-medium mt-2 block">(Near Makhan Lal Hospital)</span>
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-stone-200 hover:border-amber-600 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Call or WhatsApp</h3>
              <div className="space-y-2">
                <a href="tel:+918923309560" className="block text-amber-700 font-semibold hover:text-amber-800 transition-colors">
                  📞 +91 8923309560
                </a>
                <a href="tel:18008899565" className="block text-amber-700 font-semibold hover:text-amber-800 transition-colors">
                  📞 1800 8899 565
                </a>
                <p className="text-gray-600 text-xs mt-3">
                  Available 10 AM – 7 PM<br />
                  Monday to Saturday
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-stone-200 hover:border-amber-600 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Email Us</h3>
              <a href="mailto:contact@shikshami.in" className="text-amber-700 font-semibold hover:text-amber-800 transition-colors block">
                📬 contact@shikshami.in
              </a>
              <p className="text-gray-600 text-sm mt-3">
                We typically respond within 24 hours
              </p>
            </div>

            {/* Office Hours Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-stone-200 hover:border-amber-600 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Office Hours</h3>
              <div className="text-gray-600 text-sm space-y-2">
                <p className="font-semibold text-gray-900">Monday to Saturday</p>
                <p>🕘 10:00 AM – 07:00 PM</p>
                <p className="font-semibold text-gray-900 mt-3">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-stone-200 p-8 lg:p-10">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-amber-600 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-amber-600 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-amber-600 focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-amber-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Inquiry</option>
                    <option value="demo">Book a Demo Class</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="curriculum">Curriculum Details</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-amber-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-amber-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-amber-700 hover:shadow-xl transition-all transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Free Demo Class */}
              <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl shadow-lg p-8 text-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Book a Free Demo Class</h3>
                    <p className="text-amber-100">
                      Want to experience our teaching before enrolling? Register for a FREE demo class (online or offline)!
                    </p>
                  </div>
                </div>
                <button className="w-full px-6 py-4 bg-white text-amber-700 font-bold rounded-lg hover:bg-amber-50 transition-all shadow-lg">
                  Register for Free Demo →
                </button>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-stone-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us on Map</h3>
                <div className="aspect-video bg-stone-100 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2907839862767!2d78.07!3d27.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUzJzI0LjAiTiA3OMKwMDQnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-stone-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us on Social Media</h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with class highlights, student success stories, and our latest events
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            <details className="bg-stone-50 rounded-lg border-2 border-stone-200 p-6 cursor-pointer hover:border-amber-600 transition-all">
              <summary className="font-bold text-gray-900 text-lg">What are your class timings?</summary>
              <p className="text-gray-600 mt-4">We offer flexible timing options for both online and offline classes. Our live classes are typically conducted in the evening (5:00 PM - 8:00 PM) to accommodate school schedules. Weekend batches are also available.</p>
            </details>

            <details className="bg-stone-50 rounded-lg border-2 border-stone-200 p-6 cursor-pointer hover:border-amber-600 transition-all">
              <summary className="font-bold text-gray-900 text-lg">How can I book a demo class?</summary>
              <p className="text-gray-600 mt-4">You can book a free demo class by calling us at +91 8923309560 or 1800 8899 565, or by filling out the contact form above. You can also visit our center during office hours.</p>
            </details>

            <details className="bg-stone-50 rounded-lg border-2 border-stone-200 p-6 cursor-pointer hover:border-amber-600 transition-all">
              <summary className="font-bold text-gray-900 text-lg">Do you offer online classes?</summary>
              <p className="text-gray-600 mt-4">Yes! We offer both online and offline classes. Our online classes feature live interaction, recorded sessions, and comprehensive study materials accessible anytime.</p>
            </details>

            <details className="bg-stone-50 rounded-lg border-2 border-stone-200 p-6 cursor-pointer hover:border-amber-600 transition-all">
              <summary className="font-bold text-gray-900 text-lg">What is your refund policy?</summary>
              <p className="text-gray-600 mt-4">We offer a satisfaction guarantee. If you're not completely satisfied within the first 7 days, we'll provide a full refund. Please contact us for more details on our refund policy.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
            Join over 12,500 successful students. Limited seats available for the 2025 batch.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-10 py-5 bg-white text-amber-700 rounded font-bold text-lg shadow-2xl hover:bg-amber-50 transition-all">
              Enroll Now
            </button>
            <a href="tel:+918923309560" className="px-10 py-5 bg-transparent text-white rounded font-bold text-lg border-2 border-white hover:bg-white/10 transition-all">
              Call Us Now
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
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Mentors</a></li>
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

        details summary {
          list-style: none;
        }
        
        details summary::-webkit-details-marker {
          display: none;
        }
        
        details summary::after {
          content: '+';
          float: right;
          font-size: 1.5rem;
          font-weight: bold;
          color: #d97706;
        }
        
        details[open] summary::after {
          content: '−';
        }
      `}</style>
    </div>
  )
}