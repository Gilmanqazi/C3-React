import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayoyut from '../layout/MainLayoyut'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import AuthLayout from '../layout/AuthLAyout'
import { addUser } from '../features/AuthSlice'
import { useDispatch } from 'react-redux'
import MainProtected from './protected/MainProtected'
import PublicProtected from './protected/PublicProtected'

const AppRoute = () => {

  const dispatch = useDispatch()

  const hydrateUser = ()=>{
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

    if(!loggedInUser){
      alert("unAuthorized User")
      return
    }

    dispatch(addUser(loggedInUser))

  }

  useEffect(()=>{hydrateUser()},[])

  const router = createBrowserRouter(
    [
      {
        path:"/main",
        element:<MainProtected/>,
        children:[
         {
          path:"",
          element:<MainLayoyut/>,
          children:[
            {
              path:"",
              element:<HomePage/>
            }
          ]
         }
        ]
      },

      {
        path:"/",
        element:<PublicProtected/>,
        children:[
          {
            path:"",
            element:<AuthLayout/>,
            children:[
              {
                path:"",
                element:<LoginPage/>
              },
              {
                path:"/register",
                element:<RegisterPage/>
              }
            ]
          }
        ]
       
      }    

  
     
    ]
  )



  return <RouterProvider router={router}/>
}

export default AppRoute