import React from 'react'
import '../css/Adminusers.css'
import Heading from '../components/heading'
import Nav from '../components/nav'
export const Adminusers = () => {
  return (
    <div className='users-page-container'>
            <Nav  admin={true} />
            <div className="users">
                <Heading item='All Users' />
                <div className="users-container">
                    <div className="users-item">
                        <div >
                            <img className='users-img' src={require('../images/Profile_alt.png')} alt="" />
                            <h3>Ehsan Riaz Janjua</h3>
                        </div>
                        <div>
                            <p>
                                <span>Email</span> : rajaehsanriaz@gmail.com <br />
                                <span>City </span>: Chakwal <br />
                                <span>State </span>: Punjab <br />
                                <span>Country </span>: Pakistan <br />
                            </p>
                        </div>
                    </div>
                    <div className="users-item">
                        <div >
                            <img className='users-img' src={require('../images/Profile_alt.png')} alt="" />
                            <h3>Ehsan Riaz Janjua</h3>
                        </div>
                        <div>
                            <p>
                                <span>Email</span> : rajaehsanriaz@gmail.com <br />
                                <span>City </span>: Chakwal <br />
                                <span>State </span>: Punjab <br />
                                <span>Country </span>: Pakistan <br />
                            </p>
                        </div>
                    </div>
                    <div className="users-item">
                        <div >
                            <img className='users-img' src={require('../images/Profile_alt.png')} alt="" />
                            <h3>Ehsan Riaz Janjua</h3>
                        </div>
                        <div>
                            <p>
                                <span>Email</span> : rajaehsanriaz@gmail.com <br />
                                <span>City </span>: Chakwal <br />
                                <span>State </span>: Punjab <br />
                                <span>Country </span>: Pakistan <br />
                            </p>
                        </div>
                    </div>
                    <div className="users-item">
                        <div >
                            <img className='users-img' src={require('../images/Profile_alt.png')} alt="" />
                            <h3>Ehsan Riaz Janjua</h3>
                        </div>
                        <div>
                            <p>
                                <span>Email</span> : rajaehsanriaz@gmail.com <br />
                                <span>City </span>: Chakwal <br />
                                <span>State </span>: Punjab <br />
                                <span>Country </span>: Pakistan <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
