import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
  name:"auth",
  initialState:{
    user:null,
    isAuthenticate:false,
   isLoading:true
  },
  reducers:{
    addUser :(state,action)=>{
      state.user = action.payload,
      state.isAuthenticate = true,
      state.isLoading = false
    },
    removeUser:(state)=>{
      state.user = null,
      state.isAuthenticate = false,
      state.isLoading = false
    }
  }

})

export const {addUser,removeUser}  = authSlice.actions;

export default authSlice.reducer
