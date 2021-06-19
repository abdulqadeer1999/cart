import React, { createContext, useReducer } from 'react'
import './Cart.css'

import {products} from "./Product"
import ContextCart from './ContextCart'
import {reducer} from "./reducer"

export const CartContext = createContext();

const initialState = {
   item : products,
   totalAmount : 0,
   totalItem : 0,   
};

function Cart() {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (
        <>
        <CartContext.Provider value={{...state}}>  
        <ContextCart />
        </CartContext.Provider>
        </>
    )
}

export default Cart
