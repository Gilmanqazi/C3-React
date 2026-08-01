import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name:"Auth",
  initialState:{
    users:null,
    isAuthenticate:false,
    isLoading:true
  },
  reducers:{
    addUser: (state,action)=>{
      state.users = action.payload,
      state.isAuthenticate = true,
      state.isLoading =false

    },
    removeUser:(state)=>{
      state.users = null,
      state.isAuthenticate = false,
      state.isLoading = false
    }
  }
})

export const {addUser,removeUser} = AuthSlice.actions

export default AuthSlice.reducer
