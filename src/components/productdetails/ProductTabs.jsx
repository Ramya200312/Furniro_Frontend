import { useState } from "react";

export default function ProductTabs({ product }) {
  const [tab, setTab] = useState("desc");

  return (
    <div className="border-t mt-16">
      {/* Tabs */}
      <div className="flex justify-center gap-10 py-6 text-gray-400">
        <button
          onClick={() => setTab("desc")}
          className={tab === "desc" ? "text-black font-medium" : ""}
        >
          Description
        </button>
        <button
          onClick={() => setTab("info")}
          className={tab === "info" ? "text-black font-medium" : ""}
        >
          Additional Information
        </button>
        <button
          onClick={() => setTab("reviews")}
          className={tab === "reviews" ? "text-black font-medium" : ""}
        >
          Reviews [5]
        </button>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 text-center text-gray-500">
         {tab === "desc" && (
          <div className="space-y-6 text-left">
            <p className="text-gray-500 whitespace-pre-line">
              {product.longDescription || product.description}
            </p>

            {product.descriptionImages && (
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                {product.descriptionImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="desc"
                    className="bg-[#F9F1E7] p-6 rounded-lg"
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "info" && <p>More info about {product.name}</p>}
        {tab === "reviews" && <p>Customer reviews coming soon.</p>}
      </div>
    </div>
  );
}
