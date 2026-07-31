import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name:"Auth",
  initialState:{
    users:null,
    isAuthenticate:false
  },
  reducers:{
    addUser: (state,action)=>{
      state.users = action.payload,
      state.isAuthenticate = true

    },
    removeUser:(state)=>{
      state.users = null,
      state.isAuthenticate = false
    }
  }
})

export const {addUser,removeUser} = AuthSlice.actions

export default AuthSlice.reducer
