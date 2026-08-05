import React from 'react';
import { useAllProductByCategories, useProducts } from '../../hooks/useProducts'; // हुक इम्पोर्ट करें
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';

export default function ProductList() {

  const { data, isPending ,search,setSearch, } = useProducts();

  const {data:productByCategory,category,setCategory} = useAllProductByCategories()

  if (isPending) {
    return <div className='text-4xl text-blue-600 font-bold pt-10'>Loading Products....</div>;
  }


  return (
    <div className='p-10'>
      <Filter search={search} setSearch={setSearch} category={category} setCategory={setCategory}/>
      <div className="grid grid-cols-3 pt-20 container mx-auto gap-3">
      {productByCategory?.products?.length ? 
     productByCategory?.products?.map((item) =>(
      <ProductCard key={item.id}  product={item}/>  
   )
   ): data?.products?.map((item) =>(
    <ProductCard key={item.id}  product={item}/>  
 )
 )} 
    
      
      </div>
    </div>
  );
}