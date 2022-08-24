import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/footer'
import Nav from '../components/nav'
import { Subscribe } from '../components/subscribe'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchIcon from '@mui/icons-material/Search';
import Slider from "react-slick";
import Card from '../components/card'
import "../css/shop.css"
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';
export const Shop = () => { 
    const [keyword,setKeyword]=useState(null);
    const allProducts = useSelector((state) => state.reducers.allProducts);
    const cart=useSelector((state)=>state.reducers.cart);
    const searchLink=useRef();
    const dispatch = useDispatch();
    useEffect(() => {
       !allProducts.products.length && fetch('http://localhost:1000/book/get')
            .then(res => res.json())
            .then(res => {
                dispatch(setProducts(res))
            })
    }, [allProducts.products ])

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
    <div style={{backgroundColor:'rgb(233, 233, 233)',height:'100%',padding:'0.1px'}}>
    <Nav shop={true}/>
    <div className="whole-container">
        <div className='Headline'>
            <h2>
                Shop By Category
            </h2>
        </div>
        <div className="category">
        <Link style={{width:'400px',marginRight:'20px', textDecoration: 'none', color: 'rgb(30, 30, 30)' }} to="/products?category=Action and Adventures"><div className="cat cat1"><h3>Action and Adventure</h3></div></Link>
        <Link style={{width:'400px',marginRight:'20px', textDecoration: 'none', color: 'rgb(30, 30, 30)' }} to="/products?category=Comic Book or Graphic Novel"><div className="cat cat2"><h3>Comic Book and Graphic Novel</h3></div></Link>
        <Link style={{ width:'400px',marginRight:'20px',textDecoration: 'none', color: 'rgb(30, 30, 30)' }} to="/products?category=Romantic Novel"><div className="cat cat3"><h3>Romantic Novel</h3></div></Link>
        <Link style={{ width:'400px',marginRight:'20px',textDecoration: 'none', color: 'rgb(30, 30, 30)' }} to="/products?category=History"><div className="cat cat4"><h3>History</h3></div></Link>
        <Link style={{width:'400px',marginRight:'20px', textDecoration: 'none', color: 'rgb(30, 30, 30)' }} to="/products?category=Detective and Mystery"><div className="cat cat5"><h3>Detective and Mystery</h3></div></Link>
        <Link style={{ width:'400px',marginRight:'20px',textDecoration: 'none', color: 'rgb(30, 30, 30)' }} to="/products?category=Horrer"><div className="cat cat6"><h3>Horrer</h3></div></Link>
        </div>
        <div className='Headline'>
            <h2>
                Search Books 
            </h2>
        </div>
        <div className="category" id='cat' style={{height:'25vh'}}>
                <div className='search-bar'>
                    <input autoFocus type="text" onKeyPress={(e)=>{if(e.key === 'Enter')searchLink.current.click()}} onChange={(e)=>{setKeyword(e.target.value)}}    placeholder='Search For Books'/>
                    <Link ref={searchLink} style={{ textDecoration: 'none', color: 'rgb(66, 66, 66)',display:'none' }} to={`/products/search?keyword=${keyword}`}>search</Link>
                    <div><SearchIcon/></div>
                </div>
        </div>
        <div className='Headline'>
            <h2>
                New Arrivals
            </h2>
        </div>
        <div className="category">
        <div className="product-slider">
                    <Slider {...settings}>
                    {allProducts.products?.slice(allProducts.products.length-8,allProducts.products.length).map((item) => {
                            return (
                                <div >
                                    <Card   key={item._id} {...item}  />
                                </div>
                            )
                        })}

                    </Slider>
                </div>
        </div>
        <div className='Headline'>
            <h2>
                Best Selling Products
            </h2>
        </div>
        <div className="category">
        <div className="product-slider">
                    <Slider {...settings} {...settings1}>
                    {allProducts.products?.slice(5,12).map((item) => {
                            return (
                                <div >
                                    <Card  key={item._id}  {...item}/>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
        </div>
        
        <div className='Headline'>
            <h2>
                Featured Products
            </h2>
        </div>
        <div className="category">
        <div className="product-slider">
                    <Slider {...settings} {...settings1}>
                    {allProducts.products?.filter((item => item.featured)).map((item) => {
                            return (
                                <div >
                                    <Card  key={item._id}  {...item}/>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
        </div>
    </div>
    <Subscribe/>
    <Footer/>
    </div>
  )
}
