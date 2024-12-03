import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    statusTab: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex((item) => item.productId === productId);

            if (indexProductId >= 0) {
                // Update quantity if product already exists
                state.items[indexProductId].quantity += quantity;
            } else {
                // Add new product to the cart
                state.items.push({ productId, quantity });
            }

            // Update localStorage
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeQuantity(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex((item) => item.productId === productId);

            if (indexProductId >= 0) {
                if (quantity > 0) {
                    // Update the quantity
                    state.items[indexProductId].quantity = quantity;
                } else {
                    // Remove the product if quantity is zero or less
                    state.items = state.items.filter((item) => item.productId !== productId);
                }

                // Update localStorage
                localStorage.setItem("carts", JSON.stringify(state.items));
            }
        },
        toggleStatusTab(state) {
            // Simplify the toggle logic
            state.statusTab = !state.statusTab;
        },
    },
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
