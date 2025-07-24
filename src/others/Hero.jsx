import React from 'react'

function Hero (){
  return (
    <div>
        <section
        id="home"
        className="bg-gradient-to-br from-white to-blue-50 py-20 px-6 md:px-12 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900">
          Crypto Investment Platform
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
          Unlock the power of digital assets with a secure, user-friendly platform.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none"
          />
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all">
            Get Started
          </button>
        </form>
      </section>

    </div>
  )
}

export default Hero