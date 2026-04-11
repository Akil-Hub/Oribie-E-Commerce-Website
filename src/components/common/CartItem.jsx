import { removeFromCart, updateQuantity } from "@/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const CartItem = ({ product }) => {
  const { title, thumbnail, id, price, quantity } = product;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Product is deleted from cart.");
  };

  return (
    <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full p-4 border rounded-2xl mb-3 gap-4">

      {/* Image + Title */}
      <div className="flex gap-4 items-center w-full sm:w-auto">
        <img
          src={thumbnail}
          alt="Product"
          className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl flex-shrink-0"
        />
        <div className="flex-1 sm:w-48 md:w-60">
          <h2 className="text-base sm:text-lg font-semibold line-clamp-2">{title}</h2>
          <p className="text-gray-600">${price}</p>
        </div>
      </div>

      {/* Quantity + Delete — row on mobile */}
      <div className="flex items-center justify-between w-full sm:w-auto gap-4 sm:gap-8">

        {/* Quantity Controls */}
        <div className="flex items-center text-xl sm:text-2xl">
          <span
            onClick={() => dispatch(updateQuantity({ id, type: 'decrease' }))}
            className="text-3xl sm:text-4xl cursor-pointer active:scale-95 duration-200 select-none"
          >-</span>
          <span className="mx-3 sm:mx-4 text-lg">{quantity ?? 1}</span>
          <span
            onClick={() => dispatch(updateQuantity({ id, type: 'increase' }))}
            className="text-3xl sm:text-4xl cursor-pointer active:scale-95 duration-200 select-none"
          >+</span>
        </div>

        {/* Delete Button */}
        <button
          onClick={() => handleDelete(id)}
          className="bg-red-500 text-white px-3 sm:px-4 h-9 sm:h-10 rounded-xl text-sm sm:text-base active:scale-95 duration-200 hover:bg-red-600"
        >
          Delete
        </button>

      </div>
    </section>
  );
};

export default CartItem;