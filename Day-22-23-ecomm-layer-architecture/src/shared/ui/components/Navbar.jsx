import React from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from "lucide-react"

const Navbar = () => {
  return (
    // Fixed positioning + backdrop-blur + semi-transparent dark background
    <header className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-20 bg-black/40 backdrop-blur-md border-b border-white/10 text-white'>
      
      {/* Navigation Links */}
      <nav className='flex gap-8 items-center font-semibold text-sm tracking-wide'>
        <NavLink 
          to={"/main"}
          className={({isActive}) => isActive ? "text-emerald-500 font-bold" : "text-gray-200 hover:text-white transition-colors"} 
          end
        >
          Home
        </NavLink>

        <NavLink 
          to={"/main/products"}
          className={({isActive}) => isActive ? "text-emerald-500 font-bold" : "text-gray-200 hover:text-white transition-colors"}
        >
          Shop
        </NavLink>

        <NavLink 
          to={"/main/about"}
          className={({isActive}) => isActive ? "text-emerald-500 font-bold" : "text-gray-200 hover:text-white transition-colors"}
        >
          About
        </NavLink>

        <NavLink 
          to={"/main/contact"}
          className={({isActive}) => isActive ? "text-emerald-500 font-bold" : "text-gray-200 hover:text-white transition-colors"}
        >
          Contact
        </NavLink>
      </nav>

      {/* Brand Logo */}
      <div className='flex items-center gap-1.5'>
        <h1 className='font-extrabold text-xl tracking-wider'>GULMOHAR</h1>
        <span className='text-xs font-black text-emerald-500 tracking-widest uppercase'>SHOP</span>
      </div>

      {/* Actions / Cart */}
      <div>
        <div className='cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors'>
          <ShoppingCart size={20} className='text-white' />
        </div>
      </div>

    </header>
  )
}

export default Navbar