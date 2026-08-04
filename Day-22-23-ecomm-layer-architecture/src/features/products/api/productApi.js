import { api } from "../../../config/api"

export const getAllProducts = async()=>{

  try {

const response = await api.get("/products")
return response.data    
  } catch (error) {
    console.log("error in Gettin Products",error)
  }
}