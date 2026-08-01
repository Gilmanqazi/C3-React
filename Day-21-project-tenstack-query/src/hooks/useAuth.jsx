import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addUser } from "../features/AuthSlice"
import { useNavigate } from "react-router-dom"

export const useAuth = ()=>{

  const {register,handleSubmit,reset,formState:{errors}} = useForm()
  const [registredUser, setRegistredUser] = useState(
    JSON.parse(localStorage.getItem("registredUsers")) || []
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleRegister = (data)=>{
    const arr = [...registredUser,data]

    setRegistredUser(arr)

    localStorage.setItem("registredUsers",JSON.stringify(arr))

    alert("User Register Successfull")
      reset()
      navigate("/")
  }

  const handleLogin = (data)=>{
    const user = registredUser.find(val => val.email === data.email && val.password === data.password);

    console.log(user,"UUUUU")

    if(!user){
      alert("User Not Found")
      return
    }

    dispatch(addUser(user))
    localStorage.setItem("loggedInUser",JSON.stringify(user))
    alert("User Logged In")
    reset()
    navigate("/main")
  }
  
  return {
    handleRegister,handleLogin,register,handleSubmit,reset,errors
  }

}

