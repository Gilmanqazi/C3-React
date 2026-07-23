import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Auth } from "../context/AuthContext"

const Navbar = () => {

const navigate = useNavigate()

        
const {loginUser,setLoginUser} = useContext(Auth)

 const logOutUser = ()=>{

   localStorage.removeItem("loggedInUser")

    if(loginUser){
     setLoginUser(null)
    }

     alert("Logout Successfull")
     navigate("/")
     
 }


  return (
 <div className="h-20 w-full bg-gray-700 text-white flex flex-col gap-3 py-2 px-4" >

<div className="text-lg text-shadow-white font-mono">
  <h1>Logo</h1>
</div>

<div className="flex flex-col gap-3">
  <NavLink to="/main" className="text-lg text-shadow-white font-mono">Home</NavLink>
  <NavLink to="/main/users" className="text-lg text-shadow-white font-mono">Users</NavLink>
  <NavLink to="/main/products" className="text-lg text-shadow-white font-mono">Products</NavLink>
</div>

<div>
  <button className="bg-blue-600 py-1.5 rounded-xl active:scale-95 hover:bg-red-700 duration-300 font-mono " onClick={()=>{logOutUser()}}>Logout</button>
</div>


    </div>
  )
}

export default Navbar