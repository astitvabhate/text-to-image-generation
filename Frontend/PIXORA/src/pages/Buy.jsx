import React from 'react'
import { BsDot } from "react-icons/bs"; 


const Buy = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center bg-gray-100 p-4'>
        <h1 className='text-4xl font-extrabold '>Choose Your Plan</h1>
        {/* <p className='text-gray-800'>Welcome to the Buy page! Here you can purchase items.</p> */}
        <p className='text-gray-800'>Find the right image generation package for you.</p>
      </div>

      <div>
        {/* <h2 className='text-3xl font-bold text-center mt-8'>Featured Plans</h2> */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
          {/* Example items, replace with actual content */}
          <div className='bg-white p-4 rounded shadow'>
            <div className='bg-gray-200 p-2 rounded-full mb-2'>
               <h3 className='text-3xl font-semibold text-center'>₹99/month</h3>
            </div>
            <p className='text-gray-600'>
              <ul>
                    <li><strong>Plan Name:</strong> Starter Image Pack</li>
                    <li><strong>Price:</strong> ₹99/month</li>
                    <li><strong>Description:</strong> A budget-friendly option to explore text-to-image AI with essential features.</li>
                    
                    <li><strong>What's Included:</strong>
                      <ul>
                        <li><BsDot className='inline size-6' />🧩 1,000 Text-to-Image Tokens</li>
                        <li><BsDot className='inline size-6' />⏱ Standard image generation speed</li>
                        <li><BsDot className='inline size-6' />📷 Basic model access only</li>
                        <li><BsDot className='inline size-6' />📦 Standard resolution downloads</li>
                        <li><BsDot className='inline size-6' />♻️ Tokens renew every 30 days</li>
                      </ul>
                    </li>
                    
                    <li><strong>Ideal For:</strong>
                      <ul>
                        <li><BsDot className='inline size-6' />Beginners trying AI image tools</li>
                        <li><BsDot className='inline size-6' />Students & hobbyists</li>
                      </ul>
                    </li>
                  </ul>
            </p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded mt-2 cursor-pointer'>Buy Now</button>
          </div>
          <div className='bg-white p-4 rounded shadow'>
            <div className='bg-gray-200 p-2 rounded-full mb-2'>
               <h3 className='text-3xl font-semibold text-center'>₹499/month</h3>
            </div>
            <p className='text-gray-600'>
                    <ul>
                      <li><strong>Plan Name:</strong> Pro Image Creator</li>
                      <li><strong>Price:</strong> ₹499/month</li>
                      <li><strong>Description:</strong> Full-featured access to powerful AI models for professional-grade image generation.</li>
                      
                      <li><strong>What's Included:</strong>
                        <ul>
                          <li><BsDot className='inline size-6' />🎨 10,000 Text-to-Image Tokens</li>
                          <li><BsDot className='inline size-6' />⚡️ Fast generation speeds</li>
                          <li><BsDot className='inline size-6' />🧠 Access to all image models (realism, anime, sketches, etc.)</li>
                          <li><BsDot className='inline size-6' />📁 HD image downloads (PNG/JPEG)</li>
                          <li><BsDot className='inline size-6' />🔁 Unlimited prompt edits within sessions</li>
                          <li><BsDot className='inline size-6' />📈 Priority processing during peak hours</li>
                          <li><BsDot className='inline size-6' />♻️ Tokens renew every 30 days</li>
                        </ul>
                      </li>
                      
                      <li><strong>Ideal For:</strong>
                        <ul>
                          <li><BsDot className='inline size-6' />Content creators & designers</li>
                          <li><BsDot className='inline size-6' />Professional users & developers</li>
                          <li><BsDot className='inline size-6' />AI art & creative projects</li>
                        </ul>
                      </li>
                    </ul>

            </p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded mt-2 cursor-pointer'>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Buy