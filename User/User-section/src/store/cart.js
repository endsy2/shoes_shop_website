import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("carts")
        ? JSON.parse(localStorage.getItem("carts"))
        : [], // Fallback to an empty array
    statusTab: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity, price } = action.payload;

            // Find index of the product in the cart
            const indexProductId = state.items.findIndex((item) => item.productId === productId);

            if (indexProductId >= 0) {
                // If product exists, increase quantity
                state.items[indexProductId].quantity += quantity;
            } else {
                // If product doesn't exist, add new item
                state.items.push({ productId, quantity, price });
            }

            // Save updated cart to localStorage
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        changeQuantity(state, action) {
            const { productId, quantity } = action.payload;

            const indexProductId = state.items.findIndex((item) => item.productId === productId);

            if (indexProductId >= 0) {
                if (quantity > 0) {
                    // Update quantity if greater than zero
                    state.items[indexProductId].quantity = quantity;
                } else {
                    // Remove item if quantity is zero or less
                    state.items = state.items.filter((item) => item.productId !== productId);
                }

                // Save updated cart to localStorage
                localStorage.setItem("carts", JSON.stringify(state.items));
            }
        },
        removeFromCart(state, action) {
            const { productId } = action.payload;

            // Filter out the item to remove it
            state.items = state.items.filter((item) => item.productId !== productId);

            // Save updated cart to localStorage
            localStorage.setItem("carts", JSON.stringify(state.items));
        },
        toggleStatusTab(state) {
            // Toggle the statusTab state
            state.statusTab = !state.statusTab;
        },
    },
});

export const { addToCart, changeQuantity, removeFromCart, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
