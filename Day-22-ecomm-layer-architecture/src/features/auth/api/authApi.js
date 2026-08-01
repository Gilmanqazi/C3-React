import { api } from "../../../config/api"

export const loginApi = async (userData)=>{
  try {
    const res = await api.post("/auth/login",userData)
   localStorage.setItem("accessToken",res.data.accessToken)
    return res.data
  } catch (error) {
    console.log("Error in Login Api",error)
  }

}

export const getMeApi = async ()=>{

  const token = localStorage.getItem("accessToken")


  try {
    const res = await api.get("/auth/me",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })

    return res.data
   

  } catch (error) {
    console.log("Error in GetMe Api",error)
  }

}