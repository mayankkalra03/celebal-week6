import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
         <img onClick={()=>navigate(1)} className='h-12 p-2 rounded-2xl cursor-pointer' src={assets.music_logo} alt="" />
         <p className='text-2xl text-[#97deff] py-1 md:block cursor-pointer'>Mayank's Spotify</p>
        </div>  
        <div className='flex items-center gap-4'>
            <p className='bg-[#016795] text-white text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
            <p className='bg-black py-1 px-3 rounded-2xl text-[15px] border-2 border-[#016795] cursor-pointer'>Install App</p>
            <p className='bg-[#016795] text-white border border-white w-7 h-7 rounded-full flex items-center justify-center'>M</p>
        </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
      <p className='bg-[#016795] text-white font-semibold border-2 border-white px-4 py-1 rounded-2xl cursor-pointer'>All</p>
      <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer border-2 border-[#016795] '>Music</p>
      <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer border-2 border-[#016795] '>Podcast</p>
    </div>
    </>
  )
}

export default Navbar
