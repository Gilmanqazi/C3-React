
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './routes/AppRoute.jsx'
import { store } from './app/store.js'
import {Provider} from "react-redux"
import {ToastContainer} from "react-toastify"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"

export const query = new QueryClient()

createRoot(document.getElementById('root')).render(
  

   <QueryClientProvider client={query}>
     <Provider store={store}>
      <AppRoute/>
      <ToastContainer
       position="bottom-right" 
       autoClose={2500} 
       theme="dark" 
       limit={3}
      />
    </Provider>
   </QueryClientProvider>
   
)
