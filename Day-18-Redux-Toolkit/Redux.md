resgurant 

chef
recipes
waiter
customer;- 

(1) first install redux toolkit  from redux toolkit offcial documentation
(2) kitchen => app=>store.jsx (configureStore)

import configureStore from "@reduxjs/toolkit"

const store = configureStore({
  reducer:{}
})


(3) chef => features(folder),slices(folder),reducers(folder) (state,action) => 
reducer has state and their action to update the state

slice me 3 chize aati hai pahele name:"", initialState:{}, and reducers:{}

counterSlice.jsx
 import createSlice from "@reduxjs/toolkit

 const counterSlice = createSlice({
  name:"counter",
  initialState:{
    count:0
    },
    reducers:{
      const IncrementCount:(state)=>{
        state.count += 1
      },
       const DecrementCount:(state)=>{
        state.count -= 1
      }
    }
 })
 

 ab apne main.jsx me app.jsx ko wrap kardo 
 import {Provider} from "react/redux"

 <Provider store={store}>
 <App/>
 </Provider>

 
 then ab aate hai ui ke taraf

  let {count} = useSelectore((state)=>state.counter)
  let dispatch = useDispatch( )

  onClick(()=>{dicpatch(Increment())})