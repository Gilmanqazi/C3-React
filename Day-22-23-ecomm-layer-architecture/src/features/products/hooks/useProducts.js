import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../api/productApi"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {  setProducts } from "../state/productSlice"


export const useProducts = ()=>{

  const dispatch = useDispatch()

  const query =  useQuery({
    queryKey:["products"],
    queryFn:async()=>{
const data = await getAllProducts()
return data.products
    }
  })

  useEffect(()=>{

   if(query.data){
    dispatch(setProducts(query.data))
   }

  },[query.data,dispatch])

  return{
    products:query.data || [],
    isPending:query.isPending,
    isError:query.isError,
    refetch:query.refetch
  }

}