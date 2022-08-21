import React from 'react'
import '../css/Search.css'
import "../css/Products.css"
import Nav from '../components/nav'
import Footer from '../components/footer'
import { Subscribe } from '../components/subscribe'
import Heading from '../components/heading'
import Card from '../components/card'

export const Search = () => {
    return (
        <div style={{ backgroundColor: 'rgb(233, 233, 233)', height: '100%', padding: '0.1px' }}>
            <Nav />
            <div className="whole-container">
                <Heading item='Search' />
                <div className='message'>
                    <h3>Search Results for Harry Potter:</h3>
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
                        <Card img='book1.jpg' />
                        <Card img='book2.jpg' />
                        <Card img='book3.jpg' />
                        <Card img='book4.jpg' />
                        <Card img='book1.jpg' />
                        <Card img='book4.jpg' />
                        <Card img='book3.jpg' />
                        <Card img='book2.jpg' />
                    </div>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </div>
    )
}
