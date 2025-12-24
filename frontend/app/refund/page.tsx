'use client'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-red-600 to-rose-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/20 backdrop-blur-sm rounded-full mb-8">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold text-white tracking-wide">Legal Information</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Refund & Cancellation Policy
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed font-medium">
              Understanding our terms for digital course purchases
            </p>

            <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/30">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium">Last Updated: December 16, 2025</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </section>

      {/* Organization Info */}
      <section className="py-12 bg-white border-b-2 border-stone-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 text-lg">
              <strong className="text-gray-900">Organization:</strong> Shikshami Classes
            </p>
            <p className="text-gray-500 mt-2">
              A Unit of Shri Manglam Edtech Private Limited
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-2 border-blue-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  Introduction
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    At Shikshami Classes, we are committed to providing high-quality, affordable education to students across India. Our goal is to democratize education by offering premium content—including <strong>recorded video lectures, live classes, PDFs, and test series</strong>—at revolutionary price points <strong className="text-blue-700">(₹199 – ₹699)</strong>.
                  </p>
                  <p>
                    Due to the specific nature of our products (digital goods), the consumption of the content happens <strong>immediately upon purchase</strong>. Unlike physical goods (like a book or a t-shirt), digital content cannot be "returned" once it has been accessed, downloaded, or viewed.
                  </p>
                  <p className="font-semibold text-gray-900">
                    Therefore, this policy outlines the strict terms under which refunds, cancellations, and adjustments are handled. By purchasing any package on the Shikshami Classes platform (Website or Mobile App), you acknowledge and agree to the terms below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          
          {/* Section 2: No Refund Policy */}
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 shadow-lg border-2 border-red-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-red-700">2</span>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  The "No Refund" Policy for Digital Products
                </h2>
                
                <div className="bg-white rounded-lg p-6 mb-6 border-2 border-red-200">
                  <p className="text-lg font-bold text-red-700 mb-2">
                    ⚠️ Important Notice
                  </p>
                  <p className="text-gray-700">
                    Shikshami Classes maintains a <strong className="text-red-700">strict "No Refund" policy</strong> for all its digital course packages (Package 1, Package 2, and Package 3).
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Why do we have this policy?</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Immediate Consumption:</strong>
                      <p className="text-gray-700">Once a purchase is confirmed, the system automatically grants "Lifetime Access" to the course content. The user gains instant ability to view proprietary videos, download PDF notes, and access question banks.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Irreversibility:</strong>
                      <p className="text-gray-700">Digital data, once accessed or downloaded, cannot be recovered or returned. The value of the product is transferred the moment the dashboard is unlocked.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Low-Cost Pricing Model:</strong>
                      <p className="text-gray-700">We operate on extremely low margins (starting at ₹199) to make education accessible. The administrative cost of processing manual refunds, gateway charges, and verification often exceeds the cost of the course itself.</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Scope of No Refund:</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong className="text-gray-900">Change of Mind:</strong> We do not offer refunds if you decide you no longer want the course after purchase.</span>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong className="text-gray-900">Time Constraints:</strong> We do not offer refunds if you claim you "do not have time" to watch the lectures. (Note: Our courses come with Lifetime Access, so you can watch them anytime).</span>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong className="text-gray-900">Device Issues:</strong> It is the student's responsibility to ensure they have a working device (Phone/Laptop) and an active internet connection. Refunds will not be granted for personal technical limitations.</span>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong className="text-gray-900">Subjective Dislike:</strong> We provide ample "Demo Videos," "Trailers," and "Syllabus Breakdowns" on the landing page. Refunds are not provided based on personal preference regarding a teacher's style after the purchase is made.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Exceptions */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-green-700">3</span>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  Exceptions: When is a Refund Possible?
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  While our standard policy is "No Refund," we prioritize honesty and fairness. Refunds are only issued in the following specific technical scenarios:
                </p>

                {/* Exception A */}
                <div className="bg-green-50 rounded-xl p-6 mb-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    A. Double Payment (Duplicate Transaction)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    If a student attempts to pay for a course and, due to a server error or network glitch, the amount is deducted twice (or more) from their bank account for the same course package:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-green-700 font-bold">→</span>
                      <span className="text-gray-700"><strong>Resolution:</strong> The extra amount will be refunded in full.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-700 font-bold">→</span>
                      <span className="text-gray-700"><strong>Process:</strong> The system usually detects this automatically and initiates a refund within 24 hours. If not, the student must email us with screenshots of both transaction IDs.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-700 font-bold">→</span>
                      <span className="text-gray-700"><strong>Timeline:</strong> The money will reflect in the source account within 5 to 7 business days, depending on the bank's processing time.</span>
                    </li>
                  </ul>
                </div>

                {/* Exception B */}
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    B. Payment Success but Course Not Assigned
                  </h3>
                  <p className="text-gray-700 mb-4">
                    In rare cases, a payment may be successful, but the course is not unlocked in the dashboard due to a database timeout.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-green-700 font-bold">→</span>
                      <span className="text-gray-700"><strong>Resolution:</strong> Our technical team will manually verify the payment ID with the gateway (Razorpay/Cashfree). Once verified, the course will be activated immediately.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-700 font-bold">→</span>
                      <span className="text-gray-700"><strong>Refund Option:</strong> If we are unable to provide access to the course within 48 hours of a successful payment, the student has the right to demand a full refund, which will be processed immediately.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Upgrade Policy */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-700">4</span>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  Upgrade and Adjustment Policy
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We understand that students may start with a basic package and later realize they need premium features. We encourage upgrades and will facilitate them without financial loss to the student.
                </p>

                <div className="bg-blue-50 rounded-xl p-6 mb-6 border-2 border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">Example Scenario:</h3>
                  <p className="text-gray-700">
                    A student purchases <strong>Package 1 (₹199)</strong> but later decides they want <strong>Package 3 (₹699)</strong> to access Live Classes.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Policy:</h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">The student does not need to pay the full ₹699 for the new package.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">We will not refund the initial ₹199.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Instead, the student will be provided with a "Balance Payment Link" or a "Coupon Code" to pay only the difference amount (i.e., ₹500).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Upon payment of the difference, their account will be instantly upgraded to Package 3 features.</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-300">
                  <p className="text-gray-700 font-semibold">
                    💡 To request an upgrade, students must contact our support team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Cancellation Policy */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-orange-700">5</span>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  Cancellation Policy (Live Classes & Subscriptions)
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Since our Class 10th Crash Courses are One-Time Payment models (not monthly recurring subscriptions), the concept of "Cancellation" applies differently:
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Course Cancellation:</strong>
                      <p className="text-gray-700">A student cannot "cancel" a course once bought. The access remains valid for a lifetime.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong className="text-gray-900">Live Class Ban (Code of Conduct):</strong>
                      <p className="text-gray-700 mb-2">For Package 3 (Live Classes), Shikshami Classes reserves the right to cancel a student's access to the Live Chat/Voice features if the student is found using abusive language, spamming, or harassing teachers/other students.</p>
                      <p className="text-gray-700"><strong>Effect:</strong> The student will still be able to watch recorded videos (Package 2 features), but their Live privileges will be revoked permanently.</p>
                      <p className="text-gray-700"><strong>Refund Status:</strong> No refund will be provided if access is restricted due to disciplinary violations.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6: Chargebacks */}
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 shadow-lg border-2 border-red-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-red-700">6</span>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  Chargebacks and Disputes
                </h2>
                
                <div className="bg-white rounded-lg p-6 mb-4 border-2 border-red-200">
                  <p className="text-lg font-bold text-red-700 mb-2">
                    ⚠️ Important Warning
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Filing a chargeback (telling your bank that the transaction was fraudulent) when you have legitimately purchased and accessed the course is considered a <strong className="text-red-700">breach of trust and a violation of terms</strong>.
                  </p>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">If a chargeback is filed without contacting our support team first, the student's account will be <strong className="text-red-700">permanently suspended immediately</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Shikshami Classes will submit user logs, access timestamps, and IP address records to the bank/payment gateway to prove that the service was delivered/accessed, contesting the chargeback.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 7: Support Request */}
          <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl p-8 shadow-2xl border-2 border-amber-500 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl font-bold text-white">7</span>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-serif font-bold text-white mb-4">
                  How to Request Support
                </h2>
                
                <p className="text-white/95 mb-6 leading-relaxed">
                  If you face a technical issue (Double Payment or Access Issue), please follow this procedure for the fastest resolution:
                </p>

                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Email Us:
                    </h3>
                    <p className="text-white/90">
                      Send an email to{' '}
                      <a href="mailto:contact@shikshami.in" className="font-bold underline hover:text-amber-200">
                        contact@shikshami.in
                      </a>
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h3 className="font-bold text-white mb-2">Subject Line:</h3>
                    <p className="text-white/90 font-mono bg-white/10 p-2 rounded">
                      Payment Issue - [Your Mobile Number]
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h3 className="font-bold text-white mb-3">Required Details:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-200">•</span>
                        <span className="text-white/90">Registered Mobile Number</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-200">•</span>
                        <span className="text-white/90">Payment ID / Transaction ID (from UPI or Bank SMS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-200">•</span>
                        <span className="text-white/90">Screenshot of the payment deduction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-200">•</span>
                        <span className="text-white/90">Date and Time of transaction</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h3 className="font-bold text-white mb-2">Response Time:</h3>
                    <p className="text-white/90">
                      Our support team typically responds within <strong className="text-amber-200">24 hours</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Legal Disclaimer */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border-2 border-gray-700 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">8</span>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-serif font-bold text-white mb-4">
                  Legal Disclaimer
                </h2>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-200">Shikshami Classes reserves the right to modify or update this Refund Policy at any time without prior notice. The policy in effect at the time of your purchase determines your rights.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-200">All disputes are subject to the exclusive jurisdiction of the courts in <strong className="text-white">Aligarh, Uttar Pradesh</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
            Questions About Our Refund Policy?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our support team is here to help with any concerns or technical issues you may have.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:contact@shikshami.in" className="px-8 py-4 bg-amber-600 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-amber-700 transition-all transform hover:scale-105">
              Contact Support
            </a>
            <a href="/" className="px-8 py-4 bg-stone-100 text-gray-900 rounded-lg font-bold text-lg border-2 border-stone-200 hover:border-amber-600 transition-all">
              Back to Home
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