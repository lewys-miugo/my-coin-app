// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">DEKT Platform</h2>
          <p className="text-sm mb-4">
            Empowering you to manage, grow, and diversify your digital asset portfolio
            with cutting‑edge blockchain technology.
          </p>
          <p className="text-sm text-gray-400">© 2025 DEKT Platform. All rights reserved.</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#platform" className="hover:text-blue-400">Platform</a></li>
            <li><a href="#pricing" className="hover:text-blue-400">Pricing</a></li>
            <li><a href="#blog" className="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
            <li><a href="#support" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter for the latest updates.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-full text-gray-900"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        Built with for the crypto community.
      </div>
    </footer>
  );
}
