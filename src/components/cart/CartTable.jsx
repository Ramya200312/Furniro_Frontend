import { useCart } from "../../context/cartContext";

const CartTable = ({ cartItems }) => {
  const { removeFromCart, updateQuantity } = useCart();

  if (cartItems.length === 0) {
    return <p className="text-gray-500">Your cart is empty.</p>;
  }

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="pb-4">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-b">
              
              {/* Product Info */}
              <td className="py-4 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <span>{item.name}</span>
              </td>

              {/* Price */}
              <td>Rs. {item.price}</td>

              {/* Quantity */}
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  className="w-16 border px-2 py-1 rounded"
                />
              </td>

              {/* Subtotal */}
              <td>Rs. {item.price * item.quantity}</td>

              {/* Remove */}
              <td>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  ✕
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;