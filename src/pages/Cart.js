import React from 'react'
import '../css/cart.css'
import Footer from '../components/footer'
import Heading from '../components/heading'
import Nav from '../components/nav'
import { Subscribe } from '../components/subscribe'

export const Cart = () => {
    return (
        <div className='page-sizing'>
            <Nav />
            <div className='whole-container'>
                <Heading item='My Cart' />
                <div className="cart-container">
                    <div className="cart-content">
                        <div className="cart-item-content">
                            <img className='cart-item-img' src={require('../images/book1.jpg')} alt="" />
                            <div className="cart-item-info">
                                <h2 className='title'>Harry Potter</h2>
                                <h3 className='item-price'>Price:<span >16$</span></h3>
                                <div className="horizontal">
                                    <div>
                                        <label htmlFor="counter">Quantity:</label>
                                        <input type="number" min={'0'} />
                                    </div>
                                    <div>
                                        <button> Remove </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cart-item-content">
                            <img className='cart-item-img' src={require('../images/book2.jpg')} alt="" />
                            <div className="cart-item-info">
                                <h2 className='title'>Harry Potter</h2>
                                <h3 className='item-price'>Price:<span >16$</span></h3>
                                <div className="horizontal">
                                    <div>
                                        <label htmlFor="counter">Quantity:</label>
                                        <input type="number" min={'0'} />
                                    </div>
                                    <div>
                                        <button> Remove </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cart-item-content">
                            <img className='cart-item-img' src={require('../images/book3.jpg')} alt="" />
                            <div className="cart-item-info">
                                <h2 className='title'>Harry Potter</h2>
                                <h3 className='item-price'>Price:<span >16$</span></h3>
                                <div className="horizontal">
                                    <div>
                                        <label htmlFor="counter">Quantity:</label>
                                        <input type="number" min={'0'} />
                                    </div>
                                    <div>
                                        <button> Remove </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cart-item-content">
                            <img className='cart-item-img' src={require('../images/book4.jpg')} alt="" />
                            <div className="cart-item-info">
                                <h2 className='title'>Harry Potter</h2>
                                <h3 className='item-price'>Price:<span >16$</span></h3>
                                <div className="horizontal">
                                    <div>
                                        <label htmlFor="counter">Quantity:</label>
                                        <input type="number" min={'0'} />
                                    </div>
                                    <div>
                                        <button> Remove </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                    <div className="pricing">
                        <div>
                            <div className="horizontal">
                                <h3 className='item-price'>Sub-Total</h3>
                                <h3>$200</h3>
                            </div>
                        </div>
                        <div>
                            <div className="horizontal">
                                <h3 className='item-price'>Tax</h3>
                                <h3>5%</h3>
                            </div>
                        </div>
                        <div>
                            <div className="horizontal">
                                <h3 className='item-price'>Shipping</h3>
                                <h3>10$</h3>
                            </div>
                        </div>
                        <div>
                            <div style={{color:'red'}} className="horizontal">
                                <h3 className='item-price'>Total</h3>
                                <h3>$180</h3>
                            </div>
                        </div>
                            <button>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}
