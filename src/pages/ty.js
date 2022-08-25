import React from 'react'
import { useLocation } from 'react-router-dom';
import '../css/ty.css'

export const Ty = () => {
    const { search } = useLocation();
const query = new URLSearchParams(search);
const keyword = query.get('tracking');
  return (
    <div className='ty'>
        <div className="thanks">
                <h1>Thank You for Ordering</h1>
                <h2>Your Tracking Id is :</h2>
                <h3>{keyword}</h3>
                <h4>Save this id to track your order</h4>
        </div>
    </div>
  )
}
