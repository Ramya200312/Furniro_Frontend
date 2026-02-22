import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import { useCart } from "../../context/cartContext";

export default function ProductCard() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const repeatedProducts = Array(12)
    .fill(products)
    .flat();

  const PRODUCTS_PER_PAGE = 16;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(repeatedProducts.length / PRODUCTS_PER_PAGE);
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = repeatedProducts.slice(
    start,
    start + PRODUCTS_PER_PAGE
  );

  const goToProduct = (id) => navigate(`/product/${id}`);
  console.log(products);

  return (
    <>
      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentProducts.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="group bg-[#F4F5F7] overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* IMAGE */}
            <div
              className="relative overflow-hidden cursor-pointer"
              onClick={() => goToProduct(product.id)}
            >
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

              {/* HOVER */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="bg-white text-[#B88E2F] px-6 py-2 font-semibold mb-3 hover:bg-[#B88E2F] hover:text-white transition"
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
            <div
              className="p-4 cursor-pointer"
              onClick={() => goToProduct(product.id)}
            >
              <h3 className="font-semibold text-lg">{product.name}</h3>

              <p className="text-gray-400 text-sm">
                {product.description}
              </p>

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

      {/* PAGINATION */}
      <div className="flex justify-center gap-3 pb-12">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 border ${
                currentPage === page
                  ? "bg-[#B88E2F] text-white border-[#B88E2F]"
                  : "bg-[#F9F1E7]"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() =>
            currentPage < totalPages &&
            setCurrentPage(currentPage + 1)
          }
          className={`px-4 h-10 border bg-white ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
}