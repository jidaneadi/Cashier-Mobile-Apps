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
    addItemCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.jumlah += 1;
      }
    },
    removeFromCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.jumlah > 0) {
        item.jumlah -= 1;
      }
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addToCart, addItemCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
