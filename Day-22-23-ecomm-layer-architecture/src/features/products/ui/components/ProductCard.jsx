import { Star, ShoppingCart, Truck } from "lucide-react";

const ProductCard = ({ product }) => {

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative bg-gray-100">
        <img
          src={product.images}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Discount Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          {product.discountPercentage}% OFF
        </span>

        {/* Stock Status */}
        <span
          className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
            product.availabilityStatus === "In Stock"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {product.availabilityStatus}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">
        {/* Category */}
        <p className="text-xs uppercase tracking-wider text-gray-500">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-bold text-gray-800">
          {product.title}
        </h2>

        {/* Brand */}
        <p className="text-sm text-gray-500">
          Brand:
          <span className="ml-1 font-medium text-gray-700">
            {product.brand}
          </span>
        </p>

        {/* Description */}
        <p className="line-clamp-3 text-sm text-gray-600">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center text-yellow-500">
            <Star size={18} fill="currentColor" />
          </div>

          <span className="font-medium">{product.rating}</span>

          <span className="text-sm text-gray-500">
            ({product.reviews?.length} Reviews)
          </span>
        </div>

        {/* Shipping */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Truck size={16} />
          {product.shippingInformation}
        </div>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-indigo-600">
              ${product.price}
            </p>

            <p className="text-sm text-gray-500">
              Stock: {product.stock}
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700">
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;