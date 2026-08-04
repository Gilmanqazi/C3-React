import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicProtected from './protected/PublicProtected'
import AuthLayout from '../app/layouts/AuthLayout'
import LoginPage from '../features/auth/ui/pages/LoginPage'
import RegisterPage from '../features/auth/ui/pages/RegisterPage'
import MainProtected from './protected/MainProtected'
import MainLayout from '../app/layouts/MainLayout'
import HomePage from '../pages/HomePage'
import { useDispatch } from 'react-redux'
import AboutPage from '../pages/AboutPage'
import { Contact } from 'lucide-react'
import ContactPage from '../pages/ContactPage'
import ProductPage from '../features/products/ui/pages/ProductPage'
import { hydradeUserAction } from '../features/auth/state/authAction'

const AppRoute = () => {

  let dispatch = useDispatch();

  useEffect(() => {
    (() => {
      try {
        dispatch(hydradeUserAction());
      } catch (error) {
        console.log("error in hydration..", error);
      }
    })();
  }, []);


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