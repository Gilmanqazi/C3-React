import { createSlice } from "@reduxjs/toolkit"



export const productSlice = createSlice({
  name:"products",
  initialState:{
    product:[],
    isLoading:false
  },
  reducers:{
    setProducts:(state,action)=>{
      state.product = action.payload
    }
  },

})

export const {setProducts} = productSlice.actions

export default productSlice.reducer