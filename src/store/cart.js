import { createSlice } from "@reduxjs/toolkit";

let initialCart = {
  items: [
    {
      id: 1,
      name: "MILLS Sepatu Olahraga Treximo Saga V2 Lime. Green / White / Black 9101206",
      price: 499.999,
      description: "This is a product 1",
    },
  ],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;