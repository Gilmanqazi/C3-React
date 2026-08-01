import React from 'react'
import { usePro } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'

const ShopPage = () => {

  const { productData ,isLoading} = usePro()

  console.log(productData)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {isLoading
      ? Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse bg-white rounded-lg shadow p-4"
          >
            {/* Image */}
            <div className="w-full h-52 bg-gray-300 rounded"></div>

            {/* Title */}
            <div className="h-4 bg-gray-300 rounded mt-4 w-3/4"></div>

            {/* Price */}
            <div className="h-4 bg-gray-300 rounded mt-2 w-1/2"></div>

            {/* Button */}
            <div className="h-10 bg-gray-300 rounded mt-4"></div>
          </div>
        ))
      : productData.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
  </div>
  )
}

export default ShopPage