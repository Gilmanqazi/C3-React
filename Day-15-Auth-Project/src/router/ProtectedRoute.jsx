import { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

  const {loginUser} = useContext(Auth)


  if(!loginUser){
    return <Navigate to={"/"}/>
  }

  return <Outlet/>
}

export default ProtectedRoute