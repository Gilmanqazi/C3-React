import { createContext, useState } from "react";



// eslint-disable-next-line react-refresh/only-export-components
export const MyStore = createContext(); //consumer

//Provider
export const MyStoreProvider = ({children})=>{


    console.log("Context Rendering.....")
  
  const [count, setCount] = useState(0);


 return (
  <MyStore.Provider value={{count,setCount}}>
  {children}
</MyStore.Provider>
 )
}