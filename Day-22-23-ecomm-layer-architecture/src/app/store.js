import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/auth/state/authslice"

export const store =configureStore({
  reducer:{
auth:authReducer
  }
})