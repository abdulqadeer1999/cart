import React, { createContext, useState } from 'react'
import './Cart.css'

import {products} from "./Product"
import ContextCart from './ContextCart'

export const CartContext = createContext();


function Cart() {

    
    return (
        <>
        <CartContext.Provider value={products}>
        <ContextCart />
        </CartContext.Provider>
        </>
    )
}

export default Cart
