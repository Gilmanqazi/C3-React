import { useEffect, useState } from "react"
import { api } from "../config/AxiosInstanse"



export const useCard = ()=>{

  const [userData, setUserData] = useState([])
  const [productData, setProductData] = useState([])
  const [isLoading, setisLoading] = useState(true)

  const userCardsFnc =  async()=>{
    const res = await api.get("/users")
    setUserData(res.data)
  }

  useEffect(()=>{
userCardsFnc()
  },[])


  const productCards = async() => {
    const res = await api.get("/products")
    setProductData(res.data)
    setisLoading(false)
  }

  useEffect(()=>{
productCards()
  },[])




  return {
    userData,setUserData,userCardsFnc,productData,setProductData,isLoading
  }

}