import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { ArrowLeft, Tag, ShoppingCart } from 'lucide-react';
import { useCart } from '../../../cart/hook/useCart';

const ProductDetailsPage = () => {
  const { data, isLoading } = useProducts();
  const { id } = useParams();
  const navigate = useNavigate();

  const {addItemToCart} = useCart()


  const product = data?.products?.find(
    (p) => String(p._id || p.id) === String(id)
  );


  const productImage =
    product?.image ||
    product?.img ||
    (Array.isArray(product?.images) ? product.images[0] : null);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="text-slate-400 text-sm animate-pulse">Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 text-slate-100">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center space-y-4 max-w-sm">
          <div className="text-lg font-semibold text-slate-200">Product Not Found</div>
          <div
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs text-indigo-400 hover:underline cursor-pointer font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-screen bg-slate-900 text-slate-100 p-4 md:p-8 flex justify-center items-start">
      <div className="w-full max-w-2xl space-y-4">
        
  
        <div
          onClick={() => navigate(-1)}
          className="inline-flex mt-10 items-center gap-2 text-xs text-slate-400 hover:text-slate-100 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to products</span>
        </div>

   
        <div className="bg-slate-800 md:h-[85vh] border border-slate-700 rounded-2xl p-6 shadow-xl space-y-6">
          
        
          <div className="w-full h-64 md:h-50 bg-slate-900 rounded-xl border border-slate-700 overflow-hidden flex items-center justify-center">
            {productImage ? (
              <img
                src={productImage}
                alt={product.title || product.name}
                className="w-full h-full object-contain p-4"
              />
            ) : (
              <div className="text-slate-500 text-xs uppercase tracking-wider font-medium">
                No Image Available
              </div>
            )}
          </div>

          
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
            {product.category ? (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 text-indigo-400 border border-slate-700">
                <Tag className="w-3.5 h-3.5" />
                {product.category}
              </span>
            ) : <div />}

            <span className="text-2xl font-bold text-indigo-400">
              ${product.price}
            </span>
          </div>

          
          <div className="space-y-2">
            <h1 className="text-xl md:text-2xl font-bold text-white">
              {product.title || product.name}
            </h1>
            <p className="text-slate-300 text-sm leading-relaxed">
              {product.description || "No description available for this product."}
            </p>
          </div>

          
          <div
           
           onClick={() => addItemToCart(product)}
           className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98] select-none"
         >
            <ShoppingCart className="w-4 h-4" />
            <span >Add to Cart</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailsPage;