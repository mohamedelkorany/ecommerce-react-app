import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existItem = state.items.find((x) => x.id === item.id);
      
            if (existItem) {
              existItem.quantity += 1;
            } else {
              state.items.push({ ...item, quantity: 1 });
            }
          },

        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },

        increaseQuantity: (state, action) => {
            const item = state.items.find((x) => x.id === action.payload);
            if (item) {
              item.quantity += 1;
            }
          },

          decreaseQuantity: (state, action) => {
            const item = state.items.find((x) => x.id === action.payload);
            if (item && item.quantity > 1) {
              item.quantity -= 1;
            }
          },
    },
});

export const { addToCart, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;