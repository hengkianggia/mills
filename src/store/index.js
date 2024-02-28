import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import cartModalReducer from "./cartModalShowing";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartModal: cartModalReducer,
  },
});

export default store;