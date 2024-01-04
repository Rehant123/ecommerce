import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state));
        },
        deleteFromCart(state, action) {
            const newState = state.filter(item => item.id !== action.payload.id);
            localStorage.setItem('cart', JSON.stringify(newState));
            return newState;
        },
        clearCart(state) {
            localStorage.removeItem('cart');
            return [];
        }
    }
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
