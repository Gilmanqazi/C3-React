import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './context/MyContext.jsx'
import { CartProvider } from './context/MyWebsite.jsx'
import { ProductProvider } from './context/ProductsContext.jsx'

createRoot(document.getElementById('root')).render(

    <ContextProvider>
        <CartProvider>
            <ProductProvider>
    <App />
    </ProductProvider>
    </CartProvider>
    </ContextProvider>
)
