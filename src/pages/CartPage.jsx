import CartItem from "@/components/common/CartItem";
import { addToCart, removeAll } from "@/store/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.reduce((sum, item) => (sum = sum + item.price), 0);


  const handlePayment = (params) => {
    
    setShowModal(true)
    dispatch(removeAll())
    
  };
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart?.length < 1 ? <p className="flex h-70 justify-center items-center text-4xl font-semibold">Cart is empty please buy something</p>:cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}

      {/* Checkout Section */}
      <div className="mt-6 p-4 border rounded-2xl flex justify-between items-center">
        <h2 className="text-lg font-semibold">Total: ${total}</h2>

        <button
                onClick={handlePayment}

          className="bg-green-600 text-white px-6 py-2 rounded-xl active:scale-90 duration-500 transition-all"
        >
          Proceed to Checkout
        </button>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold">Order Confirmed! 🎉</h2>
            <p className="text-gray-600">Your product is on the way.</p>
            <p className="text-lg font-semibold">Total Paid: ${total}</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-green-600 text-white px-6 py-2 rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default CartPage;
