import React from 'react'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout