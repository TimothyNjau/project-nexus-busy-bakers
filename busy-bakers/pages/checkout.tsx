import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { CartItem } from "@/store/cartSlice";
import Image from "next/image";

const Checkout: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const total = cart.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6">
        Checkout
      </h1>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200 mb-6">
            {cart.map((item: CartItem, idx: number) => (
              <li key={idx} className="flex items-center gap-4 py-4">
                <div className="w-20 h-20 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-gray-500 text-sm">
                    Ksh {item.price} x {item.quantity}
                  </div>
                </div>
                <div className="font-bold">
                  Ksh {item.price * item.quantity}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-6">
            <span className="font-semibold text-lg">Total:</span>
            <span className="font-bold text-xl">Ksh {total}</span>
          </div>
          <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition-colors">
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
