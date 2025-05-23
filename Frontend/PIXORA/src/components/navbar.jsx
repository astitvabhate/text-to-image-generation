import React from 'react'
import cropped_image from '../assets/cropped_image.png'


const navbar = () => {
  return (
    <>
      <div className='flex justify-between items-center bg-white '>
        <div className='flex bg-white p-4 '>
          <img src={cropped_image} alt="" className='w-20 cursor-pointer'  />
          <h1 className = 'text-slate-800 cursor-pointer font-cascadia text-4xl font-extrabold mt-5 pl-2'>PIXORA</h1>
        </div>
        <div className='flex gap-4 items-center pr-10'>
          <button className='bg-red-500 p-2 rounded-b-2xl cursor-pointer'>Buy Tokens</button>
          <button className=' bg-amber-400 p-2 rounded-l-2xl cursor-pointer'>SignUp </button>
        </div>
      </div>
    </>
  )
}

export default navbar