import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const MainProtected = () => {

  const {users,isLoading} = useSelector((store)=>store.auth)

if(isLoading) return <h1>Loading.....</h1>


  if(!users){
    return <Navigate to={"/"} />
  }

 return <Outlet/>
}

export default MainProtected