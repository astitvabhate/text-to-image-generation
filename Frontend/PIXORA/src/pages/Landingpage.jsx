import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaMagic, FaDownload, FaRocket, FaPalette, FaQuoteLeft, FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'Pixora turned my wildest ideas into beautiful art! The results are always stunning and unique.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5
  },
  {
    name: 'Rahul Verma',
    text: 'The best AI image generator I have ever used. Fast, creative, and super easy to use!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5
  },
  {
    name: 'Emily Chen',
    text: 'I use Pixora for all my design projects. The quality and variety are unmatched!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4
  },
]

const Landingpage = () => {
  const [prompt, setPrompt] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, [])

  const handleGenerate = () => {
    if (prompt.trim()) {
      localStorage.setItem('generationPrompt', prompt)
      navigate('/generate')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-x-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-24">
        <div className="text-center text-white mb-20">
          <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Transform Text Into Art
          </h1>
          <p className="text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
            Create stunning AI-generated images from your imagination. Just describe what you want to see, and watch the magic happen.
          </p>
          {/* Quick Generation Box */}
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
            <div className="flex gap-4 mb-6">
              <input
                type="text"
                placeholder="Describe the image you want to create..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <button
                onClick={handleGenerate}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <FaMagic /> Generate
              </button>
            </div>
            <p className="text-sm text-gray-400">
              Try: "A majestic dragon flying over a futuristic city at sunset"
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaRocket className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-200">Generate high-quality images in seconds with our advanced AI technology.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaPalette className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Infinite Creativity</h3>
            <p className="text-gray-200">From realistic photos to artistic masterpieces, create anything you can imagine.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <FaDownload className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Easy Download</h3>
            <p className="text-gray-200">Download your creations in high resolution for personal or commercial use.</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative mb-24">
          <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex-1 bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl flex flex-col items-center hover:scale-105 transition-transform duration-300">
                <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full border-4 border-pink-400 mb-4 shadow-lg" />
                <div className="flex gap-1 mb-2">{Array.from({length: t.rating}).map((_,i) => <FaStar key={i} className="text-yellow-300" />)}</div>
                <p className="text-lg text-white italic text-center mb-4"><FaQuoteLeft className="inline mr-2 text-pink-300" />{t.text}</p>
                <span className="font-bold text-pink-200">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery/Showcase Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Gallery Showcase</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="gallery1" className="rounded-xl shadow-lg border-4 border-white/20 hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="gallery2" className="rounded-xl shadow-lg border-4 border-white/20 hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="gallery3" className="rounded-xl shadow-lg border-4 border-white/20 hover:scale-105 transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80" alt="gallery4" className="rounded-xl shadow-lg border-4 border-white/20 hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        {/* CTA Section - Only show if not logged in */}
        {!isLoggedIn && (
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mb-8 shadow-xl inline-block">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Create?</h2>
              <p className="text-xl text-purple-100 mb-6">Join thousands of creators who are already using Pixora</p>
              <div className="flex gap-4 justify-center">
                <Link to="/signup">
                  <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Get Started Free
                  </button>
                </Link>
                <Link to="/login">
                  <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Decorative SVG Wave at the bottom */}
      <div className="w-full overflow-hidden leading-0 rotate-180" style={{height: '60px'}}>
        <svg viewBox="0 0 500 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 C150,60 350,0 500,60 L500,00 L0,0 Z" fill="#fff" fillOpacity="0.08" />
        </svg>
      </div>
    </div>
  )
}

export default Landingpage