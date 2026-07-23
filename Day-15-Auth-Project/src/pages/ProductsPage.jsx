import ProductCard from "../components/ProductCard"
import { useCard } from "../hooks/useProCard"


const ProductsPage = ()=>{

 
  const {productData,isLoading} = useCard()

  if(isLoading) return <h1>Products Loading....</h1>

  return (
    <div className="grid grid-cols-3 gap-3">
      {productData?.map((product)=>(
          <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default ProductsPage