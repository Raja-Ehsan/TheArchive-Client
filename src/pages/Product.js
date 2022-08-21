import "../css/Product.css"
import Nav from "../components/nav";
import Footer from "../components/footer";
import Heading from "../components/heading";
import Card from "../components/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Subscribe } from "../components/subscribe";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCurrentProduct, setCurrentProduct, addToCart, removeFromCart, itemIncrement, itemDecrement } from "../redux/actions/productActions";
function Product(props) {
    const currentProduct = useSelector((state) => state.reducers.currentProduct)
    const cart = useSelector((state) => state.reducers.cart);
    const dispatch = useDispatch();

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:1000/book/getProduct/${id}`)
            .then(res => res.json())
            .then(res => {
                dispatch(setCurrentProduct(res))
            })
        return () => {
            dispatch(removeCurrentProduct())
        }
    }, [id])

    const handleCartButton = () => {
        cart.filter(item => item._id === currentProduct._id).length ?
            dispatch(removeFromCart(currentProduct?._id)) :
            dispatch(addToCart({ ...currentProduct, quantity: 1 }))
    }

    function increment() {
        dispatch(itemIncrement(currentProduct._id))
    }
    function decrement() {
        if (cart.find((item) => item._id === currentProduct._id).quantity != 1) {
            dispatch(itemDecrement(currentProduct._id))
        }
        else {
            dispatch(removeFromCart(currentProduct._id))
        }
    }

    var settings = {
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };


    return (
        <div className="page-sizing">
            <Nav />
            <div className="whole-container">
                <Heading item='Showing Product...' />
                <div className="product-cont">
                    <div className="product">
                        {currentProduct.image ? <img src={require(`../images/${currentProduct?.image}`)} alt="" className="product-img" /> : <img src="" alt="" className="product-img" />}
                        <div className="product-info-container">
                            <h2> {currentProduct?.bookName}</h2>
                            <h2>{currentProduct?.bookPrice}$</h2>
                            {!cart.filter(item => item._id === currentProduct._id).length ? <button className="add-to-cart" onClick={handleCartButton} >Add to Cart</button> : <div className="counter"><button className="decrement" onClick={decrement}>-</button> <div>{cart.find((item) => item._id === currentProduct._id).quantity}</div> <button className="increment" onClick={increment}>+</button></div>}
                            <div style={{ display: 'flex' }}>
                                <h3 style={{ display: 'inline' }}>Author:</h3><span style={{ marginTop: '12px', fontSize: '18px', color: 'grey' }}>{currentProduct?.bookAuthor}</span>
                            </div>
                            <div style={{ display: 'flex' }}><h3 style={{ display: 'inline' }}>PublishedOn:</h3><span style={{ marginTop: '12px', fontSize: '18px', color: 'grey' }}>{currentProduct?.publishedOn}</span></div>
                            <div style={{ display: 'flex' }}><h3 style={{ display: 'inline' }}>Pages:</h3><span style={{ marginTop: '12px', fontSize: '18px', color: 'grey' }}>{currentProduct?.bookPages}</span></div>
                            <div style={{ display: 'flex' }}><h3 style={{ display: 'inline' }}>Description:</h3></div>
                            <span style={{ margin: '12px', marginTop: '0px', fontSize: '18px', color: 'grey', maxWidth: '400px', textJustify: 'inter-word' }}>{currentProduct?.bookdescription}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Heading item='Suggested For You' />
            <div className="product-container">
                <div className="product-slider">
                    <Slider {...settings} >
                        {/* <div>
                        <Card img='book1.jpg' />
                       </div>
                       <div>
                        <Card img='book2.jpg' />
                       </div>
                       <div>
                        <Card img='book3.jpg' />
                       </div>
                       <div>
                        <Card img='book4.jpg' />
                       </div>
                       <div>
                        <Card img='book2.jpg' />
                       </div>
                       <div>
                        <Card img='book4.jpg' />
                       </div>
                       <div>
                        <Card img='book1.jpg' />
                       </div>
                       <div>
                        <Card img='book3.jpg' />
                       </div> */}
                    </Slider>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Product;
