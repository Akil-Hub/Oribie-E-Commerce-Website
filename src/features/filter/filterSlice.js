import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    query: "",
    isCategorySelected: false,
    selectedCategory: null,
    priceRange: null,
    itemsPerPage:12,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setIsCategorySelected: (state, action) => {
      state.isCategorySelected = action.payload;
    },
  },
});

export const {
  setQuery,
  setSelectedCategory,
  setIsCategorySelected,
  setPriceRange,
} = filterSlice.actions;
export default filterSlice.reducer;
