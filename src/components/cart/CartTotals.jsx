import { useCart } from "../../context/cartContext";

const CartTotals = () => {
  const { totalPrice } = useCart();

  return (
    <div className="bg-[#F9F1E7] p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6">Cart Totals</h2>

      <div className="flex justify-between mb-4">
        <span>Subtotal</span>
        <span>Rs. {totalPrice}</span>
      </div>

      <div className="flex justify-between font-bold text-lg mb-6">
        <span>Total</span>
        <span>Rs. {totalPrice}</span>
      </div>

      <button className="w-full border border-black py-3 rounded hover:bg-black hover:text-white transition">
        Check Out
      </button>
    </div>
  );
};

export default CartTotals;