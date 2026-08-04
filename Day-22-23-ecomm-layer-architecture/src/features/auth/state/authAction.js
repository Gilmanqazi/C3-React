import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify"

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (userData,thunkApi)=>{
   
    try {
      const res = await api.post("/auth/login",userData)
      toast.success("Login Successfull")
     localStorage.setItem("accessToken",res.data.accessToken)
      return res.data
    } catch (error) {
      console.log("Error in Login Api",error)
      toast.error("login failed")
      return thunkApi.rejectWithValue("login failed")
    }

  }
)

export const hydradeUserAction = createAsyncThunk(
  "/auth/getMe",
 async (_,thunkApi)=>{

    const token = localStorage.getItem("accessToken")
  
  
    try {
      const res = await api.get("/auth/me",{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
  
      return res.data
     
  
    } catch (error) {
      toast.error("Unauthorized user",error);
      return thunkApi.rejectWithValue("Unauthorized user")
    }
  
  }
  
)