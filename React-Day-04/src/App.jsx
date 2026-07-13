import { useState } from "react";


const App = () => {

 let [count, setCount] = useState(100)

 const CountingValue = ()=>{
  setCount(count+1) 
 }
 

  return (
    <div>
      <h1>
      Counting : {count}
      </h1>

      <button onClick={CountingValue}>COUNT</button>
    </div>
  );
};

export default App;
