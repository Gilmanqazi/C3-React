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
import ShopPage from '../pages/ShopPage'
import AboutPage from '../pages/AboutPage'

const AppRoute = () => {

  const dispatch = useDispatch()

  const hydrateUser = ()=>{
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
    console.log(loggedInUser,"LOGG")

    if(!loggedInUser){
      alert("unAuthorized User")
      return
    }

    dispatch(addUser(loggedInUser))

  }

  useEffect(()=>{
    hydrateUser()
  },[])

  const router = createBrowserRouter(
    [
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
       
      } ,
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
            },
            {
              path:"shop",
              element:<ShopPage/>
            },
            {
              path:"about",
              element:<AboutPage/>
            }

          ]
         }
        ]
      },    
    ]
  )



  return <RouterProvider router={router}/>
}

export default AppRoute