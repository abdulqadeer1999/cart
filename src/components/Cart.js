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
    
    // to delete individual items from cart
    const removeItem = (id) => {
           return dispatch ({
               type : "REMOVE_ITEM",
               payload : id,
           })
    }

    // clear the cart

const clearCart = () => {
    return dispatch ({
        type: "CLEAR_CART",
        
    });
}
    return (
        <>
        <CartContext.Provider value={{...state,removeItem,clearCart}}>  
        <ContextCart />
        </CartContext.Provider>
        </>
    )
}

export default Cart
