import React, { useState, useEffect } from 'react'
import { FaMagic, FaDownload, FaShare, FaSpinner, FaArrowLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Generate = () => {
  const [prompt, setPrompt] = useState('')
  const [generatedImage, setGeneratedImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [userCredits, setUserCredits] = useState(5) // Default credits
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect to login if not logged in
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
    // Get prompt from localStorage if coming from landing page
    const savedPrompt = localStorage.getItem('generationPrompt')
    if (savedPrompt) {
      setPrompt(savedPrompt)
      localStorage.removeItem('generationPrompt')
    }
  }, [navigate])

  const handleGenerate = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      setError('You must be logged in to generate images.')
      navigate('/login')
      return
    }
    if (!prompt.trim()) {
      setError('Please enter a description for your image')
      return
    }
    setLoading(true)
    setError('')
    setGeneratedImage(null)
    try {
      const response = await axios.post('https://pixora-backend-kmsm.onrender.com/api/image/generate', {
        prompt: prompt.trim(),
        userId: localStorage.getItem('userId')
      })
      if (response.data.success) {
        setGeneratedImage(response.data.imageUrl)
        setUserCredits(response.data.remainingCredits)
        localStorage.setItem('userCredits', response.data.remainingCredits)
      } else {
        setError(response.data.message)
      }
    } catch (error) {
      console.error('Generation error:', error)
      setError('Failed to generate image. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = `pixora-${Date.now()}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleShare = () => {
    if (generatedImage && navigator.share) {
      navigator.share({
        title: 'My AI Generated Image',
        text: `Check out this image I created with Pixora: "${prompt}"`,
        url: generatedImage
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(generatedImage)
      alert('Image URL copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors">
            <FaArrowLeft /> Back to Home
          </Link>
          <div className="text-white">
            <span className="bg-purple-600 px-4 py-2 rounded-lg">
              Credits: {userCredits}
            </span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Input Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Create Your Image
            </h2>
            
            <div className="space-y-4">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe the image you want to create in detail..."
                className="w-full h-32 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                disabled={loading}
              />
              
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-200">
                  {error}
                </div>
              )}
              
              <div className="flex gap-4">
                <button
                  onClick={handleGenerate}
                  disabled={loading || !prompt.trim()}
                  className={`flex-1 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    loading || !prompt.trim()
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                  }`}
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <FaMagic />
                      Generate Image
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Result Section */}
          {generatedImage && (
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Your Generated Image
              </h3>
              
              <div className="text-center mb-6">
                <img
                  src={generatedImage}
                  alt="Generated"
                  className="max-w-full h-auto rounded-lg shadow-2xl mx-auto"
                  style={{ maxHeight: '500px' }}
                />
              </div>
              
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <FaDownload />
                  Download
                </button>
                <button
                  onClick={handleShare}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <FaShare />
                  Share
                </button>
              </div>
            </div>
          )}

          {/* Tips Section */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 mt-8">
            <h4 className="text-xl font-semibold text-white mb-4">💡 Tips for Better Results</h4>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>
                <h5 className="font-semibold text-purple-300 mb-2">Be Specific</h5>
                <p className="text-sm">Instead of "a cat", try "a fluffy orange cat sitting on a windowsill in golden hour lighting"</p>
              </div>
              <div>
                <h5 className="font-semibold text-purple-300 mb-2">Add Style Details</h5>
                <p className="text-sm">Include art styles like "oil painting", "digital art", "photorealistic", or "anime style"</p>
              </div>
              <div>
                <h5 className="font-semibold text-purple-300 mb-2">Describe Lighting</h5>
                <p className="text-sm">Mention lighting conditions like "sunset", "dramatic shadows", or "soft natural light"</p>
              </div>
              <div>
                <h5 className="font-semibold text-purple-300 mb-2">Include Composition</h5>
                <p className="text-sm">Specify angles like "close-up", "wide shot", "bird's eye view", or "portrait orientation"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Generate 