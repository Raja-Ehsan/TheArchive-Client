import React, { useState } from 'react'
import "../css/Adminapproved.css"
import Heading from '../components/heading'
import Nav from '../components/nav'
import { OrderCard } from '../components/orderCard'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Adminpending = () => {
    const allOrders = useSelector((state) => state.reducers.orders);
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const keyword = query.get('order-state');

    return (
        <div className='order-page-container'>
            <Nav admin={true} />
            <div className="orders">
                <Heading item={`${keyword} Orders`} />
                <div className="orders-container">
                    {
                        allOrders?.orders.filter((item)=>item.state===keyword).map((item,index)=>{
                            return(
                                <>
                                <OrderCard {...item} state={keyword}  number={index} key={item._id}/>
                                </>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}
