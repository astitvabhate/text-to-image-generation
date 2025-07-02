import React, { useState, useEffect } from 'react'
import { FaDownload, FaShare, FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Result = () => {
  const [generatedImages, setGeneratedImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading generated images
    setTimeout(() => {
      setGeneratedImages([
        {
          id: 1,
          prompt: "A majestic dragon flying over a futuristic city at sunset",
          imageUrl: "https://via.placeholder.com/512x512/8B5CF6/FFFFFF?text=AI+Generated+Image+1",
          createdAt: new Date().toISOString(),
          likes: 42
        },
        {
          id: 2,
          prompt: "A serene forest with glowing mushrooms and fairy lights",
          imageUrl: "https://via.placeholder.com/512x512/EC4899/FFFFFF?text=AI+Generated+Image+2",
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          likes: 28
        }
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const handleDownload = (imageUrl, prompt) => {
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = `pixora-${prompt.slice(0, 20)}-${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleShare = (imageUrl, prompt) => {
    if (navigator.share) {
      navigator.share({
        title: 'My AI Generated Image',
        text: `Check out this image I created with Pixora: "${prompt}"`,
        url: imageUrl
      })
    } else {
      navigator.clipboard.writeText(imageUrl)
      alert('Image URL copied to clipboard!')
    }
  }

  const handleLike = (imageId) => {
    setGeneratedImages(prev => 
      prev.map(img => 
        img.id === imageId 
          ? { ...img, likes: img.likes + 1 }
          : img
      )
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-xl">Loading your creations...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors">
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-white">Your Generated Images</h1>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        {generatedImages.length === 0 ? (
          <div className="text-center text-white py-16">
            <div className="text-6xl mb-4">🎨</div>
            <h2 className="text-2xl font-bold mb-4">No Images Yet</h2>
            <p className="text-gray-300 mb-8">Start creating amazing images with AI!</p>
            <Link to="/generate">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Generate Your First Image
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generatedImages.map((image) => (
              <div key={image.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                {/* Image */}
                <div className="relative mb-4">
                  <img
                    src={image.imageUrl}
                    alt={image.prompt}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <button
                    onClick={() => handleLike(image.id)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <FaRegHeart className="text-white text-lg" />
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold line-clamp-2">
                    {image.prompt}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>{new Date(image.createdAt).toLocaleDateString()}</span>
                    <span className="flex items-center gap-1">
                      <FaHeart className="text-red-400" />
                      {image.likes}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleDownload(image.imageUrl, image.prompt)}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <FaDownload />
                      Download
                    </button>
                    <button
                      onClick={() => handleShare(image.imageUrl, image.prompt)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <FaShare />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Generate More CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Want More?</h2>
            <p className="text-gray-300 mb-6">
              Continue creating amazing images with our AI technology
            </p>
            <Link to="/generate">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Generate More Images
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result