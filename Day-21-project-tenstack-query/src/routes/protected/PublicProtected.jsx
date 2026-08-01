import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PublicProtected = () => {

  const {users} = useSelector((store)=>store.auth)

  
if(users){
  <Navigate to={"/main"}/>
}


  return <Outlet/>
}

export default PublicProtected