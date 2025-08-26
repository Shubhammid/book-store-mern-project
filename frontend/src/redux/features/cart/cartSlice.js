import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Added to Cart",
          text: `Book has been added.`,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          background: "#f0fdf4",
          color: "#14532d",
          customClass: {
            popup: "rounded-xl shadow-lg",
          },
        });
      } else {
        Swal.fire({
          title: "Already in Cart",
          text: `Book is already in your cart.`,
          icon: "warning",
          showCancelButton: false,
          confirmButtonColor: "#3b82f6",
          confirmButtonText: "Got it",
          background: "#fff7ed",
          color: "#7c2d12",
          customClass: {
            popup: "rounded-xl shadow-lg",
            confirmButton: "px-4 py-2 rounded-md font-semibold",
          },
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
