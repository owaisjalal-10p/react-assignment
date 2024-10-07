import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../types/Product";

export interface ProductState {
  value: Product[];
}

const initialState: ProductState = {
  value: [],
};

export const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    loadProduct: (state, action: PayloadAction<Product[]>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
