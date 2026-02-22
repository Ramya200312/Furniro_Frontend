import { useParams } from "react-router-dom";
import { products } from "../../data/products";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";

export default function ProductDetails() {
  const { id } = useParams();
  const productId = Number(id);

  // Find clicked product
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 className="text-center py-20">Product Not Found</h2>;
  }

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#F9F1E7] py-4 text-sm">
        <div className="max-w-7xl mx-auto px-6 text-gray-600">
          Home &gt; Shop &gt;
          <span className="text-black font-medium ml-2">
            {product.name}
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </div>

      {/* Tabs */}
      <ProductTabs product={product} />
      <RelatedProducts currentId={productId} />
    </div>
  );
}
