import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },

  reducers: {
    addItems: (state, actions) => {
      state.items.push(actions.payload);
    },

    removeItem: (state, actions) => {
      state.items = state.items.filter((item) => item.id !== actions.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },

    // changeQuantity: (state, actions) => {
    //   state.items = state.items.filter((item) =>
    //     item.id === actions.payload.id
    //       ? (item.qty = actions.payload.qty)
    //       : item.qty
    //   );
    // },

    changeQuantity: (state, actions) => {
      state.items = state.items
        .filter((item) =>
          item.id === actions.payload.id
            ? (item.qty = actions.payload.qty)
            : item.qty
        )
        .filter((item) => item.qty !== 0);
    },
  },
});

export const {
  addItems,
  clearCart,
  removeItem,
  changeQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;