
import MainLayout from '../layout/MainLayout'
import AuthLayout from '../layout/AuthLayout'
import Register from '../pages/Register'
import Login from '../pages/Login'
import ProtectedRoute from './ProtectedRoute'
import {createBrowserRouter,RouterProvider}  from "react-router-dom"
import Home from '../pages/Home'
import PublicRoute from './PublicRoute'
import UserPage from '../pages/UserPage'
import ProductsPage from '../pages/ProductsPage'

const AppRouter = () => {
const router = createBrowserRouter( [
  {
    path:"/",
    element:<PublicRoute/>,
    children:[
      {
        path:"",
        element:<AuthLayout/>,
        children:[
          {
            path:"",
            element:<Login/>,
          
          },
          {
            path:"register",
            element:<Register/>
          }, 
  
        ]
      },
    
     
    ]
  },
  {
    path:"/main",
    element:<ProtectedRoute/>,
    children:[
      {
        path:"",
        element:<MainLayout/>,
        children:[
          {
            path:"",
            element:<Home/>
          },
          {
            path:"users",
            element:<UserPage/>
          },
          {
            path:"products",
            element:<ProductsPage/>
          }
         
        ]
      },
    
     
    ]
  }
]
)

  return <RouterProvider router={router}/>
}

export default AppRouter