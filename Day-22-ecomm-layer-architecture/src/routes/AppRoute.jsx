import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicProtected from './protected/PublicProtected'
import AuthLayout from '../app/layouts/AuthLayout'
import LoginPage from '../features/auth/ui/pages/LoginPage'
import RegisterPage from '../features/auth/ui/pages/RegisterPage'
import MainProtected from './protected/MainProtected'
import MainLayout from '../app/layouts/MainLayout'
import HomePage from '../pages/HomePage'
import { getMeApi } from '../features/auth/api/authApi'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/auth/state/authslice'
import AboutPage from '../pages/AboutPage'
import { Contact } from 'lucide-react'
import ContactPage from '../pages/ContactPage'
import ProductPage from '../features/products/ui/pages/ProductPage'

const AppRoute = () => {

  const dispatch = useDispatch()



 useEffect(()=>{

  (async()=>{
    try {
      const response = await getMeApi()
    dispatch(addUser(response))
    } catch (error) {
      console.log("Error in GetMeApi",error)
    }
  })()

 },[])

  const router = createBrowserRouter([

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
      path:"register",
      element:<RegisterPage/>
        }
      ]

    }
  ]
},
{
path:"/main",
element:<MainProtected/>,
children:[
  {
    path:"",
    element:<MainLayout/>,
    children:[
      {
        path:"",
        element:<HomePage/>
      },
      {
        path:"/main/about",
        element:<AboutPage/>
      },
      {
        path:"/main/contact",
        element:<ContactPage/>
      },
      {
        path:"/main/products",
        element:<ProductPage/>
      }
    ]
  }
]
}

  ])


  return <RouterProvider router={router}/>
}

export default AppRoute