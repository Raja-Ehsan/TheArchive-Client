import React from 'react'
import "../css/cartCard.css"
export const CartCard = (props) => {
    return (
        <>
            <div className="cart-item-content">
                <img className='cart-item-img' src={require('../images/book1.jpg')} alt="" />
                <div className="cart-item-info">
                    <h2 className='title'>Harry Potter</h2>
                    <h3 className='item-price'>Price:<span >16$</span></h3>
                    <div className="horizontal" style={props.admin?{justifyContent:'flex-end'}:{}}>
                        <div>
                            <label htmlFor="counter">Quantity:</label>
                            <input type="number" min={'0'} />
                        </div>
                       {!props.admin? <div>
                            <button> Remove </button>
                        </div>
                        :<></>}
                    </div>

                </div>
            </div>
        </>
    )
}
