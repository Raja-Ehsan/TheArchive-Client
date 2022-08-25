import React, { useState } from 'react';
import '../css/Checkout.css';
import Heading from "../components/heading";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
    const navigate=useNavigate();
    const [formdata,setFormData]=useState({});
    const cart = useSelector((state) => state.reducers.cart);
    const handleChange=(e)=>{
        setFormData((prev)=>{
            return{
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }
    const total = cart.reduce((accumulator, object) => {
        return accumulator + object.bookPrice*object.quantity;
    }, 0)
    const handleSubmit=()=>{
        fetch("http://localhost:1000/order/addOrder", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                products:cart,
                User:formdata,
                state:'Pending',
                total:total + 10 + total*.05
            })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            navigate(`/ty?tracking=${res.id}`);
        })
    }
    console.log(formdata)
        return (
        <div className='checkout'>
            <div className="checkout-form">
                <Heading item='Checkout'/>
                <h2>Billing Address:</h2>
                <div className="resp-element">
                    <input type="text" id='name' placeholder='Name' name='name' onChange={handleChange} required={true}/>
                    <input type="email" id='email' placeholder='Email' name='email' onChange={handleChange }required={true}/>
                </div>
                <input type="text" id='street1' placeholder='Street Address 1' name='address1'onChange={handleChange}required={true}/>
                <br />
                <input type="text" id='street2' placeholder='Street Address 2' name='address2'onChange={handleChange}required={true}/>
                <div className="resp-element">
                    <input type="text" id='city' placeholder='City' name='city' onChange={handleChange}required={true}/>
                    <input type="text" id='state' placeholder='State' name='state' onChange={handleChange}required={true}/>
                    <input type="number" id='zipcode' placeholder='Zipcode'name='zipcode' onChange={handleChange}required={true}/>
                </div>
                <div className="resp-element1">
                    <div>
                    <input type="checkbox" id='same' /> <label htmlFor="same">Shipping address is the same as my billing address</label>
                    </div>
                    <div> <input type="checkbox" id='next' /> <label htmlFor="next">Save this information for next time</label>
                    </div>
                </div>
                <button onClick={handleSubmit} >Proceed</button>
            </div>
        </div>
    )
}