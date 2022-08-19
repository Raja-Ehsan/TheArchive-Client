import React from 'react'
import Heading from '../components/heading'
import Nav from '../components/nav'
import "../css/admin.css"

export const AdminHome = () => {
  return (
    <div  className='page-container'>
    <Nav/>
    <div className="admin-dash">
         <Heading item='Dashboard'/>
         <div className="dash-items">
            <div className="item">
                <div className="item-inner1">
                        <h1>$200</h1>
                </div>
                <div className="item-inner2">
                    <h3>Total Sellings</h3>
                </div>
            </div>
            <div className="item">
                <div className="item-inner1">
                        <h1>2</h1>
                </div>
                <div className="item-inner2">
                    <h3>Completed Orders</h3>
                </div>
            </div>
            <div className="item">
                <div className="item-inner1">
                        <h1>50</h1>
                </div>
                <div className="item-inner2">
                    <h3>Orders Placed</h3>
                </div>
            </div>
            <div className="item">
                <div className="item-inner1">
                        <h1>8</h1>
                </div>
                <div className="item-inner2">
                    <h3>Pending Orders</h3>
                </div>
            </div>
            <div className="item">
                <div className="item-inner1">
                        <h1>5</h1>
                </div>
                <div className="item-inner2">
                    <h3>Normal Users</h3>
                </div>
            </div>
            <div className="item">
                <div className="item-inner1">
                        <h1>1</h1>
                </div>
                <div className="item-inner2">
                    <h3>Admin Users</h3>
                </div>
            </div>
            <div className="item">
                <div className="item-inner1">
                        <h1>6</h1>
                </div>
                <div className="item-inner2">
                    <h3>Total Accounts</h3>
                </div>
            </div>
            <div className="item">
                <div className="item-inner1">
                        <h1>9</h1>
                </div>
                <div className="item-inner2">
                    <h3>New Messages</h3>
                </div>
            </div>
         </div>
    </div>
    </div>
  )
}
