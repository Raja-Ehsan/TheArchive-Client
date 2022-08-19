import "../css/Home.css"
import Nav from "../components/nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heading from "../components/heading";
import Footer from "../components/footer";
import { Subscribe } from "../components/subscribe";

function Home() {
    var settings = {
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed:1000,
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
    var settings1={
        speed: 2000,
        autoplaySpeed:2000
    }
    return (
        <div className="page-sizing">
            <Nav />
            <div className="whole-container">
            </div>
            <div className="container">
                <div className="card-1">
                    <h2>Action and Adventures.</h2>
                </div>
                <div className="card-2">
                    <h2>History.</h2>
                </div>
                <div className="card-3">
                    <h2>Comic Book or Graphic Novel.</h2>
                </div>
                <div className="card-4">
                    <h2>Detective and Mystery.</h2>
                </div>
                <div className="card-5">
                    <h2>Romantic Novel.</h2>
                </div>
                <div className="card-6">
                    <h2>Horrer</h2>
                </div>
            </div>
            <Heading item='Featured Books' />
            <div className="product-container">
                <div className="product-slider">
                    <Slider {...settings}>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book1.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>Harry Potter</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book2.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>The Fasano</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book3.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>Late Night Thoughts</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book4.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>Book of Night</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book1.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>Harry Potter</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book3.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>Late Night Thoughts</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book2.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>The Fasano</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book4.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>Book of Night</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <Heading item='New Arrivals' />
            <div className="product-container">
                <div className="product-slider">
                    <Slider {...settings} {...settings1}>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book1.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>Harry Potter</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book2.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>The Fasano</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book3.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>Late Night Thoughts</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book4.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>Book of Night</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book1.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>Harry Potter</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book3.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>Late Night Thoughts</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book2.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>The Fasano</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <div >
                            <div className="product-card">
                                <img className="card-img" src={require('../images/book4.jpg')} alt="" />
                                <div className="info-container">
                                    <h2>Book of Night</h2>
                                    <h3>16$</h3>
                                    <button>Add to Cart</button>
                                </div>

                            </div>
                        </div>
                    </Slider>
                </div>
            </div>      
            <Subscribe/>      
            <Footer />
        </div>
    )
}

export default Home;
