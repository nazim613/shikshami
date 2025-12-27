export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 pb-24 lg:pb-16">
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
              <li><a href="/#curriculum" className="text-gray-400 hover:text-white transition-colors">English</a></li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">
                344, Masoodabad Chauraha<br />
                GT Road, Aligarh – 202001<br />
                Uttar Pradesh
              </li>
              <li className="text-gray-400">
                contact@shikshami.in
              </li>
              <li className="text-gray-400">
                1800 8899 565 / 8923309560
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 Shikshami Educational Services. All rights reserved. | Crafted by IT Solutions Experts</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/refund" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}