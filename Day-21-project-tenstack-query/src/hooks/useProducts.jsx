import { useQuery } from "@tanstack/react-query"
import { productApi } from "../api/product"
import { useEffect, useState } from "react"


export const useProduct = ()=>{

  const {data} = useQuery({
    queryKey:["products"],
    queryFn:productApi
  })

  return{
    data
  }

}

export const usePro = ()=>{
  const [productData, setProductData] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  

  const getProducts = async()=>{
    const data = await productApi()
    setProductData(data)
    setIsLoading(false)
  }

  useEffect(()=>{
    getProducts()
  },[])


  return{
    productData,setProductData,
    isLoading
  }

}