import React, { Children } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import MainLayout from '../layout/MainLayout'
import AuthLayout from '../layout/AuthLayout'
import Register from '../Auth/Register'
//import {createBrowserRouter,RouterProvider} from "react-router-dom"

const AppRoute = () => {

  let router = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
            path:"",
            element:<Home/>
          },
          {
            path:"about",
            element:<About/>
          },
          {
            path:"contact",
            element:<Contact/>
          },
        
      ]
    },

    {
      path:"/auth",
      element:<AuthLayout/>,
      children:[
        {
          path:"register",
          element:<Register/>
        }
      ]
    }
   
  ])



  return <RouterProvider router={router}/>
}

export default AppRoute