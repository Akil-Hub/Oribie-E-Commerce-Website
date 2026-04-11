import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("https://dummyjson.com/products?limit=0");
    return res.data.products;
    
  },
);
const productSlice = createSlice({
  name: "products",
  initialState: {
    product: [],
  },

  extraReducers: (builder) => {


    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productSlice.reducer