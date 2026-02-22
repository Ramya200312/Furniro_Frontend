import ShopHero from "./ShopHero";
import ShopFilterBar from "./ShopFilterBar";
import ProductCard from "./ProductCard";

export default function Shop() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      <ShopHero />
      <ShopFilterBar />
      <ProductCard /> 
    </div>
  );
}
