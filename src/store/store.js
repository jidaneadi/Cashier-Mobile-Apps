import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../dataservices/slice/counterslice";
import cartSlice from "../dataservices/slice/cartSlice";
import cashierSlice from "../dataservices/slice/cashierSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartSlice,
    cashier: cashierSlice,
  },
});
