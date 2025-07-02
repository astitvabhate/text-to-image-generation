import React, { useState } from 'react'
import { BsDot } from "react-icons/bs"
import { FaCheck, FaCrown, FaRocket, FaStar } from "react-icons/fa"

const Buy = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const plans = [
    {
      id: 'starter',
      name: 'Starter Pack',
      price: '₹99',
      period: 'month',
      credits: 100,
      popular: false,
      features: [
        '100 AI Image Generations',
        'Standard Generation Speed',
        'Basic Model Access',
        'Standard Resolution',
        'Email Support',
        '30-Day Renewal'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'pro',
      name: 'Pro Creator',
      price: '₹299',
      period: 'month',
      credits: 500,
      popular: true,
      features: [
        '500 AI Image Generations',
        'Fast Generation Speed',
        'All AI Models Access',
        'HD Resolution Downloads',
        'Priority Processing',
        'Priority Support',
        'Unlimited Prompt Edits',
        '30-Day Renewal'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '₹999',
      period: 'month',
      credits: 2500,
      popular: false,
      features: [
        '2500 AI Image Generations',
        'Ultra-Fast Generation',
        'All AI Models + Custom',
        '4K Resolution Downloads',
        'Highest Priority Processing',
        '24/7 Dedicated Support',
        'API Access',
        'Custom Integrations',
        '30-Day Renewal'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  const handlePurchase = (planId) => {
    // TODO: Implement payment gateway integration
    alert(`Redirecting to payment for ${planId} plan...`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock the power of AI image generation with our flexible credit packages. 
            Start creating stunning visuals today!
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500 shadow-2xl' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                    <FaCrown  />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {plan.credits} Credits
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Purchase Button */}
              <button
                onClick={() => handlePurchase(plan.id)}
                className={`w-full py-4 cursor-pointer rounded-xl font-semibold text-white transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg'
                    : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                }`}
              >
                {plan.popular ? (
                  <span className="flex items-center justify-center gap-2">
                    <FaRocket />
                    Get Started
                  </span>
                ) : (
                  'Choose Plan'
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Why Choose Pixora?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaStar className="text-2xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Premium Quality</h4>
                <p className="text-gray-600">Generate high-quality images with state-of-the-art AI models</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaRocket className="text-2xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Lightning Fast</h4>
                <p className="text-gray-600">Get your images generated in seconds, not minutes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCrown className="text-2xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Unlimited Creativity</h4>
                <p className="text-gray-600">Create anything you can imagine with our powerful AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buy