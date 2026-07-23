import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Auth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"


export const useAuth = ()=>{

  const {loginUser,setLoginUser,registredUser,setRegistredUser} = useContext(Auth)
  
  
  const navigate = useNavigate()

  const {register,handleSubmit,reset,formState:{errors}} = useForm()
  

  
    const loginFormSubmit = (data)=>{
  
      const savedUser = JSON.parse(localStorage.getItem("registerUser",data)) || []
  
      let user = savedUser.find((val) => {
        return val.email === data.email && val.password === data.password;
      });
  
      if(!user){
         alert("User Not Found")
         reset()
         return
      }
  
      setLoginUser(user)
  
      localStorage.setItem("loggedInUser",JSON.stringify(user))
      alert("User Login")
      reset()
      navigate("/main")
    }

    const registerFromSubmit = (data)=>{

      const existingUser = JSON.parse(localStorage.getItem("registerUser")) || []
    
      let arr = [...(existingUser || []),data]
    
      setRegistredUser(arr)
      alert("user Register Successfully")
      setLoginUser(data)
      localStorage.setItem("loggedInUser",JSON.stringify(data))
      localStorage.setItem("registerUser",JSON.stringify(arr))
      navigate("/main")
      reset()
    }
  
    return{
      
      register,
      handleSubmit,
      errors,
      reset,
      loginFormSubmit,
      loginUser,
      setLoginUser,
      registredUser,
      registerFromSubmit,
      navigate,
  
    }
  
  }
