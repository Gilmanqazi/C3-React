import { api } from "../../../config/api"

export const getAllProducts = async(search)=>{

  try {

    let url = search ? `/products/search?q=${search}`: "/products"

const response = await api.get(url)
return response.data    
  } catch (error) {
    console.log("error in Getting Products",error)
  }
}


export const getAllProductCategory = async()=>{

  try {

const response = await api.get("/products/categories")
console.log(response.data,"Data From categories APi")
return response.data    
  } catch (error) {
    console.log("error in Getting AllProducts Categories",error)
  }
}

export const getAllProductByCategory = async(category)=>{
  try {

    const response = await api.get(`products/category/${category}`)
    return response.data
    
  } catch (error) {
    console.log("error in Getting AllProductsByCategories",error)
  }
}


