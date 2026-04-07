import cartReducer from "@/store/cartSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        cart:cartReducer,
    }
})

export default store