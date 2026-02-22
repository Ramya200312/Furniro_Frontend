import CartHero from "./CartHero";
import CartTable from "./CartTable";
import CartTotals from "./CartTotals";
import { useCart } from "../../context/cartContext";

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <CartHero />

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Cart Table */}
        <div className="lg:col-span-2">
          <CartTable cartItems={cartItems} />
        </div>

        {/* Cart Totals */}
        <div>
          <CartTotals />
        </div>

      </div>
    </div>
  );
};

export default Cart;