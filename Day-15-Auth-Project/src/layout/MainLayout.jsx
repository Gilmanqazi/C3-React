import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div><Outlet/>Main</div>
  )
}

export default MainLayout