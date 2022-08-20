import React from 'react'
import '../css/Addproduct.css'
import Heading from '../components/heading'
import Nav from '../components/nav'
import AddBoxIcon from '@mui/icons-material/AddBox';
export const Addproduct = () => {
    return (
        <div className='add-page-container'>
            <Nav admin={true} />
            <div className="add-content-container">
                <Heading item='Add Product' />
                <div className="add-form">
                    <div className='add-horizontal-component'>
                        <div className='divv'>
                            <input id='title' type="text" placeholder='Add-Title' />
                        </div>
                        <div className='add-img-container'>
                            <img className='img' src={require('../images/cover1.jpg')} alt="" />
                            <div className='add-img'>
                            <AddBoxIcon id='icon' />
                            <h3>Upload Photo</h3>
                            </div>
                        </div>
                    </div>
                    <div className='component2' >
                        <div>
                            <label htmlFor="dollars">  Price:</label>
                            <input id='dollars' className='price-input' type="number" placeholder='0' />
                            <h3>$</h3>
                        </div>
                        <div>
                            <label htmlFor="author">   Author:</label>
                            <input className='author' id='author' placeholder='Add-Author' type="text" />
                        </div>

                        <div>
                            <label htmlFor="pages">  Pages:</label>
                            <input id='pages' className='price-input' placeholder='0'  type="number" />
                        </div>
                        <div>
                            <label htmlFor="publishedOn">   Published On:</label>
                            <input className='published' id='publishedOn' type="date" />
                        </div>
                    </div>
                    <div className="component3">
                    <label htmlFor="description">   Description:</label> <br />
                        <textarea name="description" id="description" ></textarea>
                    </div>
                    <button>Add Product</button>
                </div>
            </div>
        </div>
    )
}
