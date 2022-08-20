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
                    <a href="/admin"><h3>Total Sellings</h3></a>
                </div>
            </div>
            <div className="item">
                <div className="item-inner1">
                        <h1>2</h1>
                </div>
                <div className="item-inner2">
                    <a href="/admin/order/complete"><h3>Completed Orders</h3></a>
                </div>
            </div>
            <div className="item">
                <div className="item-inner1">
                        <h1>50</h1>
                </div>
                <div className="item-inner2">
                    <a href="/admin/order/approved"><h3>Orders Approved</h3></a>
                </div>
            </div>
            <div className="item">
                <div className="item-inner1">
                        <h1>8</h1>
                </div>
                <div className="item-inner2">
                    <a href="/admin/order/pending"><h3>Pending Orders</h3></a>
                </div>
            </div>
            <div className="item">
                <div className="item-inner1">
                        <h1>5</h1>
                </div>
                <div className="item-inner2">
                    <a href="/admin/users"><h3>Normal Users</h3></a>
                </div>
            </div>
            <div className="item">
                <div className="item-inner1">
                        <h1>1</h1>
                </div>
                <div className="item-inner2">
                    <a href="/admin/users"><h3>Admin Users</h3></a>
                </div>
            </div>
            <div className="item">
                <div className="item-inner1">
                        <h1>6</h1>
                </div>
                <div className="item-inner2">
                    <a href="/admin/users"><h3>Total Accounts</h3></a>
                </div>
            </div>
         </div>
    </div>
    </div>
  )
}
