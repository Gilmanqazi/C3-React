import { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {

  const {loginUser} = useContext(Auth)


  if(loginUser){
    return <Navigate to={"/main"}/>
  }

  return <Outlet/>
}

export default PublicRoute