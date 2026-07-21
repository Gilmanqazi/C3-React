import React from 'react'
import MainLayout from '../layout/MainLayout'
import AuthLayout from '../layout/AuthLayout'
import Register from '../pages/Register'
import Login from '../pages/Login'
import ProtectedRoute from '../layout/ProtectedRoute'
import {createBrowserRouter,RouterProvider}  from "react-router-dom"

const AppRouter = () => {
const router = createBrowserRouter( [
  {
    path:"/",
    element:<AuthLayout/>,
    children:[
      {
        path:"",
        element:<Login/>
      },
      {
        path:"register",
        element:<Register/>
      }, 
    ]
  },
  {
    path:"/main",
    element:<ProtectedRoute/>,
    children:[
      {
        path:"",
        element:<MainLayout/>
      },
     
    ]
  }
]
)

  return <RouterProvider router={router}/>
}

export default AppRouter