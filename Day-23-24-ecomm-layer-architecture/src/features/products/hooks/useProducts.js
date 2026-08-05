import { useQuery } from "@tanstack/react-query"
import { getAllProductByCategory, getAllProductCategory, getAllProducts } from "../api/productApi"
import { useEffect, useState } from "react"



export const useProducts = ()=>{

  const [search, setSearch] = useState(null)
const [debounceSearch, setDebounceSearch] = useState(null)

useEffect(()=>{
  let timeOut = setTimeout(() => {
    setDebounceSearch(search)
  }, 1000);

  return ()=> clearTimeout(timeOut)

},[search])



  const {data,isPending,isError} =  useQuery({
    queryKey:["products",debounceSearch],
    queryFn:()=>getAllProducts(debounceSearch)
    })


  return{
    data ,
   isPending,
  isError,
   search,
   setSearch
  }

}

export const useAllCategoryProducts = ()=>{

  return useQuery({
    queryKey:["AllCategories"],
    queryFn:()=>getAllProductCategory()
  })
}

export const useAllProductByCategories = ()=>{

  const [category, setCategory] = useState(null)

  const {data} = useQuery({

    queryKey:["AllProductByCategories",category],
    queryFn:()=>getAllProductByCategory(category)
  })

  return {
    data,category,setCategory
  }
}