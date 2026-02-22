import { useState } from "react";

export default function ProductInfo({ product }) {
  const sizes = ["L", "XL", "XS"];
  const colors = ["#816DFA", "#000000", "#B88E2F"];

  const [size, setSize] = useState("L");
  const [color, setColor] = useState(colors[0]);
  const [qty, setQty] = useState(1);

  return (
    <div>
      {/* Title */}
      <h1 className="text-3xl font-semibold">{product.name}</h1>
      <p className="text-2xl text-gray-400 mt-2">
        Rs. {product.price.toLocaleString()}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-3 mt-4 text-sm">
        <span className="text-yellow-400">★★★★★</span>
        <span className="text-gray-400">5 Customer Review</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-4 max-w-md">
        {product.description}
      </p>

      {/* Size */}
      <div className="mt-6">
        <p className="text-sm text-gray-500">Size</p>
        <div className="flex gap-3 mt-2">
          {sizes.map(s => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-3 py-1 border rounded ${
                size === s ? "bg-[#B88E2F] text-white" : ""
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className="mt-4">
        <p className="text-sm text-gray-500">Color</p>
        <div className="flex gap-3 mt-2">
          {colors.map(c => (
            <div
              key={c}
              onClick={() => setColor(c)}
              className={`w-6 h-6 rounded-full cursor-pointer border ${
                color === c ? "ring-2 ring-black" : ""
              }`}
              style={{ background: c }}
            />
          ))}
        </div>
      </div>

      {/* Quantity + Buttons */}
      <div className="flex gap-4 mt-6 items-center">
        {/* Qty */}
        <div className="flex border rounded">
          <button
            onClick={() => setQty(q => Math.max(1, q - 1))}
            className="px-3"
          >
            -
          </button>
          <span className="px-4 py-2">{qty}</span>
          <button onClick={() => setQty(q => q + 1)} className="px-3">
            +
          </button>
        </div>

        {/* Buttons */}
        <button className="border px-6 py-3 rounded-lg hover:bg-black hover:text-white">
          Add To Cart
        </button>
        <button className="border px-6 py-3 rounded-lg">
          + Compare
        </button>
      </div>

      {/* Meta */}
      <div className="border-t mt-8 pt-6 text-sm text-gray-500 space-y-2">
        <p>SKU : SS001</p>
        <p>Category : Sofas</p>
        <p>Tags : Sofa, Chair, Home, Shop</p>
        <p>Share : FB | IN | TW</p>
      </div>
    </div>
  );
}
