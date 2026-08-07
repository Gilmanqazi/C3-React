import axios from "axios"

export const getAllProductApi = async(limit,pageParams)=>{

console.log(pageParams)
  try {

    const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${pageParams}`)
    return response.data
    
    
  } catch (error) {
    console.log("Error in Product API " , error)
  }
}