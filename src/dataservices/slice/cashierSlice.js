import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cashier:null,
}

export const cashierSlice = createSlice({
  name: 'cashier',
  initialState,
  reducers: {
    setCashier: (state, action) => {
      state.cashier = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCashier } = cashierSlice.actions;

export const selectCashier = state => state.cashier.cashier;//Mengambil longtitude

export default cashierSlice.reducer