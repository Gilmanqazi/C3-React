
import UserCard from "../components/UserCard"
import { useCard } from "../hooks/useProCard"


const UserPage = () => {


  const {userData,isLoading} = useCard()

  if(isLoading) return <h1>Users Loading....</h1>


  return (
    <div className="grid grid-cols-3 gap-3">
      {userData.map((user)=>(
        <UserCard key={user.id} user={user}/>
      ))}
    </div>
  )
}

export default UserPage