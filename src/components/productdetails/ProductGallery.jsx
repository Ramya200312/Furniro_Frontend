import { useState } from "react";

export default function ProductGallery({ product }) {
  const images = product.images || [product.image]; // fallback

  const [active, setActive] = useState(images[0]);

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setActive(img)}
            className={`w-20 h-20 object-cover cursor-pointer rounded bg-[#F9F1E7] p-2 ${
              active === img ? "border-2 border-[#B88E2F]" : ""
            }`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="bg-[#F9F1E7] p-6 rounded-lg flex-1">
        <img src={active} className="w-full object-contain" />
      </div>
    </div>
  );
}
