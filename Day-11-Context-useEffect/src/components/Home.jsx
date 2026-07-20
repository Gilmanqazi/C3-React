import React, { useContext } from 'react'
import { MyStore } from '../Context/MyContext'

const Home = () => {
  const {count ,setCount} = useContext(MyStore)
  
  console.log("home Rendering....")


  return (
    <div>
      Home
         <h1>Hello App - {count} </h1>
            <button onClick={()=>setCount(count + 1)} >Btn</button>
    </div>
  )
}

export default Home