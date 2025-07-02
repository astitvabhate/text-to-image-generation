import React, { useState, useEffect } from 'react'
import cropped_image from '../assets/cropped_image.png'
import { Link } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import { TiUser } from "react-icons/ti";
import { FaMagic } from "react-icons/fa";

const Navbar = () => {
    const [user, setUser] = useState(null)
    const [userCredits, setUserCredits] = useState(0)

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem('token')
        const userName = localStorage.getItem('userName')
        const credits = localStorage.getItem('userCredits')
        
        if (token && userName) {
            setUser({ name: userName, token })
            setUserCredits(parseInt(credits) || 0)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        localStorage.removeItem('userCredits')
        localStorage.removeItem('userId')
        setUser(null)
        setUserCredits(0)
    }

    return (
        <>
            <div className='flex justify-between items-center bg-gray-100 shadow-md sticky top-0 z-50'>
                <div className='flex bg-gray-100 p-3'>
                    <Link to='/'>
                        <img src={cropped_image} alt="" className='w-15 cursor-pointer'/>
                    </Link>
                    <Link to='/'>
                        <h1 className='text-slate-900 cursor-pointer font-cascadia text-2xl font-extrabold mt-3 pl-2'>PIXORA</h1>
                    </Link>
                </div>
              
                <div className='flex items-center gap-4 pr-10'>
                    {/* Generate Button - Always visible */}
                    <Link to="/generate">
                        <button className='bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg cursor-pointer hover:from-purple-600 hover:to-pink-600 transition duration-200 text-white font-semibold flex items-center gap-2'>
                            <FaMagic />
                            Generate
                        </button>
                    </Link>
                    
                    {!user ? (
                        <div className='flex gap-4 items-center'>
                            <Link to="/buy">
                                <button className='bg-red-500 p-2 rounded-lg cursor-pointer hover:bg-red-600 transition duration-200 text-white font-semibold'>
                                    Buy Credits
                                </button>
                            </Link>
                            <Link to='/login'>
                                <button className='bg-amber-400 p-2 rounded-lg cursor-pointer hover:bg-amber-500 transition duration-200 text-white font-semibold'>
                                    Login
                                </button>
                            </Link>
                            <Link to='/signup'>
                                <button className='border-2 border-purple-500 text-purple-600 p-2 rounded-lg cursor-pointer hover:bg-purple-500 hover:text-white transition duration-200 font-semibold'>
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className='flex gap-4 items-center'>
                            <Link to="/buy">
                                <button className='bg-red-500 p-2 rounded-lg cursor-pointer hover:bg-red-600 transition duration-200 text-white font-semibold'>
                                    Buy Credits
                                </button>
                            </Link>
                            <div className='flex items-center gap-2 bg-purple-100 px-3 py-2 rounded-lg'>
                                <TiUser className="text-purple-600" />
                                <span className="text-purple-800 font-semibold">Hi, {user.name}</span>
                            </div>
                            <button 
                                onClick={handleLogout}
                                className='bg-gray-500 p-2 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-200 text-white font-semibold'
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar