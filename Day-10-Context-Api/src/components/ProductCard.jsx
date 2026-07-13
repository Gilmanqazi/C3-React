import { Star, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { useCart } from "../context/MyWebsite";

const ProductCard = ({product}) => {

  const {setCartItem} = useContext(useCart)



 
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-600 rounded-full mb-3 capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="font-bold text-lg text-gray-800 line-clamp-2 h-14">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 line-clamp-3 h-16">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
            {/* <span className="font-medium text-gray-700">
              {product.rating.rate}
            </span>
            <span className="text-gray-400 text-sm">
              ({product.rating.count})
            </span> */}
          </div>

          {/* Price */}
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        <button onClick={()=>{setCartItem((prev)=> [...prev, product])}} className="w-full mt-5 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition-all duration-300">
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;