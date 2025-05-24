import React, {useState} from 'react'
import cropped_image from '../assets/cropped_image.png'
import { Link } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import { TiUser } from "react-icons/ti";


const navbar = () => {

    const [user, setUser] = useState(false)


  return (
     <>
            <div className='flex justify-between items-center bg-white shadow-md sticky top-0 z-50'>
                <div className=' flex bg-white p-3 '>
                    <Link to = '/'>  <img src={cropped_image} alt="" className='w-15 cursor-pointer'/></Link>
                    <Link to = '/'> <h1 className='text-slate-900 cursor-pointer font-cascadia text-2xl font-extrabold mt-3 pl-2'>PIXORA</h1> </Link> 
                </div>
              
              
                <div>
                    {!user ? 
                        <div className='flex gap-4 items-center pr-10'>
                          <Link to = "/buy">  <button className='bg-red-500 p-2 rounded-b-2xl cursor-pointer hover:bg-red-600 transition duration-200'>Buy Tokens</button></Link>
                          <Link to = '/login'> <button className=' bg-amber-400 p-2 rounded-l-2xl cursor-pointer hover:bg-amber-500 transition duration-200'> Login </button></Link>
                        </div>
                        :
                        <div className='flex gap-4 items-center pr-10'>
                          <Link to = "/buy">  <button className='bg-red-500 p-2 rounded-b-2xl cursor-pointer hover:bg-red-600 transition duration-200'>Credits: HERE</button></Link>
                          <button className='bg-amber-400 p-2 rounded-l-2xl cursor-pointer hover:bg-amber-500 transition duration-200'>
                              <span className="flex items-center gap-2">
                                <TiUser /> Hi, NAME HERE
                              </span>
                          </button>
                        </div>
                    }
                </div>
            </div>
        </>
  )
}

export default navbar