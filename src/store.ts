import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productSlice";
import cartReducer from "./reducer/cartSlice";

export const store = configureStore({
  reducer: {
    Product: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
