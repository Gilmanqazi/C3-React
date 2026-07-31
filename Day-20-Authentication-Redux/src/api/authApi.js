import axios from "axios";

const api = axios.create({
  baseURL:"https://api.team-sync.space/api/auth",
  withCredentials:true
})

export const registerApi = async (userData)=>{
const res = await api.post("/register",userData)
console.log(res)
return res.data
} 