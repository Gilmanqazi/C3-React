import { createSlice } from "@reduxjs/toolkit";
import { hydradeUserAction, loginUserAction } from "./authAction";



//ReduxThunk: => is a outer action of redux used for syncing APIs with redux
//1) loading state
//2) user reptiontaion


export const authSlice = createSlice({
  name:"auth",
  initialState:{
    user:null,
    isAuthenticate:false,
   isLoading:false,
   isInitialized: false // 👈 1. यह नया स्टेट जोड़ें
  },
  // reducers:{
  //   addUser :(state,action)=>{
  //     state.user = action.payload,
  //     state.isAuthenticate = true,
  //     state.isLoading = false
  //   },
  //   removeUser:(state)=>{
  //     state.user = null,
  //     state.isAuthenticate = false,
  //     state.isLoading = false
  //   }
  // },
 

    extraReducers: (builder) => {
      builder
        .addCase(loginUserAction.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(loginUserAction.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isAuthenticate = true;
          state.isLoading = false;
          state.isInitialized = true; 
        })
        .addCase(loginUserAction.rejected, (state) => {
          state.isLoading = false;
        })
  
        .addCase(hydradeUserAction.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(hydradeUserAction.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isAuthenticate = true;
          state.isLoading = false;
          state.isInitialized = true; 
        })
        .addCase(hydradeUserAction.rejected, (state) => {
          state.isLoading = false;
          state.isInitialized = true; 
        });
    }
  });
  





export default authSlice.reducer
