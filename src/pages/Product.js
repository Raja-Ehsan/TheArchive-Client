import "../css/Product.css"
import Nav from "../components/nav";
import Footer from "../components/footer";
import Heading from "../components/heading";
import Card from "../components/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Subscribe } from "../components/subscribe";
function Product(props) {
    var settings = {
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed:2000,
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
                        <img src={require('../images/book1.jpg')} alt="" className="product-img"/>
                        <div className="product-info-container"> 
                            <h2> Harry Potter and The Philosopher's Stone</h2>
                            <h2>20$</h2>
                            <button className="add-to-cart">Add to Cart</button>
                            <div style={{display:'flex'}}>
                            <h3 style={{display:'inline'}}>Author:</h3><span style={{marginTop:'12px',fontSize:'18px',color:'grey'}}>J. K. Rowling</span>
                            </div>
                            <div style={{display:'flex'}}><h3 style={{display:'inline'}}>PublishedOn:</h3><span style={{marginTop:'12px',fontSize:'18px',color:'grey'}}>26 June 1997</span></div>
                            <div style={{display:'flex'}}><h3 style={{display:'inline'}}>Pages:</h3><span style={{marginTop:'12px',fontSize:'18px',color:'grey'}}>223 (first edition)</span></div>
                            <div style={{display:'flex'}}><h3 style={{display:'inline'}}>Description:</h3></div>
                            <span style={{margin:'12px',marginTop:'0px',fontSize:'18px',color:'grey',maxWidth:'400px',textJustify:'inter-word'}}>It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby. Harry is unloved by his uncle and aunt but everything changes when he is invited to join Hogwarts School of Witchcraft </span>
                        </div>
                    </div>
                </div>
            </div>
            <Heading item='Suggested For You' />
            <div className="product-container">
                <div className="product-slider">
                    <Slider {...settings} >
                       <div>
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
                       </div>
                    </Slider>
                </div>
            </div>
            <Subscribe/>
            <Footer />
        </div>
    )
}

export default Product;
