import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    favorite: localStorage.getItem("favorite") ? JSON.parse(localStorage.getItem("favorite")) : [],
    checking: false
}
const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addtofavorite(state, action) {
            const { productId } = action.payload;
            state.favorite.push(productId)
            localStorage.setItem('favorite', JSON.stringify(state.favorite))
        },
        removeFromFavorite(state, action) {
            const { productId } = action.payload;
            state.favorite = state.favorite.filter((element) => (element !== productId))
            localStorage.setItem('favorite', JSON.stringify(state.favorite))
        }

    }
})
export const { addtofavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;