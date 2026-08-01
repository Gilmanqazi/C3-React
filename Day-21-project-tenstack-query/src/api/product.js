import axios from "axios";

const api = axios.create({
  baseURL:"https://dummyjson.com",
  withCredentials:true
})

export const productApi = async ()=>{
const res = await api.get("/products")
console.log(res)
return res.data.products
} 