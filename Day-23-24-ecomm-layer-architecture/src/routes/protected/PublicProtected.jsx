import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PublicProtected = () => {

  const {user} = useSelector((state)=>state.auth)

  if(user){
    return <Navigate to={"/main"}/>
  }

  return <Outlet/>
}

export default PublicProtected