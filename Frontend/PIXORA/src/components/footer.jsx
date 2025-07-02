import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="relative z-50 pt-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 text-white mt-16">
      {/* Wavy SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 rotate-180" style={{height: '60px'}}>
        <svg viewBox="0 0 500 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 C150,60 350,0 500,60 L500,00 L0,0 Z" fill="#fff" fillOpacity="0.08" />
        </svg>
      </div>
      <div className="container mx-auto px-4 pb-8 pt-8 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          {/* About Section */}
          <div className="max-w-md">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">PIXORA</h2>
            <p className="text-purple-100 mb-4">Where your imagination meets AI. Create, explore, and share stunning images generated from your wildest ideas. Let your creativity run free!</p>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/astitvabhate" className="hover:text-pink-300 transition-colors"><FaGithub size={22} /></a>
              <a href="https://www.linkedin.com/in/astitva-bhate/" className="hover:text-pink-300 transition-colors"><FaLinkedin size={22} /></a>
              <a href="mailto:astitvaworks@gmail.com" className="hover:text-pink-300 transition-colors"><FaEnvelope size={22} /></a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-purple-100">
              <li><a href="/" className="hover:text-pink-300 transition-colors">Home</a></li>
              <li><a href="/generate" className="hover:text-pink-300 transition-colors">Generate</a></li>
              <li><a href="/buy" className="hover:text-pink-300 transition-colors">Pricing</a></li>
              <li><a href="/login" className="hover:text-pink-300 transition-colors">Login</a></li>
            </ul>
          </div>
          {/* Fun/Playful Section */}
          <div className="flex flex-col items-center justify-center">
            <div className="mb-2 animate-bounce">
              <FaHeart className="text-pink-400" size={32} />
            </div>
            <p className="text-purple-100 text-center max-w-xs">Made by <span className="font-bold text-pink-200">Astitva Bhate</span></p>
            <span className="text-xs text-purple-300 mt-2">&copy; {new Date().getFullYear()} PIXORA. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer