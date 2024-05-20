import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // state.items = [...state.items, action.payload];
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload.id;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;
export const selectCartTotal = state => state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
