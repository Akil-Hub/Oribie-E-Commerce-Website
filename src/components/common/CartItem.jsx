import { addToCart, removeFromCart } from "@/store/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

 const CartItem = ({title,thumbnail,id,price}) => {
  

      const dispatch = useDispatch()


    const handleDelete = (id) => {
    dispatch(removeFromCart(id))
    toast.success('Product is deleted from cart.')
};
  return (
    <div className="flex items-center gap-4 p-4 border rounded-2xl mb-3">
      <img
        src={thumbnail}
        alt="Product"
        className="w-20 h-20 object-cover rounded-xl"
      />

      <div className="flex-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">${price}</p>
      </div>

      <button onClick={()=>handleDelete(id)} className="bg-red-500 text-white px-4 py-2 rounded-xl">
        Delete
      </button>
    </div>
  );
};

export default CartItem