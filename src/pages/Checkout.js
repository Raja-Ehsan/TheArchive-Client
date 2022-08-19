import React from 'react';
import '../css/Checkout.css';
import Heading from "../components/heading";

export const Checkout = () => {
    return (
        <div className='checkout'>
            <div className="checkout-form">
                <Heading item='Checkout'/>
                <h2>Billing Address:</h2>
                <div className="resp-element">
                    <input type="text" id='name' placeholder='Name' />
                    <input type="email" id='email' placeholder='Email' />
                </div>
                <input type="text" id='street1' placeholder='Street Address 1' />
                <br />
                <input type="text" id='street2' placeholder='Street Address 2' />
                <div className="resp-element">
                    <input type="text" id='city' placeholder='City' />
                    <input type="text" id='state' placeholder='State' />
                    <input type="number" id='zipcode' placeholder='Zipcode' />
                </div>
                <div className="resp-element1">
                    <div>
                    <input type="checkbox" id='same' /> <label htmlFor="same">Shipping address is the same as my billing address</label>
                    </div>
                    <div> <input type="checkbox" id='next' /> <label htmlFor="next">Save this information for next time</label>
                    </div>
                </div>
                <button>Proceed</button>
            </div>
        </div>
    )
}