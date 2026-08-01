import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const {users} = useSelector((state)=>state.auth)

  return (
    <div className='flex h-20  justify-between p-5 font-semibold items-center'>
      <div className='font-bold' >GULMOHAR SHOP</div>


  <div className='flex items-center gap-8'>
  <NavLink className={({isActive})=>
        isActive ? "text-red-600 font-bold" : "hover:text-red-500"
      } end
       to={"/main"}>Home</NavLink>


      <NavLink className={({isActive})=>
        isActive ? "text-red-600 font-bold" : " hover:text-red-500"
      } to={"/main/shop"}>Shop</NavLink>


      <NavLink className={({isActive})=>
        isActive ? "text-red-600 font-bold" : "hover:text-red-500"
      } to={"/main/about"}>About</NavLink>
  </div>

<div >
<h1 className='flex gap-3'>Hey<strong className='text-red-500'>{users?.name}</strong></h1>
</div>

    </div>
  )
}

export default Navbar