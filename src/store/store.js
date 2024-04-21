import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../dataservices/slice/counterslice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
  },
})