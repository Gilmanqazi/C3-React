import React from 'react';
import { useProducts } from '../../hooks/useProducts'; // हुक इम्पोर्ट करें
import ProductCard from '../components/ProductCard';

export default function ProductList() {

  const { products, isPending  } = useProducts();


  if (isPending) {
    return <div className='text-4xl text-blue-600 font-bold pt-10'>Loading....</div>;
  }


  return (
    <div>
      <h2>Product List</h2>
      <div className="grid grid-cols-4 pt-20 container mx-auto gap-3">
        {products.map((item) =>(
           <ProductCard key={item.id}  product={item}/>  
        )
        )}
      </div>
    </div>
  );
}