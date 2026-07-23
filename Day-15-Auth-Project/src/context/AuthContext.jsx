/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const Auth = createContext()

export const AuthProvider = ({children})=>{

  const [registredUser, setRegistredUser] = useState(()=>{JSON.parse(localStorage.getItem("registerUser")) || []})
  const [loginUser, setLoginUser] = useState(()=>{

    const savedUser = localStorage.getItem("loggedInUser")

    return savedUser ? JSON.parse(savedUser) : null

  })
  
  return (
    <Auth.Provider value={{registredUser,setRegistredUser,setLoginUser,loginUser}}>{children}</Auth.Provider>
  )
}