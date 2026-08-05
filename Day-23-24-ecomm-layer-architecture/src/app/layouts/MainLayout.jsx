import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from '../../shared/ui/components/Navbar'

const MainLayout = () => {
  return (
    <div className='bg-black text-white h-screen w-full p-5'>

      <Navbar/>

      <div><Outlet/></div>
      </div>
  )
}

export default MainLayout