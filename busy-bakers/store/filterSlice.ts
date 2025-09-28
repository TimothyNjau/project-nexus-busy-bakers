import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  category: string | null;
}

const initialState: FilterState = {
  category: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.category = action.payload;
    },
    clearCategory: (state) => {
      state.category = null;
    },
  },
});

export default filterSlice
