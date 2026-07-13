import { createContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const useCart = createContext()



export const CartProvider = ({children})=>{

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItem, setCartItem] = useState([])


  return (
    <useCart.Provider value={{isCartOpen,setIsCartOpen,cartItem,setCartItem}}>
    {children}
  </useCart.Provider>
  )

}