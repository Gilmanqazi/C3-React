import {useForm} from "react-hook-form"
import {loginApi } from "../api/authApi"
import { useDispatch } from "react-redux"
import { addUser } from "../state/authslice"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


export const useAuth = ()=>{

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {register,handleSubmit,reset,formState:{errors}} = useForm()

  const handleLogin = async(data)=>{
    const response = await loginApi(data)
  dispatch(addUser(response));
  toast.success("Login Successfull")
    }

    return{
      handleLogin,
      register,handleSubmit,reset,errors,
      navigate
    }
}