import cartReducer from "@/features/cart/cartSlice";
import filterReducer from "@/features/filter/filterSlice";
import productReducer from "@/features/products/productSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products:productReducer,
    filter:filterReducer,
  },
});

export default store;
