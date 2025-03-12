import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorite: localStorage.getItem("favorite")
        ? JSON.parse(localStorage.getItem("favorite"))
        : [],
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addToFavorite(state, action) {
            const { productId, productName, productImage, productPrice } = action.payload;

            // Check if product is already in favorites
            const exists = state.favorite.some((item) => item.productId === productId);

            if (!exists) {
                // Add product to favorite list
                state.favorite.push({ productId, productName, productImage, productPrice });
                localStorage.setItem("favorite", JSON.stringify(state.favorite));
            }
        },

        removeFromFavorite(state, action) {
            const { productId } = action.payload;
            state.favorite = state.favorite.filter((item) => item.productId !== productId);
            localStorage.setItem("favorite", JSON.stringify(state.favorite));
        },
    },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
