"use client"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: []
}

export const cartSlice = createSlice({

    name: "cart",

    initialState: initialState,

    reducers: {

        addToCart: (state, action) => {

            const { product, qty } = action.payload

            state.cart = [...state.cart , { ...product, qty: qty }]
            
        },

        removeFromCart: (state, action) => {

            state.cart = state.cart.filter(p => p.id !== action.payload)
            
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
