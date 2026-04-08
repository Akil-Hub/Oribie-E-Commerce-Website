import { addToCart, removeFromCart, updateQuantity } from "@/features/cart/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CartItem = ({product}) => {
  const { title, thumbnail, id, price,quantity } = product
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Product is deleted from cart.");
  };
  return (
    <section className="flex justify-between items-center w-full  p-4 border rounded-2xl mb-3">
     <div className="flex gap-5 items-center">
       <img
        src={thumbnail}
        alt="Product"
        className="w-20 h-20 object-cover rounded-xl"
      />
            <div className="w-60">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">${price}</p>
      </div>
     </div>



      <div className="flex  text-2xl items-center ">
        <span onClick={()=>dispatch(updateQuantity({id,type:'decrease'}))} className="text-4xl cursor-pointer active:scale-95 duration-200">-</span>

        <span className="mx-4">{quantity ?? 1}</span>
        <span onClick={()=>dispatch(updateQuantity({id,type:'increase'}))} className="text-4xl cursor-pointer active:scale-95 duration-200">+</span>

      </div>

      <button
        onClick={() => handleDelete(id)}
        className="bg-red-500 text-white px-4 h-10 rounded-xl"
      >
        Delete
      </button>
    </section>
  );
};

export default CartItem;
