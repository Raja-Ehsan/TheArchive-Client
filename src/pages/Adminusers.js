import React from 'react'
import '../css/Adminusers.css'
import Heading from '../components/heading'
import Nav from '../components/nav'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
export const Adminusers = () => { 
    const { search } = useLocation();
const query = new URLSearchParams(search);
const keyword = query.get('keyword');
const allUsers=useSelector((state)=>state.reducers.allUsers);
  return (
    <div className='users-page-container'>
            <Nav  admin={true} />
            <div className="users">
                <Heading item='All Users' />
                <div className="users-container">
                    {
                        keyword?
                        allUsers?.filter((item)=>item.userRole===keyword).map((item)=>{
                            return(
                            <div className="users-item">
                            <div >
                                <img className='users-img' src={require('../images/Profile_alt.png')} alt="" />
                                <h3>{item.userName}</h3>
                            </div>
                            <div>
                                <p>
                                    <span>Email</span> : {item.userEmail} <br />
                                    <span>City </span>: {item.userCity} <br />
                                    <span>State </span>: {item.userState}<br />
                                </p>
                            </div>
                        </div>
                            )
                        }):
                        allUsers?.map((item)=>{
                            return(
                            <div className="users-item">
                            <div >
                                <img className='users-img' src={require('../images/Profile_alt.png')} alt="" />
                                <h3>{item.userName}</h3>
                            </div>
                            <div>
                                <p>
                                    <span>Email</span> : {item.userEmail} <br />
                                    <span>City </span>: {item.userCity} <br />
                                    <span>State </span>: {item.userState}<br />
                                </p>
                            </div>
                        </div>
                            )
                        })

                    }
                </div>
            </div>
        </div>
  )
}
