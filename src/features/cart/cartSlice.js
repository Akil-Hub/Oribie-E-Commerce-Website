import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload,
      );
    },
    removeAll: (state, action) => {
      state.cartItems = [];
    },

    
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity =
            type === "increase" ? item.quantity + 1 : item.quantity - 1;
          if (newQuantity > 0) {
            toast.success(
              type === "increase" ? "Quantity increased" : "Quantity decreased",
            );
            return { ...item, quantity: newQuantity };
          }
          return item;
        }
        return item;
      });
    },
  },
});

export const { addToCart, removeFromCart, removeAll, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
