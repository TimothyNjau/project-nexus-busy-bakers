import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SortState {
  sortBy: "price-asc" | "price-desc" | "name-asc" | "name-desc" | null;
}

const initialState: SortState = {
  sortBy: null,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortBy: (state, action: PayloadAction<SortState["sortBy"]>) => {
      state.sortBy = action.payload;
    },
    clearSort: (state) => {
      state.sortBy = null;
    },
  },
});

export const { setSortBy, clearSort } = sortSlice.actions;
export default sortSlice.reducer;
