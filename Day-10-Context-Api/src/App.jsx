import { useContext } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { useCart } from "./context/MyWebsite";
import { productStore } from "./context/ProductsContext";


const App = () => {

const {isCartOpen} = useContext(useCart)


const {products} = useContext(productStore)

 

  return (
    <div  className="h-screen p-4 flex flex-col gap-4">

      <Navbar/>

      {isCartOpen ? (
 <div>
 <Cart/>
</div> 
      ): (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((val,idx)=>{
           return <ProductCard key={idx} product={val}/>
         })}
        </div>
      )}




  
    </div>
  )
}

export default App;