import { createContext, useState } from "react"

//setup our blank store

export const MyStore = createContext()

//make a provider of our store who handle data 
// and serves to the costumers 
export const ContextProvider = ({children}) => {

  const [centralValue, setCentralValue] = useState("Main context Se hu");


return <MyStore.Provider value={{centralValue,setCentralValue}}>
  {children}
</MyStore.Provider>
}