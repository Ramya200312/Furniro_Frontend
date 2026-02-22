import { useState } from "react";
import { useCart } from "../../context/cartContext"; 
import {products} from "../../data/products";

export default function ProductsSection() {

  const { addToCart } = useCart(); 
  const [visibleCount, setVisibleCount] = useState(8);

  const repeatingProd = Array(Math.ceil(visibleCount / products.length))
  .fill(products)
  .flat();
  
  return (
    <section className="py-16 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Products
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* {products.map((product) => ( */}
          {repeatingProd.slice(0, visibleCount).map((product,index) => (
            <div
              // key={product.id}
              key={`${product.id}-${index}`}
              className="group bg-[#F4F5F7] shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover"
                />

                {/* BADGE */}
                {product.badge && (
                  <span
                    className={`absolute top-3 right-3 text-white text-xs px-3 py-1 rounded-full ${product.badgeColor}`}
                  >
                    {product.badge}
                  </span>
                )}

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition">
                  <button
                    onClick={() => addToCart(product)}  
                   
                    className="bg-white text-yellow-600 px-6 py-2 font-semibold mb-3 hover:bg-yellow-600 hover:text-white transition"
                  >
                    Add to cart
                  </button>

                  <div className="text-white text-sm flex gap-4">
                    <span>Share</span>
                    <span>Compare</span>
                    <span>Like</span>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-400 text-sm">
                  {product.description}
                </p>

                {/* PRICE */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-bold text-gray-800">
                    Rp {product.price.toLocaleString()}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      Rp {product.oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          
            <button
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="border border-yellow-600 text-yellow-600 px-8 py-3 hover:bg-yellow-600 hover:text-white transition"
            >
              Show More
            </button>
         
        </div>
      </div>
    </section>
  );
}
