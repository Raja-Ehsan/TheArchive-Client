import React from 'react'
import { useDispatch } from 'react-redux';
import "../css/cartCard.css"
import { itemDecrement, itemIncrement, removeFromCart } from '../redux/actions/productActions';
export const CartCard = (props) => {
    const dispatch = useDispatch();

    const removeCart = () => {
        dispatch(removeFromCart(props._id))
    }

    function increment() {
        dispatch(itemIncrement(props._id))
    }
    function decrement() {
        if (props.quantity != 1) {
            dispatch(itemDecrement(props._id))
        }
        else {
            dispatch(removeFromCart(props._id))
        }
    }
    return (
        <>
            <div className="cart-item-content">
                <img className='cart-item-img' src={require(`../images/${props.image}`)} alt="" />
                <div className="cart-item-info">
                    <h2 className='title'>{props.bookName}</h2>
                    <h3 className='item-price'>Price:<span >{props.bookPrice}$</span></h3>
                    <div className="horizontal" style={props.admin ? { justifyContent: 'flex-end' } : {}}>
                        <div className="counter"><button className="decrement" onClick={decrement}>-</button> <div>{props.quantity}</div> <button className="increment" onClick={increment}>+</button></div>
                        {!props.admin ? <div>
                            <button className='remove' onClick={removeCart}> Remove </button>
                        </div>
                            : <></>}
                    </div>

                </div>
            </div>
        </>
    )
}
