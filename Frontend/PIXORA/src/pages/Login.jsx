import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    
    try {
      const response = await axios.post('https://text-to-image-generation-orcin.vercel.app/api/user/login', {
        email,
        password
      })
      
      if (response.data.success) {
        // Store user data in localStorage
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('userName', response.data.user.name)
        localStorage.setItem('userId', response.data.user.id)
        localStorage.setItem('userCredits', response.data.user.creditBalance || 5)
        
        setMessage('Login successful! Redirecting...')
        
        // Redirect to home page after a short delay
        setTimeout(() => {
          navigate('/')
          window.location.reload() // Refresh to update navbar
        }, 1500)
      } else {
        setMessage(response.data.message || 'Login failed')
      }
    } catch (error) {
      console.error('Login error:', error)
      setMessage(error.response?.data?.message || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4 text-center">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Welcome Back</h2>
            
            {message && (
              <div className={`p-3 mb-4 rounded ${message.includes('successful') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                onChange={e => setEmail(e.target.value)} 
                value={email} 
                type="email" 
                placeholder="Email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" 
                required
              />
              <input 
                onChange={e => setPassword(e.target.value)} 
                value={password} 
                type="password" 
                placeholder="Password" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" 
                required
              />
              <button 
                type="submit" 
                disabled={loading}
                className={`w-full p-3 rounded-lg font-semibold text-white transition-colors ${
                  loading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                }`}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
              <div>
                <p className='text-sm text-gray-600 mt-2'>
                  Don't have an account? <a href="/signup" className="text-purple-500 hover:underline font-semibold">Sign Up</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login