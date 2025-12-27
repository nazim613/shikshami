'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [searchQuery, setSearchQuery] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for contacting us! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const faqData = [
    {
      category: "About the Course & Pricing",
      questions: [
        {
          q: "Is the price really just ₹199? Is there any hidden cost?",
          a: "Yes! The price for Package 1 is exactly ₹199 (One-time payment). There are no monthly fees and no hidden charges. Our mission at Shikshami is to make quality education affordable for every student in India, which is why we keep our margins low and quality high."
        },
        {
          q: "Why is the fee so low compared to other institutes?",
          a: "We believe education shouldn't be a luxury. By using technology, we reach thousands of students at once, allowing us to slash costs. You get the same 'Kota-Level' teachers that charge ₹20,000 offline, but at the cost of a pizza!"
        },
        {
          q: "Is this course valid for CBSE Boards 2026?",
          a: "Absolutely. The entire curriculum is strictly based on the latest NCERT and CBSE Class 10 syllabus. Whether you are from CBSE or a State Board that follows NCERT (like UP Board English Medium), this course is perfect for you."
        }
      ]
    },
    {
      category: "Classes & Doubts",
      questions: [
        {
          q: "What if I miss a Live Class? (Package 3 Users)",
          a: "No tension! All Live Classes are automatically recorded and uploaded to your dashboard within 2 hours. You can watch the recording anytime, anywhere, and as many times as you want."
        },
        {
          q: "How can I ask doubts in the Live Class?",
          a: "This is our best feature! In Package 3, we offer 'Two-Way Audio.' You can simply click the 'Raise Hand' button, unmute your mic, and speak directly to the teacher to ask your doubt—just like in an offline classroom."
        },
        {
          q: "I am weak in Maths. Will I understand?",
          a: "Yes. Our 'Concept Capsule' videos (in Package 2 & 3) are designed specifically for students who need to start from zero. Nazish Sir teaches every concept from the very basics in simple Hinglish."
        }
      ]
    },
    {
      category: "Technical & Access",
      questions: [
        {
          q: "Can I watch the videos on my Laptop/PC?",
          a: "Yes! You can login to our website on your laptop/desktop for a big-screen experience. You can also use our Android App on your mobile. (Note: One account works on one device at a time)."
        },
        {
          q: "Can I download the videos to watch offline?",
          a: "Yes. In the mobile app, you can download video lectures and watch them later without using the internet (Offline Mode). This saves your mobile data!"
        },
        {
          q: "What does 'Lifetime Access' mean?",
          a: "It means once you buy the course, the videos and PDFs are yours until you finish your Class 10th exams. We don't expire your course in 1 month or 6 months."
        }
      ]
    },
    {
      category: "Payments & Packages",
      questions: [
        {
          q: "What is the difference between the ₹199 and ₹699 package?",
          a: "₹199: Only Questions (PYQs) & Solutions. Good for practice.\n₹399: Questions + Chapter Explanations (Recorded). Good for learning.\n₹699 (Best Value): Everything above + Daily Live Classes + Free Study Material (Notes/Books)."
        },
        {
          q: "Can I upgrade from ₹199 to ₹699 later?",
          a: "Yes, you can! You just have to pay the remaining difference amount. Contact our support team, and we will help you upgrade instantly."
        },
        {
          q: "Is the payment safe?",
          a: "100% Safe. We use Razorpay, which is India's most trusted payment gateway. You can pay via UPI (GPay/PhonePe), Paytm, Debit Card, or Net Banking."
        }
      ]
    },
    {
      category: "Parent's Questions",
      questions: [
        {
          q: "My child gets distracted easily. How will you ensure they study?",
          a: "Unlike boring recorded lectures, our Package 3 includes Live Interaction, Polls, and Quizzes. The teacher calls out names and keeps the energy high, ensuring students stay glued to the screen. Plus, the gamified app experience makes learning fun, not a burden."
        }
      ]
    }
  ]

  const filteredFaqs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

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

              {/* Map */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-stone-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us on Map</h3>
                <a 
                  href="https://www.google.com/maps/dir//344+Masoodabad+Chauraha+GT+Road+Aligarh+202001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-video bg-stone-100 rounded-lg overflow-hidden relative group cursor-pointer"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2907839862767!2d78.07!3d27.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUzJzI0LjAiTiA3OMKwMDQnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, pointerEvents: 'none' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-amber-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Get Directions
                    </div>
                  </div>
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl shadow-lg border-2 border-stone-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us on Social Media</h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with class highlights, student success stories, and our latest events
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.instagram.com/shikshami_classes?igsh=amFjZXc0eXFmbmMx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/share/17zQDdRxCK/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                  <a
                    href="https://youtube.com/@shikshamiclasses?si=y8PBo6uBovvjTsIW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube
                  </a>
                  <a
                    href="https://t.me/shikshamiclasses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-3">Got Questions?</div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about Shikshami courses, pricing, and learning experience
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search FAQs... (e.g., 'price', 'live class', 'download')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-xl border-2 border-stone-200 focus:border-amber-600 focus:outline-none transition-colors text-lg"
              />
              <svg className="w-6 h-6 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* FAQ Accordion by Category */}
          <div className="space-y-8">
            {filteredFaqs.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-amber-600 rounded-full"></div>
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const faqId = catIndex * 100 + index
                    return (
                      <div
                        key={index}
                        className="bg-stone-50 rounded-xl border-2 border-stone-200 overflow-hidden hover:border-amber-600 transition-all"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === faqId ? null : faqId)}
                          className="w-full text-left p-6 flex items-start justify-between gap-4"
                        >
                          <span className="font-bold text-gray-900 text-lg pr-4">{faq.q}</span>
                          <div className={`w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 transition-transform ${openFaq === faqId ? 'rotate-45' : ''}`}>
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v12m6-6H6" />
                            </svg>
                          </div>
                        </button>
                        {openFaq === faqId && (
                          <div className="px-6 pb-6">
                            <div className="pt-4 border-t-2 border-stone-200">
                              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{faq.a}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Our friendly team is here to help. Chat with us on WhatsApp or call us directly!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/918923309560"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-amber-700 font-bold text-lg rounded-lg hover:bg-amber-50 transition-all shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat with a Counselor
              </a>
              <a
                href="tel:+918923309560"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-lg border-2 border-white hover:bg-white/30 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
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
            <a href='/signin' className="px-10 py-5 bg-white text-amber-700 rounded font-bold text-lg shadow-2xl hover:bg-amber-50 transition-all">
              Enroll Now
            </a>
            <a href="tel:+918923309560" className="px-10 py-5 bg-transparent text-white rounded font-bold text-lg border-2 border-white hover:bg-white/10 transition-all">
              Call Us Now
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