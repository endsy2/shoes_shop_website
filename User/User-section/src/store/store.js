import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart'
import favoriteReducer from './favorite'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorite: favoriteReducer
    }
})

export default store;