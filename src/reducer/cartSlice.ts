import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CartItem from "../types/CartItem";

export interface CartState {
  value: Record<number, CartItem>;
}

const initialState: CartState = {
  value: {},
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existingItem = state.value[item.product.id];

      if (existingItem) {
        existingItem.count += item.count;
      } else {
        state.value[item.product.id] = item;
      }
    },
    loadCart: (state, action: PayloadAction<CartItem[]>) => {
      state.value = action.payload.reduce((acc, item) => {
        acc[item.product.id] = item;
        return acc;
      }, {} as Record<number, CartItem>);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      delete state.value[productId];
    },
  },
});

export const { addToCart, loadCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
