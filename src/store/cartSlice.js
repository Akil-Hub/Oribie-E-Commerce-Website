import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeFromCart:(state,action )=>{
            state.cart = state.cart.filter((product )=>product.id !== action.payload)
        },
        removeAll:(state,action)=>{
            state.cart = []
        }
    }

})

export const {addToCart,removeFromCart,removeAll}=cartSlice.actions
export default cartSlice.reducer