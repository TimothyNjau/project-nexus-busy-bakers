import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./productsSlice";
import filterReducer from "./filterSlice";
import sortReducer from "./sortSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer.reducer,
    sort: sortReducer.reducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
