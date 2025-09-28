import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "@/interfaces";

export interface ProductsState {
  items: ProductProps[];
}

const initialState: ProductsState = {
  items: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductProps[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
