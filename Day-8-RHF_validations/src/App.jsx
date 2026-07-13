import { useState } from "react"
import Navbar from "./components/Navbar"
import UserCard from "./components/UserCard"
import Form from "./components/Form"


const App = () => {

  const [toggle, setToggle] = useState(false)
  const [users, setUsers] = useState(()=>{
    return JSON.parse(localStorage.getItem("users")) || []
  })
  const [activeUser, setActiveUser] = useState(null)
 

  const deleteUser = (removeUserIndex)=>{
const filtredUsers = users.filter((_,idx)=> idx !== removeUserIndex)
setUsers(filtredUsers)
localStorage.setItem("users",JSON.stringify(filtredUsers))
  }

  return (
    <div className="p-3 h-screen flex flex-col gap-4">
    <Navbar setToggle={setToggle} />

    {toggle ? (
        <div className="flex justify-center h-[70%] items-center">
          <Form 
            setUsers={setUsers} 
            setToggle={setToggle} 
            setActiveUser={setActiveUser} 
            activeUser={activeUser} 
            users={users}
          />
        </div>
      ) : (
        <div className="flex gap-4 flex-wrap">
          {users.map((elem, idx) => {
            return (
              <UserCard 
                key={idx} 
                idx={idx} 
                user={elem} 
                setToggle={setToggle} 
                setActiveUser={setActiveUser} 
                deleteUser={deleteUser}
              />
            );
          })}
        </div>
    )}
  </div>
  )
}

export default App
