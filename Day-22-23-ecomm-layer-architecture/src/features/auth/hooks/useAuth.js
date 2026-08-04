import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { loginUserAction } from "../state/authAction"


export const useAuth = ()=>{

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {register,handleSubmit,reset,formState:{errors}} = useForm()

  const handleLogin = async(data)=>{
try {
  dispatch(loginUserAction(data))
 
} catch (error) {
  console.log("form api error", error);
}
    }

    return{
      handleLogin,
      register,handleSubmit,reset,errors,
      navigate
    }
}