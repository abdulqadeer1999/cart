import React from 'react'
import './Cart.css'
import { Scrollbars } from 'react-custom-scrollbars-2';

function Cart() {
    return (
        <div>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                    <h3>Continue shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>7</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>shopping cart</h1>
                <p className="total-items">you have <span className="total-items-count">7</span> items in shopping cart</p>

                <div className="cart-items">
                    <div className="cart-items-container">
                    <Scrollbars>
       
                        <div className="items-info">
                            <div className='product-img'>
                                <img src="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg" alt="image" />
                            </div>
                            <div className="title">
                                <h2>samsung S21</h2>
                                <p>black color</p>
                            </div>
                            <div className="add-minus-quantity">
                                <i class="fas fa-minus minus"></i>
                                <input type="text" placeholder="2" />
                                <i class="fas fa-plus add"></i>
                            </div>
                            <div className="price">
                                <h3>2000 Rs</h3>
                            </div>
                            <div className="remove-item">
                                <i class="fas fa-trash-alt remove"></i>
                            </div>
                            <hr />
                        </div>
                        <div className="items-info">
                            <div className='product-img'>
                                <img src="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg" alt="image" />
                            </div>
                            <div className="title">
                                <h2>samsung S21</h2>
                                <p>black color</p>
                            </div>
                            <div className="add-minus-quantity">
                                <i class="fas fa-minus minus"></i>
                                <input type="text" placeholder="2" />
                                <i class="fas fa-plus add"></i>
                            </div>
                            <div className="price">
                                <h3>2000 Rs</h3>
                            </div>
                            <div className="remove-item">
                                <i class="fas fa-trash-alt remove"></i>
                            </div>
                            <hr />
                        </div>
                        <div className="items-info">
                            <div className='product-img'>
                                <img src="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg" alt="image" />
                            </div>
                            <div className="title">
                                <h2>samsung S21</h2>
                                <p>black color</p>
                            </div>
                            <div className="add-minus-quantity">
                                <i class="fas fa-minus minus"></i>
                                <input type="text" placeholder="2" />
                                <i class="fas fa-plus add"></i>
                            </div>
                            <div className="price">
                                <h3>2000 Rs</h3>
                            </div>
                            <div className="remove-item">
                                <i class="fas fa-trash-alt remove"></i>
                            </div>
                        </div>
                        <div className="items-info">
                            <div className='product-img'>
                                <img src="https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg" alt="image" />
                            </div>
                            <div className="title">
                                <h2>samsung S21</h2>
                                <p>black color</p>
                            </div>
                            <div className="add-minus-quantity">
                                <i class="fas fa-minus minus"></i>
                                <input type="text" placeholder="2" />
                                <i class="fas fa-plus add"></i>
                            </div>
                            <div className="price">
                                <h3>2000 Rs</h3>
                            </div>
                            <div className="remove-item">
                                <i class="fas fa-trash-alt remove"></i>
                            </div>
                        </div>
                        </Scrollbars>
                    </div>
                </div>
                <div className="card-total">
                <h3>Cart Total: <span>22000 Rs</span> </h3>
                <button>Check out</button>
                </div>
            </section>
        </div>
    )
}

export default Cart
