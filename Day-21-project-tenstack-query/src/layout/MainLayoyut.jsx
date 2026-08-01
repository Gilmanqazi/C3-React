import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayoyut = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <Navbar/>
      <div className='p-5'>
      <Outlet/>
      </div>
    </div>
  )
}

export default MainLayoyut