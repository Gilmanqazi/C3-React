
import { useCallback, useMemo, useState } from "react";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact";


const App = () => {
  

  console.log("App Rendering...");

  const [count, setCount] = useState(0)
  const [users, setUsers] = useState({name:"Gilman",id:999})


  let clac = useMemo(()=>{
    let sum = 0

    for(let i = 0; i<10000; i++){
      console.log("Calculation Running")
      sum += i
    }

    return sum
  },[])


  const greet = useCallback(()=>{
    console.log("Hey Good Evening....")
  },[])

  return (
    <div>

      <h1>
        Memoization
      </h1>

      <h2>
        Count is = {count} 
      </h2>

      <h2>Name is = {users.name}</h2>

      <h1>My Calculation is {clac}</h1>

      <button onClick={()=>setCount(count + 1)}>Increment</button>
      
      <button onClick={()=>setUsers({...users,name:"Salman"})}>Change Name</button>
      <Home greet={greet}/>
      <About greet={greet}/>
      <Contact greet={greet}/>
    </div>
  );
};

export default App;