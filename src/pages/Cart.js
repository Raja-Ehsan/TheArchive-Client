import React from 'react'
import '../css/cart.css'
import Footer from '../components/footer'
import Heading from '../components/heading'
import Nav from '../components/nav'
import { Subscribe } from '../components/subscribe'
import { CartCard } from '../components/cartCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Cart = () => {
    const cart = useSelector((state) => state.reducers.cart);
    const total = cart.reduce((accumulator, object) => {
        return accumulator + object.bookPrice*object.quantity;
    }, 0)
    return (
        <div className='page-sizing'>
            <Nav />
            <div className='whole-container'>
                <Heading item='My Cart' />
                <div className="cart-container">
                    <div className="cart-content">
                        {
                            cart.map((item) => {
                                return (
                                    <CartCard {...item} key={item._id} />
                                )
                            })
                        }
                    </div>
                    <div className="pricing">
                        <div>
                            <div className="horizontal">
                                <h3 className='item-price'>Sub-Total</h3>
                                <h3>{total}$</h3>
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
                            <div style={{ color: 'red' }} className="horizontal">
                                <h3 className='item-price'>Total</h3>
                                <h3>{cart.length?total + 10 + total*.05:0}$</h3>
                            </div>
                        </div>
                        <Link to={`/checkout`}><button disabled={cart.length?false:true} >Proceed to Checkout</button></Link>
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}
