import cartReducer from "@/features/cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
