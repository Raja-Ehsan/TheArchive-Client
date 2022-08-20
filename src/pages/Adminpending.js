import React, { useState } from 'react'
import "../css/Adminapproved.css"
import Heading from '../components/heading'
import Nav from '../components/nav'
import { CartCard } from '../components/cartCard'

export const Adminpending = () => {
    const [show, setShow] = useState(false)

  return (
    <div className='order-page-container'>
            <Nav  admin={true} />
            <div className="orders">
                <Heading item='Pending Orders' />
                <div className="orders-container">
                    <div className="order-item" onClick={() => { setShow(!show) }}>
                        <div clas>
                            <h1>Order No 1.</h1>
                            <h3>Total:<span>$25</span> </h3>
                        </div>
                        <div>
                            <p>
                                <span> From </span>: Raja Ehsan Riaz <br />
                                <span>Email</span> : rajaehsanriaz@gmail.com <br />
                                <span>Address1 </span>: Mohallah Chappar Choa Saidan Shah Chakwal <br />
                                <span>Address2</span> : Mohallah Chappar Choa Saidan Shah Chakwal
                            </p>
                            <button style={{width:'150px'}}>
                                Approve Order
                            </button>
                        </div>
                    </div>
                    {
                        show ?
                            <div className='order-item-allorders' >
                                <CartCard admin={true} />
                                <hr  style={{width:'90%'}}/>
                                <CartCard admin={true} />
                                <hr />
                                <CartCard admin={true} />
                                <hr />
                            </div>
                            : <>
                            </>
                    }
                    <div className="order-item">
                        <div>
                            <h1>Order No 2.</h1>
                            <h3>Total:<span>$25</span> </h3>
                        </div>
                        <div>
                            <p>
                                <span> From </span>: Raja Ehsan Riaz <br />
                                <span>Email</span> : rajaehsanriaz@gmail.com <br />
                                <span>Address1 </span>: Mohallah Chappar Choa Saidan Shah Chakwal <br />
                                <span>Address2</span> : Mohallah Chappar Choa Saidan Shah Chakwal
                            </p>
                            <button style={{width:'150px'}}>
                                Approve Order
                            </button>
                        </div>
                    </div>
                    <div className="order-item">
                        <div>
                            <h1>Order No 3.</h1>
                            <h3>Total:<span>$25</span> </h3>
                        </div>
                        <div>
                            <p>
                                <span> From </span>: Raja Ehsan Riaz <br />
                                <span>Email</span> : rajaehsanriaz@gmail.com <br />
                                <span>Address1 </span>: Mohallah Chappar Choa Saidan Shah Chakwal <br />
                                <span>Address2</span> : Mohallah Chappar Choa Saidan Shah Chakwal
                            </p>
                            <button style={{width:'150px'}}>
                                Approve Order
                            </button>
                        </div>
                    </div>
                    <div className="order-item">
                        <div>
                            <h1>Order No 4.</h1>
                            <h3>Total:<span>$25</span> </h3>
                        </div>
                        <div>
                            <p>
                                <span> From </span>: Raja Ehsan Riaz <br />
                                <span>Email</span> : rajaehsanriaz@gmail.com <br />
                                <span>Address1 </span>: Mohallah Chappar Choa Saidan Shah Chakwal <br />
                                <span>Address2</span> : Mohallah Chappar Choa Saidan Shah Chakwal
                            </p>
                            <button style={{width:'150px'}}>
                                Approve Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
