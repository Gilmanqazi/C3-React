import { useContext } from "react"
import { useCart } from "../context/MyWebsite"

const Navbar = () => {

  const {setIsCartOpen} = useContext(useCart)

  return (
    <div className="bg-black p-5 flex items-center justify-between">
      <div>Logo</div>
      <div className="flex gap-3">
        <p onClick={()=>{setIsCartOpen(false)}}>Home</p>
        <p onClick={()=>{setIsCartOpen(true)}}>Cart</p>
      </div>

      <button>Login</button>

    </div>
  )
}

export default Navbar
