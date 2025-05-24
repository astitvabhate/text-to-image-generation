import React from 'react'
import { LuHeartHandshake } from "react-icons/lu";
import { AiTwotoneCopyrightCircle } from "react-icons/ai";



const footer = () => {
  return (
    <>
      <div className='w-full h-1 bg-gray-300'></div>
      <footer className='bg-gray-800 text-white py-4'>
        <div className='container mx-auto text-center'>
          <p><AiTwotoneCopyrightCircle className='size-5 inline'/>2025 PIXORA. All rights reserved.</p>
          <p>Made with <LuHeartHandshake className='size-5 inline' /> by the PIXORA Team</p>
          <p> ~ Astitva Bhate </p>
        </div>
        
      </footer>
    </>
  )
}

export default footer