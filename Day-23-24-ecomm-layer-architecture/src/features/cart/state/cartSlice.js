import { createSlice } from "@reduxjs/toolkit";

// Safely parse initial cart once at load time
const initialCart = JSON.parse(localStorage.getItem("cartItem")) || [];

// Helper function to calculate totals
const calculateTotals = (cartItems = []) => {
  return cartItems.reduce(
    (acc, item) => {
      const quantity = item.quantity || 1;
      const price = Number(item.price) || 0;

      acc.totalQuantity += quantity;
      acc.totalPrice += price * quantity;

      return acc; // CRITICAL: Always return the accumulator
    },
    { totalQuantity: 0, totalPrice: 0 }
  );
};

// Calculate totals from initial stored cart
const initialTotals = calculateTotals(initialCart);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: initialCart,
    totalQuantity: initialTotals.totalQuantity,
    totalPrice: initialTotals.totalPrice,
  },

  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      // Safe string comparison handling both _id and id
      const existingItem = state.cart.find(
        (item) => String( item.id) === String( newItem.id)
      );

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.cart.push({ ...newItem, quantity: 1 });
      }

      // CRITICAL: Calculate totals using the UPDATED state.cart array
      const { totalQuantity, totalPrice } = calculateTotals(state.cart);
      state.totalQuantity = totalQuantity;
      state.totalPrice = Number(totalPrice.toFixed(2));

      // Persist updated array to LocalStorage
      localStorage.setItem("cartItem", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;