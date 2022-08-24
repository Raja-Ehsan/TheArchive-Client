import React, { useEffect } from 'react'
import '../css/Search.css'
import "../css/Products.css"
import Nav from '../components/nav'
import Footer from '../components/footer'
import { Subscribe } from '../components/subscribe'
import Heading from '../components/heading'
import Card from '../components/card'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions'

export const Search = () => {
    const allProducts = useSelector((state) => state.reducers.allProducts);
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const keyword = query.get('keyword');
    const dispatch = useDispatch();
    useEffect(() => {
        !allProducts.products.length && fetch('http://localhost:1000/book/get')
             .then(res => res.json()).
             then(res => {
                 dispatch(setProducts(res))
             })
     }, [allProducts.products ])

    return (
        <div style={{ backgroundColor: 'rgb(233, 233, 233)', height: '100%', padding: '0.1px' }}>
            <Nav />
            <div className="whole-container">
                <Heading item='Search' />
                <div className='message'>
                    <h3>Search Results for {keyword}:</h3>
                </div>
                <div className="all-products-container">
                    <div >
                        <label htmlFor="sort">Sort-By</label>
                        <select>
                            <option>Price : low to high</option>
                            <option>Price : high to low</option>
                        </select>
                    </div>
                    <div className="products">
                    {allProducts?.products.filter((item=>item.bookName.match(new RegExp(keyword, "i")))).map((item)=>{
                            return(
                                <div >
                            <Card {...item} key={item._id}/>
                        </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}
