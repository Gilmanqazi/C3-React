import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import LoadingPage from '../../pages/LoadingPage'

const MainProtected = () => {
 
  const { user, isLoading, isInitialized } = useSelector((state) => state.auth)

  
  if (!isInitialized || isLoading) {
    return <h1>Loading.......</h1> 
  }

  
  if (!user) {
    return <Navigate to={"/"} replace /> 
  }

  return <Outlet />
}

export default MainProtected
