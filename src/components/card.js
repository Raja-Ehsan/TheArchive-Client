import "../css/card.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, itemDecrement, itemIncrement, removeFromCart } from "../redux/actions/productActions";
function Card(props) {
    const cart = useSelector((state) => state.reducers.cart);
    const dispatch = useDispatch();
    const handleCartButton = () => {
        cart.filter(item => item._id === props._id).length ?
            dispatch(removeFromCart(props?._id)) :
            dispatch(addToCart({ ...props, quantity: 1 }))
    }

    function increment() {
        dispatch(itemIncrement(props._id))
    }
    function decrement() {
        if (cart.find((item) => item._id === props._id).quantity != 1) {
            dispatch(itemDecrement(props._id))
        }
        else {
            dispatch(removeFromCart(props._id))
        }
    }
    return (
        <>
        {props._id?
            <div className="product-card">
                <Link to={`/product/${props._id}`}><img className="card-img" src={require(`../images/${props.image}`)} alt="" /></Link>
                <div className="info-container">
                    <h2>{props.bookName}</h2>
                    <h3>{props.bookPrice}$</h3>
                    <div>
                        {!cart.filter(item => item._id === props._id).length ?
                            <button className="add-to-cart" onClick={handleCartButton} >Add to Cart</button>
                            : <div className="counter">
                                <button className="decrement" onClick={decrement}>-</button>
                                <div>{cart.find((item) => item._id === props._id).quantity}</div> <button className="increment" onClick={increment}>+</button></div>}
                    </div>
                </div>

            </div>
            :
            <></>
            }
        </>
    )
}

export default Card;
