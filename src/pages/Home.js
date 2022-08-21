import "../css/Home.css"
import Nav from "../components/nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heading from "../components/heading";
import Footer from "../components/footer";
import { Subscribe } from "../components/subscribe";
import Card from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productActions";

function Home() {
    const allProducts = useSelector((state) => state.reducers.allProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch('http://localhost:1000/book/get')
            .then(res => res.json()).
            then(res => {
                console.log(res)
                dispatch(setProducts(res))
            })
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
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
    var settings1 = {
        speed: 2000,
        autoplaySpeed: 2000
    }
    return (
        <div className="page-sizing">
            <Nav />
            <div className="whole-container">
            </div>
            <div className="container">
                <a style={{ textDecoration: 'none', color: 'rgb(30, 30, 30)' }} href="/products?category=Action and Adventures"><div className="card-1">
                    <h2>Action and Adventures.</h2>
                </div></a>
                <a style={{ textDecoration: 'none', color: 'rgb(30, 30, 30)' }} href="/products?category=History"> <div className="card-2">
                    <h2>History.</h2>
                </div></a>
                <a style={{ textDecoration: 'none', color: 'rgb(30, 30, 30)' }} href="/products?category=Comic Book or Graphic Novel"> <div className="card-3">
                    <h2>Comic Book or Graphic Novel.</h2>
                </div></a>
                <a style={{ textDecoration: 'none', color: 'rgb(30, 30, 30)' }} href="/products?category=Detective and Mystery"> <div className="card-4">
                    <h2>Detective and Mystery.</h2>
                </div></a>
                <a style={{ textDecoration: 'none', color: 'rgb(30, 30, 30)' }} href="/products?category=Romantic Novel"><div className="card-5">
                    <h2>Romantic Novel.</h2>
                </div></a>
                <a style={{ textDecoration: 'none', color: 'rgb(30, 30, 30)' }} href="/products?category=Horrer"> <div className="card-6">
                    <h2>Horrer</h2>
                </div></a>
            </div>
            <Heading item='Featured Books' />
            <div className="product-container">
                <div className="product-slider">
                    <Slider {...settings}>
                        {allProducts.products?.map((item)=>{
                            return(
                                <div >
                            <Card {...item} />
                        </div>
                            )
                        })}

                    </Slider>
                </div>
            </div>
            <Heading item='New Arrivals' />
            <div className="product-container">
                <div className="product-slider">
                <Slider {...settings}>
                        {allProducts.products?.map((item)=>{
                            return(
                                <div >
                            <Card {...item} />
                        </div>
                            )
                        })}

                    </Slider>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Home;
