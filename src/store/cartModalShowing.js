
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: false,
};

const cartModalSlice = createSlice({
  name: "cart modal",
  initialState: initialState,
  reducers: {
    cartIsActive: (state) => {
      state.cart = true;
    },
    cartIsNonActive: (state) => {
      state.cart = false;
    },
  },
});

export const { cartIsActive, cartIsNonActive } = cartModalSlice.actions;
export default cartModalSlice.reducer;