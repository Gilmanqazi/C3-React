import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import LoadingPage from '../../pages/LoadingPage'

const MainProtected = () => {

  const {user,isLoading} = useSelector((state)=>state.auth)

  if(isLoading) return <LoadingPage/>

  if(!user){
    return <Navigate to={"/"}/> 
  }

  return <Outlet/>
}

export default MainProtected